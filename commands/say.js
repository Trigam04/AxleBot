const fetch = require('node-fetch');

module.exports = {
    name: "Say",
    description: "Allows the bot to mimic another user and say whatever you want.",
    category: "Fun",
    aliases: ["Mimic", "Sudo"],
    syntax: "/say [message] OR\n/say [user] [message]",
    async execute(bot, message, args, Discord) {
        //First tagged user
        let mimicUser = message.mentions.users.first();
        if (!mimicUser) {
            //Creates variable of the user's message
            sendMsg = args.join(" ");
            //If resulting message is blank
            if (!sendMsg) {
                return message.channel.send("Specify a message to say!")
            };
            //Sends message
            message.channel.send(sendMsg)
            //Deletes author's message
            if (message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                return message.delete({
                    timeout: 1
                });
            };
        } else {
            //Creates variable of the user's message
            sendMsg = args.slice(1).join(" ");
            //If resulting message is blank
            if (!sendMsg) {
                return message.channel.send("Specify a message to say!")
            };
            //Get the guild member from the user
            var mimicUser2 = message.guild.members.cache.get(mimicUser.id)
            //If the member has a nickname
            if (mimicUser2.nickname) {
                nick = mimicUser2.nickname
            //If the member doesn't have a nickname
            } else {
                nick = mimicUser.username
            };
            //Create a webhook to create a fake profile
            const webhook = await message.channel.createWebhook(nick, {
                //Get the member's avatar as a png (to support transparency)
                avatar: mimicUser.displayAvatarURL({
                    format: 'png'
                })
            });
            //Get the new webhook
            const webhookURL = webhook.url;
            //Send the message as the fake profile
            await fetch(webhookURL, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    content: sendMsg
                })
            });
            //Delete webhook
            await webhook.delete();
            //Deletes author's message
            if (message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                return message.delete({
                    timeout: 1
                });
            };
        };
    }
}