const Discord = require('discord.js');

module.exports = {
    name: "Kick",
    description: "Kicks the specified user from the server.",
    category: "Moderation",
    aliases: ["Boot"],
    syntax: "/kick [user]",
    execute(bot, message, args, Discord) {
        //If there's no arguements
        if (!args[0]) {
            return message.channel.send("Please specify a user to kick!");
        };
        //User to kick
        var kickUser = message.mentions.users.first();
        //Username to kick
        let username = args[0].replace(/_/g, ' ')
        //Reason for kick
        var kickReason = args.slice(2).join(' ');
        if (!kickReason)
            kickReason = "No Reason Provided"

        //If there's no tagged user
        //Search for username
        if (!kickUser) {
            try {
                //Find user by username
                var kickUser = bot.users.cache.find(kick => kick.username == username);
            } catch (error) {
                //If unable to find user
                console.log(error)
                return message.channel.send("I was unable to find that user!")
            }
        };
        //Search for nickname
        if (!user) {
            try {
                //Replace underscores with spaces
                var nickname = args[0].replace(/_/g, ' ');
                //Search for username
                var user = message.guild.members.cache.find(user => user.nickname == nickname);
            } catch (error) {
                console.log(error)
            }
        };

        //             --| Checks to stop the command if it'll fail |--
        //These are to make sure the bot will alert others when it is unable to carry out the command
        //If author doesn't have permission
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send("You don't have permission to kick members!");
        //If bot doesn't have permission
        if (!message.guild.me.hasPermission('KICK_MEMBERS'))
            return message.channel.send("I don't have permission to kick members!")
        //If no found user
        if (!kickUser)
            return message.channel.send("I was unable to find that user!")
        //If user attempts to kick themself
        if (kickUser.id == message.author.id)
            return message.channel.send("You can't kick yourself!");
        //If user attempts to kick the bot
        if (kickUser.id == bot.user.id)
            return message.channel.send("You can't kick me!");
        //If bot can't kick this user
        if (!message.guild.member(kickUser).bannable)
            return message.channel.send("I am unable to kick this user!");

        //                   --| Kick confirmation message |--
        //                An embed which is sent to confirm the kick
        //Tag
        var tag = kickUser.tag;
        //Username
        var kickedUsername = kickUser.username;
        //Status
        let status = kickUser.presence.status
        var fullStatus = status[0].toUpperCase() + status.slice(1)
        //Embed
        const banConfirm = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle("Are you sure you want to ban this user?")
            .setThumbnail(kickUser.avatarURL())
            .addFields({
                name: 'Tag',
                value: tag,
                inline: true
            }, {
                name: 'Username',
                value: kickedUsername,
                inline: true
            }, {
                name: 'Status',
                value: fullStatus,
                inline: true
            }, {
                name: 'Kick Reason',
                value: kickReason,
                inline: false
            })
            .setFooter("React to confirm or cancel the ban!");

        //                       --| Reaction collector |--
        //     Listens for reactions and will run different code for each reaction
        //Reaction collector filter
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        //Send confirmation embed
        message.channel.send(banConfirm).then(msg => {
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
                    //Kick the pleb
                    try {
                        let pleb = message.guild.members.cache.get(kickUser.id);
                        pleb.kick({
                            reason: kickReason
                        });
                        //Send kick message
                        message.channel.send(`Kicked <@${kickUser.id}>!`)
                    } catch (error) {
                        console.log(error)
                        message.channel.send("I was unable to kick this user!")
                    }
                };
                //If thumbs down
                if (reaction.emoji.name == '👎') {
                    msg.reactions.removeAll();
                    message.channel.send('Cancelled kick!')
                };
            });
            //After 10 seconds
            collector.on('end', collected => {
                //If no reactions
                let reactionCache = msg.reactions.cache.array();
                let reactionObject = JSON.stringify(reactionCache)
                if (reactionObject !== '[]') {
                    msg.reactions.removeAll();
                    message.channel.send("Kick canclelled due to no reaction!");
                }
            });
        });
    }
}