const AlphaX = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var HDESC = ''
if (config.LANG == 'EN') HDESC = 'Downloas images from Pinterest.'
if (config.LANG == 'SI') HDESC = 'ඔබට අවශ්‍ය චායාරූප Pinterest වලිම් ලබා ගැනීමට.'

AlphaX.addCommand({pattern: 'pinimg ?(.*)', fromMe: WType, desc: HDESC}, async (message, match) => {
  
  if (!match[1]) return await message.client.sendMessage(message.jid, '_ Enter eny name :-(_' , MessageType.text, { quoted: message.data });

  try { await axios.get("https://api.zeks.me/api/pinimg?apikey=apivinz&q=" + match[1]) } catch { await message.client.sendMessage(message.jid, '_⛔ Server unavailable please try again later.._' , MessageType.text, { quoted: message.data }) };

      try {

      await message.client.sendMessage(message.jid, '*Uploading 5 number* ```' + match[1] + '``` *images from pinterest.. 📨*' , MessageType.text, { quoted: message.data });

      await axios.get("https://api.zeks.me/api/pinimg?apikey=apivinz&q=" + `${match[1]}`).then(async (response) => {

      img_1  = response.data.data[0]
      img_2  = response.data.data[1]
      img_3  = response.data.data[2]
      img_4  = response.data.data[3]
      img_5  = response.data.data[4]
      
            var image_1 = await axios.get(`${img_1}`, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image_1.data),MessageType.image, { quoted: message.data, mimetype: Mimetype.png, caption: config.CAPTION + "\n\n*✨️ LINK :-* _" + img_1 + "_" });
            var image_2 = await axios.get(`${img_2}`, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image_2.data),MessageType.image, { quoted: message.data, mimetype: Mimetype.png, caption: config.CAPTION + "\n\n*✨️ LINK :-* _" + img_2 + "_" });
            var image_3 = await axios.get(`${img_3}`, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image_3.data),MessageType.image, { quoted: message.data, mimetype: Mimetype.png, caption: config.CAPTION + "\n\n*✨️ LINK :-* _" + img_3 + "_" });
            var image_4 = await axios.get(`${img_4}`, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image_4.data),MessageType.image, { quoted: message.data, mimetype: Mimetype.png, caption: config.CAPTION + "\n\n*✨️ LINK :-* _" + img_4 + "_" });
            var image_5 = await axios.get(`${img_5}`, {responseType: 'arraybuffer'});
      await message.client.sendMessage(message.jid,Buffer.from(image_5.data),MessageType.image, { quoted: message.data, mimetype: Mimetype.png, caption: config.CAPTION + "\n\n*✨️ LINK :-* _" + img_5 + "_" });
     
          });
          
      } catch {
      await message.client.sendMessage(message.jid, '_Request failed!!_' , MessageType.text, { quoted: message.data });
      };

});
