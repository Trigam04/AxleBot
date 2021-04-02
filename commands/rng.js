const Discord = require('discord.js');

module.exports = {
    name: "RNG",
    description: "Generates a random number so you and your friends can decide which movie to watch.",
    category: "RNG",
    aliases: ["Number"],
    syntax: "/rng [max number]",
    execute(bot, message, args, Discord) {
        //Make maximum number in range equal to the number specified in the message
        let max = parseInt(args[0]);
        //Check if the max number IS a number
        let check = Number.isInteger(max);
        //If the max number isn't a number
        if (check === false) {
            message.channel.send("Please specify a valid number!");
            return;
        };
        //If the max number is too big
        if (max > 1000000) {
            message.channel.send("Please specify a number smaller than 1000000!");
            return;
        };
        //Generate random number function
        function rng() {
            //Create an array of numbers from 0 to the max number
            let choices = Array.from(Array(max - 1).keys());
            //Pick a random number from the array
            let response = choices[Math.floor(Math.random() * choices.length)];
            //Add one to the response (because the array starts at 0)
            return response++;
        }
        //Send waiting response
        message.channel.send("**Generating random number...**");
        //Wait 2 seconds
        setTimeout(function () {
            //Send first response
            message.channel.send(`**${rng()}**`).then(msg => {
                //Loop function
                function loop() {
                    //Set interation to 0
                    let i = 0;
                    //Interval function
                    let timer = setInterval(function () {
                        //If iteration is greater than or equal to 4
                        if (i >= 4) {
                            //Clear interval
                            clearInterval(timer);
                        };
                        //Iterate iteration
                        i++;
                        //Edit message with new number
                        msg.edit(`**${rng()}**`);
                    }, 300)
                };
                //Run loop function
                loop();
            })
        }, 2000)
    }
}