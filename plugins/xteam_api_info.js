const AlphaX = require('../events');
const config = require('../config');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const axios = require('axios');

var FAIL = ""
if (config.LANG == "EN") FAIL = "*Request failed!! :-(*"
if (config.LANG == "SI") FAIL = "*ඉල්ලීම අසාර්ථක විය!! :-(*"

AlphaX.addCommand({pattern: 'xapi$', fromMe: true, desc: 'Xteam API key info.'}, (async (message, match) => {
   
   if (!config.XAPI) { await message.client.sendMessage(message.jid, "⚠️️ *Can't get api info without API key*\n_• get it using_ ```xteam.xyz```" ,MessageType.text, { quoted: message.data }) };

   try { await axios("https://xteam.xyz") } catch { await message.client.sendMessage(message.jid, "*🚫 Server error!!* ```please try again later..```" , MessageType.text, { quoted: message.data }) };

   await axios("https://xteam.xyz/cekey?APIKEY=" + `${config.XAPI}`).then (async (webpage) => {

         try {

   const status = webpage.data.code
   
   if (status == 200) {

   await message.client.sendMessage(message.jid, "*🚀 Getting API Key info...*" ,MessageType.text, { quoted: message.data });

   const result = webpage.data.response
   const ip     = result.ip
   const name   = result.name
   const email  = result.email
   const key    = result.apikey
   const hits   = result.totalhit
   const prem   = result.premium
   const exp    = result.expired
   
   let msg = '{```\n' ;
   msg += '  ip: ' + ip + '\n' ;
   msg += '  name: ' + name + '\n' ;
   msg += '  email: ' + email + '\n' ;
   msg += '  apikey: ' + '********' + '\n' ;
   msg += '  totalhit: ' + hits + '\n' ;
   msg += '  premium: ' + prem + '\n' ;
   msg += '  expired: ' + exp + '\n' ;
   msg += '}```\n';

      await message.client.sendMessage(message.jid, msg , MessageType.text, { quoted: message.data });
     
     } else { await message.client.sendMessage(message.jid, FAIL + "\n\n_Error 🚫:-_\n```" + webpage.data.response + "```", MessageType.text, { quoted: message.data }) };

     } catch { await message.client.sendMessage(message.jid, FAIL + "\n\n_Error 🚫:-_\n```" + webpage.data.response + "```" , MessageType.text, { quoted: message.data }) };
     
    });

}));
