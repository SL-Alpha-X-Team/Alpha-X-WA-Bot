const AlphaX = require('../events');
const {MessageType, Mimetype ,MessageOptions} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const Axios = require('axios');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var dd = ''
var errmsg = ''
if (Config.LANG == 'TR') dd = 'Sunucudaki dosyanın içini yazdırır.', errmsg = '*Aradığın Dosya Sunucuda Mevcut Değil!*'
if (Config.LANG == 'EN') dd = 'Prints the inside of the file on the server.', errmsg = '*The file you are looking for is not available on the server!*'
if (Config.LANG == 'SI') dd = 'සේවාදායකයේ ගොනුවේ ඇතුළත මුද්‍රණය කරයි.', errmsg = '*ඔබ සොයන ගොනුව සේවාදායකයේ නොමැත!*'
if (Config.LANG == 'AZ') dd = 'Faylın mənbə kodlarını serverdə göstərir.', errmsg = '*Axtardığınız fayl serverdə yoxdur!*'
if (Config.LANG == 'ES') dd = 'Imprime el interior del archivo en el servidor.', errmsg = '*¡El archivo que está buscando no está disponible en el servidor!*'
if (Config.LANG == 'HI') dd = 'सर्वर पर फ़ाइल के अंदर प्रिंट करता है', errmsg = '*आप जिस फ़ाइल की तलाश कर रहे हैं वह सर्वर पर उपलब्ध नहीं है!*'
if (Config.LANG == 'PT') dd = 'Imprime o interior do arquivo no servidor.', errmsg = '*O arquivo que você está procurando não está disponível no servidor!*'
if (Config.LANG == 'ML') dd = 'ഫയലിന്റെ ഉള്ളിൽ സെർവറിൽ പ്രിന്റുചെയ്യുന്നു', errmsg = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*'
if (Config.LANG == 'ID') dd = 'Mencetak bagian dalam file di server', errmsg = '*File yang Anda cari tidak tersedia di server!*'
if (Config.LANG == 'RU') dd = 'Печатает внутреннюю часть файла на сервере', errmsg = '*Файл, который вы ищете, недоступен на сервере!*'

