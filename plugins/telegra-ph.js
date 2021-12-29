const AlphaX = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true
const {uploadByBuffer} = require('telegraph-uploader');

var DESC = ''
if (Config.LANG == 'EN') DESC = 'The image you reply to uploads to telegra.ph and provides its link.'
if (Config.LANG == 'SI') DESC = 'ඔබ රිප්ලයි කල චායාරූපය telegra.ph වෙත අප්ලෝඩ් කල එහි සබැදිය ලබා දේ.'
if (Config.LANG == 'KN') DESC = 'ನೀವು ಪ್ರತ್ಯುತ್ತರಿಸುವ ಮಾಧ್ಯಮವು telegra.ph ಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಅದರ ಲಿಂಕ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.'
if (Config.LANG == 'TR') DESC = 'Yanıtladığınız medya telegra.ph\'a yüklenir ve bağlantısını sağlar.'
if (Config.LANG == 'AZ') DESC = 'Cavab verdiyiniz media telegra.ph saytına yüklənir və onun linkini təqdim edir.'
if (Config.LANG == 'ML') DESC = 'നിങ്ങൾ മറുപടി നൽകുന്ന മീഡിയ telegra.ph-ലേക്ക് അപ്‌ലോഡ് ചെയ്യുകയും അതിന്റെ ലിങ്ക് നൽകുകയും ചെയ്യുന്നു.'
if (Config.LANG == 'RU') DESC = 'СМИ, на которые вы отвечаете, загружаются на telegra.ph и предоставляют ссылку.'
if (Config.LANG == 'HI') DESC = 'आप जिस मीडिया का जवाब देते हैं वह telegra.ph पर अपलोड करता है और उसका लिंक प्रदान करता है।'

AlphaX.addCommand({pattern: 'link$', fromMe: WType, desc: DESC }, (async (message, match) => {

    if (!message.reply_message) return await message.client.sendMessage(message.jid, '*Reply to any image.* 💡' ,MessageType.text, {quoted: message.data});

    if (message.reply_message.image) {
    try {
            var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/telegra-ph-upload.png')
        
            uploadByBuffer(fs.readFileSync('telegra-ph-upload.png'))
              .then(async (result) => {
             await message.client.sendMessage(
                    message.jid,
                    fs.readFileSync('/root/WhatsAsenaDuplicated/telegra-ph-upload.png'),
                    MessageType.image,
                    { caption: '*✅ Fɪʟᴇ sᴜᴄᴄᴇssғᴜʟʏ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛᴏ* _telegra.ph_\n\n' + `*🔺ʟɪɴᴋ ➙*  _${result.link}_ \n*🔩️ ᴘᴀᴛʜ ➙* _${result.path}_ \n`, thumbnail: fs.readFileSync('/root/WhatsAsenaDuplicated/telegra-ph-upload.png' )}
                 );
            });

        } catch {
        await message.client.sendMessage(message.jid, '🛠️ *Request failed! please try again.*' ,MessageType.text, {quoted: message.data})
                };

        } else {
        await message.client.sendMessage(message.jid, '*Only Reply to any image* ⛔' ,MessageType.text, {quoted: message.data})
             }
}));
