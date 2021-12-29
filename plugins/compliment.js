const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (config.LANG == 'EN') DESC = 'It sends complimentry sentenses.'
if (config.LANG == 'SI') DESC = 'එය අනුපූරක වාක්‍ය යවයි.'
if (config.LANG == 'KN') DESC = 'ಇದು ಪೂರಕ ವಾಕ್ಯಗಳನ್ನು ಕಳುಹಿಸುತ್ತದೆ.'
if (config.LANG == 'TR') DESC = 'Tamamlayıcı cümleler gönderir.'
if (config.LANG == 'ML') DESC = 'ഇത് പൂരക വാക്യങ്ങൾ അയയ്ക്കുന്നു.'
if (config.LANG == 'RU') DESC = 'Он отправляет дополнительные предложения.'
if (config.LANG == 'AZ') DESC = 'Tamamlayıcı cümlələr göndərir.'

    AlphaX.addCommand({pattern: 'compliment$', fromMe: WType, desc: DESC}, async (message, match) => {
 
      const url = `https://complimentr.com/api`;
      try {
          const response = await got(url);
          const json = JSON.parse(response.body);
          if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *compliment : 🤗* ' + '\n🔎 ' + ' ```' + json.compliment + '```\n\n' , MessageType.text, {quoted: message.data});
      } catch {
          return await message.client.sendMessage(message.jid, '*❌ Error*' , MessageType.text, {quoted: message.data});
      }
  });
