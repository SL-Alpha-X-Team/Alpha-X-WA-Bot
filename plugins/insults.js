const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (config.LANG == 'EN') DESC = 'It gives random insults.'
if (config.LANG == 'SI') DESC = 'එය අහඹු ලෙස අපහාස කිරීම් ලබාදේ.'
if (config.LANG == 'KN') DESC = 'ಇದು ಯಾದೃಚ್ಛಿಕ ಅವಮಾನಗಳನ್ನು ನೀಡುತ್ತದೆ.'
if (config.LANG == 'ML') DESC = 'ഇത് ക്രമരഹിതമായ അപമാനങ്ങൾ നൽകുന്നു.'
if (config.LANG == 'TR') DESC = 'Rastgele hakaretler veriyor.'
if (config.LANG == 'RU') DESC = 'Он дает случайные оскорбления.'
if (config.LANG == 'AZ') DESC = 'Təsadüfi təhqirlər verir.'

AlphaX.addCommand({pattern: 'insult$', fromMe: WType, desc: DESC}, async (message, match) => {
	  
	  const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n👿```' + json.insult + '``` 🤬\n\n', MessageType.text, {quoted: message.data});
	  } catch {
		  return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	  }
  });