AlphaX.addCommand({pattern: 'print ?(.*)', fromMe: true, desc: dd}, (async (message, match) => {    
    exec('cat ' + match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,errmsg, MessageType.text)
        }
        await message.client.sendMessage(message.jid, `Root ~# ${match[1]} \n\n` + stdout, MessageType.text)
    });
}));
var bdesc = ''
var berr = ''
var need_way = ''
if (Config.LANG == 'TR') bdesc = 'Sunucu içindeki ses, video ve fotoğrafları gönderir.', berr = '*Aradığın Dosya Sunucuda Mevcut Değil!*', need_way = '*Dosya Yolu Girmen Gerekiyor!*'
if (Config.LANG == 'EN') bdesc = 'Sends audio, video and photos inside the server.', berr = '*The file you are looking for is not available on the server!*', need_way = '*File Path Required!*'
if (Config.LANG == 'SI') bdesc = 'සේවාදායකය තුළට ශ්‍රව්‍ය, දෘශ්‍ය සහ ඡායාරූප යවයි.', berr = '*ඔබ සොයන ගොනුව සේවාදායකයේ නොමැත!*', need_way = '*ගොනු මාර්ගය අවශ්‍යයි!*'
if (Config.LANG == 'AZ') bdesc = 'Server daxilində səs, video və fotoşəkillər göndərir.', berr = '*Axtardığınız fayl serverdə yoxdur!*', need_way = '*Fayl yolu tələb olunur!*'
if (Config.LANG == 'HI') bdesc = 'सर्वर के अंदर ऑडियो, वीडियो और फोटो भेजता है', berr = '*आप जिस फ़ाइल की तलाश कर रहे हैं वह सर्वर पर उपलब्ध नहीं है!*', need_way = '*फ़ाइल पथ आवश्यक!*'
if (Config.LANG == 'PT') bdesc = 'Envia áudio, vídeo e fotos dentro do servidor.', berr = '*O arquivo que você está procurando não está disponível no servidor!*', need_way = '*Caminho do arquivo obrigatório!*'
if (Config.LANG == 'RU') bdesc = 'Отправляет аудио, видео и фото внутри сервера', berr = '*Файл, который вы ищете, недоступен на сервере!*', need_way = '*Требуется путь к файлу!*'
if (Config.LANG == 'ES') bdesc = 'Envía audio, video y fotos dentro del servidor.', berr = '*¡El archivo que está buscando no está disponible en el servidor!*', need_way = '*¡Ruta de archivo requerida!*'
if (Config.LANG == 'ID') bdesc = 'Ini mengirimkan audio, video dan foto di dalam server.', berr = '*File yang Anda cari tidak tersedia di server!*', need_way = '*Jalur File Diperlukan!*'
if (Config.LANG == 'ML') bdesc = 'സെർവറിനുള്ളിൽ ഓഡിയോ, വീഡിയോ, ഫോട്ടോകൾ അയയ്ക്കുന്നു.', berr = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*', need_way = '*ഫയൽ പാത്ത് ആവശ്യമാണ്!*'
let wk_q = Config.WORKTYPE == 'public' ? false : true
AlphaX.addCommand({pattern: 'bashmedia ?(.*)', fromMe: wk_q, desc: bdesc, usage: 'video.mp4 && media/gif/pic.mp4'}, (async (message, match) => {    
    const PIC = await Axios.get(`${Config.THUMB}`, {responseType: 'arraybuffer'})

    var id = message.jid
    try {
        if (match[1].includes('jpg') || match[1].includes('tiff') || match[1].includes('raw') || match[1].includes('dng') || match[1].includes('png') || match[1].includes('jpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.image, {caption: Config.CAPTION, thumbnail: Buffer.from(thumb.data) })
        }
        else if (match[1].includes('mp4') || match[1].includes('avi') || match[1].includes('webm') || match[1].includes('mkv') || match[1].includes('mpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.video, {caption: Config.CAPTION, thumbnail: Buffer.from(thumb.data) });
        }
        else if (match[1].includes('mp3') || match[1].includes('waw') || match[1].includes('flac') || match[1].includes('weba') || match[1].includes('ogg') || match[1].includes('m4a')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/WhatsAsenaDuplicated/${match[1]}`), MessageType.audio);
        }
        else {
            await message.client.sendMessage(id,need_way, MessageType.text)
        }
    } catch (err) {
        await message.client.sendMessage(id,berr, MessageType.text)
    }
}));
let wk_ad = Config.WORKTYPE == 'public' ? false : true
var addsdesc = ''
var rep_add = ''
var suc_add = ''
if (Config.LANG == 'TR') addsdesc = 'Sunucuya resim, ses veya video yükler.', rep_add = '*Herhangi Bir Medya Mesajına Yanıt Ver!*', suc_add = '*Medya Sunucuya Eklendi! ✅*'
if (Config.LANG == 'EN') addsdesc = 'Uploads image, audio or video to the server.', rep_add = '*Reply to Any Media Message!*', suc_add = '*Media Added to Server! ✅*'
if (Config.LANG == 'SI') addsdesc = 'පින්තූරය, ශ්‍රව්‍ය හෝ වීඩියෝ සේවාදායකයට උඩුගත කරයි.', rep_add = '*ඕනෑම මාධ්‍ය පණිවිඩයකට රිප්ලයි කරන්න!*', suc_add = '*මාධ්‍ය සේවාදායකයට එක් කරන ලදී! ✅*'
if (Config.LANG == 'AZ') addsdesc = 'Serverə şəkil, səs və ya video yükləyir.', rep_add = '*Hər hansı bir Mediya Mesajına Cavab!*', suc_add = '*Serverə Media əlavə edildi! ✅*'
if (Config.LANG == 'HI') addsdesc = 'सर्वर पर छवि, ऑडियो या वीडियो अपलोड करता है।', rep_add = '*किसी भी मीडिया संदेश का उत्तर दें!*', suc_add = '*मीडिया सर्वर में जोड़ा गया! ✅*'
if (Config.LANG == 'PT') addsdesc = 'Carrega imagem, áudio ou vídeo para o servidor.', rep_add = '*Responda a qualquer mensagem da mídia!*', suc_add = '*Mídia adicionada ao servidor! ✅*'
if (Config.LANG == 'RU') addsdesc = 'Загружает изображение, аудио или видео на сервер.', rep_add = '*Ответьте на любое сообщение СМИ!*', suc_add = '*Медиа добавлены на сервер! ✅*'
if (Config.LANG == 'ML') addsdesc = 'ഇമേജ്, ഓഡിയോ അല്ലെങ്കിൽ വീഡിയോ സെർവറിലേക്ക് അപ്‌ലോഡുചെയ്യുന്നു.', rep_add = '*ഏതെങ്കിലും മീഡിയ സന്ദേശത്തിന് മറുപടി നൽകുക!*', suc_add = '*മീഡിയ സെർവറിൽ ചേർത്തു! ✅*'
if (Config.LANG == 'ES') addsdesc = 'Carga imagen, audio o video al servidor.', rep_add = '*¡Responde a cualquier mensaje de los medios!*', suc_add = '*¡Medios agregados al servidor! ✅*'
if (Config.LANG == 'ID') addsdesc = 'Upload gambar, audio atau video ke server.', rep_add = '*Balas Pesan Media Apa Pun!*', suc_add = '*Media Ditambahkan ke Server! ✅*'

AlphaX.addCommand({pattern: 'addserver$', fromMe: wk_ad, desc: addsdesc}, (async (message, match) => {    

    if (message.reply_message.image) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-image.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-video.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.audio) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/server-audio.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else { await message.client.sendMessage(message.jid,rep_add, MessageType.text)
    }
}));
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var antilink_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antilink_var = vars.ANTI_LINK ;
        blocklink = vars.BLOCK_LINK ;
    });
}
antlch()

if (Config.ALB_MSG == 'default') {
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '❌ *Link Detected!* ❌\n • _Links are not allowed in this group.__\n 🥲       ~*Byee!!*~'
if (Config.LANG == 'SI') ldc = '❌ *සබැඳිය අනාවරණය විය!* ❌\n • _සබැඳි මෙම සමූහයේ දැමීම තහනම්ය._\n 🥲       ~*බායි!!*~'
if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
   } else {
   idc = `${Config.ALB_MSG}`
}

AlphaX.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antilink_var == 'true') {
        let regex1 = new RegExp('https://')
        let regex2 = new RegExp('http://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         

        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         

        }
    }
}));

AlphaX.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (blocklink == 'true') {
        let regex1 = new RegExp(Config.BLINK_A)
        let regex2 = new RegExp(Config.BLINK_B)
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         

        }
    }
}));

AlphaX.addCommand({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
    var user = message.client.user.name
    var id = message.jid
    if (match[1] === '') return await message.client.sendMessage(id,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));
let wk = Config.WORKTYPE == 'public' ? false : true
var medinfo = ''
if (Config.LANG == 'TR') medinfo = 'Yanıtlanan videonun teknik bilgileri gösterir.'
if (Config.LANG == 'EN') medinfo = 'Shows the technical information of the replied video.'
if (Config.LANG == 'SI') medinfo = 'පිළිතුරු දුන් වීඩියෝවේ තාක්ෂණික තොරතුරු පෙන්වයි.'
if (Config.LANG == 'AZ') medinfo = 'Cavab verilən videonun texniki məlumatlarını göstərir.'
if (Config.LANG == 'ES') medinfo = 'Muestra información técnica del video respondido.'
if (Config.LANG == 'ID') medinfo = 'Menampilkan informasi teknis dari video yang dibalas.'
if (Config.LANG == 'ML') medinfo = 'മറുപടി നൽകിയ വീഡിയോയുടെ സാങ്കേതിക വിവരങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') medinfo = 'उत्तर दिए गए वीडियो की तकनीकी जानकारी दिखाता है।'
if (Config.LANG == 'PT') medinfo = 'Mostra as informações técnicas do vídeo respondido.'
if (Config.LANG == 'RU') medinfo = 'Показывает техническую информацию о видео, на которое был дан ответ.'

AlphaX.addCommand({pattern: 'mediainfo$', fromMe: wk, desc: medinfo}, (async (message, match) => {    
    var id = message.jid
    if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage           
        });
        exec('mv ' + location + ' /root/WhatsAsenaDuplicated/vid.mp4')
        exec('ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json /root/WhatsAsenaDuplicated/vid.mp4', async (err, st, stderr) => {
            if (err) {
                return await message.client.sendMessage(id,'*Error:* \n\n' + err,MessageType.text);
            }
            var stdout = JSON.parse(st)
            let
                vsize = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Video Boyutu:* ' : '*Video Size:* '
                vlength = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Uzunluğu:* ' : '\n*Video Length:* '
                second = Config.LANG == 'TR' || Config.LANG == 'AZ' ? ' Saniye' : ' Second'
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Çözünürlük Değeri:* ' : '\n*Video Resolution Value:* '
                vpvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Değerleri:* ' : '\n*Video Pixel Value:* '
                vpformat = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Formatı:* ' : '\n*Video Pixel Format:* '
                vcprofile = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Profili:* ' : '\n*Video Codec Profile:* '
                vctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Tagı:* ' : '\n*Video Codec Tag:* '
                srvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Örnek En-Boy Oranı:* ' : '\n*Example Aspect Ratio:* '
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*İzlenebilir En-Boy Oranı:* ' : '\n*Viewable Aspect Ratio:* '
                vfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video FPS Değeri:* ' : '\n*Video FPS Value:* '
                vavgfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Ortalama FPS Değeri:* ' : '\n*Video Average FPS Value:* '
                sctip = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Türü:* ' : '\n*Audio Codec Type:* '
                sctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Tagı:* ' : '\n*Audio Codec Tag:* '
                shzvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses KHz Oranı:* ' : '\n*Audio KHz Rate:* '
                schannel = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalları:* ' : '\n*Audio Channels:* '
                schome = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalı Yerleşimi:* ' : '\n*Audio Channel Layout:* '
            var msgi = vsize + stdout.format.size / 1000000 + 'MB' + vlength + stdout.streams[0].duration + second + vrvalue + stdout.streams[0].width + 'p' + vpvalue + stdout.streams[0].width + 'x' + stdout.streams[0].height + vpformat + stdout.streams[0].pix_fmt + vcprofile + stdout.streams[0].codec_name + vctag + stdout.streams[0].codec_tag_string + srvalue + stdout.streams[0].sample_aspect_ratio + vrvalue + stdout.streams[0].display_aspect_ratio + vfps + stdout.streams[0].r_frame_rate.split('/')[0] + vavgfps + stdout.streams[0].avg_frame_rate.split('/')[0] + sctip + stdout.streams[1].codec_name + sctag + stdout.streams[1].codec_tag_string + shzvalue + stdout.streams[1].sample_rate + schannel + stdout.streams[1].channels + schome + stdout.streams[1].channel_layout            
            return await message.client.sendMessage(id,msgi,MessageType.text);
        });
    } else { return await message.client.sendMessage(id,SLang.MP4TOAUDİO_NEEDREPLY, MessageType.text)
    }
}));
var sucmsg = ''
var pmmm = ''
var psmm = ''
if (Config.LANG == 'TR') sucmsg = '*Mesaj Başarıyla Gönderildi ✅*', pmmm = 'Yanıt verilen kişiye özelden mesaj gönderir.', psmm = 'Yanıt verilen kişiye özelden sesli mesaj gönderir.'
if (Config.LANG == 'EN') sucmsg = '*Message Sent Successfully ✅*', pmmm = 'Sends a private message to the replied person.', psmm = 'Sends a private voice message to the respondent.'
if (Config.LANG == 'SI') sucmsg = '*පණිවිඩය සාර්ථකව යවන ලදී ✅*', pmmm = 'පිළිතුරු දුන් පුද්ගලයාට පුද්ගලික පණිවිඩයක් යවයි.', psmm = 'පිළිතුරු දුන් පුද්ගලයාට පුද්ගලික කටහඬ පණිවිඩයක් යවයි.'
if (Config.LANG == 'AZ') sucmsg = '*Mesaj Uğurla Göndərildi ✅*', pmmm = 'Cavablandırılan şəxsə xüsusi mesaj göndərir.', psmm = 'Cavabdehə xüsusi səs mesajı göndərir.'
if (Config.LANG == 'ES') sucmsg = '*Mensaje enviado con éxito ✅*', pmmm = 'Envía un mensaje privado a la persona que respondió.', psmm = 'Envía un mensaje de voz privado al encuestado.'
if (Config.LANG == 'HI') sucmsg = '*संदेश सफलतापूर्वक भेजा जा चुका है ✅*', pmmm = 'उत्तर दिए गए व्यक्ति को एक निजी संदेश भेजता है', psmm = 'प्रतिवादी को एक निजी ध्वनि संदेश भेजता है'
if (Config.LANG == 'ML') sucmsg = '*സന്ദേശം വിജയകരമായി അയച്ചു ✅*', pmmm = 'മറുപടി നൽകിയ വ്യക്തിക്ക് ഒരു സ്വകാര്യ സന്ദേശം അയയ്ക്കുന്നു.', psmm = 'പ്രതികരിക്കുന്നയാൾക്ക് ഒരു സ്വകാര്യ ശബ്ദ സന്ദേശം അയയ്ക്കുന്നു.'
if (Config.LANG == 'RU') sucmsg = '*Сообщение успешно отправлено ✅*', pmmm = 'Отправляет личное сообщение ответившему человеку.', psmm = 'Отправляет респонденту личное голосовое сообщение.'
if (Config.LANG == 'ID') sucmsg = '*Pesan Berhasil Terkirim ✅*', pmmm = 'Mengirim pesan pribadi ke orang yang dibalas.', psmm = 'Mengirim pesan suara pribadi ke responden.'
if (Config.LANG == 'PT') sucmsg = '*Mensagem enviada com sucesso ✅*', pmmm = 'Envia uma mensagem privada para a pessoa respondida.', psmm = 'Envia uma mensagem de voz privada para o entrevistado.'
AlphaX.addCommand({pattern: 'pmsend ?(.*)', fromMe: true, desc: pmmm }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,NLang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, NLang.NEED_WORDS, MessageType.text);
    const uspm = message.reply_message.jid
    await message.client.sendMessage(uspm, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, sucmsg, MessageType.text);
}));
AlphaX.addCommand({pattern: 'pmttssend ?(.*)', fromMe: true, desc: psmm}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,NLang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, NLang.NEED_WORDS, MessageType.text);
    let 
        LANG = Config.LANG.toLowerCase(),
        ttsMessage = match[1],
        SPEED = 1.0

    if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    } 
    if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    
    var buffer = await googleTTS.synthesize({
        text: ttsMessage,
        voice: LANG
    });
    fs.writeFileSync('tts.mp3', buffer);

    await message.client.sendMessage(message.reply_message.jid, fs.readFileSync('tts.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    await message.client.sendMessage(message.jid,sucmsg, MessageType.text);
       
}));
