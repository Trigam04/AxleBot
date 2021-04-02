const fetch = require('node-fetch')

module.exports = {
    name: "QR",
    description: "Can either generate or read a QR code.",
    category: "Utility",
    aliases: [],
    syntax: "/qr [valid arguement]",
    async execute(bot, message, args, Discord) {
        //If creating qr
        if (args[0] == "create") {
            //If no data
            if (!args[1]) return message.channel.send("Please add data to encode!");
            //Stitch args for data to encode
            let qrText = args.slice(1).join(" ");
            //Set it up as a link
            let search = qrText.replace(/\s/g, "%20")
            //Send link from QR maker
            return message.channel.send(`http://api.qrserver.com/v1/create-qr-code/?data=${search}&size=100x100`)
        }
        //If reading qr
        if (args[0] == "read") {
            //If there's no image attached
            if (!message.attachments.size > 0) {
                //If there's no link
                if (!args[1]) {
                    return message.channel.send("Please add a link/image");
                } else {
                    //Remove 'read' from message
                    let qr = args.slice(1).join(" ");
                    //Get ready as link
                    let link = qr.replace(/\s/g, "");
                    //Send link to website to read
                    var fetched = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${link}`).then(response => response.json());
                    //If couldn't read
                    if (fetched[0].symbol[0].data == null) {
                        return message.channel.send("I was unable to read that link!")
                    } else {
                        //Send data from qr code
                        return message.channel.send(fetched[0].symbol[0].data)
                    }
                }
            }
        };
        //If there's an imae
        if (message.attachments.size > 0) {
            //Put attachments into an array
            let qr = (message.attachments).array();
            //Get first attachment from array and send to website
            var fetched = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${qr[0].attachment}`).then(response => response.json());
            //If couldn't read
            if (fetched[0].symbol[0].data == null) {
                return message.channel.send("I was unable to read that image!")
            } else {
                //Send data
                return message.channel.send(fetched[0].symbol[0].data)
            }
        };

    }
}