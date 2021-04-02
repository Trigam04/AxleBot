module.exports = {
    name: "Dice",
    description: "Rolls the digital dice to you a *definitely* randomized chance to win your monopoly game.",
    category: "RNG",
    aliases: ["Die", "Roll"],
    syntax: "/dice",
    execute(bot, message, args, Discord) {

        //                             --| Choices |--
        //Choices for the number of the card
        let numberChoice = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

        //                           --| Response |--
        //Sends a interval message
        message.channel.send("**Rolling dice...**")
        //Message delay
        setTimeout(function () {
            //Sends response message (to be edited)
            message.channel.send("You rolled a **2**!").then(msg => {
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
                        //Edits the message with new randomized dice
                        msg.edit(`You rolled a **${numberResponse}**!`)
                    }, 300)
                };
                //Runs the loop function
                loop();
            })
        }, 2000);
    }
}