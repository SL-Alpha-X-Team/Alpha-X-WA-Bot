const AlphaX = require('../events');
const Config = require('../config');
const Heroku = require('heroku-client');
const {secondsToHms} = require('./afk');
const got = require('got');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('heroku');
const Langr = Language.getString('lydia');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

AlphaX.addCommand({pattern: 'varset ?(.*)', fromMe: true, desc: Lang.SET_DESC}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

    if (match[1] == '') {
        return await message.client.sendMessage(message.jid, Lang.SET_NONE, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🍁 Varset List >>" , "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
 
    }
    else if (!message.reply_message) {
        return await message.client.sendMessage(message.jid, Langr.NEED_REPLY, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Need reply! ❌", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
 
    }
    else if (match[1] == 'ban' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BAN_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'welcome' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
        await sql.setMessage(message.jid, 'welcome', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text, { quoted: message.data });
    }
    else if (match[1] == 'goodbye' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
        await sql.setMessage(message.jid, 'goodbye', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text, { quoted: message.data });
    }
    else if (match[1] == 'mute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['MUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unmute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNMUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'add' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ADD_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'dsong' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DOWNLOAD_SONG']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'badkick msg' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ANTI_BADWORD_KICK_MSG']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'usong' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UPLOAD_SONG']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'dvideo' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DOWNLOAD_VIDEO']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'uvideo' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UPLOAD_VIDEO']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'bot name' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BOT_NAME']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'dsong pic' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DOWNLOAD_SONG_PIC']: message.reply_message.text
            } 
        });
    }
   else if (match[1] == 'dvideo pic' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DOWNLOAD_VIDEO_PIC']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'wlcm gif' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['WELCOME_GIF']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'gbye gif' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['GOODBYE_GIF']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'alink ban msg' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ANTILINK_BAN_MSG']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'clist key' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['COMMAND_LIST_KEY']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'amsg key' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ALIVE_MSG_KEY']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'clist pic' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['COMMAND_LIST_PIC']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'alive pic' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ALIVE_PIC']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'user name' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['USER_NAME']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'cemoji' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['COMMAND_EMOJI']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'demoji' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DESC_EMOJI']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'wemoji' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['WARN_EMOJI']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'kickme' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['KICKME_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'afk' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['AFK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'alive' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ALIVE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'demote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DEMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'promote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['PROMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'block' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unblock' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text, { quoted: message.data });
               await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNBLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (!match[1] == 'unblock' || !match[1] == 'welcome' || !match[1] == 'goodbye' || !match[1] == 'add' || !match[1] == 'block' || !match[1] == 'mute' || !match[1] == 'unmute' || !match[1] == 'afk' || !match[1] == 'alive' || !match[1] == 'demote' || !match[1] == 'promote' || !match[1] == 'ban' || !match[1] == 'kickme' && message.reply_message) {
        return await message.client.sendMessage(message.jid, Lang.WR, MessageType.text, { quoted: message.data });
    }
}));


AlphaX.addCommand({pattern: 'restart$', fromMe: true, desc: Lang.RESTART_DESC}, (async (message, match) => {
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

    await message.client.sendMessage(message.jid,Lang.RESTART_MSG, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "-_- ⚙ Reastarting 📍 >>", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    });
}));

AlphaX.addCommand({pattern: 'poweroff$', fromMe: true, desc: Lang.SHUTDOWN_DESC}, (async(message, match) => {
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

    await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await message.client.sendMessage(message.jid,Lang.SHUTDOWN_MSG, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎🚀 Use heroku dyno to turn on bot 🛠", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    });
}));

    AlphaX.addCommand({pattern: 'dyno$', fromMe: true, desc: Lang.DYNO_DESC}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Config.HEROKU.API_KEY,
                "Accept": "application/vnd.heroku+json; version=3.account-quotas",
            }
            await got(url, {headers: headers}).then(async (res) => {
               const resp = JSON.parse(res.body);
               total_quota = Math.floor(resp.account_quota);
               quota_used = Math.floor(resp.quota_used);         
               percentage = Math.round((quota_used / total_quota) * 100);
               remaining = total_quota - quota_used;
               await message.client.sendMessage(
                    message.jid,
                    Lang.DYNO_TOTAL + ": *{} %*\n\n".format(secondsToHms(total_quota))  + 
                    Lang.DYNO_USED + ": *{} %*\n".format(secondsToHms(quota_used)) +  
                    Lang.PERCENTAGE + ": *{} %*\n\n".format(percentage) +
                    Lang.DYNO_LEFT + ": *{} %*\n".format(secondsToHms(remaining)),
                    MessageType.text
               );
            }).catch(async (err) => {
                await message.client.sendMessage(message.jid,err.message, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎< 🛠 Details of dyno ⭕ >", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
     
            });        
        });
    }));

