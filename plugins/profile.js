const AlphaX = require('../events');
const {WAConnection, MessageType, Mimetype, ChatModification} = require('@adiwajshing/baileys');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('profile');

AlphaX.addCommand({ pattern: 'profile', fromMe: WType, desc: 'Profile menu.'}, (async (message, match) => { 

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

const rows = [
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .pp', description: "🌉 sᴇᴛ ʏᴏᴜʀ ᴘᴘ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .getpp', description: "💈 ɢᴇᴛ ɢʀᴏᴜᴘ/ᴘᴇʀsᴏɴ ᴘᴘ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .block', description: "🔕 ʙʟᴏᴄᴋ ᴀ ᴜsᴇʀ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .unblock', description: "🔊 ᴜɴʙʟᴏᴄᴋ ᴀ ᴜsᴇʀ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .pin', description: "🎴 ᴘɪɴ ᴄʜᴀᴛ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .unpin', description: "🀄 ᴜɴᴘɪɴ ᴄʜᴀᴛ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .archive', description: "⏬ ᴀʀᴄʜɪᴠᴇ ᴄʜᴀᴛ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .unarchive', description: "🔼 ᴜɴᴀʀᴄʜɪᴠᴇ ᴄʜᴀᴛ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .setbio', description: "📣 sᴇᴛ ʏᴏᴜʀ ʙɪᴏ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .getbio', description: "📚 ɢᴇᴛ ᴘᴇʀsᴏɴ ᴀʙᴏᴜᴛ.\n\n", rowId:"rowid1"},
 {title: Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ~ .details', description: "💎 ɢᴇᴛ ᴘᴇʀsᴏɴ ɪɴғᴏ.\n\n", rowId:"rowid1"},

]
        var get_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var time_here = new Date().toLocaleDateString(get_localized_date)
        var Al4X = '```🔺 Tɪᴍᴇ > ' + get_time + '```\n```📅 Dᴀᴛᴇ > ' + time_here + '```'

const sections = [{title: "๛ ᴘʀᴏғɪʟᴇ ᴍᴇɴᴜ 😍", rows: rows}]

const button = {
 buttonText: '°•.🎭 ᴍᴇɴᴜ 🎭.•°',
 description: Al4X + "\n\n     *∆ 💈 ᴘʀᴏғɪʟᴇ ᴍᴇɴᴜ 💈∆*\n\n       _Click the button bellow._\n*╰───────────────────────╯*\n",
 sections: sections,
 listType: 1
}

await message.client.sendMessage(message.jid, button, MessageType.listMessage, { contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "◽️▫️️ ᴘʀᴏғɪʟᴇ ᴍᴇɴᴜ ▫️️◽️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

}));

AlphaX.addCommand({ pattern: 'getpp$', fromMe: true, desc: 'Get pofile picture.'}, (async (message, match) => { 
 
    if (message.reply_message) {
            var ppUrl = await message.client.getProfilePicture(message.reply_message.jid)
                const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    { mimetype: Mimetype.png }
            );
       } else {
            var ppUrl = await message.client.getProfilePicture(message.jid)
                const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    { mimetype: Mimetype.png }
            );
       }
}));

AlphaX.addCommand({pattern: 'setbio ?(.*)', fromMe: true, desc: 'Set your about.'}, (async (message, match) => {
    if (!match[1]) { await message.client.sendMessage(message.jid, '*⚠️️ Type any message!*', MessageType.text, { quoted: message.data });
    } else {
    const msg = match[1].replace(`/#/`,'\n')
    await message.client.setStatus(msg);
    await message.client.sendMessage(message.jid, '*✅ About update ssuccessfully...*', MessageType.text, {quoted:message.data });
    }
}));

AlphaX.addCommand({pattern: 'getbio$', fromMe: true, desc: 'Get user about.'}, (async (message, match) => {
    if (!message.reply_message) { await message.client.sendMessage(message.jid, '*ℹ️️️ Reply to any user!*', MessageType.text, { quoted: message.data });
    } else {
    const status = await message.client.getStatus(message.reply_message.jid)
    await message.client.sendMessage(message.jid, status.status , MessageType.text, {quoted:message.data });
    }
}));

AlphaX.addCommand({pattern: 'archive$', fromMe: true, desc: 'Archive chat.'}, (async (message, match) => {
    try { await message.client.modifyChat(message.jid, ChatModification.archive); 
    await message.client.sendMessage(message.jid, "*Chat successfully archived. ✅*", MessageType.text)
     } catch { await message.client.sendMessage(message.jid, "*Chat Archive failed. ⛔*", MessageType.text) }
}));

AlphaX.addCommand({pattern: 'unarchive$', fromMe: true, desc: 'Unarchive chat.'}, (async (message, match) => {
    try { await message.client.modifyChat(message.jid, ChatModification.unarchive); 
    await message.client.sendMessage(message.jid, "*Chat successfully unarchived. ✅*", MessageType.text)
     } catch { await message.client.sendMessage(message.jid, "*Chat Unarchive failed. ⛔*", MessageType.text) }
}));

AlphaX.addCommand({pattern: 'pin$', fromMe: true, desc: 'Archive chat.'}, (async (message, match) => {
    try { await message.client.modifyChat(message.jid, ChatModification.pin); 
    await message.client.sendMessage(message.jid, "*Chat successfully pined. ✅*", MessageType.text)
     } catch { await message.client.sendMessage(message.jid, "*Chat Pin failed. ⛔*", MessageType.text) }
}));

AlphaX.addCommand({pattern: 'unpin$', fromMe: true, desc: 'Unarchive chat.'}, (async (message, match) => {
    try { await message.client.modifyChat(message.jid, ChatModification.unpin); 
    await message.client.sendMessage(message.jid, "*Chat successfully unpined. ✅*", MessageType.text)
     } catch { await message.client.sendMessage(message.jid, "*Chat Unpin failed. ⛔*", MessageType.text) }
}));

AlphaX.addCommand({pattern: 'pp$', fromMe: true, desc: Lang.PP_DESC}, (async (message, match) => {    
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

AlphaX.addCommand({pattern: 'kickme$', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));
    
AlphaX.addCommand({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC}, (async (message, match) => {   
    if (Config.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

AlphaX.addCommand({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC}, (async (message, match) => { 
    if (Config.UNBLOCKMSG == 'default') { 
   
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
}));

    AlphaX.addCommand({pattern: 'jid ?(.*)', fromMe: WType, desc: Lang.JID_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
