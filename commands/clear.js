const Discord = require('discord.js');

module.exports = {
    name: "Clear",
    description: "Bulk deletes a specified amount of messages from the current channel.",
    category: "Moderation",
    aliases: ["Purge", "Delete"],
    syntax: "/clear [number of messages]",
    async execute(bot, message, args, Discord) {

        //                           --| Checks |--
        //If author doesn't have permission
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("You don't have permission to manage messages!");
        //If bot doesn't have permission
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("I don't have permission to manage messages!");
        //If amount of messages is over 100
        //(Discord.js doesn't let you bulk delete more than 100 messages)
        if (args[0] > 100)
            return message.channel.send("The number of messages must be under 100!")
        //If amount of messages is under 1
        if (args[0] < 1)
            return message.channel.send("You have to delete at least 1 message!");
        //If amount of messages isn't a number
        if (isNaN(args[0]))
            return message.reply("That isn't a number!");

        //                 --| Bulk delete function |--
        //Bulk deletes messages
        async function clear() {
            //Adds 1 to the amount of messages (to include command message)
            var int = Number(args[0]) + 2;
            //Fetches messages (so they can be deleted)
            const fetched = await message.channel.messages.fetch({
                limit: int
            });
            //Deletes the messages
            message.channel.bulkDelete(fetched);
        };

        //                  --| Confirmation embed |--
        //Amount of messages (for display)
        var displayInt = Number(args[0]);
        //Amount of messages (for logic and stuff lol)
        var int = Number(args[0]) + 1;
        //Fetch messages
        try {
            await message.channel.messages.fetch({
                //Only fetch the reuired number of messages
                limit: int
            }).then(msg => {
                //Convert the fetched messages to an array
                msgs = msg.array();
                //Set the final message to
                lastMsg = msgs[int - 1];
            });   
        } catch (error) {
            return message.channel.send("I can't clear that many messages!");
        }
        //If it can't get the content of the final message (meaning it's not a normal message)
        if (!lastMsg['content'])
            lastMsg['content'] = "Not a text message";
        //Create confirmation embed
        const clearConfirm = new Discord.MessageEmbed()
            .setTitle("Are you sure you want to clear these messages?")
            .setColor("#7289d9")
            .addFields({
                name: "Amount of messages",
                value: displayInt,
                inline: true
            }, {
                name: "Channel",
                value: message.channel,
                inline: true
            }, {
                name: "Last message",
                value: `[${lastMsg['content']}](${lastMsg.url})`,
                inline: false
            })
            .setFooter("React to confirm or cancel the clearing!");

        //                 --| Reaction Collector |--
        //Filter
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        //Sends confirmation embed
        message.channel.send(clearConfirm).then(msg => {
            //React to the message
            msg.react('👍');
            msg.react('👎');
            //Create reaction collector
            const collector = msg.createReactionCollector(filter, {
                time: 10000
            });
            //Start reaction collector
            collector.on('collect', (reaction, user) => {
                //If the reactor isn't the author
                if (!reaction.user == message.author)
                    return;
                //If thumbs up
                if (reaction.emoji.name == '👍') {
                    //Remove all reactions
                    msg.reactions.removeAll();
                    //Attempts to run the function
                    try {
                        clear();
                        //If the bot was unable to run the function
                    } catch (error) {
                        console.log(error)
                        return message.channel.send("I was unable to clear the messages!")
                    }
                };
                //If thumbs down
                if (reaction.emoji.name == '👎') {
                    msg.reactions.removeAll();
                    return message.channel.send('Cancelled clearing!')
                };
            });
            //After 10 seconds
            collector.on('end', collected => {
                //If no reactions
                let reactionCache = msg.reactions.cache.array();
                let reactionObject = JSON.stringify(reactionCache)
                if (reactionObject !== '[]') {
                    msg.reactions.removeAll();
                    message.channel.send("Clearing canclelled due to no reaction!");
                };
            });
        });
    }
};