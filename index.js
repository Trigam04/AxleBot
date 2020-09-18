//Dependencies
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch')
const fs = require("fs");
//Config
const {
    prefix,
    token,
    activity,
    botinfo,
} = require('./config/config.json');

//Load functions

//Command handler
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

//When the bot starts
bot.once('ready', async () => {
    //Sets the bot's activity
    bot.user.setActivity(activity);
    //Logs data from the config file
    console.log(`Preifx is "${prefix}"`);
    console.log(`Token is "${token}"`);
    console.log(`Status is "${activity}"`)
    console.log(`Name is "${botinfo.name}"`);
    console.log(`Version is "${botinfo.version}"`);
    console.log(`Last update was on "${botinfo.updatedLast}"`);
    console.log(`Serving ${bot.guilds.cache.size} servers`);
    console.log("Axle Bot is online!");
});

//Logs the bot in
bot.login(token)

//When the bot is online
bot.on('message', async message => {
    if (message.author.bot) return;
    //Auto bot responses
    let responses = {
        "Creeper": "Aww man",
        "creeper": "aww man",
        "Hotel?": "Trivago.",
        "hotel?": "trivago.",
        "Hotel": "Trivago",
        "hotel": "trivago",
    };
    //Dad bot 2.0
    if (responses[message.content]) {
        message.channel.send(responses[message.content]);
    }
    if (message.content.startsWith("I'm ")) {
        let lowercase = message.content.toLowerCase();
        let msg = lowercase.slice(4);
        let msg2 = message.content.slice(4);
        let dadResponses = {
            "dad": "No you're not, silly!",
            "mom": "Hi honey!",
            "son": "Hey champ!",
            "axle": "T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿",
            "axel": "Hey nerd :)))))",
            "gay": ["images/HiGay.jpg"]
        }
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg]);
        } else {
            message.channel.send(`Hi ${msg2}, I'm Dad!`)
        }
    };
    if (message.content.startsWith("i'm ")) {
        let lowercase = message.content.toLowerCase();
        let msg = lowercase.slice(4);
        let msg2 = message.content.slice(4);
        let dadResponses = {
            "dad": "No you're not, silly!",
            "mom": "Hi honey!",
            "son": "Hey champ!",
            "axle": "T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿",
            "axel": "Hey nerd :)))))",
            "gay": ["images/HiGay.jpg"]
        }
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg]);
        } else {
            message.channel.send(`Hi ${msg2}, I'm Dad!`)
        }
    };
    if (message.content.startsWith("Im ")) {
        let lowercase = message.content.toLowerCase();
        let msg = lowercase.slice(3);
        let msg2 = message.content.slice(3);
        let dadResponses = {
            "dad": "No you're not, silly!",
            "mom": "Hi honey!",
            "son": "Hey champ!",
            "axle": "T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿",
            "axel": "Hey nerd :)))))",
            "gay": ["images/HiGay.jpg"]
        }
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg]);
        } else {
            message.channel.send(`Hi ${msg2}, I'm Dad!`)
        }
    };
    if (message.content.startsWith("im ")) {
        let lowercase = message.content.toLowerCase();
        let msg = lowercase.slice(3);
        let msg2 = message.content.slice(3);
        let dadResponses = {
            "dad": "No you're not, silly!",
            "mom": "Hi honey!",
            "son": "Hey champ!",
            "axle": "T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿",
            "axel": "Hey nerd :)))))",
            "gay": ["images/HiGay.jpg"]
        }
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg2]);
        } else {
            message.channel.send(`Hi ${msg}, I'm Dad!`)
        }
    };

    //DM responses
    if (message.channel.type == "dm") {
        let choices = ["Why are you messaging a bot?", "Please leave me alone", ":clown:", "Poggers", "bruh.", "ok TRIGAM IS GONE I'M LOCKED IN HIS BASEMENT THE ADDRESS IS 13-", "Did you know that Joe has ligma?", "Yes?", "No, this is Axle", "Those are the words of someone who's died 13 times", "Alright", "Ok", "k", "kk", "Do I know you?", "Hello King", "Pizza time", "Big chungus", "Ok boomer", "Couldn't care less", "That seems a bit controversial", "You are real lucky that bots can't friend humans", "If only bots could friend people", "How may I help you?", "Aite", "`01000010 01100101 01100101 01110000 00100000 01100010 01101111 01101111 01110000 00100000 01100010 01101111 01110000`", "SHUT UP I'M PLAYING MINECRAFT", "Yesn't", "Cool", ":ok_hand:", "Oof", "*Angry Axle Noises*", "*(I'm on the phone)*", "Nah", "DMs are closed today", "Goodbye", "Cya", "Later", "See you later, alligator", "What is this place?", "*Snoring*", "ZzzZzzZzZZZ", "Why must you do this to me", "Interesting...", "...", "**SHHHH**, no talking", "So how's you're day been?", "<3", "tbh", "yeet", "Let's play 8 ball", "._.", ":)", ":(", ":|", ":/", "|:(", "lol", "lmao", "rofl", "I'd go with a big no", "I'd go with a big yes", "I'd go with a maybe", "nah", "It costed you $0 to NOT say that", "¯\_(ツ)_/¯", "( ͡° ͜ʖ ͡°)", "Funne \n \n bottom text", "Choppa moments", "Forward arial", "Why are you running?"]
        let response = choices[Math.floor(Math.random() * choices.length)];

        message.author.send(response).catch(() => console.log(`I can't DM ${message.author.username}!`))
        console.log(`${message.author.username}: ${message.content}`)
    };

    //More command handler
    let args = message.content.substring(prefix.length).split(" ");
    //Filter out bot messages
    if (message.author.bot) return;
    //Filter out non-commands
    if (!message.content.startsWith(prefix)) return;
    //Load command file
    switch (args[0]) {
        case "ping":
            bot.commands.get('ping').execute(message, args, bot);
            return;
        case "latency":
            bot.commands.get('ping').execute(message, args);
            return;
        case "info":
            bot.commands.get('info').execute(message, args, bot);
            return;
        case "help":
            bot.commands.get('info').execute(message, args);
            return;
        case "poll":
            bot.commands.get('poll').execute(message, args);
            return;
        case "pin":
            bot.commands.get('pin').execute(message, args);
            return;
        case "kick":
            bot.commands.get('kick').execute(message, args);
            return;
        case "ban":
            bot.commands.get('ban').execute(message, args);
            return;
        case "say":
            bot.commands.get('say').execute(message, args, bot);
            return;
        case "selfie":
            bot.commands.get('selfie').execute(message, args);
            return;
        case "unban":
            bot.commands.get('unban').execute(message, args);
            return;
        case "meme":
            bot.commands.get('meme').execute(message, args);
            return;
        case "quote":
            bot.commands.get('quote').execute(message, args);
            return;
        case "coinflip":
            bot.commands.get('coinflip').execute(message, args);
            return;
        case "dice":
            bot.commands.get('dice').execute(message, args);
            return;
        case "card":
            bot.commands.get('card').execute(message, args);
            return;
        case "rng":
            bot.commands.get('rng').execute(message, args);
            return;
        case "gd":
            bot.commands.get('gd').execute(message, args);
            return;
        case "urban":
            bot.commands.get('urban').execute(message, args);
            return;
        case "clear":
            bot.commands.get('clear').execute(message, args);
            return;
        case "invite":
            bot.commands.get('invite').execute(message, args);
            return;
        case "nickname":
            bot.commands.get('nickname').execute(message, args);
            return;
        case "rate":
            bot.commands.get('rate').execute(message, args, bot);
            return;
        case "config":
            bot.commands.get('config').execute(message, args);
            return;
        case "bugreport":
            bot.commands.get('bugreport').execute(message, args, bot);
            return;
        case "qr":
            bot.commands.get('qr').execute(message, args, bot);
            return;
    }
});