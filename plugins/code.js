const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (Config.LANG == 'EN') DESC = "To create an qr code from the word you give."
if (Config.LANG == 'SI') DESC = "ඔබ දෙන වචනයෙන් qr කේතයක් සෑදීමට."
if (Config.LANG == 'KN') DESC = "ನೀವು ನೀಡುವ ಪದದಿಂದ ಕ್ಯೂಆರ್ ಕೋಡ್ ರಚಿಸಲು."
if (Config.LANG == 'TR') DESC = "Verdiğiniz kelimeden qr code oluşturmak için."
if (Config.LANG == 'AZ') DESC = "Verdiyiniz sözdən qr code yaratmaq üçün."
if (Config.LANG == 'ML') DESC = "നിങ്ങൾ നൽകുന്ന വാക്കിൽ നിന്ന് ഒരു qr കോഡ് സൃഷ്ടിക്കാൻ."
if (Config.LANG == 'RU') DESC = "Чтобы создать qr-код из слова, которое вы даете."

var BCODE = ''
if (Config.LANG == 'EN') BCODE = "To create an barcode from the word you give."
if (Config.LANG == 'SI') BCODE = "ඔබ දෙන වචනයෙන් barcode කේතයක් සෑදීමට."
if (Config.LANG == 'KN') BCODE = "ನೀವು ನೀಡುವ ಪದದಿಂದ ಬಾರ್‌ಕೋಡ್ ರಚಿಸಲು."
if (Config.LANG == 'TR') BCODE = "Verdiğiniz kelimeden barkod oluşturmak için."
if (Config.LANG == 'ML') BCODE = "നിങ്ങൾ നൽകുന്ന വാക്കിൽ നിന്ന് ഒരു ബാർകോഡ് സൃഷ്ടിക്കാൻ."
if (Config.LANG == 'RU') BCODE = "Чтобы создать bar-код из слова, которое вы даете."
if (Config.LANG == 'AZ') BCODE = "Verdiyiniz sözdən barkod yaratmaq üçün."

AlphaX.addCommand({pattern: 'qr ?(.*)', fromMe: WType, desc: DESC}, (async (message, match) => {

        const web = "https://api.zeks.me/api/qrencode?apikey=apivinz&text=";
        
        if (match[1] === '') return await message.sendMessage(message.jid, '⚒️ *Need word!*' ,MessageType.text, {quoted: message.data });

        let run;
        try {
        axios.get(web + "test")
        run = true
        } catch {
        await message.client.sendMessage(message.jid, "*Server error try again later! 🚫*", MessageType.text, { quoted: message.data });
        run = false
        };
        
        if (run = true) {
        
        var webimage = await axios.get( web + match[1], { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: Buffer.from(webimage.data),caption: Config.CAPTION, quoted: message.data})
        
        };

    }));

AlphaX.addCommand({pattern: 'bcode ?(.*)', fromMe: WType, desc: BCODE}, (async (message, match) => {

        const web = "https://api.zeks.me/api/barcode?apikey=apivinz&text="
        
        if (match[1] === '') return await message.sendMessage(message.jid, '*🔩️ Need word!*' ,MessageType.text, {quoted: message.data });

        let run;
        try {
        axios.get(web + "test")
        run = true
        } catch {
        await message.client.sendMessage(message.jid, "*Server error try again later! 🚫*", MessageType.text, { quoted: message.data });
        run = false
        };
        
        if (run = true) {
        
        var webimage = await axios.get( web + match[1], { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: Buffer.from(webimage.data),caption: Config.CAPTION, quoted: message.data});

        };
        
    }));
