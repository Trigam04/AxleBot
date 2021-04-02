const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: "Selfie",
    description: "Uses advanced programming to access your computer's webcam and take a picture for the server to laugh at.",
    category: "Fun",
    aliases: ["Picture"],
    syntax: "/selfie [fast]",
    execute(bot, message, args, Discord) {
        if (args[0] == "fast") {
                //Generates array of 20 numbers
                let choices = Array.from(Array(19).keys());
                //Chooses random number from array
                let response = choices[Math.floor(Math.random() * choices.length)];
                //Adds one (since array starts at 0)
                response++;
                //Sends random selfie image
                return message.channel.send(`http://www.trigamyt.com/projects/axle/memes/selfie/Selfie${response}.png`);
        } else {
        //Tells you to look at your computer
        message.channel.send("Please look at your camera!").then(selfMsg => {
            //Sends "status updates"
            setTimeout(function () {
                selfMsg.edit("**3...**")
            }, 4000);
            setTimeout(function () {
                selfMsg.edit("**2..**")
            }, 5000);
            setTimeout(function () {
                selfMsg.edit("**1...**")
            }, 6000);
            setTimeout(function () {
                selfMsg.edit("**Taking image...**");
            }, 8000);
            setTimeout(function () {
                selfMsg.edit("**Getting image...**");
            }, 11000);
            setTimeout(function () {
                selfMsg.edit("**Processing...**");
            }, 12500);
            setTimeout(function () {
                selfMsg.edit("**Image:**");
            }, 16500);
            setTimeout(function () {
                //Generates array of 20 numbers
                let choices = Array.from(Array(19).keys());
                //Chooses random number from array
                let response = choices[Math.floor(Math.random() * choices.length)];
                //Adds one (since array starts at 0)
                response++;
                //Sends random selfie image
                message.channel.send(`http://www.trigamyt.com/projects/axle/memes/selfie/Selfie${response}.png`);
            }, 17000);
        });
        }
    }
}