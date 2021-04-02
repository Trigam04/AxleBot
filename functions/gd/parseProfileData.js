module.exports = {
    execute(data) {
        let shit = data.split(":");
        out = [];
        for (i = 0; i < shit.length; i = i + 2)
            out.push(shit.slice(i, i + 2).join(':'));
        console.log(out);
        let profileInfo = {
            'username': out[0].slice(2),
            'userID': out[1].slice(2),
            'coins': out[2].slice(3),
            'userCoins': out[3].slice(3),
            'col1': out[4].slice(3),
            'col2': out[5].slice(3),
            'stars': out[6].slice(2),
            'diamonds': out[7].slice(3),
            'demons': out[8].slice(2),
            'cp': out[9].slice(2),
            'messages': out[10].slice(3),
            'friendRequests': out[11].slice(3),
            'commentHistory': out[12].slice(3),
            'youtube': out[13].slice(3),
            'icon': out[14].slice(3),
            'ship': out[15].slice(3),
            'ball': out[16].slice(3),
            'ufo': out[17].slice(3),
            'wave': out[18].slice(3),
            'robot': out[19].slice(3),
            'glow': out[20].slice(3),
            'spider': out[21].slice(3),
            'deathEffect': out[22].slice(3),
            'rank': out[23].slice(3),
            'accountID': out[24].slice(3),
            'friend': out[25].slice(3),
            'twitter': out[26].slice(3),
            'twitch': out[27].slice(3),
            'moderator': out[28].slice(3),
            'registered': out[29].slice(3)
        }
        return profileInfo;
    }
}