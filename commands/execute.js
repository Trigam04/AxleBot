const dynamicResponses = require('../functions/dynamicResponses.js');
module.exports = {
    name: "Execute",
    description: "Used to test dynamic responses",
    category: "Server",
    aliases: ["X"],
    syntax: "/execute {selector|field}",
    async execute(bot, message, args, Discord) {
        //If author doesn't have perms
        if (!message.member.hasPermission('MANAGE_GUILD'))
            return message.channel.send("You don't have permission to execute dynamic responses!");
        //Send the message through the dyn response thingy
        var inMsg = args.join(" ")
        const responses = dynamicResponses.execute(message, args, bot, inMsg);
        //Respond with the fresh new message
        message.channel.send(responses);
    }
}