module.exports = {
    name: "Ban",
    description: "Bans the specified user from the server.",
    category: "Moderation",
    aliases: ["Bean", "Kill", "B"],
    syntax: "/ban [user]",
    execute(bot, message, args, Discord) {
        //If there's no args
        if (!args[0]) {
            return message.channel.send("Please specify a user to ban!");
        };
        //User to ban
        var banUser = message.mentions.users.first();
        //Username to ban
        let username = args[0].replace(/_/g, ' ')
        //Reason for ban
        var banReason = args.slice(2).join(' ');
        if (!banReason)
            banReason = "No Reason Provided"

        //If there's no tagged user
        //Search for username
        if (!banUser) {
            try {
                //Find user by username
                var banUser = bot.users.cache.find(user => user.username == username);
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
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send("You don't have permission to ban members!");
        //If bot doesn't have permission
        if (!message.guild.me.hasPermission('BAN_MEMBERS'))
            return message.channel.send("I don't have permission to ban members!")
        //If no found user
        if (!banUser)
            return message.channel.send("I was unable to find that user!")
        //If user attempts to ban themself
        if (banUser.id == message.author.id)
            return message.channel.send("You can't ban yourself!");
        //If user attempts to ban the bot
        if (banUser.id == bot.user.id)
            return message.channel.send("You can't ban me!");
        //If bot can't ban this user
        if (!message.guild.member(banUser).bannable)
            return message.channel.send("I am unable to ban this user!");

        //                   --| Ban confirmation message |--
        //                An embed which is sent to confirm the ban
        //Tag
        var tag = banUser.tag;
        //Username
        var bannedUsername = banUser.username;
        //Status
        let status = banUser.presence.status
        var fullStatus = status[0].toUpperCase() + status.slice(1)
        //Embed
        const banConfirm = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle("Are you sure you want to ban this user?")
            .setThumbnail(banUser.avatarURL())
            .addFields({
                name: 'Tag',
                value: tag,
                inline: true
            }, {
                name: 'Username',
                value: bannedUsername,
                inline: true
            }, {
                name: 'Status',
                value: fullStatus,
                inline: true
            }, {
                name: 'Ban Reason',
                value: banReason,
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
                    //Ban the pleb
                    try {
                        let pleb = message.guild.members.cache.get(banUser.id);
                        pleb.ban({
                            reason: banReason
                        });
                        //Send ban message
                        message.channel.send(`Banned <@${banUser.id}>!`)
                    } catch (error) {
                        console.log(error)
                        message.channel.send("I was unable to ban this user!")
                    }
                };
                //If thumbs down
                if (reaction.emoji.name == '👎') {
                    msg.reactions.removeAll();
                    message.channel.send('Cancelled ban!')
                };
            });
            //After 10 seconds
            collector.on('end', collected => {
                //If no reactions
                let reactionCache = msg.reactions.cache.array();
                let reactionObject = JSON.stringify(reactionCache)
                if (reactionObject !== '[]') {
                    msg.reactions.removeAll();
                    message.channel.send("Ban canclelled due to no reaction!");
                }
            });
        });
    }
}