const fetch = require('node-fetch');
const request = require('request');
const parseProf = require('../functions/gd/parseProfileData');

module.exports = {
    name: "GD",
    description: "Exploits RobTop's horrible security to bring you any information from the Geometry Dash servers.",
    category: "Fun",
    aliases: ["Geometrydash"],
    syntax: "/gd [valid arguement]",
    async execute(bot, message, args, Discord) {

        message.channel.send("Command under construction!");
//         switch (args[1]) {
//             //Profile
//             case "profile": {
//                 //Cut to just the account name
//                 const search = message.content.slice(12);
//                 userID = search;
//                 let data = request.post('http://boomlings.com/database/getGJUserInfo20.php', {
//                     form: {
//                         secret: 'Wmfd2893gb7',
//                         targetAccountID: userID,
//                         gameVersion: '21',
//                         binaryVersion: '35'
//                     }
//                 }, function() {
//                     let response = data.response.body;
//                     if (response == "-1") {
//                         return message.channel.send("Invalid ID!")
//                     };
//                     parsedProf = parseProf.execute(response);
//                     console.log(parsedProf);
//                 });
//                 //Get info from GDBrowser API (and parse it to json)
//                 const profile = await fetch(`https://www.gdbrowser.com/api/profile/${search}`).then(response => response.json());

//                 //Set up canvas
//                 const canvas = Canvas.createCanvas(2000, 1200);
//                 const ctx = canvas.getContext('2d');
//                 //Images
//                 const background = await Canvas.loadImage('./images/gd/profile/profile.png');
//                 const profileSheet = await Canvas.loadImage('./images/gd/profile/profile_sheet.png');
//                 //Background
//                 ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//                 //Stats
//                 ctx.drawImage(profileSheet, 0, 0, 100, 100, 340, 236, 100, 100);
//                 ctx.drawImage(profileSheet, 101, 0, 100, 100, 645, 236, 100, 100);
//                 ctx.drawImage(profileSheet, 201, 0, 100, 100, 950, 236, 100, 100);
//                 ctx.drawImage(profileSheet, 301, 0, 100, 100, 1255, 236, 100, 100);
//                 ctx.drawImage(profileSheet, 401, 0, 100, 100, 1560, 236, 100, 100);
//                 //Buffer image
//                 const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');
//                 //Create embed
//                 const profileEmbed = new Discord.MessageEmbed()
//                     .setTitle(parsedProf.username)
//                     .setColor("#7289d9")
//                     .attachFiles(attachment)
//                     .addFields({
//                         name: 'Username',
//                         value: parsedProf.username,
//                         inline: true
//                     }, {
//                         name: 'UserID',
//                         value: parsedProf.userID,
//                         inline: true
//                     }, {
//                         name: 'AccountID',
//                         value: parsedProf.accountID,
//                         inline: true
//                     }, {
//                         name: 'Rank',
//                         value: parsedProf.rank,
//                         inline: true
//                     }, {
//                         name: 'Stars',
//                         value: parsedProf.stars,
//                         inline: true
//                     }, {
//                         name: 'Diamonds',
//                         value: parsedProf.diamonds,
//                         inline: true
//                     }, {
//                         name: 'Secret Coins',
//                         value: parsedProf.coins,
//                         inline: true
//                     }, {
//                         name: 'User Coins',
//                         value: parsedProf.userCoins,
//                         inline: true
//                     }, {
//                         name: 'Demons',
//                         value: parsedProf.demons,
//                         inline: true
//                     }, {
//                         name: 'Creator Points',
//                         value: parsedProf.cp,
//                         inline: true
//                     }, {
//                         name: 'Friend Requests',
//                         value: parsedProf.friendRequests,
//                         inline: true
//                     }, {
//                         name: 'Messages',
//                         value: parsedProf.messages,
//                         inline: true
//                     }, {
//                         name: 'Comment History',
//                         value: parsedProf.commentHistory,
//                         inline: true
//                     }, {
//                         name: 'Moderator',
//                         value: parsedProf.moderator,
//                         inline: true
//                     }, {
//                         name: 'YouTube',
//                         value: `https://www.youtube.com/channel/${parsedProf.youtube}`,
//                         inline: true
//                     }, {
//                         name: 'Twitter',
//                         value: `https://twitter.com/${parsedProf.twitter}`,
//                         inline: true
//                     }, {
//                         name: 'Twitch',
//                         value: `https://www.twitch.tv/${parsedProf.twitch}`,
//                         inline: true
//                     }, {
//                         name: 'Icon',
//                         value: parsedProf.icon,
//                         inline: true
//                     }, {
//                         name: 'Ship',
//                         value: parsedProf.ship,
//                         inline: true
//                     }, {
//                         name: 'Ball',
//                         value: parsedProf.ball,
//                         inline: true
//                     }, {
//                         name: 'UFO',
//                         value: parsedProf.ufo,
//                         inline: true
//                     }, {
//                         name: 'Wave',
//                         value: parsedProf.wave,
//                         inline: true
//                     }, {
//                         name: 'Robot',
//                         value: parsedProf.robot,
//                         inline: true
//                     }, {
//                         name: 'Spider',
//                         value: parsedProf.spider,
//                         inline: true
//                     }, {
//                         name: 'Color 1',
//                         value: parsedProf.col1,
//                         inline: true
//                     }, {
//                         name: 'Color 2',
//                         value: parsedProf.col2,
//                         inline: true
//                     }, {
//                         name: 'Death Effect',
//                         value: parsedProf.deathEffect,
//                         inline: true
//                     }, {
//                         name: 'Glow',
//                         value: parsedProf.glow,
//                         inline: true
//                     });
//                 return message.channel.send(profileEmbed);
//             };
//         };
    }
};