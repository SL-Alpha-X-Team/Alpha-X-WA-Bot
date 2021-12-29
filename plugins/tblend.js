const AlphaX = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('conventer');

    AlphaX.addCommand({pattern: 'tblend ?(.*)', fromMe: WType, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Dodge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Or TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Multiply TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Grainmerge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - And TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Burn TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Difference TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Grainextract TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Divide TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Xor TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Hardmix TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('./media/tblend.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/tblend.mp4'), MessageType.video, {caption: Config.CAPTION + ' - Negation TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
