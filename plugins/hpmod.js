const AlphaX = require('../events');
const {MessageType, Mimetype, MeMessageOptions} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var HDESC = ''
if (config.LANG == 'EN') HDESC = 'To get mod apps info.'
if (config.LANG == 'SI') HDESC = 'ඔබට අවශ්‍ය මොඩ් ඇප් වල විස්තර ලබාගැනීමට.'
if (config.LANG == 'KN') HDESC = 'ಮಾಡ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು.'
if (config.LANG == 'ML') HDESC = 'മോഡ് ആപ്പ് വിവരങ്ങൾ ലഭിക്കാൻ.'
if (config.LANG == 'TR') HDESC = 'Mod uygulamaları bilgilerini almak için.'
if (config.LANG == 'RU') HDESC = 'Чтобы получить информацию о модовых приложениях.'
if (config.LANG == 'AZ') HDESC = 'Mod proqramları haqqında məlumat əldə etmək üçün.'

  AlphaX.addCommand({pattern: 'hpmod ?(.*)', fromMe: WType, desc: HDESC}, async (message, match) => {
  
  if (match[1] == '') return await message.client.sendMessage(message.jid, '_💻 Need app name!_' , MessageType.text, { quoted: message.data });
  
	const {data} = await axios(`https://api.zeks.me/api/happymod?q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`)
	const result = data.result[0]
	const status = data
	
	if(!status) return await message.client.sendMessage(message.jid, '```📍 Err. not found!!```' , MessageType.text, { quoted: message.data });
	
	await message.client.sendMessage(message.jid, '```📇 Gᴇᴛɪɴɢ APP ɪɴғᴏ √√```' , MessageType.text, { quoted: message.data });
	let msg = '\n'
	msg += '*💻 Aᴘᴘ Nᴀᴍᴇ :-* ```' + result.title + '```\n\n'
	msg += '*📊 Rᴀᴛɪɴɢ    :-* _' + result.rating + '_\n\n'
	msg += '*📥 Lɪɴᴋ      :-* ```' + result.url + '```\n'
	
    var pic = await axios.get(`${result.thumb}`, { responseType: 'arraybuffer' })
	return await message.client.sendMessage(message.jid, Buffer.from(pic.data) , MessageType.image, { mimetype: Mimetype.png, caption: msg, thumbnail: Buffer.from(pic.data), quoted: message.data });
	});
