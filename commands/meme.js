//Dependencies
const fetch = require('node-fetch');

module.exports = {
    name: "Meme",
    description: "Funny meme haha 69 420 uh oh stinky stonks lol lmao rofl XD :b: end me.",
    category: "Image",
    aliases: ["Funny"],
    syntax: "/meme [valid arguement]",
    async execute(bot, message, args, Discord) {
        //Random loading messages
        let loadings = ["Stealing from people's stashes...", "Yoinking from the interwebs...", "Generating random message...", "Analyzing comedy...", "Looking for big chungus...", "Entering the city...", "Diving through the archives...", "Preparing funnies...", "Starting the rescue helicopter...", "Downloading more memes...", "Scrolling through Reddit...", "Ruining your childhood...", "Looking for more references...", "Checking vibe...", "Loading...", "Finding the meaning of Gen Z humor...", "Getting funky...", "Nobody:\nAbsolutely nobody:\nAxle:", "Looking for what came in the mail today...", "Finding out who Jeff is...", "Calculating 9 + 10...", "Getting chicken strips...", "Liking turtles...", "Just doing it...", "EEEEEEEE", "E"];
        let loadingMsg = loadings[Math.floor(Math.random() * loadings.length)];
        // /meme blursed
        if (args[0] == "blursed") {
            message.channel.send(loadingMsg);
            let choices = Array.from(Array(99).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            response++;
            message.channel.send(`http://www.trigamyt.com/projects/axle/memes/blursed/Blursed${response}.png`);
        }
        // /meme cursed
        if (args[0] == "cursed") {
            message.channel.send(loadingMsg);
            let choices = Array.from(Array(99).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            response++;
            message.channel.send(`http://www.trigamyt.com/projects/axle/memes/cursed/Cursed${response}.png`);
        }
        // /meme dank
        if (args[0] == "dank") {
            message.channel.send(loadingMsg);
            let choices = Array.from(Array(99).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            response++;
            message.channel.send(`http://www.trigamyt.com/projects/axle/memes/dank/Dank${response}.png`);
        } 
        // /meme [nothing]
        if (!args[0]) {
            //Creates embed
            let errEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("ERROR")
                .addField(`Missing Arguement!`, `Please specify a valid arguement`)
                .setFooter("Valid arguements are dank, blursed, and cursed");
            //Sends embed
            message.channel.send(errEmbed);
        }
    }
}