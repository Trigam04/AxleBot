module.exports = (Discord, bot, message) => {
    //Get files
    const responses = require('../../config/responses.json');
    const dadResponses = require('../../config/dadResponses.json');
    const {textResponses, imageResponses, musicResponses} = require('../../config/dmResponses.json');
    const {prefix} = require('../../config/config.json');
    //If message author is a bot
    if (message.author.bot) return;
    //AUTO RESPONSES
    if (responses[message.content]) {
        message.channel.send(responses[message.content]);
    };
    //Dad Bot 2.0
    const starts = ["I'm", "Im", "i'm", "im"];
    const msgStart = message.content.split(/ +/)[0];
    if(starts.includes(msgStart)) {
        let msg = message.content.toLowerCase().slice(msgStart.includes("'") ? 4 : 3);
        let msg2 = message.content.slice(msgStart.includes("'") ? 4 : 3);
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg])
        } else {
            message.channel.send(`Hi ${msg2}, I'm Dad!`);
        }
    }
    //DM Responses
    if (message.channel.type == "dm") {
        if (!message.content.startsWith(prefix)) {
            let textResponse = textResponses[Math.floor(Math.random() * textResponses.length)];
            message.channel.send(textResponse);
        }
    }
    //If message isn't a command
    if (!message.content.startsWith(prefix)) return;
    //Split command into args
    const args = message.content.slice(prefix.length).split(/ +/);
    //Get command from command collection
    const cmd = args.shift().toLowerCase();
    //Change casing of command
    //(Overrides)
    if (cmd == "say" || cmd == "ban" || cmd == "pin") {
        cmdUp = capitalizeFirstLetter(cmd)
    //(Commands 3 or less letters long)
    } else if (cmd.length <= 3) {
        cmdUp = cmd.toUpperCase()
    //Every other command
    } else {
        cmdUp = capitalizeFirstLetter(cmd);
    };
    const command = bot.commands.get(cmdUp) || bot.commands.find(a => a.aliases && a.aliases.includes(cmdUp));
    //If command is found
    if (command) {
        //Execute command
        command.execute(bot, message, args, Discord);
    }
}
//Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}