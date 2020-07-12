const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Gives the bot latency.",
    execute(message, args) {
        //Creates the latency timestamp
        var ping = Date.now() - message.createdTimestamp + " ms";
        //Randomized responses to add humor
        let choices = ["Is it good? I can't look!", "Is that really it?", "Welp, take what you're given...", "I'm fast as frick boi", "I'm faster than the gym teacher's grandma!", "Try again later", "I'd rather not say...", "*Fine*", "You're not the first person to be disappointed in me", "Ask someone else", "Why?", "Meh", "Bruh Momento", "Brussels sound effect #2", "Ugh, do whatever it is you need to do so I can go back to sleep.", "Is 0 ms even possible?"];
        //Randomizes the choices
        let response = choices[Math.floor(Math.random() * choices.length)];

        //Stiches and sends the message
        var resMsg = message.channel.send('**Pinging...**').then((resMsg) =>
            resMsg.edit(`**${response}**` + "\nLatency: " + "`" + `${ping}` + "`"));
    }
}