const {botinfo} = require('../config/config.json')

module.exports = {
    name: "Nickname",
    description: "Sets the nickname of the bot in the server.",
    category: "Config",
    aliases: ["Name"],
    syntax: "/nickname [nickname]",
    execute(bot, message, args, Discord) {
        //If bot can't manage nicknames
        if (!message.member.hasPermission('MANAGE_NICKNAMES'))
            return message.channel.send("You don't have permission to manage nicknames!");
        //If args 0 is reset
        if (args[0] == "reset") {
            //Reset the nickname
            message.guild.me.setNickname('');
            //Send confirmation message
            message.channel.send('Reset my nickname!');
        } else {
            //If no previous nickname
            if (message.guild.me.nickname == null) {
                //Set previous nick bot's name
                previousNick = botinfo.name
            } else {
                //Set previous nick to current nick
                previousNick = message.guild.me.nickname;
            };
            //Confirmation embed
            const nickConfirm = new Discord.MessageEmbed()
                .setColor('#7289d9')
                .setTitle("Are you change Axle's nickname?")
                .addFields({
                    name: 'Current Nickname',
                    value: previousNick,
                    inline: true
                }, {
                    name: 'New Nickname',
                    value: args[0],
                    inline: true
                })
                .setFooter("React to confirm or cancel the nickname change!");

            //                       --| Reaction collector |--
            //     Listens for reactions and will run different code for each reaction
            //Reaction collector filter
            const filter = (reaction, user) => {
                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            //Send confirmation embed
            message.channel.send(nickConfirm).then(msg => {
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
                        //Change the nick
                        try {
                            message.guild.me.setNickname(args[0]);
                            //Send nick change message
                            message.channel.send(`Changed my nickname to **${args[0]}**!`)
                        } catch (error) {
                            console.log(error)
                            message.channel.send("I was unable to change my nickname!")
                        }
                    };
                    //If thumbs down
                    if (reaction.emoji.name == '👎') {
                        msg.reactions.removeAll();
                        message.channel.send('Cancelled nickname change!')
                    };
                });
                //After 10 seconds
                collector.on('end', collected => {
                    //If no reactions
                    let reactionCache = msg.reactions.cache.array();
                    let reactionObject = JSON.stringify(reactionCache)
                    if (reactionObject !== '[]') {
                        msg.reactions.removeAll();
                        message.channel.send("Nickname change canclelled due to no reaction!");
                    };
                });
            });
        };
    }
}