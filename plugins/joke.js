/*
const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

AlphaX.addCommand({pattern: 'joke$', fromMe: WType, desc: "Send random jokes."}, async (message, match) => {

	  const url = `https://official-joke-api.appspot.com/random_joke`;

	  try {
		  await axios.get(url).then(async (json) => {
		  
		  await message.client.sendMessage(message.jid,
		  '\n' +
		  '*🥲️ question:* ```' + json.data.setup + '```\n' +
	  	  '*😆 Answer:* ```' + json.data.punchline+ '```\n',
	  	  MessageType.text, { quoted: message.data });
	  	  
	  	  });
	  } catch {
		  return await message.client.sendMessage(message.jid,"*🥲 Error joke not found!*", MessageType.text, { quoted: message.data});
	  }
});
*/
