const Discord = require('discord.js');

module.exports = {
    execute(message, args, bot, inMsg) {
        var guildMembers = message.guild.members.cache;
        var botMembers = guildMembers.filter(m => m.user.bot === true);

        channels = message.guild.channels.cache;
        arrChannels = channels.array();
        textChannels = channels.filter(c => c.type === 'text');
        voiceChannels = channels.filter(c => c.type === 'voice');
        newsChannels = channels.filter(c => c.type === 'news');

        var nick = message.guild.member(message.author.id).nickname
        if (!nick) {
            nick = message.author.username;
        };

        //Slowmode
        let slowmode = message.channel.rateLimitPerUser;
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
        //Content filter
        var contentFilter = message.guild.explicitContentFilter;
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
        var notifs = message.guild.defaultMessageNotifications;
        //Replaces notification settings with visually pleasing versions
        switch (notifs) {
            case 'ALL':
                notifs = 'All messages'
                break;
            case 'MENTIONS':
                notifs = 'Only mentions'
                break;
        };
        //Verification level
        var verificationLevel = message.guild.verificationLevel;
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
        //Status
        //User status
        var status = message.guild.member(message.author.id).user.presence.status;
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

        let exMsg = inMsg
            //Author stuff
            .replace(/{username}/gi, message.author.username)
            .replace(/{nickname}/gi, nick)
            .replace(/{discrim}/gi, message.author.discriminator)
            .replace(/{tag}/gi, `${message.author.username}#${message.author.discriminator}`)
            .replace(/{id}/gi, message.author.id)
            .replace(/{@}/gi, `<@${message.author.id}>`)
            .replace(/{timestamp}/gi, message.author.createdAt.toDateString())
            .replace(/{color}/gi, message.guild.member(message.author.id).displayHexColor)
            .replace(/{roles}/gi, message.guild.member(message.author.id).roles.member._roles.length)
            .replace(/{status}/gi, status)
            //Server stuff
            .replace(/{server\|+name}/gi, message.guild.name)
            .replace(/{server\|+id}/gi, message.guild.id)
            .replace(/{server\|+region}/gi, message.guild.region)
            .replace(/{server\|+members}/gi, guildMembers.size)
            .replace(/{server\|+bots}/gi, botMembers.size)
            .replace(/{server\|+emojis}/gi, message.guild.emojis.cache.size)
            .replace(/{server\|+roles}/gi, message.guild.roles.cache.size)
            .replace(/{server\|+verificationLevel}/gi, verificationLevel)
            .replace(/{server\|+contentFilter}/gi, contentFilter)
            .replace(/{server\|+notifications}/gi, notifs)
            .replace(/{server\|+channels}/gi, channels.size)
            .replace(/{server\|+channels\|+text}/gi, textChannels.size)
            .replace(/{server\|+channels\|+voice}/gi, voiceChannels.size)
            .replace(/{server\|+channels\|+news}/gi, newsChannels.size)
            .replace(/{server\|+timestamp}/gi, message.guild.createdAt.toDateString())
            .replace(/{server\|+owner}/gi, message.guild.ownerID)
            .replace(/{server\|+boost\|+count}/gi, message.guild.premiumSubscriptionCount)
            .replace(/{server\|+boost\|+tier}/gi, message.guild.premiumTier)
            .replace(/{server\|+icon}/gi, message.guild.iconURL())
            //Channel stuff
            .replace(/{channel\|+name}/gi, message.channel.name)
            .replace(/{channel\|+id}/gi, message.channel.id)
            .replace(/{channel\|+topic}/gi, message.channel.topic)
            .replace(/{channel\|+type}/gi, message.channel.type)
            .replace(/{channel\|+slowmode}/gi, displaySlowmode)
            .replace(/{channel\|+pin\|+last}/gi, message.channel.lastPinTimestamp)
            .replace(/{channel\|+nsfw}/gi, message.channel.nsfw)
            .replace(/{channel\|+category}/gi, message.channel.parent.name)
            //Funnies
            .replace(/{bot\|+token}/gi, "[REDACTED]")
            .replace(/{gd\|+update\|+2.2\|+release\|+timestamp}/gi, undefined)
        return exMsg;
    }
}