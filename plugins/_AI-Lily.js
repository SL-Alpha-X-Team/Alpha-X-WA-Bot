const AlphaX = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_lily = ''
if (conf.LANG == 'TR') vtalk_dsc = 'Lily sesli sohbetini başlatır.', reply_lily = '*Herhangi Bir Sesli Mesaja Yanıt Verin!*'
if (conf.LANG == 'EN') vtalk_dsc = 'Starts to Lily voice chat.', reply_lily = '*Reply to Any Voice Message!*'
if (conf.LANG == 'SI') vtalk_dsc = 'Lily හඬ කතාබස් කිරීමට පටන් ගනී.', reply_lily = '*ඕනෑම හඬ පණිවිඩයකට පිළිතුරු දෙන්න!*'
if (conf.LANG == 'KN') vtalk_dsc = 'ಲಿಲಿ ಧ್ವನಿ ಚಾಟ್ ಮಾಡಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.', reply_lily = '*ಯಾವುದೇ ಧ್ವನಿ ಸಂದೇಶಕ್ಕೆ ಪ್ರತ್ಯುತ್ತರ ನೀಡಿ!*'
if (conf.LANG == 'AZ') vtalk_dsc = 'Lily səsli söhbətinə başlayır.', reply_lily = '*Hər hansı bir səsli mesaja cavab verin!*'
if (conf.LANG == 'PT') vtalk_dsc = 'Começa o bate-papo por voz de Lily.', reply_lily = '*Responder a qualquer mensagem de voz!*'
if (conf.LANG == 'RU') vtalk_dsc = 'Запускает голосовой чат Lily.', reply_lily = '*Ответьте на любое голосовое сообщение!*'
if (conf.LANG == 'HI') vtalk_dsc = 'Lily ध्वनि चैट प्रारंभ करता है', reply_lily = '*किसी भी ध्वनि संदेश का उत्तर दें!*'
if (conf.LANG == 'ES') vtalk_dsc = 'Comienza con el chat de voz de Lily.', reply_lily = '*¡Responde a cualquier mensaje de voz!*'
if (conf.LANG == 'ML') vtalk_dsc = 'വോയ്‌സ് ചാറ്റിലേക്ക് ആരംഭിക്കുന്നു.', reply_lily = '*ഏത് വോയ്‌സ് സന്ദേശത്തിനും മറുപടി നൽകുക!*'
if (conf.LANG == 'ID') vtalk_dsc = 'Mulai obrolan suara Lily.', reply_lily = '*Balas Pesan Suara Apapun!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

AlphaX.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.AI_LILY == 'true' && ((!message.jid.includes('@g.us')) || (message.jid.includes('@g.us') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('@g.us') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                        if (ainame !== 'Asena') return;
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                        var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=160871&key=scQlrzE4Tu4TqYqq&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('@g.us') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                    if (ainame !== 'Asena') return;
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                    var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=160871&key=scQlrzE4Tu4TqYqq&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== 'english') {
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                } else { trmsg = finm }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=160871&key=scQlrzE4Tu4TqYqq&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));
AlphaX.addCommand({ pattern: 'vtalk$', desc: vtalk_dsc,dontAddCommandList: true, fromMe: wk }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_lily, MessageType.text, { quoted: message.data }) 
    try {
        const file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                const recognizedText = await recognizeAudio()
                
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = message.client.user.jid.split('@')[0]
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'       
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
        
                var son = encodeURI(ssc)
                await axios.get('http://api.brainshop.ai/get?bid=160871&key=scQlrzE4Tu4TqYqq&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var trmsg = ''
                    cevir = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                    if ('text' in cevir) {
                        trmsg = cevir.text
                    }
            
                    let 
                        LANG = conf.LANG.toLowerCase(),
                        ttsMessage = trmsg,
                        SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });
            
                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
                }).catch(async (error) => {
	            console.log(error)
                });
        });
    } catch (err) { console.log(err) }
}));

