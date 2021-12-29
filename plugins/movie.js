const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (config.LANG == 'EN') DESC = 'Shows movie info.'
if (config.LANG == 'SI') DESC = 'චිත්‍රපට තොරතුරු පෙන්වයි.'
if (config.LANG == 'KN') DESC = 'ಚಲನಚಿತ್ರ ಮಾಹಿತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ.'
if (config.LANG == 'ML') DESC = 'സിനിമ വിവരങ്ങൾ കാണിക്കുന്നു.'
if (config.LANG == 'TR') DESC = 'Film bilgilerini gösterir.'
if (config.LANG == 'RU') DESC = 'Показывает информацию о фильме.'
if (config.LANG == 'AZ') DESC = 'Film məlumatlarını göstərir.'

AlphaX.addCommand({ pattern: 'movie ?(.*)', fromMe: WType, desc: DESC}, (async (message, match) => {
	  if (match[1] === '') return await message.client.sendMessage(message.jid, '```🎬 Give me a Movie name.```', MessageType.text, { quoted: message.data });
	  let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	  const response = await got(url);
	  const json = JSON.parse(response.body);
	  if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*📍 Not found.*', MessageType.text, { quoted: message.data });
	  let msg = '';
 	  msg += '*🎬 Tɪᴛʟᴇ*      ━≫ _' + json.Title + '_\n\n';
	  msg += '*📅 Yᴇᴀʀ*       ━≫ _' + json.Year + '_\n\n';
	  msg += '*⭐ Rᴀᴛᴇᴅ*      ━≫ _' + json.Rated + '_\n\n';
	  msg += '*📍 Rᴇʟᴇᴀsᴇᴅ*   ━≫ ```' + json.Released + '```\n\n';
	  msg += '*💸 Rᴜɴᴛɪᴍᴇ*    ━≫ ```' + json.Runtime + '```\n\n';
	  msg += '*📚 Gᴇɴʀᴇ*      ━≫ ```' + json.Genre + '```\n\n';
	  msg += '*🙇 Dɪʀᴇᴄᴛᴏʀ*   ━≫ ```' + json.Director + '```\n\n';
	  msg += '*✍️ Wʀɪᴛᴇᴅ*     ━≫ ```' + json.Writer + '```\n\n';
	  msg += '*👥 Aᴄᴛᴏʀs*     ━≫ ```' + json.Actors + '```\n\n';
	  msg += '*📡 Pʟᴏᴛ*       ━≫ ```' + json.Plot + '```\n\n';
	  msg += '*🎙 ️Lᴀɴɢᴜᴀɢᴇ*   ━≫ ```' + json.Language + '```\n\n';
 	  msg += '*✨️ Cᴏᴜɴᴛʀʏ*    ━≫ ```' + json.Country + '```\n\n';
	  msg += '*🎊️ Aᴡᴀʀᴅs*     ━≫ ```' + json.Awards + '```\n\n';
	  msg += '*🎐 BᴏxOғғɪᴄᴇ*  ━≫ ```' + json.BoxOffice + '```\n\n';
	  msg += '*🏆️ Pʀᴘᴅᴜᴄᴛɪᴏɴ* ━≫ ```' + json.Production + '```\n\n';
	  msg += '*🎏️️ ɪᴍᴅʙRᴀᴛɪɴɢ* ━≫ ```' + json.imdbRating + '```\n\n';
	  msg += '*🎗️ ɪᴍᴅʙVᴏᴛᴇs*  ━≫ ```' + json.imdbVotes + '```';
	  
	  var pic = await axios.get(`${json.Poster}`, { responseType: 'arraybuffer' })
	  await message.client.sendMessage(message.jid, Buffer.from(pic.data) , MessageType.image, { caption: msg , thumbnail: Buffer.from(pic.data) ,quoted: message.data });
  }));
