const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const Axios = require('axios');
const fs = require('fs');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

let msg = '╭';
msg += '──────────────────╮ \n';
msg += ' *🔭 Ａｌｐｈａ-Ｘ-WA-BOT 📊*';
msg += '╭──────────────────╯'
msg += '\n│\n';
msg += '│ 🍁 *Dᴇᴠᴇʟᴏᴘʀᴇs* \n';
msg += '│ *• Sʟ-Aʟᴘʜᴀ-X* \n';
msg += '│ *• HᴀɴsᴀᴋᴀBʀᴏ* ';
msg += '\n│\n│';
msg += ' *🚀 Vᴇʀsɪᴏɴ️* \n';
msg += '│ ➲ _' + Config.VERSION + '_';
msg += '\n│\n';
msg += '│ *🛠️ Bʀᴀɴᴄʜ 🛠️* \n';
msg += '│ ➲ _' + Config.BRANCH + '_';
msg += '\n│\n';
msg += '│ *📨 Tᴇʟᴇɢʀᴀᴍ Gʀᴏᴜᴘ* \n';
msg += '│ ➲ _https://t.me/AlphaX_SUPPORT_';
msg += '\n│\n';
msg += '│ *🔌 Pʟᴜɢɪɴ Cʜᴀɴɴᴇʟ* \n';
msg += '│ ➲ _https://t.me/AlphaX_plugin_';
msg += '\n│\n';
msg += '│ *💸 Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ* \n';
msg += '│ ➲ _' + Config.GROUP + '_ \n';
msg += '╰──────────────────╯';


    AlphaX.addCommand({pattern: `${Config.AM_KEY} ?(.*)`, fromMe: WType, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await Axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await Axios.get(ppurl, {responseType : 'arraybuffer'}) }

            await message.client.sendMessage(message.jid, Buffer.from(PIC.data), MessageType.image, {mimetype: Mimetype.png, caption: msg, quoted: message.data, thumbnail: Buffer.from(PIC.data) });
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), quoted: message.data, thumbnail: Buffer(resim.data) });
            }
            else if (payload.includes('{logo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png'), MessageType.image, { mimetype: Mimetype.png, caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{logo}', ''), quoted: message.data, thumbnail: fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png') });
            }
            else {
            var payload = Config.ALIVEMSG
            const ppurl = await message.client.getProfilePicture(message.jid)
            let PIC
            try { PIC = await Axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await Axios.get(ppurl, {responseType : 'arraybuffer'}) }

                await message.sendMessage(Buffer(PIC.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), quoted: message.data, thumbnail: Buffer(PIC.data) });
            }
        }
    }));

    AlphaX.addCommand({pattern: 'sysd', fromMe: WType, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8');
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
