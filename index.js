const Discord = require('discord.js');
const bot = new Discord.Client();
//Loads data from config file
const {
    prefix,
    token,
    activity,
    botinfo
} = require('./config.json');
const fs = require("fs");
//Command handler
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

//When the bot starts
bot.once('ready', () => {
    //Sets the bot's activity
    bot.user.setActivity(activity);
    //Logs data from the config file
    console.log("Prefix is " + '"' + prefix + '"');
    console.log("Token is " + '"' + token + '"');
    console.log("Status is " + '"' + activity + '"')
    console.log("Name is " + '"' + botinfo.name + '"');
    console.log("Version is " + '"' + botinfo.version + '"');
    console.log("Last update was on " + '"' + botinfo.updatedLast + '"');
    console.log("Axle Bot is online!");
});

//Logs the bot in
bot.login(token)

//When the bot is online
bot.on('message', message => {
    //Auto bot responses
    if (message.content === "Creeper") {
        message.channel.send("Aww man")
    };
    if (message.content === "creeper") {
        message.channel.send("aww man")
    };
    if (message.content === "Hotel?") {
        message.channel.send("Trivago")
    };
    if (message.content === "hotel?") {
        message.channel.send("trivago")
    };
    if (message.content === "Hotel") {
        message.channel.send("Trivago")
    };
    if (message.content === "hotel") {
        message.channel.send("trivago")
    };
    if (message.content.startsWith("I'm ")) {
        let msg = message.content.slice(4);
        if (msg) {
            if (msg === "Dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "Mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "Axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "Axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "Son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "Gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            if (msg === "gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            message.channel.send(`Hi ${msg}, I'm Dad!`);
        };
    };
    if (message.content.startsWith("i'm ")) {
        let msg = message.content.slice(4);
        if (msg) {
            if (msg === "Dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "Mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "Axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "Axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "Son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "Gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            if (msg === "gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            message.channel.send(`Hi ${msg}, I'm Dad!`);
        };
    };
    if (message.content.startsWith("Im ")) {
        let msg = message.content.slice(3);
        if (msg) {
            if (msg === "Dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "dad") {
                message.channel.send("No you're not, silly!")
                return;
            };
            if (msg === "Mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "mom") {
                message.channel.send("Hi honey! How was your day?")
                return;
            };
            if (msg === "Axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "axle") {
                message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                return;
            };
            if (msg === "Axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "axel") {
                message.channel.send("Hey nerd :))))))")
                return;
            };
            if (msg === "Son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "son") {
                message.channel.send("Hey champ! Wanna play some baseball?")
                return;
            };
            if (msg === "Gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            if (msg === "gay") {
                message.channel.send({
                    files: ["images/HiGay.jpg"]
                })
                return;
            };
            message.channel.send(`Hi ${msg}, I'm Dad!`);
        };
        if (message.content.startsWith("im ")) {
            let msg = message.content.slice(3);
            if (msg) {
                if (msg === "Dad") {
                    message.channel.send("No you're not, silly!")
                    return;
                };
                if (msg === "dad") {
                    message.channel.send("No you're not, silly!")
                    return;
                };
                if (msg === "Mom") {
                    message.channel.send("Hi honey! How was your day?")
                    return;
                };
                if (msg === "mom") {
                    message.channel.send("Hi honey! How was your day?")
                    return;
                };
                if (msg === "Axle") {
                    message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                    return;
                };
                if (msg === "axle") {
                    message.channel.send("T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿")
                    return;
                };
                if (msg === "Axel") {
                    message.channel.send("Hey nerd :))))))")
                    return;
                };
                if (msg === "axel") {
                    message.channel.send("Hey nerd :))))))")
                    return;
                };
                if (msg === "Son") {
                    message.channel.send("Hey champ! Wanna play some baseball?")
                    return;
                };
                if (msg === "son") {
                    message.channel.send("Hey champ! Wanna play some baseball?")
                    return;
                };
                if (msg === "Gay") {
                    message.channel.send({
                        files: ["images/HiGay.jpg"]
                    })
                    return;
                };
                if (msg === "gay") {
                    message.channel.send({
                        files: ["images/HiGay.jpg"]
                    })
                    return;
                };
                message.channel.send(`Hi ${msg}, I'm Dad!`);
            };
        };
    };
    //More command handler
    let args = message.content.substring(prefix.length).split(" ");
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    switch (args[0]) {
        case "ping":
            bot.commands.get('ping').execute(message, args);
            break;
        case "latency":
            bot.commands.get('ping').execute(message, args);
            break;
        case "info":
            bot.commands.get('info').execute(message, args);
            break;
        case "help":
            bot.commands.get('info').execute(message, args);
            break;
        case "poll":
            bot.commands.get('poll').execute(message, args);
            break;
        case "pin":
            bot.commands.get('pin').execute(message, args);
            break;
        case "kick":
            bot.commands.get('kick').execute(message, args);
            break;
        case "ban":
            bot.commands.get('ban').execute(message, args);
            break;
        case "say":
            bot.commands.get('say').execute(message, args);
            break;
        case "selfie":
            bot.commands.get('selfie').execute(message, args);
            break;
        case "unban":
            bot.commands.get('unban').execute(message, args);
            break;
        case "cursed":
            bot.commands.get('cursed').execute(message, args);
            break;
        case "dank":
            bot.commands.get('dank').execute(message, args);
            break;
        case "blursed":
            bot.commands.get('blursed').execute(message, args);
            break;
        case "quote":
            bot.commands.get('quote').execute(message, args);
            break;
        case "coinflip":
            bot.commands.get('coinflip').execute(message, args);
            break;
        case "dice":
            bot.commands.get('dice').execute(message, args);
            break;
    }
})