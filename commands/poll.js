module.exports = {
    name: "Poll",
    description: "Creates a poll from the specified question which users can vote on.",
    category: "Utility",
    aliases: ["Question"],
    syntax: "/poll [question]",
    execute(bot, message, args, Discord) {

        //Stitches the question
        let msgArgs = args.join(" ");
        //Creates embed
        const pollEmbed = new Discord.MessageEmbed()
            .setColor("#7289d9")
            .setTitle(`${msgArgs}`)
            .addField("Question author: ", `${message.author}`)
            .setFooter("React to vote on the poll!");
        //Creates the embed for when there's no question
        const errEmbed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("**ERROR!**")
            .addField("Missing Question!", "Be sure to include a question in the command!")
            .setFooter("Please be sure to report any bugs!");
        //Sends the error embed when there's no question
        if (!args[1]) {
            message.channel.send(errEmbed)
        };
        //Sends the question embed
        if (args[1]) {
            message.channel.send(pollEmbed).then(messageReaction => {
                //Adds reactions
                messageReaction.react("✅");
                messageReaction.react("❌");
                //Deletes the command message
                message.delete({
                    timeout: 100
                });
            })
            return;
        }
    }
}