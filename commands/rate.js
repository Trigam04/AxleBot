//Seeded randomization library
const seedrandom = require('seedrandom');
//Sets default ratings for certain messages
const rateDefaults = require('../config/rateDefaults.json');
//Extra star emojis
let halfStar = ("<:HalfStar:752551841937752075>")
let darkStar = ("<:DarkStar:752551865073401937>")

module.exports = {
    name: "Rate",
    description: "Rates anything you specify with a rating that may or may not destroy friendships.",
    category: "Fun",
    aliases: [],
    syntax: "/rate [thing to rate]",
    async execute(bot, message, args, Discord) {
        //Stitch all args together
        let rateMessage = args.join(" ");
        //If there's no rate message
        if (!rateMessage)
            return message.channel.send("Please specify something for me to rate!")
        //If rate message is empty
        if (rateMessage == "** **")
            return message.channel.send("Nice try :)");
        //If rate message is 'me'
        if (rateMessage.toLowerCase() == "me") {
            rateAuthor = true;
            rateMessage = message.author.username;
        } else {
            rateAuthor = false;
        }
        //Give random number based on rate message
        rng = seedrandom(rateMessage.toLowerCase());
        //Get a single number from the random number
        let random = rng().toString().substring(4, 5);
        //If the rate message is equal to one of the default messages
        if (rateDefaults[rateMessage.toLowerCase()]) {
            random = rateDefaults[rateMessage]
        };
        //Set ratings
        switch (random) {
            case '0':
                msgRan = '1/2';
                msgStar = `${halfStar} ${darkStar} ${darkStar} ${darkStar} ${darkStar}`;
                break;
            case '1':
                msgRan = '1';
                msgStar = `:star: ${darkStar} ${darkStar} ${darkStar} ${darkStar}`;
                break;
            case '2':
                msgRan = '1 1/2';
                msgStar = `:star: ${halfStar} ${darkStar} ${darkStar} ${darkStar}`;
                break;
            case '3':
                msgRan = '2';
                msgStar = `:star: :star: ${darkStar} ${darkStar} ${darkStar}`;
                break;
            case '4':
                msgRan = '2 1/2';
                msgStar = `:star: :star: ${halfStar} ${darkStar} ${darkStar}`;
                break;
            case '5':
                msgRan = '3';
                msgStar = `:star: :star: :star: ${darkStar} ${darkStar}`;
                break;
            case '6':
                msgRan = '3 1/2';
                msgStar = `:star: :star: :star: ${halfStar} ${darkStar}`;
                break;
            case '7':
                msgRan = '4';
                msgStar = `:star: :star: :star: :star: ${darkStar}`;
                break;
            case '8':
                msgRan = '4 1/2';
                msgStar = `:star: :star: :star: :star: ${halfStar}`;
                break;
            case '9':
                msgRan = '5';
                msgStar = `:star: :star: :star: :star: :star:`;
                break;
            case '-1':
                msgRan = '-1';
                msgStar = `${darkStar} ${darkStar} ${darkStar} ${darkStar} ${darkStar} `
        }
        //If author is rating themself
        if (rateAuthor == true) {
            message.channel.send(`I rate you ${msgRan} stars!\n${msgStar}`);
            //If author is rating something
        } else {
            message.channel.send(`I rate **${rateMessage}** ${msgRan} stars!\n${msgStar}`);
        }
    }
}