AlphaX.addCommand({pattern: 'setvar ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC}, (async(message, match) => {
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎⚙ >> Enter eny key!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    if (match[1].match(/BLOCK_CHAT:94772978164/i)) {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            return await message.client.sendMessage(
                message.jid,
                '*Kurucuyu Block Chat\'e Alamam!*',
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                '❌ *I can\'t add Bot Developers to Block Chat* ❌',
                MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🥲 Nice try 🥲", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
        }
    }
    if (match[1].match(/BLOCK_CHAT:94763983965/i)) {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            return await message.client.sendMessage(
                message.jid,
                '*Kurucuyu Block Chat\'e Alamam!*',
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                '❌ *I Can\'t add Bot Developers to Block Chat* ❌',
                MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🥲 Nice try 🥲", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
        }
    }
    // ================================================== CONFIG SCANNER ==================================================
    if (match[1] == 'SEND_READ: true' || match[1] == 'SEND_READ: True' || match[1] == 'SEND_READ: TRUE' || match[1] == 'SEND_READ:True' || match[1] == 'SEND_READ:TRUE' || match[1] == 'SEND_READ:ture' || match[1] == 'SEND_READ: ture' || match[1] == 'SEND_READ:ttue' || match[1] == 'SEND_READ:trie' || match[1] == 'SEND_READ: trie' || match[1] == 'SEND_READ:Trie' || match[1] == 'SEND_READ: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *SEND_READ* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *SEND_READ* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'true'
                }
            });
        }
    }
    if (match[1] == 'SEND_READ: false' || match[1] == 'SEND_READ: False' || match[1] == 'SEND_READ: FALSE' || match[1] == 'SEND_READ:False' || match[1] == 'SEND_READ:FALSE' || match[1] == 'SEND_READ:fakse' || match[1] == 'SEND_READ: fakse' || match[1] == 'SEND_READ:falde' || match[1] == 'SEND_READ: falde' || match[1] == 'SEND_READ:flase' || match[1] == 'SEND_READ:Flase' || match[1] == 'SEND_READ: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *SEND_READ* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *SEND_READ* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'false'
                }
            });
        }
    }
    if (match[1] == 'DEBUG: false' || match[1] == 'DEBUG: False' || match[1] == 'DEBUG: FALSE' || match[1] == 'DEBUG:False' || match[1] == 'DEBUG:FALSE' || match[1] == 'DEBUG:fakse' || match[1] == 'DEBUG: fakse' || match[1] == 'DEBUG:falde' || match[1] == 'DEBUG: falde' || match[1] == 'DEBUG:flase' || match[1] == 'DEBUG:Flase' || match[1] == 'DEBUG: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *DEBUG* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *DEBUG* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'false'
                }
            });
        }
    }
    if (match[1] == 'BLOCK_CHAT: false' || match[1] == 'BLOCK_CHAT: False' || match[1] == 'BLOCK_CHAT: FALSE' || match[1] == 'BLOCK_CHAT:False' || match[1] == 'BLOCK_CHAT:FALSE' || match[1] == 'BLOCK_CHAT:fakse' || match[1] == 'BLOCK_CHAT: fakse' || match[1] == 'BLOCK_CHAT:falde' || match[1] == 'BLOCK_CHAT: falde' || match[1] == 'BLOCK_CHAT:flase' || match[1] == 'BLOCK_CHAT:Flase' || match[1] == 'BLOCK_CHAT: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *BLOCK_CHAT* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['BLOCK_CHAT']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *BLOCK_CHAT* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['BLOCK_CHAT']: 'false'
                }
            });
        }
    }
    if (match[1] == 'DEBUG: true' || match[1] == 'DEBUG: True' || match[1] == 'DEBUG: TRUE' || match[1] == 'DEBUG:True' || match[1] == 'DEBUG:TRUE' || match[1] == 'DEBUG:ture' || match[1] == 'DEBUG: ture' || match[1] == 'DEBUG:ttue' || match[1] == 'DEBUG:trie' || match[1] == 'DEBUG: trie' || match[1] == 'DEBUG:Trie' || match[1] == 'DEBUG: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *DEBUG* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *DEBUG* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'true'
                }
            });
        }
    }
    if (match[1] == 'NO_ONLINE: false' || match[1] == 'NO_ONLINE: False' || match[1] == 'NO_ONLINE: FALSE' || match[1] == 'NO_ONLINE:False' || match[1] == 'NO_ONLINE:FALSE' || match[1] == 'NO_ONLINE:fakse' || match[1] == 'NO_ONLINE: fakse' || match[1] == 'NO_ONLINE:falde' || match[1] == 'NO_ONLINE: falde' || match[1] == 'NO_ONLINE:flase' || match[1] == 'NO_ONLINE:Flase' || match[1] == 'NO_ONLINE: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *NO_ONLINE* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *NO_ONLINE* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'false'
                }
            });
        }
    }
    if (match[1] == 'NO_ONLINE: true' || match[1] == 'NO_ONLINE: True' || match[1] == 'NO_ONLINE: TRUE' || match[1] == 'NO_ONLINE:True' || match[1] == 'NO_ONLINE:TRUE' || match[1] == 'NO_ONLINE:ture' || match[1] == 'NO_ONLINE: ture' || match[1] == 'NO_ONLINE:ttue' || match[1] == 'NO_ONLINE:trie' || match[1] == 'NO_ONLINE: trie' || match[1] == 'NO_ONLINE:Trie' || match[1] == 'NO_ONLINE: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *NO_ONLINE* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *NO_ONLINE* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'true'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE:tr' || match[1] == 'LANGUAGE: tr' || match[1] == 'LANGUAGE: Tr' || match[1] == 'LANGUAGE:Tr' || match[1] == 'LANGUAGE: TR' || match[1] == 'LANGUAGE:tR' || match[1] == 'LANGUAGE: tR' || match[1] == 'LANGUAGE:T R' || match[1] == 'LANGUAGE:Turkce' || match[1] == 'LANGUAGE:turkce' || match[1] == 'LANGUAGE:türkce' || match[1] == 'LANGUAGE:Türkce') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Türkçe* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'TR'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Turkish*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'TR'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE:En' || match[1] == 'LANGUAGE: En' || match[1] == 'LANGUAGE: en' || match[1] == 'LANGUAGE:EN' || match[1] == 'LANGUAGE: EN' || match[1] == 'LANGUAGE:eN' || match[1] == 'LANGUAGE: eN' || match[1] == 'LANGUAGE:E N' || match[1] == 'LANGUAGE: English' || match[1] == 'LANGUAGE:English' || match[1] == 'LANGUAGE:english' || match[1] == 'LANGUAGE: english') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Ingilize* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'en'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *English.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'en'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE: az' || match[1] == 'LANGUAGE: Az' || match[1] == 'LANGUAGE:Az' || match[1] == 'LANGUAGE:AZ' || match[1] == 'LANGUAGE: AZ' || match[1] == 'LANGUAGE:aZ' || match[1] == 'LANGUAGE: aZ' || match[1] == 'LANGUAGE:A Z') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Azerice* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'az'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Azerbaijani.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'az'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE: ml' || match[1] == 'LANGUAGE: Ml' || match[1] == 'LANGUAGE:Ml' || match[1] == 'LANGUAGE:ML' || match[1] == 'LANGUAGE: ML' || match[1] == 'LANGUAGE:mL' || match[1] == 'LANGUAGE: mL' || match[1] == 'LANGUAGE:M L') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Malayam* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ml'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Malayalam.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ml'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE: HI' || match[1] == 'LANGUAGE: Hı' || match[1] == 'LANGUAGE:Hı' || match[1] == 'LANGUAGE:hı' || match[1] == 'LANGUAGE: hı' || match[1] == 'LANGUAGE:H I') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Hintçe* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'HI'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Hindi.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'HI'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE: es' || match[1] == 'LANGUAGE: Es' || match[1] == 'LANGUAGE:Es' || match[1] == 'LANGUAGE: ES' || match[1] == 'LANGUAGE:eS' || match[1] == 'LANGUAGE: eS' || match[1] == 'LANGUAGE:E S') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Ispanyolca* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ES'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Spanish.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ES'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE: id' || match[1] == 'LANGUAGE: Id' || match[1] == 'LANGUAGE: Id' || match[1] == 'LANGUAGE:ıd' || match[1] == 'LANGUAGE: ıd' || match[1] == 'LANGUAGE:id' || match[1] == 'LANGUAGE: ID' || match[1] == 'LANGUAGE: ID' || match[1] == 'LANGUAGE:ID' || match[1] == 'LANGUAGE:iD' || match[1] == 'LANGUAGE: iD' || match[1] == 'LANGUAGE:I D') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Endonezce* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ID'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to_ *Indonesian.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'ID'
                }
            });
        }
    }
    // ================================================== END CONFIG SCANNER ==================================================

    if ((varKey = match[1].split(':')[0]) && (varValue = match[1].split(':')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.client.sendMessage(message.jid,Lang.SET_SUCCESS.format(varKey, varValue), MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '✅ ' + match[1], "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

        });
    } else {
        await message.client.sendMessage(message.jid,Lang.INVALID, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "•• 🙄 Invalid! ••‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    }
}));


AlphaX.addCommand({pattern: 'delvar ?(.*)', fromMe: true, desc: Lang.DELVAR_DESC}, (async (message, match) => {
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        key = match[1].trim();
        for (vr in vars) {
            if (key == vr) {
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        [key]: null
                    }
                });
                return await message.client.sendMessage(message.jid,Lang.DEL_SUCCESS.format(key), MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

            }
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    });

}));

AlphaX.addCommand({pattern: 'getvar ?(.*)', fromMe: true, desc: Lang.GETVAR_DESC}, (async (message, match) => {
        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎♦ Need Key!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (match[1].trim() == vr) return await message.sendMessage("*{} - {}*".format(vr, vars[vr]));
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "♦ Invalid Key!‎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "‎♦♦♦♦♦♦♦♦♦♦♦♦", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

    });
}));
