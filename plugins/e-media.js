const Alpha = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const exec = require('child_process').exec;
const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    Alpha.addCommand({pattern: 'emedia$', fromMe: true, desc: Lang.XMEDIA_DESC}, (async (message, match) => {    

            await message.sendMessage(Config.C_EMOJI + ' _Usage:_ *.mp4enhance*\n' + Config.D_EMOJI + ' _Desc:_ Increases the quality of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.interp*\n' + Config.D_EMOJI + ' _Desc:_ Increases the FPS of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4slowmo*\n' + Config.D_EMOJI + ' _Desc:_ Applies true-slowmo to videos that are not slow motion.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x4mp4*\n' + Config.D_EMOJI + ' _Desc:_ Decreases Video Quality by 4 times.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x2mp4*\n' + Config.D_EMOJI + ' _Desc:_ Video Quality by 2 times.\n\n' + Config.C_EMOJI + ' _Usage:_ *.gif*\n' + Config.D_EMOJI + ' _Desc:_ Converts video to gif.\n\n' + Config.C_EMOJI + ' _Usage:_ *.agif*\n' + Config.D_EMOJI + ' _Desc:_ Converts video to gif with audio.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp4blur*\n' + Config.D_EMOJI + ' _Desc:_ Blurs the video background.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4stab*\n' + Config.D_EMOJI + ' _Desc:_ Decreases the vibration of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4rainbow* \n' + Config.D_EMOJI + ' _Desc:_ Applies a rainbow effect to the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4color*\n' + Config.D_EMOJI + ' _Desc:_ Makes the colors of the video more vivid and attractive.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4art*\n' + Config.D_EMOJI + ' _Desc:_ Applies drawing effect to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4negative*\n' + Config.D_EMOJI + ' _Desc:_Applies negative color filter to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4vintage*\n' + Config.D_EMOJI + ' _Desc:_ Applies nostalgia effect to video.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp4bw*\n' + Config.D_EMOJI + ' _Desc:_ Monochrome effect to video applies.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4reverse*\n' + Config.D_EMOJI + ' _Desc:_ Plays video in reverse.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4edge*\n' + Config.D_EMOJI + ' _Desc:_ Applies edge effect to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4image*\n' + Config.D_EMOJI + ' _Desc:_ Converts photo to 5 second video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.spectrum*\n' + Config.D_EMOJI + ' _Desc:_ Makes sound spectrum image into video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.waves*\n' + Config.D_EMOJI + ' _Desc:_ Converts the wave range of the sound to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.frequency*\n' + Config.D_EMOJI + ' _Desc:_ Converts the frequency range of the sound to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.avec*\n' + Config.D_EMOJI + ' _Desc:_ If the sound is different Converts histogram to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.volumeaudio*\n' + Config.D_EMOJI + ' _Desc:_ Converts Decibel Value of Audio to Video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.cqtaudio*\n' + Config.D_EMOJI + ' _Desc:_ Converts Audio CQT to video.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp3eq*\n' + Config.D_EMOJI + ' _Desc:_ Adjusts the sound to crystal clear level.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3crusher*\n' + Config.D_EMOJI + ' _Desc:_ Distorts the sound and makes it ridiculous.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3reverse*\n' + Config.D_EMOJI + ' _Desc:_ Plays the Audio in Reverse.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3bass* \n' + Config.D_EMOJI + ' _Desc:_ Increases the bass level of the music without distorting the sound.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3pitch*\n' + Config.D_EMOJI + ' _Desc:_ It makes the sound thinner and It speeds up.\n\n🧩Usage *.mp3low*\n' + Config.D_EMOJI + ' _Desc:_ Thickens and slows down the sound.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x2mp3*\n' + Config.D_EMOJI + ' _Desc:_ Speeds up the sound by 2x.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3volume*\n' + Config.D_EMOJI + ' _Desc:_ Increases volume incrementally.\n\n' + Config.C_EMOJI + ' _Usage:_ *.bwimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies monochrome effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.vintageimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies vintage effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.edgeimage*\n' + Config.D_EMOJI + ' _Desc:_Applies edge effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.enhanceimage*\n' + Config.D_EMOJI + ' _Desc:_ Makes photo clearer.\ n\n' + Config.C_EMOJI + ' _Usage:_ *.blurimage*\n' + Config.D_EMOJI + ' _Desc:_ Blurs the background of the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.grenimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a grain effect to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *. negativeimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a negative color filter to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.rainbowimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a rainbow effect to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.colorimage*\n' + Config.D_EMOJI + ' _Desc:_ It makes the colors of the photo more vivid and attractive.\n\n' + Config.C_EMOJI + ' _Usage:_ *.artimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a drawing effect to the photo.');
    }));

    Alpha.addCommand({pattern: 'x4mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Alpha.addCommand({pattern: 'mp3bass$', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "bass=g=9:f=110:w=0.6"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Alpha.addCommand({pattern: 'x2mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4image', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.image) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'spectrum', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'waves', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'frequency', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'avec', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'volumeaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'cqtaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3eq', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3crusher', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4vintage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4bw', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'bwimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'vintageimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4enhance', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'blurimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4blur', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3pitch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4edge', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3low', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'x2mp3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'edgeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'enhanceimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3volume', fromMe: true, dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    })); 

    Alpha.addCommand({pattern: 'gif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('./media/output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'agif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('./media/output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.CAPTION });
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'grenimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'interp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false && match[1] === '') return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*');
        await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        
        exec('ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json ' + location, async (err, st, stderr) => {
            var stdout = JSON.parse(st)
            var value = { value: 100 }
            var time_c = { time: 1 }
            if (stdout.format.size / 1000000 > 0 && stdout.format.size / 1000000 < 6) {
                value.value = value.value - 2
                time_c.time = time_c.time + 1
            }
            if (stdout.format.size / 1000000 > 5 && stdout.format.size / 1000000 < 11) {
                value.value = value.value - 5
                time_c.time = time_c.time + 1.4
            }
            if (stdout.format.size / 1000000 > 10 && stdout.format.size / 1000000 < 21) {
                value.value = value.value - 9
                time_c.time = time_c.time + 2
            }
            if (stdout.format.size / 1000000 > 20 && stdout.format.size / 1000000 < 31) {
                value.value = value.value - 25
                time_c.time = time_c.time + 2.3
            }
            if (stdout.format.size / 1000000 > 30) {
                value.value = value.value - 39
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].duration > 0 && stdout.streams[0].duration < 21) {
                value.value = value.value - 4
                time_c.time = time_c.time + 1
            }
            if (stdout.streams[0].duration > 20 && stdout.streams[0].duration < 41) {
                value.value = value.value - 9
                time_c.time = time_c.time + 1.4
            }
            if (stdout.streams[0].duration > 40 && stdout.streams[0].duration < 61) {
                value.value = value.value - 11
                time_c.time = time_c.time + 2
            }
            if (stdout.streams[0].duration > 60 && stdout.streams[0].duration < 81) {
                value.value = value.value - 15
                time_c.time = time_c.time + 2.7
            }
            if (stdout.streams[0].duration > 80 && stdout.streams[0].duration < 101) {
                value.value = value.value - 21
                time_c.time = time_c.time + 3.4
            }
            if (stdout.streams[0].duration > 100 && stdout.streams[0].duration < 121) {
                value.value = value.value - 27
                time_c.time = time_c.time + 4
            }
            if (stdout.streams[0].duration > 120) {
                value.value = value.value - 39
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 0 && stdout.streams[0].r_frame_rate.split('/')[0] < 11) {
                value.value = value.value + 1
                time_c.time = time_c.time - 0.6
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 10 && stdout.streams[0].r_frame_rate.split('/')[0] < 21) {
                value.value = value.value - 3
                time_c.time = time_c.time + 1
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 20 && stdout.streams[0].r_frame_rate.split('/')[0] < 31) {
                value.value = value.value - 19
                time_c.time = time_c.time + 2.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41) {
                value.value = value.value - 31
                time_c.time = time_c.time + 4.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40) {
                value.value = value.value - 40
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 9 && stdout.streams[0].r_frame_rate.split('/')[0] < 31 && match[1] > 39) {
                time_c.time = time_c.time + 3.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 39) {
                time_c.time = time_c.time + 5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 49) {
                time_c.time = time_c.time + 5.4
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 59) {
                time_c.time = time_c.time + 6
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 69) {
                time_c.time = time_c.time + 7.5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 59) {
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 64) {
                time_c.time = time_c.time + 9.2
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 69) {
                time_c.time = time_c.time + 9.5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 75) {
                time_c.time = time_c.time + 10
            }
            let prcs = Config.LANG == 'SI' || Config.LANG == 'EN' ? '_මෙම ක්‍රියාවලිය සඳහා යම් කාලයක් ගත විය හැකිය:_ *' + time_c.time + ' මිනිත්තු*\n _සාර්ථකත්ව අනුපාතය:_ *' + value.value + '%*' : '_This process may take a while._\n_Envisaged Time:_ *' + time_c.time + ' Minute*\n_Success Rate:_ *' + value.value + '%*'
            await message.client.sendMessage(message.jid,prcs, MessageType.text, {quoted: message.data});
            var dam = 10
            ffmpeg(location)
                .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
                .format('mp4')
                .save('./media/output.mp4')
                .on('progress', async (progress) => {
                    var l = progress.percent
                    while (l > 10 && dam == 10) {
                        dam = 1
                        let yon = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%10 සම්පූර්ණ කළා!*' : '*Completed %10!*'
                        await message.client.sendMessage(message.jid,yon, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 30 && dam == 1) {
                        dam = 2
                        let yotuz = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%30 සම්පූර්ණ කළා!*' : '*Completed %30!*'
                        await message.client.sendMessage(message.jid,yotuz, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 50 && dam == 2) {
                        dam = 3
                        let yelli = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%50 සම්පූර්ණ කළා!*' : '*Completed %50!*'
                        await message.client.sendMessage(message.jid,yelli, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 70 && dam == 3) {
                        dam = 4
                        let yetmis = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%70 සම්පූර්ණ කළා!*' : '*Completed %70!*'
                        await message.client.sendMessage(message.jid,yetmis, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 90 && dam == 4) {
                        dam = 5
                        let vprocc = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*වීඩියෝව සූදානම් වෙමින් පවතී ..*' : '*Preparing Video..*'
                        await message.client.sendMessage(message.jid,vprocc, MessageType.text, {quoted: message.data})
                        
                    }
                })
                .on('end', async () => {
                    dam = 10
                    await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: `Made by WhatsAlpha\n_Interpolated to ${match[1]} FPS_`});
                });
        });
    }));

    Alpha.addCommand({pattern: 'rainbowimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4rainbow', fromMe: true, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'negativeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4negative', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4art', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'artimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4stab', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4color', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'colorimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4slowmo', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text, {quoted: message.data});

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('./media/slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion by WhatsAlpha'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

   Alpha.addCommand({pattern: 'emedia$', fromMe: false, desc: Lang.XMEDIA_DESC}, (async (message, match) => {    
        if (Config.LANG == 'SI') {
            await message.sendMessage('Desc *.mp4slowmo*\ n🔎 Desc: slow මන්දගාමී නොවන වීඩියෝ සඳහා සත්‍ය-ස්ලෝමෝ අදාළ වේ. \ n \ n🧩 Desc:*.x4mp4*\ n🔎Desc: Video වීඩියෝ ගුණය 4 ගුණයකින් අඩු කරයි. \ n \ n🧩 Desc: *.x2mp4 *\ n🔎Desc: වීඩියෝ ගුණය 2 ගුණයකින් වැඩි වේ. \ n \ n🧩 Desc: *.gif *\ n🔎Desc: video වීඩියෝව gif බවට පරිවර්තනය කරයි. \ n \ n🧩 Desc: *.agif *\ n🔎Desc: audio ශ්‍රව්‍ය සමඟ වීඩියෝව gif බවට පරිවර්තනය කරයි. \ N \ n🧩 Desc: *.mp4blur *\ n🔎 Desc: video වීඩියෝ පසුබිම බොඳ කරයි. \ N \ n🧩 Desc: Desc . n🧩 Desc: *.mp4negative *\ n🔎Desc: video වීඩියෝ පටයට negativeණාත්මක වර්ණ පෙරහනක් යෙදෙයි. \ n \ n🧩 Desc: *.mp4vintage *\ n🔎Desc: video වීඩියෝ පටයට විකාර බලපෑම අදාළ වේ. \ n \ n Desc: *.mp4bw *\ n🔎Desc: වීඩියෝ සඳහා ඒකවර්ණ ආචරණය අදාළ වේ. \ N \ n🧩 Desc: *.mp4 ප්‍රතිලෝම *\ n🔎Desc: video වීඩියෝව ප්‍රතිලෝමව වාදනය කරන්න. \ N \ n🧩 භාවිතා කරන්න: *.mp4edge *\ n🔎Desc: edge දාර ප්‍රයෝගය අදාළ වේ වීඩියෝ වෙත. \ n \ n🧩 භාවිතා කරන්න: *.mp4image *\ n🔎Desc: photo ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරයි. \ n \ n🧩 භාවිතා කරන්න: *. වර්ණාවලිය *\ n🔎Desc: sound ශබ්ද වර්ණාවලිය පිළිබිඹු කරයි වීඩියෝ බවට. \ n \ n🧩 Desc: *. තරංග *\ n🔎Desc: the ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි. \ n \ n🧩 Desc: *. සංඛ්‍යාතය *\ n🔎Desc: ver පරිවර්‍තනය කරයි ශබ්දයේ වීඩියෝ පටයේ සංඛ්‍යාත පරාසය. \ n \ n🧩 ප්‍රයෝජනය: *.avec *\ n🔎Desc: the ශබ්දය වෙනස් නම් og ක්‍රමාංකය වීඩියෝව බවට පරිවර්තනය කරයි. \ n \ n🧩 Desc: *. පරිමාව ශ්‍රව්‍ය *\ n Desc: Dec ඩෙසිබල් ශ්‍රව්‍ය වල වටිනාකම වීඩියෝ බවට පරිවර්තනය කරයි. \ N \ n🧩 Desc: *.cqtaudio *\ n🔎Desc: Aud ශ්‍රව්‍ය CQT වීඩියෝ බවට පරිවර්තනය කරයි. \ N \ n🧩 Desc: *.mp3eq *\ n Desc \ n🔎Desc: Re ශ්රව්ය උපකරණ ආපසු හරවන්න. ශබ්දය. සහ ශබ්දය මන්දගාමී කරයි. \ n \ n🧩 Desc: *.x2mp3 *\ n🔎Desc: 2 ශබ්දය 2x කින් වේගවත් කරයි. \ n \ n🧩 Desc: *.mp3 වෙළුම *\ n🔎Desc: ases වැඩි වේ පරිමාව වැඩි කිරීම. \ n \ n🧩 Desc: *.bwimage *\ n🔎Desc: photo ඡායාරූපය සඳහා ඒකවර්ණ ආචරණය යොදයි. \ n \ n🧩 Desc: *.vintageimage *\ n🔎Desc: 🇹 photo ඡායාරූපය සඳහා මිදි වතු බලපෑම . = n🧩 ප්‍රයෝජනය: *. බ්ලූරිමේජ් *\ n🔎Desc: the ඡායාරූපයේ පසුබිම බොඳ කරයි. \ n \ n🧩 Desc: *. ප්‍රභූ රූප *\ n🔎Desc: the ඡායාරූපය සඳහා ධාන්‍ය බලපෑමක් ඇති කරයි. \ n \ n🧩 Desc: *. negativeimage*\ n🔎Desc: the ඡායාරූපය සඳහා negativeණාත්මක වර්ණ පෙරහනක් යොදන්න. \ n \ n🧩 Desc:*. රේන්බෝවිමේජ්*\ n🔎Desc: the ඡායාරූපය සඳහා දේදුන්නක් යෙදීම. \ n \ n🧩 Desc .');
       } else { 
            await message.sendMessage('💻Usage: *.mp4enhance*\n🔎Desc: Increases the quality of the video.\n\n🧩Usage: *.interp*\n🔎Desc: Increases the FPS of the video.\n\n🧩Usage: *.mp4slowmo*\n🔎Desc: Applies true-slowmo to videos that are not slow motion.\n\n🧩Usage: *.x4mp4*\n🔎Desc: Decreases Video Quality by 4 times.\n\n🧩Usage: *.x2mp4*\n🔎Desc: Video Quality by 2 times.\n\n🧩Usage: *.gif*\n🔎Desc: Converts video to gif.\n\n🧩Usage: *.agif*\n🔎Desc: Converts video to gif with audio.\n \n🧩Usage: *.mp4blur*\n🔎Desc: Blurs the video background.\n\n🧩Usage: *.mp4stab*\n🔎Desc: Decreases the vibration of the video.\n\n🧩Usage: *.mp4rainbow* \n🔎Desc: Applies a rainbow effect to the video.\n\n🧩Usage: *.mp4color*\n🔎Desc: Makes the colors of the video more vivid and attractive.\n\n🧩Usage: *.mp4art*\n🔎Desc: Applies drawing effect to video.\n\n🧩Usage: *.mp4negative*\n🔎Desc:Applies negative color filter to video.\n\n🧩Usage: *.mp4vintage*\n🔎Desc: Applies nostalgia effect to video.\n \n🧩Usage: *.mp4bw*\n🔎Desc: Monochrome effect to video applies.\n\n🧩Usage: *.mp4reverse*\n🔎Desc: Plays video in reverse.\n\n🧩Usage: *.mp4edge*\n🔎Desc: Applies edge effect to video.\n\n🧩Usage: *.mp4image*\n🔎Desc: Converts photo to 5 second video.\n\n🧩Usage: *.spectrum*\n🔎Desc: Makes sound spectrum image into video.\n\n🧩Usage: *.waves*\n🔎Desc : Converts the wave range of the sound to video.\n\n🧩Usage: *.frequency*\n🔎Desc: Converts the frequency range of the sound to video.\n\n🧩Usage: *.avec*\n🔎Desc: If the sound is different Converts histogram to video.\n\n🧩Usage: *.volumeaudio*\n🔎Desc: Converts Decibel Value of Audio to Video.\n\n🧩Usage: *.cqtaudio*\n🔎Desc: Converts Audio CQT to video.\n \n🧩Usage: *.mp3eq*\n🔎Desc: Adjusts the sound to crystal clear level.\n\n🧩Usage: *.mp3crusher*\n🔎Desc: Distorts the sound and makes it ridiculous.\n\n🧩Usage: *.mp3reverse*\n🔎Desc: Plays the Audio in Reverse.\n\n🧩Usage: *.mp3bass* \n🔎Desc: Increases the bass level of the music without distorting the sound.\n\n🧩Usage: *.mp3pitch*\n🔎Desc : It makes the sound thinner and It speeds up.\n\n🧩Usage *.mp3low*\n🔎Desc: Thickens and slows down the sound.\n\n🧩Usage: *.x2mp3*\n🔎Desc: Speeds up the sound by 2x.\n\n🧩Usage: *.mp3volume*\n🔎Desc: Increases volume incrementally.\n\n🧩Usage: *.bwimage*\n🔎Desc: Applies monochrome effect to photo.\n\n🧩Usage: *.vintageimage*\n🔎Desc: 🇹 🇷 Applies vintage effect to photo.\n\n🧩Usage: *.edgeimage*\n🔎Desc:Applies edge effect to photo.\n\n🧩Usage: *.enhanceimage*\n🔎Desc: Makes photo clearer.\ n\n🧩Usage: *.blurimage*\n🔎Desc: Blurs the background of the photo.\n\n🧩Usage: *.grenimage*\n🔎Desc: Applies a grain effect to the photo.\n\n🧩Usage: *. negativeimage*\n🔎Desc: Applies a negative color filter to the photo.\n\n🧩Usage: *.rainbowimage*\n🔎Desc: Applies a rainbow effect to the photo.\n\n🧩Usage: *.colorimage*\n🔎Desc: It makes the colors of the photo more vivid and attractive.\n\n🧩Usage: *.artimage*\n🔎Desc: Applies a drawing effect to the photo.');
       }
        
    }));


    Alpha.addCommand({pattern: 'x4mp4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'x2mp4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4image', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'spectrum', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'waves', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'frequency', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'avec', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'volumeaudio', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'cqtaudio', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3eq', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3crusher', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3reverse', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4vintage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4reverse', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4bw', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'bwimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'vintageimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4enhance', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'blurimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4blur', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3pitch', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4edge', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3low', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'x2mp3', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'edgeimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'enhanceimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp3volume', fromMe: false, dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('./media/output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    })); 

    Alpha.addCommand({pattern: 'gif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('./media/output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'agif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('./media/output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('./media/output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: Config.CAPTION });
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'grenimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'interp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false && match[1] === '') return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*');
        await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        
        exec('ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json ' + location, async (err, st, stderr) => {
            var stdout = JSON.parse(st)
            var value = { value: 100 }
            var time_c = { time: 1 }
            if (stdout.format.size / 1000000 > 0 && stdout.format.size / 1000000 < 6) {
                value.value = value.value - 2
                time_c.time = time_c.time + 1
            }
            if (stdout.format.size / 1000000 > 5 && stdout.format.size / 1000000 < 11) {
                value.value = value.value - 5
                time_c.time = time_c.time + 1.4
            }
            if (stdout.format.size / 1000000 > 10 && stdout.format.size / 1000000 < 21) {
                value.value = value.value - 9
                time_c.time = time_c.time + 2
            }
            if (stdout.format.size / 1000000 > 20 && stdout.format.size / 1000000 < 31) {
                value.value = value.value - 25
                time_c.time = time_c.time + 2.3
            }
            if (stdout.format.size / 1000000 > 30) {
                value.value = value.value - 39
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].duration > 0 && stdout.streams[0].duration < 21) {
                value.value = value.value - 4
                time_c.time = time_c.time + 1
            }
            if (stdout.streams[0].duration > 20 && stdout.streams[0].duration < 41) {
                value.value = value.value - 9
                time_c.time = time_c.time + 1.4
            }
            if (stdout.streams[0].duration > 40 && stdout.streams[0].duration < 61) {
                value.value = value.value - 11
                time_c.time = time_c.time + 2
            }
            if (stdout.streams[0].duration > 60 && stdout.streams[0].duration < 81) {
                value.value = value.value - 15
                time_c.time = time_c.time + 2.7
            }
            if (stdout.streams[0].duration > 80 && stdout.streams[0].duration < 101) {
                value.value = value.value - 21
                time_c.time = time_c.time + 3.4
            }
            if (stdout.streams[0].duration > 100 && stdout.streams[0].duration < 121) {
                value.value = value.value - 27
                time_c.time = time_c.time + 4
            }
            if (stdout.streams[0].duration > 120) {
                value.value = value.value - 39
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 0 && stdout.streams[0].r_frame_rate.split('/')[0] < 11) {
                value.value = value.value + 1
                time_c.time = time_c.time - 0.6
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 10 && stdout.streams[0].r_frame_rate.split('/')[0] < 21) {
                value.value = value.value - 3
                time_c.time = time_c.time + 1
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 20 && stdout.streams[0].r_frame_rate.split('/')[0] < 31) {
                value.value = value.value - 19
                time_c.time = time_c.time + 2.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41) {
                value.value = value.value - 31
                time_c.time = time_c.time + 4.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40) {
                value.value = value.value - 40
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 9 && stdout.streams[0].r_frame_rate.split('/')[0] < 31 && match[1] > 39) {
                time_c.time = time_c.time + 3.3
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 39) {
                time_c.time = time_c.time + 5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 49) {
                time_c.time = time_c.time + 5.4
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 59) {
                time_c.time = time_c.time + 6
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 30 && stdout.streams[0].r_frame_rate.split('/')[0] < 41 && match[1] > 69) {
                time_c.time = time_c.time + 7.5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 59) {
                time_c.time = time_c.time + 9
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 64) {
                time_c.time = time_c.time + 9.2
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 69) {
                time_c.time = time_c.time + 9.5
            }
            if (stdout.streams[0].r_frame_rate.split('/')[0] > 40 && stdout.streams[0].r_frame_rate.split('/')[0] < 61 && match[1] > 75) {
                time_c.time = time_c.time + 10
            }
            let prcs = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '_Bu işlem biraz uzun sürebilir._\n_Öngörülen Süre:_ *' + time_c.time + ' Dakika*\n_Başarı Oranı:_ *' + value.value + '%*' : '_This process may take a while._\n_Envisaged Time:_ *' + time_c.time + ' Minute*\n_Success Rate:_ *' + value.value + '%*'
            await message.client.sendMessage(message.jid,prcs, MessageType.text, {quoted: message.data});
            var dam = 10
            ffmpeg(location)
                .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
                .format('mp4')
                .save('./media/output.mp4')
                .on('progress', async (progress) => {
                    var l = progress.percent
                    while (l > 10 && dam == 10) {
                        dam = 1
                        let yon = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%10 Tamamlandı!*' : '*Completed %10!*'
                        await message.client.sendMessage(message.jid,yon, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 30 && dam == 1) {
                        dam = 2
                        let yotuz = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%30 Tamamlandı!*' : '*Completed %30!*'
                        await message.client.sendMessage(message.jid,yotuz, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 50 && dam == 2) {
                        dam = 3
                        let yelli = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%50 Tamamlandı!*' : '*Completed %50!*'
                        await message.client.sendMessage(message.jid,yelli, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 70 && dam == 3) {
                        dam = 4
                        let yetmis = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*%70 Tamamlandı!*' : '*Completed %70!*'
                        await message.client.sendMessage(message.jid,yetmis, MessageType.text, {quoted: message.data})
                        
                    }
                    
                    while (l > 90 && dam == 4) {
                        dam = 5
                        let vprocc = Config.LANG == 'SI' || Config.LANG == 'AZ' ? '*Video Hazırlanıyor..*' : '*Preparing Video..*'
                        await message.client.sendMessage(message.jid,vprocc, MessageType.text, {quoted: message.data})
                        
                    }
                })
                .on('end', async () => {
                    dam = 10
                    await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {caption: `Made by WhatsAlpha\n_Interpolated to ${match[1]} FPS_`});
                });
        });
    }));

    Alpha.addCommand({pattern: 'rainbowimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4rainbow', fromMe: false, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'negativeimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4negative', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4art', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'artimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4stab', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4color', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('./media/output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'colorimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('./media/output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Alpha.addCommand({pattern: 'mp4slowmo', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message.video === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text, {quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text, {quoted: message.data});

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('./media/slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('./media/slowmo.mp4'), MessageType.video, {caption: Config.CAPTION });
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
