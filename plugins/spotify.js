const AlphaX = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var HDESC = ''
if (config.LANG == 'EN') HDESC = 'Get music details from spotify.'
if (config.LANG == 'SI') HDESC = 'ගීත වල විස්තර spotify මගින් ලබා ගැනීමට.'

AlphaX.addCommand({pattern: 'spotify ?(.*)', fromMe: WType, desc: HDESC}, async (message, match) => {
  
  if (!match[1]) return await message.client.sendMessage(message.jid, '*Enter eny song name :-(*' , MessageType.text, { quoted: message.data });

  try { await axios.get("https://api.zeks.me/api/spotify?apikey=apivinz&q=" + match[1]) } catch { await message.client.sendMessage(message.jid, '_⛔ Server unavailable please try again later.._' , MessageType.text, { quoted: message.data }) };

      try {

      await message.client.sendMessage(message.jid, '*Searching* _' + match[1] + '_ *on spotify..* 🚀' , MessageType.text, { quoted: message.data });

      axios.get("https://api.zeks.me/api/spotify?apikey=apivinz&q=" + `${encodeURIComponent(match[1])}`).then(async (response) => {

      const result   = response.data.data[0]
      const title    = result.title
      const artists  = result.artists
      const album    = result.album
      const thumb    = result.thumb
      const url      = result.url
      const mp3      = result.preview_mp3
      
            let image = await axios.get( thumb, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image.data), MessageType.image, { thumbnail: Buffer.from(image.data), quoted: message.data, mimetype: Mimetype.png, caption: `*✨️ ᴛɪᴛʟᴇ :-* _${title}_\n\n*🎶 ᴀʀᴛɪsᴛ :-* _${artists}_\n\n*🎈 ᴀʟʙᴜᴍ :-* _${album}_\n\n*📨 ᴜʀʟ :-* _${url}_\n\n🍁 *ᴘʀᴇᴠɪʀᴡ_ᴍᴘ3 :-* _${mp3}_` });
     
          });
          
      } catch {
      await message.client.sendMessage(message.jid, '_Request failed!!_' , MessageType.text, { quoted: message.data });
      };

});
