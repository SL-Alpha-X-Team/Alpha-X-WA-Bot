const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('tagall');

    AlphaX.addCommand({pattern: 'report ?(.*)', fromMe: WType, desc: Lang.REPORT}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
