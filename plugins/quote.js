const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

AlphaX.addCommand({pattern: 'quote$', fromMe: WType, desc: "Send random quotes"}, async (message, match) => {

	  try {
	  const url = `https://api.quotable.io/random`;
	  
		  await axios.get(url).then(async (json) => {
		  
		  await message.client.sendMessage(message.jid,
		  '\n'+
		  '*✨️ quote:* ```' + json.data.content + '```\n' +
		  '*👩‍🎓 author:* ```' + json.data.author+ '```\n',
		  MessageType.text, {quoted: message.data});
		  
		  });
	  } catch {
		  return await message.client.sendMessage(message.jid, "*⚠️️ Error! quote not found.*", MessageType.text, {quoted: message.data});
	  }
});
