const Discord = require('discord.js');
const {
    prefix,
    token,
    activity,
    botinfo
} = require('../config.json');

module.exports = {
    name: "info",
    description: "Gives info about anything about the bot.",
    execute(message, args) {

        //If command is /info ping
        if (args[1] === "ping") {
            //Creates embed
            let pingInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Ping")
                .addField("**Command Syntax:**", "\n`/ping`")
                .addField("**Desciption:**", "\nReturns the bot latency.")
                .addField("\n**NOTICE!**", "\nReturned latency may be inaccurate due to your device's local clock being off!")
                .addField("\n\n**Aliases**", "\nLatency")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(pingInfoEmbed);
            return;
        }
        //If command is /info poll
        if (args[1] === "poll") {
            //Creates embed
            let pollInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Poll")
                .addField("**Command Syntax:**", "\n`/poll [Question]`")
                .addField("**Description:**", "\nCreates a poll for users to vote on with reactions.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(pollInfoEmbed);
            return;
        }
        //If the command is /info kick
        if (args[1] === "kick") {
            //Creates embed
            let kickInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Kick")
                .addField("**Command Syntax:**", "\n`/kick [User] [Reason]`")
                .addField("**Description:**", "\nKicks a user from the server.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(kickInfoEmbed);
            return;
        }
        //If the command is /info ban
        if (args[1] === "ban") {
            //Creates embed
            let banInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Ban")
                .addField("**Command Syntax:**", "\n`/ban [User] [Reason]`")
                .addField("**Description:**", "\nBans a user from the server.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(banInfoEmbed);
            return;
        }
        //If the command is /info unban
        if (args[1] === "unban") {
            //Creates embed
            let unbanInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Unban")
                .addField("**Command Syntax:**", "\n`/unban [User] [Reason]`")
                .addField("**Description:**", "\nUnbans a user from the server.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(unbanInfoEmbed);
            return;
        }
        //If the command is /info say
        if (args[1] === "say") {
            //Creates embed
            let sayInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Say")
                .addField("**Command Syntax:**", "\n`/say [Message]`")
                .addField("**Description:**", "\nMakes the bot say a message. (Please don't abuse)")
                .setFooter("Please be sure to report any bugs!")
            //Sends embed
            message.channel.send(sayInfoEmbed);
            return;
        }
        //If command is /info pin
        if (args[1] === "pin") {
            //Creates embed
            let pinInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Pin")
                .addField("**Command Syntax:**", "\n`/pin`")
                .addField("**Desciption:**", "\nPins the previous message.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(pinInfoEmbed);
            return;
        }
        //If command is /info selfie
        if (args[1] === "selfie") {
            //Creates embed
            let selfieInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Selfie")
                .addField("**Command Syntax:**", "\n`/selfie`")
                .addField("**Desciption:**", "\nDefinitely takes a selfie with your webcam and posts the image.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(selfieInfoEmbed);
            return;
        }
        //If command is /info quote
        if (args[1] === "quote") {
            //Creates embed
            let quoteInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Quote")
                .addField("**Commands Syntax:**", "\n`/quote`")
                .addField("**Description:**", "\nChooses a random message from the channel and quotes it.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(quoteInfoEmbed);
            return;
        }
        //If command is /info dank
        if (args[1] === "dank") {
            //Creates embed
            let dankInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Dank")
                .addField("**Commands Syntax:**", "\n`/dank`")
                .addField("**Description:**", "\nSends a randomly selected dank meme.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(dankInfoEmbed);
            return;
        }
        //If command is /info blursed
        if (args[1] === "blursed") {
            //Creates embed
            let blursedInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Blursed")
                .addField("**Commands Syntax:**", "\n`/blursed`")
                .addField("**Description:**", "\nSends a randomly selected blursed image.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(blursedInfoEmbed);
            return;
        }
        //If command is /info cursed
        if (args[1] === "cursed") {
            //Creates embed
            let cursedInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Cursed")
                .addField("**Commands Syntax:**", "\n`/cursed`")
                .addField("**Description:**", "\nSends a randomly selected cursed image.")
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(cursedInfoEmbed);
            return;
        }
        //If command is /info coinflip
        if (args[1] === "coinflip") {
            //Creates embed
            let coinflipInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Coin Flip")
                .addField("**Command Syntax**", "\n`/coinflip`")
                .addField("**Description**", "\nFlips a coin... what else did you expect?")
                .setFooter("Please be sure to report any bugs!")
            //Sends the embed
            message.channel.send(coinflipInfoEmbed);
            return;
        }
        //If command is /info dice
        if (args[1] === "dice") {
            //Creates embed
            let diceInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Dice")
                .addField("**Command Syntax**", "\n`/dice`")
                .addField("**Description**", "\nRolls a die... what else did you expect?")
                .setFooter("Please be sure to report any bugs!")
            //Sends the embed
            message.channel.send(diceInfoEmbed);
            return;
        }
        //If command is /info creeper
        if (args[1] === "creeper") {
            //Creates embed
            let creeperInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Creeper")
                .addField("**Commands Syntax:**", "\n`Creeper`")
                .addField("**Description:**", '\nResponds with "Aww man".')
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(creeperInfoEmbed);
            return;
        }
        //If command is /info hotel
        if (args[1] === "hotel") {
            //Creates embed
            let hotelInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Hotel?")
                .addField("**Commands Syntax:**", "\n`Hotel?`")
                .addField("**Description:**", '\nResponds with "Trivago".')
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(hotelInfoEmbed);
            return;
        }
        //If command is /info dad
        if (args[1] === "dad") {
            //Creates embed
            let dadInfoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Dad")
                .addField("**Commands Syntax:**", "\n`I'm [message]`")
                .addField("**Description:**", '\nResponds with "Hi [message], I\'m Dad!".')
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(dadInfoEmbed);
            return;
        }
        //If command is /info server
        if (args[1] === "server") {
            //Creates embed
            let serverEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle(`${message.guild.name}`)
                .setThumbnail(`${message.guild.iconURL()}`)
                .addField("Server ID: ", `\n${message.guild.id}`)
                .addField("Server owner: ", "<@" + `${message.guild.owner.id}` + ">", true)
                .addField("Server members: ", `\n${message.guild.memberCount}`, true)
                .addField("Verification Level: ", `\n${message.guild.verificationLevel}`, true)
                .addField("Server boosts: ", `\n${message.guild.premiumSubscriptionCount}`, true)
                .addField("Verified: ", `\n${message.guild.verified}`, true)
                .addField("Region: ", `\n${message.guild.region}`, true)
                .addField("Server created on: ", `\n${message.guild.createdAt.toDateString()}`)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(serverEmbed);
            return;
        }
        //If commands is /info user
        if (args[1] === "user") {
            const taggedUser = message.mentions.users.first();

            if (!taggedUser) {
                let invalidMemberEmbed = new Discord.MessageEmbed()
                    .setColor("ff0000")
                    .setTitle("ERROR")
                    .addField("**Invalid user ID**", "The user ID you provided was not valid!")
                    .addField("**Syntax**", "Please do `/info user [tag]`")
                    .setFooter("Please be sure to report any bugs!");
                message.channel.send(invalidMemberEmbed);
                return;
            }
            if (taggedUser) {
                if (taggedUser.presence.status === "online") {
                    userStatus = "Online"
                };
                if (taggedUser.presence.status === "idle") {
                    userStatus = "Idle"
                };
                if (taggedUser.presence.status === "dnd") {
                    userStatus = "Do Not Disturb"
                };
                if (taggedUser.presence.status === "offline") {
                    userStatus = "Offline"
                };
                let memberEmbed = new Discord.MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(`${taggedUser.username}`)
                    .setThumbnail(`${taggedUser.avatarURL()}`)
                    .setFooter("Please be sure to report any bugs!")

                    .addField(`User ID:`, `\n${taggedUser.id}`)
                    .addField(`Tag:`, `\n${taggedUser.tag}`, true)
                    .addField(`Status`, `\n${userStatus}`, true)
                    .addField(`Display Name`, `\n${taggedUser}`, true)
                    .addField(`Avatar URL:`, `\n${taggedUser.avatarURL()}`)
                    .addField(`Registered on:`, `\n${taggedUser.createdAt.toDateString()}`);
                //Sends embed
                message.channel.send(memberEmbed);
                return;
            }
        }
        //If command is /info commands
        if (args[1] === "commands") {
            //Creates embed
            let commandsEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Commands")
                .addField("Info Commands: ", "\n`/info` `/ping`", true)
                .addField("Utility Commands: ", "\n`/poll` `/pin` `/quote` `/coinflip` `/dice`", true)
                .addField("Server Commands: ", "\n`Coming soon!`", true)
                .addField("Moderation Commands: ", "\n`/kick` `/ban` `/unban`", true)
                .addField("Config Commands: ", "\n`Coming soon!`", true)
                .addField("Fun Commands: ", "\n`/say` `/selfie`", true)
                .addField("Image Commands: ", "\n`/dank` `/cursed` `/blursed`", true)
                .addField("Random Commands: ", "\n`Coming soon!`", true)
                .addField("XP Commands: ", "\n`Coming soon!`", true)
                .addField("Currency Commands: ", "\n`Coming soon!`", true)
                .addField("Music Commands: ", "\n`Coming soon!`", true)
                .addField("Auto Commands: ", "\n`Creeper` `Hotel?` `Dad`", true)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(commandsEmbed);
            return;
        }
        //If command is /info version
        if (args[1] === "version") {
            //Creates variables for the bot version and the last time it was updated from the config file
            let botversion = (botinfo.version);
            let botupdated = (botinfo.updatedLast);
            //Creates embed
            let versionEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Version")
                .addField("Bot Version :", `\n${botversion}`)
                .addField("Last Updated: ", `\n${botupdated}`)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(versionEmbed);
            return;
            //If the command isn't valid
        } else {
            //If the arguement is invalid
            if (args[1]) {
                errMsg1 = '**Invalid arguement!**';
                errMsg2 = `"${args[1]}" is an invalid arguement!`;
            }
            //If there is no arguement
            if (!args[1]) {
                errMsg1 = "**Missing arguement!**";
                errMsg2 = "Please include an arguement into the command!";
            }
            //Creates embed
            let errEmbed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("ERROR")
                .addField(`${errMsg1}`, `\n${errMsg2}`)
                .setFooter("Valid arguements are ping, poll, pin, kick, ban, unban, say, selfie, quote, dank, blursed, cursed, creeper, hotel, dad, coinflip, dice, server, user, commands, version.");
            //Sends embed
            message.channel.send(errEmbed);
        }
    }
}