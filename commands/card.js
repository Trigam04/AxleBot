const Discord = require('discord.js');

module.exports = {
    name: "Card",
    description: "Draws a randomized card from the digital deck.",
    category: "RNG",
    aliases: ["Draw", "Shuffle"],
    syntax: "/card",
    execute(bot, message, args, Discord) {

        //                             --| Choices |--
        //Choices for the number of the card
        let numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        //Choices for the suit of the card
        let suitChoice = ["Hearts", "Clubs", "Spades", "Diamonds"];

        //                           --| Response |--
        //Sends a interval message
        message.channel.send("**Drawing a card...**")
        //Message delay
        setTimeout(function () {
            //Sends response message (to be edited)
            message.channel.send("You drew a **1** of **Hearts**!").then(msg => {
                //Loop function
                function loop() {
                    //Sets counter to 0
                    let i = 0
                    //Timer function
                    let timer = setInterval(function () {
                        //If counter is greater than 4
                        if (i >= 4) {
                            //Ends the function
                            clearInterval(timer)
                        };
                        //Adds to counter each time function is ran
                        i++
                        //Randomizes the number
                        var numberResponse = numberChoice[Math.floor(Math.random() * numberChoice.length)];
                        //Randomizes the suit
                        var suitResponse = suitChoice[Math.floor(Math.random() * suitChoice.length)];
                        //Edits the message with a new randomized card
                        msg.edit(`You drew a **${numberResponse} of ${suitResponse}**!`)
                    }, 300)
                };
                //Runs the loop function
                loop();
            })
        }, 2000);
    }
}