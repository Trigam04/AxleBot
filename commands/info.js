const {
    prefix,
    token,
    activity,
    botinfo
} = require('../config/config.json');
const dynamicResponses = require('../functions/dynamicResponses.js');

module.exports = {
    name: "Info",
    description: "Provides info on a large amount of things so you can add to your... *large* intellect.",
    category: "Info",
    aliases: ["Help", "About"],
    syntax: "/info [valid arguement]",
    execute(bot, message, args, Discord) {

        //Get bot's commands
        var commandList = bot.commands.array();

        //If missing arguement
        if (!args[0]) {
            let errEmbed = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setColor("RED")
                .addFields({
                    name: "Missing Argument",
                    value: "Please specify a valid argument!"
                })
                .setFooter("Valid arguments: Commands, [Command], User, Channel, Server, Stats");
            return message.channel.send(errEmbed);
        };

        //                       --| /info commands |--
        if (args[0].toLowerCase() == "commands") {
            //                  --| Initialize things |--
            //Command embed page
            var page = 1;
            //                   --| Command arrays |--
            //Info commands
            var infoCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Info") {
                    infoCmd.push(cmd);
                };
            });
            //Moderation commands
            var modCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Moderation") {
                    modCmd.push(cmd);
                };
            });
            //Utility commands
            var utilCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Utility") {
                    utilCmd.push(cmd);
                };
            });
            //Fun commands
            var funCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Fun") {
                    funCmd.push(cmd);
                };
            });
            //Image commands
            var imgCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Image") {
                    imgCmd.push(cmd);
                };
            });
            //RNG commands
            var rngCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "RNG") {
                    rngCmd.push(cmd);
                };
            });
            //Config commands
            var confgCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Config") {
                    confgCmd.push(cmd);
                };
            });
            //Server commands
            var servCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Server") {
                    servCmd.push(cmd);
                };
            });
            //XP commands
            var xpCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "XP") {
                    xpCmd.push(cmd);
                };
            });
            //Currency commands
            var crncyCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Currency") {
                    crncyCmd.push(cmd);
                };
            });
            //Music commands
            var musicCmd = []
            commandList.forEach(cmd => {
                if (cmd.category == "Music") {
                    musicCmd.push(cmd);
                };
            });
            //Auto commands
            var autoCmd = []
            //Create auto command array (because they aren't module exports and can't be tracked)
            var autoCmdList = [{
                    name: 'Dad',
                    description: `"Hi Hungry, I'm Dad!"`,
                    category: "Auto",
                    aliases: [],
                    syntax: "I'm [message]"
                },
                {
                    name: 'Creeper',
                    description: `"Awww man"`,
                    category: "Auto",
                    aliases: [],
                    syntax: "Creeper"
                },
                {
                    name: 'Hotel',
                    description: `"Trivago"`,
                    category: "Auto",
                    aliases: [],
                    syntax: "Hotel"
                }
            ];
            autoCmdList.forEach(cmd => {
                autoCmd.push(cmd)
            });
            //                        --| Embed |--
            //Create commands embed
            let CmdEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Info Commands")
                .setFooter(`(Page ${page}/12)`)
            infoCmd.forEach(infoCmds => {
                CmdEmbed.addField(infoCmds.name, infoCmds.description, true)
            });
            //Filter
            const filter = (reaction, user) => {
                return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            //Sends command embed
            message.channel.send(CmdEmbed).then(msg => {
                //                  --| Reaction collector |--
                //React to the message
                msg.react('⬅️');
                msg.react('➡️');
                //Create reaction collector
                const collector = msg.createReactionCollector(filter, {
                    time: 300000
                });
                //Start reaction collector
                collector.on('collect', (reaction, user) => {
                    //If the reactor isn't the author
                    if (!reaction.user == message.author)
                        return;
                    //If back arrow
                    if (reaction.emoji.name == '⬅️') {
                        //Remove author's reaction
                        msg.reactions.resolve('⬅️').users.remove(message.author)
                        //If the page is greater than one (so you can't scroll into negative pages)
                        if (page > 1) {
                            //Subtract the page by one
                            page--;
                            //Empty command embed fields
                            CmdEmbed.fields = [];
                            //Show different commands depending on the page
                            switch (page) {
                                //If page 1
                                case 1:
                                    //Set title
                                    CmdEmbed.setTitle("Info Commands");
                                    //Add fields
                                    infoCmd.forEach(infoCmds => {
                                        CmdEmbed.addField(infoCmds.name, infoCmds.description, true);
                                    });
                                    break;
                                    //If page 2
                                case 2:
                                    //Set title
                                    CmdEmbed.setTitle("Moderation Commands");
                                    //Add fields
                                    modCmd.forEach(modCmds => {
                                        CmdEmbed.addField(modCmds.name, modCmds.description, true);
                                    });
                                    break;
                                    //If page 3
                                case 3:
                                    //Set title
                                    CmdEmbed.setTitle("Utility Commands");
                                    //Add fields
                                    utilCmd.forEach(utilCmds => {
                                        CmdEmbed.addField(utilCmds.name, utilCmds.description, true)
                                    });
                                    break;
                                    //If page 4
                                case 4:
                                    //Set title
                                    CmdEmbed.setTitle("Fun Commands");
                                    //Add fields
                                    funCmd.forEach(funCmds => {
                                        CmdEmbed.addField(funCmds.name, funCmds.description, true)
                                    });
                                    break;
                                    //If page 5
                                case 5:
                                    //Set title
                                    CmdEmbed.setTitle("Image Commands");
                                    //Add fields
                                    imgCmd.forEach(imgCmds => {
                                        CmdEmbed.addField(imgCmds.name, imgCmds.description, true)
                                    });
                                    break;
                                    //If page 6
                                case 6:
                                    //Set title
                                    CmdEmbed.setTitle("RNG Commands");
                                    //Add fields
                                    rngCmd.forEach(rngCmds => {
                                        CmdEmbed.addField(rngCmds.name, rngCmds.description, true)
                                    });
                                    break;
                                    //If page 7
                                case 7:
                                    //Set title
                                    CmdEmbed.setTitle("Config Commands");
                                    //Add fields
                                    confgCmd.forEach(confgCmds => {
                                        CmdEmbed.addField(confgCmds.name, confgCmds.description, true)
                                    });
                                    break;
                                    //If page 8
                                case 8:
                                    //Set title
                                    CmdEmbed.setTitle("Server Commands");
                                    //Add fields
                                    servCmd.forEach(servCmds => {
                                        CmdEmbed.addField(servCmds.name, servCmds.description, true)
                                    });
                                    break;
                                    //If page 9
                                case 9:
                                    //Set title
                                    CmdEmbed.setTitle("XP Commands");
                                    //Add fields
                                    xpCmd.forEach(xpCmds => {
                                        CmdEmbed.addField(xpCmds.name, xpCmds.description, true)
                                    });
                                    break;
                                    //If page 10
                                case 10:
                                    //Set title
                                    CmdEmbed.setTitle("Currency Commands");
                                    //Add fields
                                    crncyCmd.forEach(crncyCmds => {
                                        CmdEmbed.addField(crncyCmds.name, crncyCmds.description, true)
                                    });
                                    break;
                                    //If page 11
                                case 11:
                                    //Set title
                                    CmdEmbed.setTitle("Music Commands");
                                    //Add fields
                                    musicCmd.forEach(musicCmds => {
                                        CmdEmbed.addField(musicCmds.name, musicCmds.description, true)
                                    });
                                    break;
                            };
                            //Set footer with page number
                            CmdEmbed.setFooter(`(Page ${page}/12)`);
                            //Edit message with updated embed
                            msg.edit(CmdEmbed)
                        };
                    };
                    //If thumbs down
                    if (reaction.emoji.name == '➡️') {
                        //Remove author's reaction
                        msg.reactions.resolve('➡️').users.remove(message.author)
                        //If page is less than 12 (so you can't scroll above 12 pages)
                        if (page < 12) {
                            //Add the page by one
                            page++;
                            //Empty command embed fields
                            CmdEmbed.fields = [];
                            //Show different commands depending on the page
                            switch (page) {
                                //If page 2
                                case 2:
                                    //Set title
                                    CmdEmbed.setTitle("Moderation Commands");
                                    //Add fields
                                    modCmd.forEach(modCmds => {
                                        CmdEmbed.addField(modCmds.name, modCmds.description, true);
                                    });
                                    break;
                                    //If page 3
                                case 3:
                                    //Set title
                                    CmdEmbed.setTitle("Utility Commands");
                                    //Add fields
                                    utilCmd.forEach(utilCmds => {
                                        CmdEmbed.addField(utilCmds.name, utilCmds.description, true)
                                    });
                                    break;
                                    //If page 4
                                case 4:
                                    //Set title
                                    CmdEmbed.setTitle("Fun Commands");
                                    //Add fields
                                    funCmd.forEach(funCmds => {
                                        CmdEmbed.addField(funCmds.name, funCmds.description, true)
                                    });
                                    break;
                                    //If page 5
                                case 5:
                                    //Set title
                                    CmdEmbed.setTitle("Image Commands");
                                    //Add fields
                                    imgCmd.forEach(imgCmds => {
                                        CmdEmbed.addField(imgCmds.name, imgCmds.description, true)
                                    });
                                    break;
                                    //If page 6
                                case 6:
                                    //Set title
                                    CmdEmbed.setTitle("RNG Commands");
                                    //Add fields
                                    rngCmd.forEach(rngCmds => {
                                        CmdEmbed.addField(rngCmds.name, rngCmds.description, true)
                                    });
                                    break;
                                    //If page 7
                                case 7:
                                    //Set title
                                    CmdEmbed.setTitle("Config Commands");
                                    //Add fields
                                    confgCmd.forEach(confgCmds => {
                                        CmdEmbed.addField(confgCmds.name, confgCmds.description, true)
                                    });
                                    break;
                                    //If page 8
                                case 8:
                                    //Set title
                                    CmdEmbed.setTitle("Server Commands");
                                    //Add fields
                                    servCmd.forEach(servCmds => {
                                        CmdEmbed.addField(servCmds.name, servCmds.description, true)
                                    });
                                    break;
                                    //If page 9
                                case 9:
                                    //Set title
                                    CmdEmbed.setTitle("XP Commands");
                                    //Add fields
                                    xpCmd.forEach(xpCmds => {
                                        CmdEmbed.addField(xpCmds.name, xpCmds.description, true)
                                    });
                                    break;
                                    //If page 10
                                case 10:
                                    //Set title
                                    CmdEmbed.setTitle("Currency Commands");
                                    //Add fields
                                    crncyCmd.forEach(crncyCmds => {
                                        CmdEmbed.addField(crncyCmds.name, crncyCmds.description, true)
                                    });
                                    break;
                                    //If page 11
                                case 11:
                                    //Set title
                                    CmdEmbed.setTitle("Music Commands");
                                    //Add fields
                                    musicCmd.forEach(musicCmds => {
                                        CmdEmbed.addField(musicCmds.name, musicCmds.description, true)
                                    });
                                    break;
                                    //If page 12
                                case 12:
                                    //Set title
                                    CmdEmbed.setTitle("Auto Commands");
                                    //Add fields
                                    autoCmd.forEach(autoCmds => {
                                        CmdEmbed.addField(autoCmds.name, autoCmds.description, true)
                                    });
                                    break;
                            };
                            //Set footer with page number
                            CmdEmbed.setFooter(`(Page ${page}/12)`);
                            //Edit message with updated embed
                            msg.edit(CmdEmbed)
                        };
                    };
                });

                //After 5 minutes
                collector.on('end', collected => {
                    //Remove all reactions
                    msg.reactions.removeAll();
                });
            });
        };

        //                       --| /info [user] |--
        //Tagged user
        var user = message.mentions.users.first();
        //Get user ID from tag
        var userId = args[0].replace('<@', '').replace('!', '').replace('>', '');
        //Variable for whether or not to run this command
        var runMember = true;
        //If there isn't a tagged user
        //Search for username
        if (!user) {
            try {
                //Replace underscores with spaces
                var username = args[0].replace(/_/g, ' ');
                //Search for username
                var user = bot.users.cache.find(user => user.username == username);
            } catch (error) {
                console.log(error)
            }
        };
        //Search for nickname
        if (!user) {
            try {
                //Replace underscores with spaces
                var nickname = args[0].replace(/_/g, ' ');
                //Search for username
                var user = message.guild.members.cache.find(user => user.nickname == nickname);
            } catch (error) {
                console.log(error)
            }
        };
        //If there still isn't a user found
        if (!user) {
            //Don't run the user info command
            runMember = false;
        };
        //Run the user info command
        if (runMember == true) {
            //If tagged user is a user ID, username is a user, or nickname is a user
            if (userId == user.id || username == user.username || nickname == user.nickname) {
                //Changes argument 1 to "user" (so it doesn't send error embed)
                args[0] = "user";
                //Get server member from user ID
                var guildMember = message.guild.members.cache.get(user.id);
                //User status
                var status = guildMember.user.presence.status;
                //User is bot?
                var isBot = guildMember.user.bot;
                //User nickname
                var nick = guildMember.user.username;
                //Create role list arrays (that will appear empty in the embed)
                //Main role list
                var roleList = ["** **"];
                //Role list for field 1
                var roleList1 = ["** **"];
                //Role list for field 2
                var roleList2 = ["** **"];
                //Role list for field 3
                var roleList3 = ["** **"];
                //Roles that the user has
                let roles = guildMember.roles.member._roles;
                //Member permissions
                let perms = guildMember.permissions.bitfield;
                //Put the roles in the role list array
                roles.forEach(role => {
                    roleList.push(`<@&${role}>`)
                });
                //If there's roles in the role list
                if (roleList.length > 1) {
                    //Delete the 'empty' part
                    roleList = roleList.filter(i => i !== '** **');
                    //Fill role list 1 with roles 1-6
                    roleList1 = [roleList[0], roleList[1], roleList[2], roleList[3], roleList[4], roleList[5]]
                };
                //If there's over 6 roles
                if (roleList.length > 6) {
                    //Fill role list 2 with roles 7-12
                    roleList2 = [roleList[6], roleList[7], roleList[8], roleList[9], roleList[10], roleList[11]]
                };
                //If there's over 12 roles
                if (roleList.length > 12) {
                    //Fill role list 3 with roles 13-18
                    roleList3 = [roleList[12], roleList[13], roleList[14], roleList[15], roleList[16], roleList[17]]
                };
                //If there's over 17 roles
                if (roleList.length > 17) {
                    //Replace the final role in role list 3 with a counter of how many extra roles there are
                    roleList3[5] = `and **${roleList.length - 16}** more`;
                };
                //If the member has a nickname
                if (guildMember.nickname)
                    //Set the nickname to the member's nickname
                    nick = guildMember.nickname;
                //Status
                switch (status) {
                    //If online
                    case 'online':
                        //Replace status with capitalized online
                        status = 'Online'
                        break;
                        //If idle
                    case 'idle':
                        //Replace status with capitalized online
                        status = 'Idle'
                        break;
                        //If do not disturb
                    case 'dnd':
                        //Replace status with capitalized and expanded do not disturb
                        status = 'Do Not Disturb'
                        break;
                        //If offline
                    case 'offline':
                        //Replace status with capitalized offline
                        status = "Offline"
                        break;
                };
                //Is user a bot
                switch (isBot) {
                    //If false
                    case false:
                        //Replace with capitalized false
                        isBot = 'False'
                        break;
                        //If true
                    case true:
                        //Replace with capitalized true
                        isBot = 'True'
                        break;
                };
                //Member info embed
                let memberInfoEmbed = new Discord.MessageEmbed()
                    //Embed title
                    .setTitle(guildMember.user.username)
                    //Embed color (member color)
                    .setColor(guildMember.displayHexColor)
                    //Thumbnail (member avatar)
                    .setThumbnail(guildMember.user.avatarURL())
                    .addFields({
                        //User ID
                        name: 'User ID',
                        value: guildMember.user.id
                    }, {
                        //Tag
                        name: 'Tag',
                        //(Adds member username to member discriminator)
                        value: `${guildMember.user.username}#${guildMember.user.discriminator}`,
                        inline: true
                    }, {
                        //Nickname
                        name: 'Nickname',
                        value: nick,
                        inline: true
                    }, {
                        //Status
                        name: 'Status',
                        value: status,
                        inline: true
                    }, {
                        //Is bot
                        name: 'Bot?',
                        value: isBot,
                        inline: true
                    }, {
                        //Permissions
                        name: 'Permissions',
                        //(Puts permission bitfield into a permission calculator)
                        value: `[${perms}](https://discordapi.com/permissions.html#${perms})`,
                        inline: true
                    }, {
                        //Color
                        name: 'Color',
                        //(Member display color)
                        value: guildMember.displayHexColor,
                        inline: true
                    }, {
                        //Avatar URL
                        name: 'Avatar URL',
                        value: guildMember.user.avatarURL()
                    }, {
                        //Roles 1
                        name: `Roles (${roleList.length}/${message.guild.roles.cache.size})`,
                        value: roleList1,
                        inline: true
                    }, {
                        //Roles 2
                        name: `** **`,
                        value: roleList2,
                        inline: true
                    }, {
                        //Roles 3
                        name: `** **`,
                        value: roleList3,
                        inline: true
                    }, {
                        //Joined server timestamp
                        name: 'Joined Server On',
                        value: guildMember.joinedAt.toDateString(),
                        inline: true
                    }, {
                        //Account created timestamp
                        name: 'Created Account On',
                        value: guildMember.user.createdAt.toDateString(),
                        inline: true
                    })
                    //Footer
                    .setFooter("Please be sure to use /bugreport to report any bugs");
                //Sends embed
                return message.channel.send(memberInfoEmbed);
            };
        };

        //                         --| /info server |--   
        if (args[0].toLowerCase() == "server") {
            //Server the message was sent in
            var guild = message.guild;
            //Server region
            var region = guild.region;
            //Replaces all regions with a visually pleasing version
            switch (region) {
                case 'us-east':
                    region = 'US East'
                    break;
                case 'us-central':
                    region = 'US Central'
                    break;
                case 'us-west':
                    region = 'US West'
                    break;
                case 'us-south':
                    region = 'US South'
                    break;
                case 'brazil':
                    region = 'Brazil'
                    break;
                case 'europe':
                    region = 'Europe'
                    break;
                case 'hongkong':
                    region = 'Hong Kong'
                    break;
                case 'india':
                    region = 'India'
                    break;
                case 'japan':
                    region = 'Japan'
                    break;
                case 'russia':
                    region = 'Soviet Union'
                    break;
                case 'singapore':
                    region = 'Singapore'
                    break;
                case 'southafrica':
                    region = 'South Africa'
                    break;
                case 'sydney':
                    region = 'Sydney'
                    break;
            };
            //Verification level
            var verificationLevel = guild.verificationLevel;
            //Replaces verification levels with visually pleasing versions and explains them
            switch (verificationLevel) {
                case 'NONE':
                    verificationLevel = 'Unrestricted'
                    break;
                case 'LOW':
                    verificationLevel = 'Requires verified email'
                    break;
                case 'MEDIUM':
                    verificationLevel = 'Account must be 5 minutes old'
                    break;
                case 'HIGH':
                    verificationLevel = 'Must be server member for 10 minutes'
                    break;
                case 'VERY_HIGH':
                    verificationLevel = 'Requires verifired phone'
                    break;
            };
            //Content filter
            var contentFilter = guild.explicitContentFilter;
            //Replaces content filters with visually pleasing versions and explains them
            switch (contentFilter) {
                case 'NO_MEMBERS':
                    contentFilter = `Don't scan any members`
                    break;
                case 'SOME_MEMBERS':
                    contentFilter = 'Only scan role-less members'
                    break;
                case 'ALL_MEMBERS':
                    contentFilter = 'Scan all members'
                    break;
            };
            //Default notification setting
            var notifs = guild.defaultMessageNotifications;
            //Replaces notification settings with visually pleasing versions
            switch (notifs) {
                case 'ALL':
                    notifs = 'All messages'
                    break;
                case 'MENTIONS':
                    notifs = 'Only mentions'
                    break;
            };
            //Creates array from server channels
            var channels = guild.channels.cache.array();
            //Filters out text channels
            textChannels = channels.filter(c => c.type === 'text');
            //Filters out voice channels
            voiceChannels = channels.filter(c => c.type === 'voice');
            //Filters out annoucement channels
            newsChannels = channels.filter(c => c.type === 'news');
            //Gets server members
            var guildMembers = guild.members.cache;
            //Filters out bot members
            var botMembers = guildMembers.filter(m => m.user.bot === true);
            //Creates server info embed
            let servInfoEmbed = new Discord.MessageEmbed()
                .setTitle(guild.name)
                .setColor('#7289d9')
                .setThumbnail(guild.iconURL())
                .addFields({
                    name: 'Server ID',
                    value: guild.id
                }, {
                    name: 'Server Region',
                    value: region,
                    inline: true
                }, {
                    name: 'Member Count',
                    value: guild.memberCount,
                    inline: true
                }, {
                    name: 'Bot Count',
                    value: botMembers.size,
                    inline: true
                }, {
                    name: 'Verification Level',
                    value: verificationLevel,
                    inline: true
                }, {
                    name: 'NSFW Content Filter',
                    value: contentFilter,
                    inline: true
                }, {
                    name: 'Default Notifications',
                    value: notifs,
                    inline: true
                }, {
                    name: 'Text Channels',
                    value: textChannels.length,
                    inline: true
                }, {
                    name: 'Voice Channels',
                    value: voiceChannels.length,
                    inline: true
                }, {
                    name: 'News Channels',
                    value: newsChannels.length,
                    inline: true
                }, {
                    name: 'Roles',
                    value: guild.roles.cache.size,
                    inline: true
                }, {
                    name: 'Created On',
                    value: guild.createdAt.toDateString(),
                    inline: true
                }, {
                    name: 'Emojis',
                    value: message.guild.emojis.cache.size,
                    inline: true
                }, {
                    name: 'Server Owner',
                    value: `<@${guild.ownerID}>`,
                    inline: true
                }, {
                    name: 'Nitro Boosts',
                    value: guild.premiumSubscriptionCount,
                    inline: true
                }, {
                    name: 'Nitro Boost Tier',
                    value: guild.premiumTier,
                    inline: true
                }, {
                    name: 'Icon URL',
                    value: guild.iconURL()
                });
            //Sends embed
            return message.channel.send(servInfoEmbed);
        };

        //                        --| /info channel |--   
        if (args[0].toLowerCase() == "channel") {
            //Channel the command was ran in
            let channel = message.channel;
            //Replace channel type with a better looking type
            switch (channel.type) {
                case 'text':
                    channel.type = 'Text Channel'
                    break;
                case 'voice':
                    channel.type = 'Voice Channel'
                    break;
                case 'news':
                    channel.type = 'Announcement Channel'
                    break;
            };
            //Slowmode
            let slowmode = channel.rateLimitPerUser;
            //Display slowmode empty by default
            var displaySlowmode = '';
            //If less than 60 seconds
            if (slowmode < 60) {
                displaySlowmode = slowmode + 's';
            };
            //If less than 1 hour AND more than 59 seconds
            if (slowmode > 59 && slowmode / 60 < 60) {
                displaySlowmode = slowmode / 60 + 'm';
            };
            //If more than 1 hour
            if (slowmode / 60 > 59) {
                displaySlowmode = slowmode / 60 / 60 + 'h';
            };
            //Channel info embed
            let channelInfoEmbed = new Discord.MessageEmbed()
                .setTitle(channel.name)
                .setColor('#7289d9')
                .addFields({
                    name: 'ID',
                    value: channel.id,
                }, {
                    name: 'Topic',
                    value: channel.topic
                }, {
                    name: 'Type',
                    value: channel.type,
                    inline: true
                }, {
                    name: 'Slowmode',
                    value: displaySlowmode,
                    inline: true
                }, {
                    name: 'Last Pin',
                    value: channel.lastPinTimestamp,
                    inline: true
                });
            return channel.send(channelInfoEmbed);
        }

        //                       --| /info [command] |--
        commandList.forEach(command => {
            if (args[0].toLowerCase() == command.name.toLowerCase()) {
                let commandInfoEmbed = new Discord.MessageEmbed()
                    .setTitle(command.name)
                    .setColor("#7289d9")
                    .setDescription(command.description)
                    .addFields({
                        name: "Category",
                        value: command.category,
                        inline: true
                    }, {
                        name: "Syntax",
                        value: command.syntax,
                        inline: true
                    }, {
                        name: "Aliases",
                        value: command.aliases,
                        inline: true
                    })
                    .setFooter("Please be sure to use /bugreport to report any bugs!");
                return message.channel.send(commandInfoEmbed);
            };
        });

        //                       --| /info responses |--
        if (args[0].toLowerCase() == "responses") {
            //                  --| Initialize things |--
            //Command embed page
            var page = 1;
            //                        --| Embed |--
            //Create response embed
            let DynEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Author Responses")
                .setFooter(`(Page ${page}/3)`)
            //Add fields
            DynEmbed.addFields({
                name: '{username}',
                value: "Returns author's username",
                inline: true
            }, {
                name: '{nickname}',
                value: "Returns author's nickname",
                inline: true
            }, {
                name: '{discrim}',
                value: "Returns author's discriminator",
                inline: true
            }, {
                name: '{tag}',
                value: "Returns author's tag",
                inline: true
            }, {
                name: '{id}',
                value: "Returns author's user ID",
                inline: true
            }, {
                name: '{@}',
                value: "Pings the author",
                inline: true
            }, {
                name: '{timestamp}',
                value: "Returns the time the author's account was made",
                inline: true
            }, {
                name: '{color}',
                value: "Returns the author's display color",
                inline: true
            }, {
                name: '{roles}',
                value: "Returns the amount of roles the author has",
                inline: true
            }, {
                name: '{status}',
                value: "Returns author's status",
                inline: true
            })
            //Filter
            const filter = (reaction, user) => {
                return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            //Sends response embed
            message.channel.send(DynEmbed).then(msg => {
                //                  --| Reaction collector |--
                //React to the message
                msg.react('⬅️');
                msg.react('➡️');
                //Create reaction collector
                const collector = msg.createReactionCollector(filter, {
                    time: 300000
                });
                //Start reaction collector
                collector.on('collect', (reaction, user) => {
                    //If the reactor isn't the author
                    if (!reaction.user == message.author)
                        return;
                    //If left arrow
                    if (reaction.emoji.name == '⬅️') {
                        //Remove author's reaction
                        msg.reactions.resolve('⬅️').users.remove(message.author)
                        //If the page is greater than one (so you can't scroll into negative pages)
                        if (page > 1) {
                            //Subtract the page by one
                            page--;
                            //Empty response embed fields
                            DynEmbed.fields = [];
                            //Show different responses depending on the page
                            switch (page) {
                                //If page 1
                                case 1:
                                    //Set title
                                    DynEmbed.setTitle("Author Responses");
                                    //Add fields
                                    DynEmbed.addFields({
                                        name: '{username}',
                                        value: "Returns author's username",
                                        inline: true
                                    }, {
                                        name: '{nickname}',
                                        value: "Returns author's nickname",
                                        inline: true
                                    }, {
                                        name: '{discrim}',
                                        value: "Returns author's discriminator",
                                        inline: true
                                    }, {
                                        name: '{tag}',
                                        value: "Returns author's tag",
                                        inline: true
                                    }, {
                                        name: '{id}',
                                        value: "Returns author's user ID",
                                        inline: true
                                    }, {
                                        name: '{@}',
                                        value: "Pings the author",
                                        inline: true
                                    }, {
                                        name: '{timestamp}',
                                        value: "Returns the time the author's account was made",
                                        inline: true
                                    }, {
                                        name: '{color}',
                                        value: "Returns the author's display color",
                                        inline: true
                                    }, {
                                        name: '{roles}',
                                        value: "Returns the amount of roles the author has",
                                        inline: true
                                    }, {
                                        name: '{status}',
                                        value: "Returns author's status",
                                        inline: true
                                    })
                                    break;
                                    //If page 2
                                case 2:
                                    //Set title
                                    DynEmbed.setTitle("Server Responses");
                                    //Add fields
                                    DynEmbed.addFields({
                                        name: '{server|name}',
                                        value: "Returns the server's name",
                                        inline: true
                                    }, {
                                        name: '{server|id}',
                                        value: "Returns the server's ID",
                                        inline: true
                                    }, {
                                        name: '{server|region}',
                                        value: "Returns the server's region",
                                        inline: true
                                    }, {
                                        name: '{server|members}',
                                        value: "Returns the amount of members in the server (bots included)",
                                        inline: true
                                    }, {
                                        name: '{server|bots}',
                                        value: "Returns the amount of bots in the server",
                                        inline: true
                                    }, {
                                        name: '{server|emojis}',
                                        value: "Returns the amount of emojis in the server",
                                        inline: true
                                    }, {
                                        name: '{server|roles}',
                                        value: "Returns the server's ID",
                                        inline: true
                                    }, {
                                        name: '{server|verificationLevel}',
                                        value: "Returns the server's verification level setting",
                                        inline: true
                                    }, {
                                        name: '{server|contentFilter}',
                                        value: "Returns the server's content filter setting",
                                        inline: true
                                    }, {
                                        name: '{server|notifications}',
                                        value: "Returns the server's default notification setting",
                                        inline: true
                                    }, {
                                        name: '{server|channels}',
                                        value: "Returns the amount of channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|text}',
                                        value: "Returns the amount of text channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|voice}',
                                        value: "Returns the amount of voice channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|news}',
                                        value: "Returns the amount of news (followable) channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|timestamp}',
                                        value: "Returns the time the server was made",
                                        inline: true
                                    }, {
                                        name: '{server|owner}',
                                        value: "Returns the owner of the server",
                                        inline: true
                                    }, {
                                        name: '{server|boost|count}',
                                        value: "Returns the amount of nitro boosts the server has",
                                        inline: true
                                    }, {
                                        name: '{server|boost|tier}',
                                        value: "Returns the nitro tier of the server",
                                        inline: true
                                    }, {
                                        name: '{server|icon}',
                                        value: "Returns the server's icon",
                                        inline: true
                                    });
                                    break;
                            };
                            //Set footer with page number
                            DynEmbed.setFooter(`(Page ${page}/3)`);
                            //Edit message with updated embed
                            msg.edit(DynEmbed)
                        };
                    };
                    //If right arrow
                    if (reaction.emoji.name == '➡️') {
                        //Remove author's reaction
                        msg.reactions.resolve('➡️').users.remove(message.author)
                        //If page is less than 3 (so you can't scroll above 3 pages)
                        if (page < 3) {
                            //Add the page by one
                            page++;
                            //Empty response embed fields
                            DynEmbed.fields = [];
                            //Show different responses depending on the page
                            switch (page) {
                                //If page 2
                                case 2:
                                    //Set title
                                    DynEmbed.setTitle("Server Responses");
                                    //Add fields
                                    DynEmbed.addFields({
                                        name: '{server|name}',
                                        value: "Returns the server's name",
                                        inline: true
                                    }, {
                                        name: '{server|id}',
                                        value: "Returns the server's ID",
                                        inline: true
                                    }, {
                                        name: '{server|region}',
                                        value: "Returns the server's region",
                                        inline: true
                                    }, {
                                        name: '{server|members}',
                                        value: "Returns the amount of members in the server (bots included)",
                                        inline: true
                                    }, {
                                        name: '{server|bots}',
                                        value: "Returns the amount of bots in the server",
                                        inline: true
                                    }, {
                                        name: '{server|emojis}',
                                        value: "Returns the amount of emojis in the server",
                                        inline: true
                                    }, {
                                        name: '{server|roles}',
                                        value: "Returns the server's ID",
                                        inline: true
                                    }, {
                                        name: '{server|verificationLevel}',
                                        value: "Returns the server's verification level setting",
                                        inline: true
                                    }, {
                                        name: '{server|contentFilter}',
                                        value: "Returns the server's content filter setting",
                                        inline: true
                                    }, {
                                        name: '{server|notifications}',
                                        value: "Returns the server's default notification setting",
                                        inline: true
                                    }, {
                                        name: '{server|channels}',
                                        value: "Returns the amount of channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|text}',
                                        value: "Returns the amount of text channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|voice}',
                                        value: "Returns the amount of voice channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|channels|news}',
                                        value: "Returns the amount of news (followable) channels in the server",
                                        inline: true
                                    }, {
                                        name: '{server|timestamp}',
                                        value: "Returns the time the server was made",
                                        inline: true
                                    }, {
                                        name: '{server|owner}',
                                        value: "Returns the owner of the server",
                                        inline: true
                                    }, {
                                        name: '{server|boost|count}',
                                        value: "Returns the amount of nitro boosts the server has",
                                        inline: true
                                    }, {
                                        name: '{server|boost|tier}',
                                        value: "Returns the nitro tier of the server",
                                        inline: true
                                    }, {
                                        name: '{server|icon}',
                                        value: "Returns the server's icon",
                                        inline: true
                                    });
                                    break;
                                    //If page 3
                                case 3:
                                    //Set title
                                    DynEmbed.setTitle("Channel Responses");
                                    //Add fields
                                    DynEmbed.addFields({
                                        name: '{channel|name}',
                                        value: "Returns the channel's name",
                                        inline: true
                                    }, {
                                        name: '{channel|id}',
                                        value: "Returns the channel's ID",
                                        inline: true
                                    }, {
                                        name: '{channel|topic}',
                                        value: "Returns the channel's topic",
                                        inline: true
                                    }, {
                                        name: '{channel|type}',
                                        value: "Returns the channel's type",
                                        inline: true
                                    }, {
                                        name: '{channel|slowmode}',
                                        value: "Returns the channel's slowmode length",
                                        inline: true
                                    }, {
                                        name: '{channel|pin|last}',
                                        value: "Returns the time since the last message was pinned",
                                        inline: true
                                    }, {
                                        name: '{channel|nsfw}',
                                        value: "Returns whether or not the channel is NSFW",
                                        inline: true
                                    }, {
                                        name: '{channel|category}',
                                        value: "Returns the channel's category",
                                        inline: true
                                    });
                                    break;
                            };
                            //Set footer with page number
                            DynEmbed.setFooter(`(Page ${page}/3)`);
                            //Edit message with updated embed
                            msg.edit(DynEmbed)
                        };
                    };
                });

                //After 5 minutes
                collector.on('end', collected => {
                    //Remove all reactions
                    msg.reactions.removeAll();
                });
            });

            //If invalid arguement
            commandList.forEach(command => {
                var commandName = command.name.toLowerCase();
                if (args[0].toLowerCase() == commandName) {
                    args[0] = "cmd";
                };
            });
            switch (args[0].toLowerCase()) {
                case "commands":
                case "user":
                case "channel":
                case "category":
                case "server":
                case "stats":
                case 'cmd':
                case 'responses':
                    break;

                default:
                    let errEmbed = new Discord.MessageEmbed()
                        .setTitle("ERROR")
                        .setColor("RED")
                        .addFields({
                            name: "Invalid argument!",
                            value: "Please use a valid argument"
                        }, {
                            name: "Valid arguments",
                            value: "Commands, Channel, Category, Server, Stats, [User tag, Username, Nickname], [Command]"
                        })
                        .setFooter("Please be sure to report any bugs with /bugreport!");
                    return message.channel.send(errEmbed);
            };
        }

        //                         --| /info stats |--
        if (args[0].toLowerCase() == "stats") {
            //Creates uptime variables
            let totalSeconds = (bot.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            //Get amount of channels of every server bot is in
            let channels = [];
            bot.guilds.cache.forEach(guild => {
                guild.channels.cache.forEach(channel => {
                    if (channel.type !== "category") {
                        channels.push(channel);
                    }
                })
            });
            //Create stats embed
            let statsEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Bot Stats")
                .setFooter("Please be sure to use /bugreport to report any bugs!")
                .addFields({
                    name: "Uptime",
                    value: `${hours} hours, ${minutes} minutes, ${seconds} seconds`,
                    inline: false
                }, {
                    name: "Servers",
                    value: `${bot.guilds.cache.size}`,
                    inline: true
                }, {
                    name: "Channels",
                    value: `${channels.length}`,
                    inline: true
                }, {
                    name: "Users",
                    value: `${bot.users.cache.size}`,
                    inline: true
                });
            message.channel.send(statsEmbed);
        }

        //                        --| /info [role] |--
        if (args[0].startsWith('<@&')) {
            var role = message.mentions.roles.first();
            if (role.color == 0) {
                embedColor = "#7289d9";
                role.color = "None";
            } else {
                embedColor = role.hexColor;
            };
            if (role.mentionable == true) {
                role.mentionable = "True"
            } else {
                role.mentionable = "False"
            };
            //Create role embed
            let roleEmbed = new Discord.MessageEmbed()
                .setColor(`${embedColor}`)
                .setTitle(`${role.name}`)
                .setFooter("Please be sure to use /bugreport to report any bugs!")
                .addFields({
                    name: "ID",
                    value: role.id,
                    inline: true
                }, {
                    name: "Tag",
                    value: `<@&${role.id}>`,
                    inline: true
                }, {
                    name: "Color",
                    value: role.hexColor,
                    inline: true
                }, {
                    name: "Mentionable",
                    value: role.mentionable,
                    inline: true
                }, {
                    name: "Position",
                    value: `${role.rawPosition} / ${message.guild.roles.cache.size}`,
                    inline: true
                }, {
                    name: "Permissions",
                    value: `[${role.permissions.bitfield}](https://discordapi.com/permissions.html#${role.permissions.bitfield})`,
                    inline: true
                }, {
                    name: "Created",
                    value: `${role.createdAt.toDateString()}`,
                    inline: false
                });
            message.channel.send(roleEmbed);
        }
    }
}