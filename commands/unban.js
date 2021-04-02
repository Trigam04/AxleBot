module.exports = {
    name: "Unban",
    description: "Unbans a user who was previously banned because you're feeling generous (better hope it lasts).",
    category: "Moderation",
    aliases: ["Unbean", "Revive", "Unkill", "UB"],
    syntax: "/unban [user]",
    async execute(bot, message, args, Discord) {
        //Unban reason
        let reason = args.slice(1).join(" ");
        if (!reason)
            reason = "No reason!"
        //First user mentioned in command
        const member = message.mentions.members.first();
        //Get the list of bans in the server
        const banList = await message.guild.fetchBans();
        //Find the banned user
        bannedUser = banList.find(user => user.id === member);
        //If can't find the banned user
        if (!bannedUser) {
            //Find the banned user by the first arg instead
            bannedUser = banList.find(user => user.username === args[0].replace(/_+/ig));
        };
        console.log(bannedUser);
        //If author doesn't have permissions
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send("You don't have permission to unban members!");
        //If bot doesn't have permissions
        if (!message.guild.me.hasPermission('BAN_MEMBERS'))
            return message.channel.send("I don't have permission to ban members!");
        //Check if there's a specified... anything
        if (!args[0])
            return message.channel.send("Please specify a valid (banned) user to unban!");
        //Check if the specified user is banned
        if (!bannedUser)
            //Send error message
            return message.channel.send("Please specify a valid (banned) user to unban!");
        //If targeted user exists
        if (bannedUser) {
            const unbanConfirm = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle("Are you sure you want to unban this user?")
                .setThumbnail(bannedUser.user.avatarURL())
                .addFields({
                    name: 'Tag',
                    value: bannedUser.user.tag,
                    inline: true
                }, {
                    name: 'Username',
                    value: bannedUser.user.username,
                    inline: true
                }, {
                    name: 'Ban Reason',
                    value: reason,
                    inline: false
                })
                .setFooter("React to confirm or cancel the unban!");

            //                       --| Reaction collector |--
            //     Listens for reactions and will run different code for each reaction
            //Reaction collector filter
            const filter = (reaction, user) => {
                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            //Send confirmation embed
            message.channel.send(unbanConfirm).then(msg => {
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
                        //Unban the pleb
                        try {
                            //Try to unban the user
                            message.guild.members.unban(bannedUser.user.id);
                            //Send ban message
                            message.channel.send(`Unbanned <@${bannedUser.user.id}>!`);
                            //If there was an error
                        } catch (error) {
                            //Log error
                            console.log(error)
                            //Send error message
                            message.channel.send("I was unable to unban this user!")
                        }
                    };
                    //If thumbs down
                    if (reaction.emoji.name == '👎') {
                        msg.reactions.removeAll();
                        message.channel.send('Cancelled unban!')
                    };
                });
                //After 10 seconds
                collector.on('end', collected => {
                    //If no reactions
                    let reactionCache = msg.reactions.cache.array();
                    let reactionObject = JSON.stringify(reactionCache)
                    if (reactionObject !== '[]') {
                        msg.reactions.removeAll();
                        message.channel.send("Unban canclelled due to no reaction!");
                    }
                });
            });
        };
    }
}