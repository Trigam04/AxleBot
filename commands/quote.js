const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: "Quote",
    description: "Gets all of the messages from the channel, and sends and random one back.",
    category: "Fun",
    aliases: ["Message"],
    syntax: "/quote",
    execute(bot, message, args, Discord) {
        //Attempt to run code
        try {
            codelmao();
        } catch (error) {
            //Log error then run again
            console.log(e);
            codelmao();
        }
        function codelmao() {
            //Fetch the 100 most recent messages
            message.channel.messages.fetch({
                limit: 100
            }).then((messages => {
                try {
                    //Turn them into an array
                    let arr = messages.array();
                    //Pick a random one from the array
                    let response = arr[Math.floor(Math.random() * arr.length)];
                    //If message was sent by a bot
                    if (response.author.bot) return codelmao();
                    //If there's no text
                    if (!response.content) return codelmao();
                        //If there's an attachment
                        if (!response.attachments.size == 0) {
                            //Get first attachment
                            const attach = response.attachments.array()[0].url;
                            //Send the message with attachment
                            return message.channel.send(`> ${response.content} ${attach} \n${response.author}`);
                        } else {
                            //Embed of stuff
                            const quoteEmbed = new Discord.MessageEmbed()
                                .setColor("#7289d9")
                                .setTitle("Quote")
                                .addFields({
                                    name: 'Author',
                                    value: response.author.username,
                                    inline: true
                                }, {
                                    name: 'Sent at',
                                    value: response.createdAt.toDateString(),
                                    inline: true
                                }, {
                                    name: 'Link',
                                    value: `[Go to message!](${response.url})`,
                                    inline: true
                                }, {
                                    name: 'Message',
                                    value: response.content,
                                    inline: false
                                })
                            //Send embed
                            message.channel.send(quoteEmbed);
                        }
                } catch (error) {
                    console.log(error)
                }
            }));
        }
    }
}