const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: "Coinflip",
    description: "Randomly flips the digital coin resulting in a *totally* randomized side facing up.",
    category: "RNG",
    aliases: ["Coin", "Flip"],
    syntax: "/coinflip",
    execute(bot, message, args, Discord) {
        
        //                    --| Choices |--
        //Choices for how many times to loop
        let loopChoice = [3, 4, 5, 6, 7, 8];
        //Randomizes the loop choices
        var loopResponse = loopChoice[Math.floor(Math.random() * loopChoice.length)];

        //                   --| Response |--
        //Sends an interval message
        message.channel.send("**Flipping a coin...**")
        //Message delay
        setTimeout(function () {
            //Sends response message (to be edited)
            message.channel.send("Coin is on **Heads**!").then(msg => {
                //Loop function
                function loop() {
                    //Sets counter to 0
                    var i = 0;
                    //Sets toggle variable to true
                    var f = true;
                    //Timer function
                    let timer = setInterval(function () {
                        //If timer is greater than the randomized loop response
                        if (i >= loopResponse) {
                            //Ends the function
                            clearInterval(timer)
                            //Delay
                            setTimeout(function () {
                                //If the toggle variable is true
                                if (f) {
                                    //Send tails response
                                    msg.edit("Coin landed on **Tails**!")
                                //If the toggle variable isn't true
                                } else {
                                    //Send heads response
                                    msg.edit("Coin landed on **Heads**!")
                                };
                            }, 1000)
                        };
                        //Adds to counter each time function is ran
                        i++
                        //Toggles the toggle variable
                        f = !f;
                        //If the toggle variable is true
                        if (f) {
                            //Send interval heads response
                            msg.edit("Coin is on **Heads**!")
                        //If the toggle variable isn't true
                        } else {
                            //Send interval tails response
                            msg.edit("Coin is on **Tails**!")
                        };
                    }, 1000)
                };
                //Runs the loop function
                loop();
            })
        }, 2000);
    }
}