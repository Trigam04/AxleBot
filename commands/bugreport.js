module.exports = {
    name: "Bugreport",
    description: "Sends a report of a bug to Trigam so he can fix it.",
    category: "Utility",
    aliases: ["Report"],
    syntax: "/bugreport [bug] | [command] | [description]",
    async execute(bot, message, args, Discord) {

        //                 --| Variables |--
        //Convert command into an array of variables
        let report = message.content.split(" | ")
        report[0] = report[0].split(' ')[1];
        console.log(report)

        //                 --| Checks |--
        //If invalid bug
        if (report[0] == "bugreport") {
            let invalidBug = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setColor('RED')
                .addFields({
                    name: "Invalid Bug",
                    value: "Please specify a bug!"
                })
                .setFooter("Correct syntax: '/bugreport [bug] | [command] | [description]'");
            return message.channel.send(invalidBug);
        };
        //If invalid origin command
        if (report[1] == undefined) {
            let invalidCommand = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setColor('RED')
                .addFields({
                    name: "Invalid Command",
                    value: "Please specify the command the bug originated from!"
                })
                .setFooter("Correct syntax: '/bugreport [bug] | [command] | [description]'");
            return message.channel.send(invalidCommand);
        };
        //If invalid bug description
        if (report[2] == undefined) {
            let invalidDesc = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setColor('RED')
                .addFields({
                    name: "Invalid Description",
                    value: "Please specify a description of the bug!"
                })
                .setFooter("Correct syntax: '/bugreport [bug] | [command] | [description]'");
            return message.channel.send(invalidDesc);
        };
        //                  --| Embed |--
        //Creates the embed
        const bugEmbed = new Discord.MessageEmbed()
            .setColor("#7289d9")
            .setTitle("Are you sure you want to submit this bug report?")
            .setDescription(`Sent by ${message.author}`)
            .setFooter("React to confirm or cancel the bug report!")
            .addFields({
                name: 'Bug',
                value: report[0]
            }, {
                name: 'Command',
                value: report[1]
            }, {
                name: 'Description',
                value: report[2]
            });

        //                 --| Reaction Collector |--
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        //Send confirmation embed
        message.channel.send(bugEmbed).then(msg => {
            //React to the message
            msg.react('👍');
            msg.react('👎');
            //Create reaction collector
            const collector = msg.createReactionCollector(filter, {
                time: 10000
            });

            //Start reaction collector
            collector.on('collect', (reaction, user) => {
                //If the reactor isn't the author
                if (!reaction.user == message.author)
                    return;
                //If thumbs up
                if (reaction.emoji.name == '👍') {
                    //Remove all reactions
                    msg.reactions.removeAll();
                    //Submit bug report
                    try {
                        //Report embed
                        const reportEmbed = new Discord.MessageEmbed()
                            .setColor("#7289d9")
                            .setTitle("Bug Report")
                            .setDescription(`Sent by ${message.author}`)
                            .setFooter(`Sent from ${message.guild.name}`)
                            .addFields({
                                name: 'Bug',
                                value: report[0]
                            }, {
                                name: 'Command',
                                value: report[1]
                            }, {
                                name: 'Description',
                                value: report[2]
                            });
                        //Sends bug embed into the dev/support server
                        bot.channels.cache.get('753251109929484388').send(reportEmbed);
                        message.channel.send("Bug report submitted!")
                    } catch (error) {
                        console.log(error)
                        message.channel.send("I was unable to submit this bug report!")
                    }
                };
                //If thumbs down
                if (reaction.emoji.name == '👎') {
                    msg.reactions.removeAll();
                    message.channel.send('Cancelled bug report!')
                };
            });
            //After 10 seconds
            collector.on('end', collected => {
                //If no reactions
                let reactionCache = msg.reactions.cache.array();
                let reactionObject = JSON.stringify(reactionCache)
                if (reactionObject !== '[]') {
                    msg.reactions.removeAll();
                    message.channel.send("Bug report canclelled due to no reaction!");
                }
            });
        });
    }
}