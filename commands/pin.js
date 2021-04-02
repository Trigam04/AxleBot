module.exports = {
    name: "Pin",
    description: "Pins the previous message to the channel because you're a lazy ass.",
    category: "Utility",
    aliases: ["Tack"],
    syntax: "/pin",
    async execute(bot, message, args, Discord) {
        //If the message author doesn't have permission to pin messages
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have permission to pin messages!");
        //If there's a specified message id
        if (args[0]) {
            //Find message by id
            const messageReturn = await findMsgId(args[0]);
            switch (messageReturn) {
                case "0":
                    message.channel.send("That isn't a message ID!");
                    break;
                case "1":
                    message.channel.send("I couldn't find that message!");
                    break;
                case undefined:
                    message.channel.send("I couldn't find that message!");
                    break;
                default:
                    //If message is already pinned
                    if (messageReturn.pinned) {
                        return message.channel.send("That message is already pinned!")
                    } else {
                        //Get timestamps
                        if (messageReturn.editedTimestamp) {
                            msgTime = messageReturn.editedTimestamp
                        } else {
                            msgTime = messageReturn.createdTimestamp
                        };
                        //Confirmation embed
                        const pinConfirm = new Discord.MessageEmbed()
                            .setColor('#7289d9')
                            .setTitle("Are you sure you want to pin this message?")
                            .addFields({
                                name: 'Message',
                                value: messageReturn.content,
                                inline: true
                            }, {
                                name: 'Author',
                                value: messageReturn.author,
                                inline: true
                            }, {
                                name: 'Sent at',
                                value: msgTime,
                                inline: true
                            })
                            .setFooter("React to confirm or cancel the pin!");

                        //                       --| Reaction collector |--
                        //     Listens for reactions and will run different code for each reaction
                        //Reaction collector filter
                        const filter = (reaction, user) => {
                            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                        };
                        //Send confirmation embed
                        message.channel.send(pinConfirm).then(msg => {
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
                                    //Pin the message
                                    try {
                                        messageReturn.pin();
                                    } catch (error) {
                                        console.log(error)
                                        message.channel.send("I was unable to pin this message!")
                                    }
                                };
                                //If thumbs down
                                if (reaction.emoji.name == '👎') {
                                    msg.reactions.removeAll();
                                    message.channel.send('Cancelled pin!')
                                };
                            });
                            //After 10 seconds
                            collector.on('end', collected => {
                                //If no reactions
                                let reactionCache = msg.reactions.cache.array();
                                let reactionObject = JSON.stringify(reactionCache)
                                if (reactionObject !== '[]') {
                                    msg.reactions.removeAll();
                                    message.channel.send("Pin canclelled due to no reaction!");
                                }
                            });
                        });
                    };
                    break;
            };
        } else {
            message.channel.messages.fetch({
                limit: 2
            }).then((messages => {
                //Creates a constant for the last message (The message before the command)
                const pinMessage = messages.last();
                //Pins the message
                if (pinMessage.system) {
                    return message.channel.send("I can't pin a system message!");
                } else {
                    if (pinMessage.pinned) {
                        return message.channel.send("That message is already pinned!")
                    } else {
                        if (pinMessage.editedTimestamp) {
                            msgTime = pinMessage.editedTimestamp
                        } else {
                            msgTime = pinMessage.createdTimestamp
                        };
                        const pinConfirm = new Discord.MessageEmbed()
                            .setColor('#7289d9')
                            .setTitle("Are you sure you want to pin this message?")
                            .addFields({
                                name: 'Message',
                                value: pinMessage.content,
                                inline: true
                            }, {
                                name: 'Author',
                                value: pinMessage.author,
                                inline: true
                            }, {
                                name: 'Sent at',
                                value: msgTime,
                                inline: true
                            })
                            .setFooter("React to confirm or cancel the pin!");

                        //                       --| Reaction collector |--
                        //     Listens for reactions and will run different code for each reaction
                        //Reaction collector filter
                        const filter = (reaction, user) => {
                            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                        };
                        //Send confirmation embed
                        message.channel.send(pinConfirm).then(msg => {
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
                                    //Pin the message
                                    try {
                                        pinMessage.pin();
                                    } catch (error) {
                                        console.log(error)
                                        message.channel.send("I was unable to pin this message!")
                                    }
                                };
                                //If thumbs down
                                if (reaction.emoji.name == '👎') {
                                    msg.reactions.removeAll();
                                    message.channel.send('Cancelled pin!')
                                };
                            });
                            //After 10 seconds
                            collector.on('end', collected => {
                                //If no reactions
                                let reactionCache = msg.reactions.cache.array();
                                let reactionObject = JSON.stringify(reactionCache)
                                if (reactionObject !== '[]') {
                                    msg.reactions.removeAll();
                                    message.channel.send("Pin canclelled due to no reaction!");
                                }
                            });
                        });
                    };
                };
            }));
        }
        async function findMsgId(id) {
            let err = new String();
            if (!Number(id)) return "0"
            try {
                await message.channel.messages.fetch(id);
            } catch (error) {
                console.error("Failed to find message!");
                err = "h"
            } finally {
                if (typeof err == 'string') return "1";
                return message.channel.messages.fetch(id);
            }
        };
    }
}