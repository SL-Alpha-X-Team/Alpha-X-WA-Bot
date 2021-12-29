const AlphaX = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
const axios = require('axios');

var DESC = ''
if (Config.LANG == 'EN') DESC = 'Download status you repled.'
if (Config.LANG == 'SI') DESC = 'ඔබ රිප්ලයි කල status එක බාගත කර ගැනීමට.'
if (Config.LANG == 'KN') DESC = 'ನೀವು ಪ್ರತ್ಯುತ್ತರಿಸಿದ ಸ್ಥಿತಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.'
if (Config.LANG == 'TR') DESC = 'Yanıtladığınız durumu indirin.'
if (Config.LANG == 'ML') DESC = 'നിങ്ങൾ മറുപടി നൽകിയ സ്റ്റാറ്റസ് ഡൗൺലോഡ് ചെയ്യുക.'
if (Config.LANG == 'AZ') DESC = 'Cavab verdiyiniz statusu endirin.'
if (Config.LANG == 'RU') DESC = 'Статус загрузки, на который вы ответили.'

var SUC = ''
if (Config.LANG == 'EN') SUC = '*✅ status saved to your log number!*'
if (Config.LANG == 'SI') SUC = '*✅ status එක ඔබේ ලොග් නම්බරයට යැවුනි!*'
if (Config.LANG == 'KN') SUC = '*✅ ಸ್ಥಿತಿಯನ್ನು ನಿಮ್ಮ ಲಾಗ್ ಸಂಖ್ಯೆಗೆ ಉಳಿಸಲಾಗಿದೆ!*'
if (Config.LANG == 'TR') SUC = '*✅ durum günlük numaranıza kaydedildi!*'
if (Config.LANG == 'ML') SUC = '*✅ സ്റ്റാറ്റസ് നിങ്ങളുടെ ലോഗ് നമ്പറിൽ സംരക്ഷിച്ചു!*'
if (Config.LANG == 'AZ') SUC = '*✅ status jurnal nömrənizdə yadda saxlanıldı!*'
if (Config.LANG == 'RU') SUC = '*✅ статус сохранен в вашем журнале!*'

var NEED_REPLY = ''
if (Config.LANG == 'EN') NEED_REPLY = '*🔎 Reply to any status!*'
if (Config.LANG == 'SI') NEED_REPLY = '*🔎 කරුනාකර Status එකකට රිප්ලයි කරන්න!*'
if (Config.LANG == 'KN') NEED_REPLY = '*🔎 ಯಾವುದೇ ಸ್ಥಿತಿಗೆ ಉತ್ತರಿಸಿ!*'
if (Config.LANG == 'TR') NEED_REPLY = '*🔎 Herhangi bir durumu yanıtlayın!*'
if (Config.LANG == 'ML') NEED_REPLY = '*🔎 ഏത് സ്റ്റാറ്റസിനും മറുപടി നൽകുക!*'
if (Config.LANG == 'AZ') NEED_REPLY = '*🔎 İstənilən statusa cavab verin!*'
if (Config.LANG == 'RU') NEED_REPLY = '*🔎 Ответьте на любой статус!*'



AlphaX.addCommand({ pattern: 'dst$', fromMe: true, desc: DESC, onlyPm: true}, (async (message, match) => { 
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

     if (message.reply_message == false) {
     return await message.client.sendMessage(message.jid,NEED_REPLY, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🧩 Reply to any status! ❌", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
     }

     else if (message.reply_message.text) {
            await message.client.sendMessage(
                message.client.user.jid,
                 '*🚀 Status From ->* wa.me/' + message.reply_message.jid.split('@')[0] + '\n```TYPE :- text status```\n _• Message >>_ \n' + message.reply_message.text,
                MessageType.text
            );
            
            await message.client.sendMessage(message.jid,SUC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Check your log number! 🙂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

        }  
        else if (message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('im.jpg')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('im.jpg'),
                    MessageType.image,
                    { caption: '*📨 Status From ->* wa.me/' + message.reply_message.jid.split('@')[0] + '\n```TYPE :- image status```' }
                );

                await message.client.sendMessage(message.jid,SUC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Check your log number! 🙂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
            });
        }
        else if (message.reply_message.video) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('vid.mp4')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('vid.mp4'),
                    MessageType.video,
                    { mimetype: Mimetype.mpeg, caption: '*🏷️ Status From ->* wa.me/' + message.reply_message.jid.split('@')[0] + '\n```TYPE :- video status```' }
                );

                await message.client.sendMessage(message.jid,SUC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Check your log number! 🙂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

            });
        }
}));
