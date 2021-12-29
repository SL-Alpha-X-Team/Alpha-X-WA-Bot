const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const Config = require('../config'); 
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('weather');

var SIMI_DESC = ''  
if (Config.LANG == 'EN') SIMI_DESC = 'Are you bored? ... Fool around with SimSimi. ... World first popular Chatbot for daily conversation.'
if (Config.LANG == 'SI') SIMI_DESC = 'ඔයාට කම්මැලිද? ... සිම්සිමි සමඟ රැවටෙන්න. ... දෛනික සංවාදය සඳහා ලොව ප්‍රථම ජනප්‍රිය චැට්බෝට්.'

var NEED = ''  
if (Config.LANG == 'EN') NEED = '*Need Words. 🤓*'
if (Config.LANG == 'SI') NEED = 'වචන ලබාදෙන්න. 🤓'

    AlphaX.addCommand({pattern: 'simi ?(.*)', fromMe: WType, desc: SIMI_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply( NEED );
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, ' \n\n*🧚 sim>>*' + ' *' + json.messages[0].response + '*\n\n' , MessageType.text, {quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
