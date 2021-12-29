const AlphaX = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');

const Language = require('../language'); 
const Lang = Language.getString('log'); 

AlphaX.addCommand({ pattern: 'logmsg', fromMe: true, desc: Lang.LOG, warn: Lang.ANIM, onlyGroup: true}, (async (message, match) => { 

    const meta = await message.client.groupMetadata(message.jid)
    const usmeta = message.client.isOnWhatsApp(message.jid)

    if (message.jid.includes('@g.us')) {
        if (!message.reply_message) {
            return await message.client.sendMessage(
                message.jid,
                Lang.REPLY,
                MessageType.text
            );
        }
        else if (message.reply_message.text) {
            await message.client.sendMessage(
                message.client.user.jid,
                Lang.HEAD + meta.id + Lang.FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + Lang.USER + Lang.MSG + message.reply_message.text,
                MessageType.text
            );
            await message.client.sendMessage(
                message.jid,
                Lang.SUC,
                MessageType.text,
            );
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
            .save('./media/log.jpg')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('./media/log.jpg'),
                    MessageType.image,
                    { caption: Lang.HEAD + meta.id + Lang.FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + Lang.USER }
                );
                await message.client.sendMessage(
                    message.jid,
                    Lang.SUC,
                    MessageType.text,
                );
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
            .save('./media/vid.mp4')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('./media/vid.mp4'),
                    MessageType.video,
                    { mimetype: Mimetype.mpeg, caption: Lang.HEAD + meta.id + Lang.FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + Lang.USER }
                );
                await message.client.sendMessage(
                    message.jid,
                    Lang.SUC,
                    MessageType.text,
                );
            });
        }
        else if (!message.reply_message.text && !message.reply_message.video && !message.reply_message.sticker && !message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('./media/sg.mp3')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('./media/sg.mp3'),
                    MessageType.audio,
                    { mimetype: Mimetype.mp4Audio} 
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    Lang.HEAD + meta.id + Lang.FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + Lang.USER,
                    MessageType.text
                );
                await message.client.sendMessage(
                    message.jid,
                    Lang.SUC,
                    MessageType.text,
                );
            });
        }
        else {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('./media/st.webp')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('./media/st.webp'),
                    MessageType.sticker
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    Lang.HEAD + meta.id + Lang.FROM + 'wa.me/' + message.reply_message.jid.split('@')[0] + Lang.USER,
                    MessageType.text
                );
                await message.client.sendMessage(
                    message.jid,
                    Lang.SUC,
                    MessageType.text,
                );
            });
        }
    }
    else if (!message.jid.includes('@g.us')) {
        return;
    }
}));
