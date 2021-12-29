const AlphaX = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const tesseract = require("node-tesseract-ocr")
const langs = require('langs');
const Language = require('../language');
const Lang = Language.getString('ocr');
let WType = Config.WORKTYPE == 'public' ? false : true

    AlphaX.addCommand({pattern: 'ocr ?(.*)', fromMe: WType, desc: Lang.OCR_DESC}, (async (message, match) => { 

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);    
	var info = await message.reply(Lang.DOWNLOADING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var dil;
        if (match[1] !== '') {
            dil = langs.where("1", match[1]);
        } else {
            dil = langs.where("1", Config.LANG.toLowerCase());
        }

        try {
            var result = await tesseract.recognize(location, {
                lang: dil[2]
            });    
        } catch (e) {
            return await message.reply(Lang.ERROR.format(e));
        }

        await info.delete();
        if ( result === ' ' || result.length == 1 ) {
            return await message.reply(Lang.ERROR.format(' Empty text'));
        }

        return await message.reply(Lang.RESULT.format(dil[2], result));
    }));
