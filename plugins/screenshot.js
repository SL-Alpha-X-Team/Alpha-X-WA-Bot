const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('webss');

    AlphaX.addCommand({pattern: 'ss ?(.*)', fromMe: WType, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, quoted: message.data, caption: Config.CAPTION + '\n' + Config.D_EMOJI + ' *Link:* _' + match[1] + '_' })

    }));
