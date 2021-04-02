//Credit to GDColon and RoboTop for inspiration for MANY of these responses
const {lowPing, lowMediumPing, mediumPing, mediumHighPing, highPing} = require('../config/pingResponses.json');

module.exports = {
    name: "Ping",
    description: "Responds with the latency of the bot AND a super funny response. Plase laugh.",
    category: "Info",
    aliases: ["Latency"],
    syntax: "/ping",
    async execute(bot, message, args, Discord) {
        //Randomized responses to add humor
        let lowResponse = lowPing[Math.floor(Math.random() * lowPing.length)].replace('{@}', `<@${message.author.id}>`);
        let lowMediumResponse = lowMediumPing[Math.floor(Math.random() * lowMediumPing.length)].replace('{@}', `<@${message.author.id}>`);
        let mediumResponse = mediumPing[Math.floor(Math.random() * mediumPing.length)].replace('{@}', `<@${message.author.id}>`);
        let mediumHighResponse = mediumHighPing[Math.floor(Math.random() * mediumHighPing.length)].replace('{@}', `<@${message.author.id}>`);
        let highResponse = highPing[Math.floor(Math.random() * highPing.length)].replace('{@}', `<@${message.author.id}>`);


        //Stiches and sends the message
        var resMsg = await message.channel.send('**Pinging...**');
            //Get latency
            let latency = resMsg.createdTimestamp - message.createdTimestamp;
            //Different responses for different latencies
            if (latency <= 100) {
                resMsg.edit(`**${lowResponse}**\nLatency: ` + '`' + latency + ' ms`');
            } else if (latency <=500) {
                resMsg.edit(`**${lowMediumResponse}**\nLatency: ` + '`' + latency + ' ms`');
            } else if (latency <= 1000) {
                resMsg.edit(`**${mediumResponse}**\nLatency: ` + '`' + latency + ' ms`');
            } else if (latency <=5000) {
                resMsg.edit(`**${mediumHighResponse}**\nLatency: ` + '`' + latency + ' ms`');
            } else {
                resMsg.edit(`**${highResponse}**\nLatency: ` + '`' + latency + ' ms`');
            }
    }
}