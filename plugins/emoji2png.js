const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (Config.LANG == 'EN') DESC = "You can get Emoji as image."
if (Config.LANG == 'SI') DESC = "ඉමෝජි පින්තූර ලෙස ලබාගැනීමට."
if (Config.LANG == 'KN') DESC = "ನೀವು ಎಮೋಜಿಯನ್ನು ಚಿತ್ರವಾಗಿ ಪಡೆಯಬಹುದು."
if (Config.LANG == 'TR') DESC = "Emoji'yi resim olarak alabilirsiniz."
if (Config.LANG == 'AZ') DESC = "Şəkil olaraq Emoji əldə edə bilərsiniz."
if (Config.LANG == 'ML') DESC = "നിങ്ങൾക്ക് ചിത്രമായി ഇമോജി ലഭിക്കും."
if (Config.LANG == 'RU') DESC = "Вы можете получить Emoji как изображение."

var NEED = ''
if (Config.LANG == 'EN') NEED = "*🚀 Need a Emoji!*"
if (Config.LANG == 'SI') NEED = "*🚀 Emoji එකක් අවශ්‍ය වේ*"
if (Config.LANG == 'KN') NEED = "ನೀವು ಎಮೋಜಿಯನ್ನು ಚಿತ್ರವಾಗಿ ಪಡೆಯಬಹುದು."
if (Config.LANG == 'TR') NEED = "*🚀 Bir Emojiye İhtiyacım Var!*"
if (Config.LANG == 'ML') NEED = "*🚀 ഒരു ഇമോജി വേണം!*"
if (Config.LANG == 'RU') NEED = "*🚀 Нужен смайлик!*"
if (Config.LANG == 'AZ') NEED = "*🚀 Emoji lazımdır!*"

    AlphaX.addCommand({pattern: 'emoji ?(.*)', fromMe: WType, desc: DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(message.jid, NEED ,MessageType.text, {quoted: message.data });

        var webimage = await axios.get(`https://api.zeks.me/api/emoji-image?apikey=apivinz&emoji=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: Buffer.from(webimage.data),caption: Config.CAPTION, quoted: message.data})


    }))
