let AlphaX = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let WType = Config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (Config.LANG == 'EN') DESC = "Site to pdf file."
if (Config.LANG == 'SI') DESC = "අඩවිය pdf ගොනුවකට."
if (Config.LANG == 'KN') DESC = "PDF ಫೈಲ್‌ಗೆ ಸೈಟ್."
if (Config.LANG == 'TR') DESC = "Siteden pdf dosyasına."
if (Config.LANG == 'AZ') DESC = "Sayt pdf fayla."
if (Config.LANG == 'RU') DESC = "Сайт в файл pdf."
if (Config.LANG == 'ML') DESC = "PDF ഫയലിലേക്ക് സൈറ്റ്."
if (Config.LANG == 'HI') DESC = "पीडीएफ फाइल के लिए साइट।"

AlphaX.addCommand({pattern: 'spdf ?(.*)', fromMe: WType, desc: DESC }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Send a link ❌', MessageType.text, { quoted: message.data });
    
    axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=NnZbw8i4xpzj871hXlQUkS9xXqbhTzAytHOPvQ1VxC3dxrYKJb5o4fyoNETJx97W`).then(async (msg) => {

    let webimage
    try { webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=NnZbw8i4xpzj871hXlQUkS9xXqbhTzAytHOPvQ1VxC3dxrYKJb5o4fyoNETJx97W`, { responseType: 'arraybuffer' }) } catch { await message.client.sendMessage(message.jid,'```⛔ Error:' + msg.data.message + '```', MessageType.text, { quoted: message.data }) }
    
    await message.client.sendMessage(message.jid,'*Please Wait ✅...*', MessageType.text, { quoted: message.data });
        
    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: `${match[1]}.pdf` });
    
    });

}));
