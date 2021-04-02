//Dependencies
const Discord = require('discord.js');
const bot = new Discord.Client();
//Config
const {
    prefix,
    token,
    activity,
    botinfo,
} = require('./config/config.json');

//Creates collections
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
});

//Logs the bot in
bot.login(token);