var ai_lily_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'TR') {
    ai_lily_dsc = 'Tam fonksiyonel Lily özelliklerini aktif eder. Hesabınızı bir chatbota dönüştürün!'
    already_on = '🔭 Lily yapay zekası halihazırda tüm fonksiyonları etkin.'
    already_off = '📴 Lily yapay zekası halihazırda yarı fonksiyonel çalışıyor.'
    succ_on = 'Lily, Tam Fonksiyonel Olarak Açıldı! Lütfen Biraz Bekleyin! ✅'
    succ_off = 'Lily, Yarı Fonksiyonel Olarak Ayarlandı! Lütfen Biraz Bekleyin! 📴.'
}
if (conf.LANG == 'EN') {
    ai_lily_dsc = 'Activates full functional Lily features. Turn your account into a ai chatbot!'
    already_on = '🔭 Lily artificial intelligence is already fully functional.'
    already_off = '📴 Lily artificial intelligence is currently running semi-functional.'
    succ_on = 'Lily Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Lily Set to Semi-Functional! Please wait a bit! 📴.'
}
if (conf.LANG == 'SI') {
    ai_lily_dsc = 'සම්පූර්ණ ක්රියාකාරී lily විශේෂාංග සක්රිය කරයි.  ඔබගේ ගිණුම AI chatbot එකක් බවට පත් කරයි!'
    already_on = '🔭 Lily කෘතිම බුද්ධිය දැනටමත් සම්පූර්ණයෙන්ම ක්රියාත්මක වේ.'
    already_off = '📴 Lily Artificial Intelligence දැනට අර්ධ සක්‍රීයයි.'
    succ_on = 'ලිලී සම්පූර්ණයෙන්ම ක්‍රියාකාරීව විවෘතයි! කරුණාකර ටිකක් ඉන්න! ✅'
    succ_off = '️Lily Set Semi-Functional!  කරුණාකර ටිකක් ඉන්න! 📴.'
}
if (conf.LANG == 'KN') {
    ai_lily_dsc = 'ಪೂರ್ಣ ಕ್ರಿಯಾತ್ಮಕ ಲಿಲಿ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.  ನಿಮ್ಮ ಖಾತೆಯನ್ನು AI ಚಾಟ್‌ಬಾಟ್ ಆಗಿ ಪರಿವರ್ತಿಸಿ!'
    already_on = '🔭 ಲಿಲಿ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಈಗಾಗಲೇ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ.'
    already_off = '📴 ಲಿಲಿ ಆರ್ಟಿಫಿಶಿಯಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಪ್ರಸ್ತುತ ಅರೆ-ಸಕ್ರಿಯವಾಗಿದೆ.'
    succ_on = 'ಲಿಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ತೆರೆಯಲಾಗಿದೆ! ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ನಿರೀಕ್ಷಿಸಿ! ✅'
    succ_off = 'ಲಿಲಿ ಸೆಮಿ-ಫಂಕ್ಷನಲ್‌ಗೆ ಹೊಂದಿಸಲಾಗಿದೆ!  ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ನಿರೀಕ್ಷಿಸಿ! 📴.'
}
if (conf.LANG == 'RU') {
    ai_lily_dsc = 'Активирует полнофункциональные функции Lily.  Превратите свою учетную запись в чат-бота с искусственным интеллектом!'
    already_on = '🔭 Искусственный интеллект Lily уже полностью функционален.'
    already_off = '📴 Искусственный интеллект Lily в настоящее время частично активен.'
    succ_on = 'Лилия открылась полностью функционально! Подождите немного! ✅'
    succ_off = 'Лили настроена на полуфункциональность!  Подождите немного! 📴.'
}
if (conf.LANG == 'AZ') {
    ai_lily_dsc = 'Tam funksional Lily xüsusiyyətlərini aktivləşdirir.  Hesabınızı ai chatbot-a çevirin!'
    already_on = '🔭 Zanbaq süni intellekti artıq tam işlək vəziyyətdədir.'
    already_off = '📴 Lily Süni İntellekt hazırda yarı aktivdir.'
    succ_on = 'Zanbaq Tam Funksional Açıldı! Zəhmət olmasa bir az gözləyin! ✅'
    succ_off = 'LLily Yarı Funksional vəziyyətə gətirildi!  Zəhmət olmasa bir az gözləyin! 📴.'
}
if (conf.LANG == 'ML') {
    ai_lily_dsc = 'പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ സവിശേഷതകൾ സജീവമാക്കുന്നു. നിങ്ങളുടെ അക്കൗണ്ട് ഒരു ചാറ്റ്ബോട്ടാക്കി മാറ്റുക!'
    already_on = '🔭 കൃത്രിമബുദ്ധി ഇതിനകം പൂർണ്ണമായി പ്രവർത്തിക്കുന്നു.'
    already_off = '📴 AI നിലവിൽ സെമി-ഫംഗ്ഷണൽ ആണ്.'
    succ_on = 'പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായി തുറന്നു! കുറച്ച് കാത്തിരിക്കൂ! ✅'
    succ_off = 'സെമി-ഫങ്ഷണൽ ആയി സജ്ജമാക്കുക! കുറച്ച് കാത്തിരിക്കൂ! 📴.'
}

AlphaX.addCommand({ pattern: 'ai-lily ?(.*)', desc: ai_lily_dsc, fromMe: true,dontAddCommandList: true, usage: '.ai-lily on / off' }, (async (message, match) => {
    var lily_status = `${conf.AI_LILY}`
    if (match[1] == 'on') {
        if (lily_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text , { quoted: message.data });
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['AI_LILY']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text , { quoted: message.data });
        }
    }
    else if (match[1] == 'off') {
        if (lily_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text , { quoted: message.data });
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['AI_LILY']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text , { quoted: message.data });
        }
    }
}));
