module.exports = (bot) => {
    const {
        prefix,
        activity,
        botinfo
    } = require('../../config/config.json');
    console.log(`
Name is: ${botinfo.name}
Version is: ${botinfo.version}
Last update was: ${botinfo.updatedLast}
Prefix is: ${prefix}
Activity is: ${activity}
${botinfo.name} is online!
    `);
}