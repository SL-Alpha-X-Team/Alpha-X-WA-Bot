const AlphaX = require('../events');
const Config = require('../config');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const axios = require('axios');
let WType = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('_alpha');

    AlphaX.addCommand({pattern:`${Config.CL_KEY} ?(.*)`, fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${Config.CL_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

        var CMD_HELP = '';
        if (match[1] === '') {
            AlphaX.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += ' *' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*' + Config.D_EMOJI + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*' + Config.D_EMOJI + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*' + Config.D_EMOJI + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* _' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '_\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '```\n' + '*' + Config.D_EMOJI + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                    }
                }
            );

    const rows = [
        {title: '෴ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs 🎊', description: "ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ 🥇\n\n" + Config.BOTNAME + "\n\n" + CMD_HELP, rowId: "rowid1"},
        {title: '෴ ʟᴏɢᴏ ᴍᴀᴋᴇʀ 🎗️', description: "ʟᴏɢᴏ ᴍᴀᴋᴇʀ ᴍᴇɴᴜ 🌉 \n\n_" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .logomaker_", rowId: "rowid1"},
        {title: '෴ ᴀᴅᴍɪɴ 🔏', description: "ᴀᴅᴍɪɴ ᴍᴇɴᴜ 🔥 \n\n_" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .admin_", rowId: "rowid1"},
        {title: '෴ ᴘʀᴏғɪʟᴇ ⚙️', description: "ᴘʀᴏғɪʟᴇ ᴍᴇɴᴜ 👨‍💻 \n\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .profile_", rowId: "rowid1"},
        {title: '෴ ᴅᴏᴡɴʟᴏᴀᴅᴇʀs 📩', description: "ᴅᴏᴡɴʟᴏᴀᴅ 📩 \n\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .song [ FREE ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .video [ FREE ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .fb [ API ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .pinimg [ FREE ]️\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .tiktok [ API ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .img [ FREE ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .ig [ API ]\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .spack (Comming soon..🛠️)\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .dfont (Comming soon..🛠️)\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .mfire (Comming soon..🛠️)\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .gdrive (Comming soon..🛠️)\n", rowId: "rowid1"},
        {title: '෴ ᴇᴅɪᴛ ᴍᴇᴅɪᴀ ✂️', description: "ᴇᴅɪᴛ ᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴍᴀɴᴅs ✂️️ \n\n" + Config.C_EMOJI + ' _Usage:_ *.mp4enhance*\n' + Config.D_EMOJI + ' _Desc:_ Increases the quality of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.interp*\n' + Config.D_EMOJI + ' _Desc:_ Increases the FPS of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4slowmo*\n' + Config.D_EMOJI + ' _Desc:_ Applies true-slowmo to videos that are not slow motion.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x4mp4*\n' + Config.D_EMOJI + ' _Desc:_ Decreases Video Quality by 4 times.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x2mp4*\n' + Config.D_EMOJI + ' _Desc:_ Video Quality by 2 times.\n\n' + Config.C_EMOJI + ' _Usage:_ *.gif*\n' + Config.D_EMOJI + ' _Desc:_ Converts video to gif.\n\n' + Config.C_EMOJI + ' _Usage:_ *.agif*\n' + Config.D_EMOJI + ' _Desc:_ Converts video to gif with audio.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp4blur*\n' + Config.D_EMOJI + ' _Desc:_ Blurs the video background.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4stab*\n' + Config.D_EMOJI + ' _Desc:_ Decreases the vibration of the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4rainbow* \n' + Config.D_EMOJI + ' _Desc:_ Applies a rainbow effect to the video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4color*\n' + Config.D_EMOJI + ' _Desc:_ Makes the colors of the video more vivid and attractive.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4art*\n' + Config.D_EMOJI + ' _Desc:_ Applies drawing effect to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4negative*\n' + Config.D_EMOJI + ' _Desc:_Applies negative color filter to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4vintage*\n' + Config.D_EMOJI + ' _Desc:_ Applies nostalgia effect to video.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp4bw*\n' + Config.D_EMOJI + ' _Desc:_ Monochrome effect to video applies.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4reverse*\n' + Config.D_EMOJI + ' _Desc:_ Plays video in reverse.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4edge*\n' + Config.D_EMOJI + ' _Desc:_ Applies edge effect to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp4image*\n' + Config.D_EMOJI + ' _Desc:_ Converts photo to 5 second video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.spectrum*\n' + Config.D_EMOJI + ' _Desc:_ Makes sound spectrum image into video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.waves*\n' + Config.D_EMOJI + ' _Desc:_ Converts the wave range of the sound to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.frequency*\n' + Config.D_EMOJI + ' _Desc:_ Converts the frequency range of the sound to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.avec*\n' + Config.D_EMOJI + ' _Desc:_ If the sound is different Converts histogram to video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.volumeaudio*\n' + Config.D_EMOJI + ' _Desc:_ Converts Decibel Value of Audio to Video.\n\n' + Config.C_EMOJI + ' _Usage:_ *.cqtaudio*\n' + Config.D_EMOJI + ' _Desc:_ Converts Audio CQT to video.\n \n' + Config.C_EMOJI + ' _Usage:_ *.mp3eq*\n' + Config.D_EMOJI + ' _Desc:_ Adjusts the sound to crystal clear level.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3crusher*\n' + Config.D_EMOJI + ' _Desc:_ Distorts the sound and makes it ridiculous.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3reverse*\n' + Config.D_EMOJI + ' _Desc:_ Plays the Audio in Reverse.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3bass* \n' + Config.D_EMOJI + ' _Desc:_ Increases the bass level of the music without distorting the sound.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3pitch*\n' + Config.D_EMOJI + ' _Desc:_ It makes the sound thinner and It speeds up.\n\n🧩Usage *.mp3low*\n' + Config.D_EMOJI + ' _Desc:_ Thickens and slows down the sound.\n\n' + Config.C_EMOJI + ' _Usage:_ *.x2mp3*\n' + Config.D_EMOJI + ' _Desc:_ Speeds up the sound by 2x.\n\n' + Config.C_EMOJI + ' _Usage:_ *.mp3volume*\n' + Config.D_EMOJI + ' _Desc:_ Increases volume incrementally.\n\n' + Config.C_EMOJI + ' _Usage:_ *.bwimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies monochrome effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.vintageimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies vintage effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.edgeimage*\n' + Config.D_EMOJI + ' _Desc:_Applies edge effect to photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.enhanceimage*\n' + Config.D_EMOJI + ' _Desc:_ Makes photo clearer.\ n\n' + Config.C_EMOJI + ' _Usage:_ *.blurimage*\n' + Config.D_EMOJI + ' _Desc:_ Blurs the background of the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.grenimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a grain effect to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *. negativeimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a negative color filter to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.rainbowimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a rainbow effect to the photo.\n\n' + Config.C_EMOJI + ' _Usage:_ *.colorimage*\n' + Config.D_EMOJI + ' _Desc:_ It makes the colors of the photo more vivid and attractive.\n\n' + Config.C_EMOJI + ' _Usage:_ *.artimage*\n' + Config.D_EMOJI + ' _Desc:_ Applies a drawing effect to the photo.', rowId: "rowid1"},
        {title: '෴ ᴅᴇᴇᴘ ᴀɪ 📊', description: "ᴅᴇᴇᴘ ᴀɪ ᴄᴏᴍᴍᴀɴᴅs 🧩 ️\n\n" + Config.C_EMOJI + ' Usage: *.moodai <text>*\n' + Config.D_EMOJI + ' Desc: It finds your mood from the article you wrote.\n\n' + Config.C_EMOJI + ' Usage: *.colorai*\n' + Config.D_EMOJI + ' Desc : Colorizes black and white photos.\n\n' + Config.C_EMOJI + ' Usage: *.faceai*\n' + Config.D_EMOJI + ' Desc: With artificial intelligence, it generates human faces that never existed before.\n\n' + Config.C_EMOJI + ' Usage: *.animai*\n' + Config.D_EMOJI + ' Desc: Generates anime faces with artificial intelligence, that never existed before.\n\n' + Config.C_EMOJI + ' Usage: *.superai*\n' + Config.D_EMOJI + ' Desc: Improves photo quality with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *.waifuai*\n' + Config.D_EMOJI + ' Desc: Combines the color palettes of photos with artificial intelligence.\n Combines the color palettes of photos with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *.dreamai*\n' + Config.D_EMOJI + ' Desc: Deepdream to photo \n Applies deepdream effect to the p hoto.\n\n' + Config.C_EMOJI + ' Usage: *.neuraltalkai*\n' + Config.D_EMOJI + ' Desc: Explains the thing in the photo with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *. ttiai <text>*\n' + Config.D_EMOJI + ' Desc: Converts text to picture.\n Converts text to a picture. (Text-to-Image)\n\n' + Config.C_EMOJI + ' Usage: *.toonai*\n' + Config.D_EMOJI + ' Desc: Turns the face in the photo into a cartoon character..\n\n ' + Config.C_EMOJI + ' Usage: *.textai <text>*\n' + Config.D_EMOJI + ' Desc: It creates an artificial story for you from your sentence.\n\n' + Config.C_EMOJI + ' Usage: *.nudityai* \n' + Config.D_EMOJI + ' Desc: Shows the NSFW value in the photo between 1 and 0.\n\n' + Config.C_EMOJI + ' Usage: *.ganstyle*\n' + Config.D_EMOJI + " Desc: Combines the photo you replied to with the currently selected image.\n\n⚠️ *All these AI tools work with in-depth learning.  The more you use it, the more information it stores.* ```Use only English characters!```", rowId: "rowid1"},
        {title: '෴ sᴇᴀʀᴄʜ 🔎', description: "sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs 🔎 \n\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .yt\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .playst\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .hpmod\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .wiki\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .spotify\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .github\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .sweather\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .weather\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .lyric\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .dict\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .covid\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .detectlang\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .currency\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .trt\n", rowId: "rowid1"},
        {title: '෴ ʀᴀɴᴅᴏᴍ 👾️', description: "ʀᴀɴᴅᴏᴍ ᴄᴏᴍᴍᴀɴᴅs 👾 \n\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .compliment\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .insult\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .quote\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .wallpaper (Comming soon..🛠️)\n", rowId: "rowid1"},
        {title: '෴ sᴘᴀᴍ ⚠️', description: "ʙᴜɢ/ᴀɴᴛɪsᴘᴀᴍ/sᴘᴀᴍ ᴄᴏᴍᴍᴀɴᴅs ☢️ \n\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .CrAsH (bug ⚠️️)\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .CrAsH high (bug ⚠️️)️️\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .spam\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .foto spam \n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .vid spam\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .sticker spam\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .alag\n" + Config.C_EMOJI + " ᴄᴏᴍᴍᴀᴍᴅ: .aspm\n", rowId: "rowid1"},
        {title: `${Config.CMENU}`, description: `${Config.CMENU_MSG}`, rowId: "rowid1"}
                 ]

        const sections = [{title: "🔥 ᴄᴏᴍᴍᴀɴᴅs 🚀", rows: rows}]

        const button = {
         buttonText: '🍁 ᴄᴏᴍᴍᴀɴᴅs .•°',
         description: "\n\n                *√ ᴄᴏᴍᴍᴀɴᴅs ᴍᴇɴᴜ 🎊* \n                _Click the button bellow._\n         *╰────────────────────╯*\n",
         sections: sections,
         listType: 1
                       }

    await message.client.sendMessage(message.jid, button , MessageType.listMessage, { contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🎗️ ᴄᴏᴍᴍᴀɴᴅs ᴍᴇɴᴜ 🍁" , "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
                       
        } else {
            var CMD_HELP = '';
            AlphaX.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '_' + Config.D_EMOJI + ' '  + Lang.DESC + ':_ ```' + command.desc + '``` \n\n';
                        }
                        if (command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                        }
                        if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '_' + Config.D_EMOJI + ' '  + Lang.DESC + ':_ ```' + command.desc + '``` \n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n\n';
                        }
                        if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '_' + Config.D_EMOJI + ' '  + Lang.DESC + ':_ ```' + command.desc + '``` \n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                        }
                        if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                        }
                        if  (command.desc == '' && command.usage == '' && command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '_\n\n'
                        }
                        if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                            CMD_HELP += '_' + Config.C_EMOJI + ' '  + Lang.COMMAND + ':_ ```' + (cmatch.length >= 3 ? (HANDLER + cmmatch) : command.pattern) + '```\n' + '_' + Config.D_EMOJI + ' '  + Lang.DESC + ':_ ```' + command.desc + '``` \n' + '*💡' + ' '  + Lang.EXAMPLE + ':* _' + command.usage + '_\n' + '*' + Config.W_EMOJI + ' '  + Lang.WARN + ':* _' + command.warn + '_\n\n'
                        }
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(
                message.jid, Config.BOTNAME + '\n\n' + CMD_HELP , MessageType.text, {quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '📎 Search: ' +  `${match[1]}` + ' 🔎', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}}

            );
         }
}));
