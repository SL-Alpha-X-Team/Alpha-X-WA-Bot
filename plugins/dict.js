const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const CON = require ('../config')
let WType = CON.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('weather');

var DESC = ''
if (CON.LANG == 'EN') DESC = 'Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send •.lngcode•'
if (CON.LANG == 'SI') DESC = 'එය ශබ්ද කෝෂයක් ලෙස භාවිතා කරන්න. \nඋදා: .did en_US; hello \n සහය දක්වන භාෂා සඳහා යවන්න •.lngcode•'
if (CON.LANG == 'KN') DESC = 'ಇದನ್ನು ನಿಘಂಟಿನಂತೆ ಬಳಸಿ.\nಉದಾ: .dict en_US;lead\n ಬೆಂಬಲಿಸುವ ಭಾಷೆಗಳಿಗೆ ಕಳುಹಿಸಿ •.lngcode•'
if (CON.LANG == 'TR') DESC = 'Sözlük olarak kullanın.\nÖrneğin: .dict en_US;lead\n Destekleyen diller için •.lngcode• gönderin'
if (CON.LANG == 'ML') DESC = 'ഇത് ഒരു നിഘണ്ടുവായി ഉപയോഗിക്കുക.\nഉദാ: .dict en_US;lead\n പിന്തുണയ്ക്കുന്ന ഭാഷകൾക്ക് അയയ്ക്കുക •.lngcode•'
if (CON.LANG == 'RU') DESC = 'Используйте его как словарь. \ NПример: .dict en_US; lead \ n Для поддержки языков отправьте • .lngcode •'
if (CON.LANG == 'AZ') DESC = 'Onu lüğət kimi istifadə edin.\nMəsələn: .dict en_US;lead\n Dəstək dilləri üçün •.lngcode• göndərin.'

var NEED = ''
if (CON.LANG == 'EN') NEED = '*🔎 Please Enter Word!* \n ```Ex: .dict en_US;hey```'
if (CON.LANG == 'SI') NEED = '*🔎 කරුණාකර වචනය ඇතුළත් කරන්න!* \n ```උදා: .dict en_US;hey```'
if (CON.LANG == 'KN') NEED = '*🔎 ದಯವಿಟ್ಟು ಪದವನ್ನು ನಮೂದಿಸಿ!* \n ```ಉದಾ: .dict en_US;hey```'
if (CON.LANG == 'TR') NEED = '*🔎 Lütfen Kelime Girin!* \n ```Ör: .dict en_US;hey```'
if (CON.LANG == 'RU') NEED = '*🔎 Пожалуйста, введите Word! * \ N ```Ex: .dict en_US; hey``'
if (CON.LANG == 'AZ') NEED = '*🔎 Zəhmət olmasa Word daxil edin!* \n ```Məs: .dict en_US;hey```'
if (CON.LANG == 'ML') NEED = '*🔎 ദയവായി Word നൽകുക!* \n ```ഉദാ: .dict en_US;hey```'

var LOAD = ''
if (CON.LANG == 'EN') LOAD = '*🍁 Loading ...*'
if (CON.LANG == 'SI') LOAD = '*🍁 පූරණය වෙමින් කරුණාකර රැඳී සිටින්න ...*'
if (CON.LANG == 'KN') LOAD = '*🍁 ಲೋಡ್ ಆಗುತ್ತಿದೆ...*'
if (CON.LANG == 'TR') LOAD = '*🍁 Yükleniyor ...*'
if (CON.LANG == 'RU') LOAD = '*🍁 Загрузка ... *'
if (CON.LANG == 'ML') LOAD = '*🍁 ലോഡ് ചെയ്യുന്നു...*'
if (CON.LANG == 'AZ') LOAD = '*🍁 Yüklənir...*'


AlphaX.addCommand({pattern: 'lngcode$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {    

    await message.sendMessage('*Code:* en_US \n *Language:* English (US) \n\n *Code:* hi \n *Language:* Hindi \n\n *Code:* es \n *Language:* Spanish \n\n *Code:* fr \n *Language:* French \n\n *Code:* ja \n *Language:* Japanese \n\n *Code:* ru \n *Language:* Russian \n\n *Code:* en_GB \n *Language:* English (UK) \n\n *Code:* de \n *Language:* German \n\n *Code:* it \n *Language:* Italian \n\n *Code:* ko \n *Language:* Korean \n\n *Code:* pt-BR \n *Language:* Brazilian Portuguese \n\n *Code:* ar \n *Language:* Arabic \n\n *Code:* tr \n *Language:* Turkish \n\n', MessageType.text, { quoted: message.data });

}));

AlphaX.addCommand({ pattern: 'dict ?(.*)', fromMe: WType, desc: DESC }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(NEED)

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
    else {
        word = match[1];
        langcode = 'en_US';
        }

    await message.sendMessage(LOAD)

      
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
    example,    
        } = response.data[0].meanings[0].definitions[0]

   
    
    const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
    
     await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
    })    
        
        
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
    example,    
        } = response.data[0].meanings[0].definitions[1]

   
    
    const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
    
     await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
     })
    
         await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
    example,    
        } = response.data[0].meanings[1].definitions[0]

   
    
    const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
    
     await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
    })    
             
     await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
    example,    
        } = response.data[0].meanings[1].definitions[1]

   
    
    const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
    
     await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })    
    })    
         
          await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
    example,    
        } = response.data[1].meanings[0].definitions[0]

   
    
    const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
    
     await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
        

      })
      
  },
)
