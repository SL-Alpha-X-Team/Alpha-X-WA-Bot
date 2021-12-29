const AlphaX = require('../events');
const {MessageType,Mimetype,MessageOptions} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const config = require('../config');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

    var l_dsc =''
    var alr_on =''
    var alr_off =''
    var succ_on =''
    var succ_off =''
    if (config.LANG == 'TR') {
        l_dsc = 'block link aracını etkinleştirir.'
        alr_on = '⚒️ block link halihazırda açık!'
        alr_off = '🔺 block link halihazırda kapalı!'
        succ_on = '✅ block link Başarıyla Açıldı!'
        succ_off = '⛔ block link Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the block link tool.'
        alr_on = '⚒️ block link is already open!'
        alr_off = '🔺 block link is currently closed!'
        succ_on = '✅ block link Opened Successfully!'
        succ_off = '⛔ block link Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'block link alətini aktivləşdirir.'
        alr_on = '⚒️ block link hazırda açıqdır!'
        alr_off = '🔺 block link hazırda bağlıdır!'
        succ_on = '✅ block link Uğurla Açıldı!'
        succ_off = '⛔ block link Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = '⚒️ एंटीलिंक पहले से ही खुला है!'
        alr_off = '🔺 एंटीलिंक वर्तमान में बंद है!'
        succ_on = '✅ एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = '⛔ एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = '⚒️ ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = '🔺 ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = '✅ ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = '⛔ ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta block link.'
        alr_on = '⚒️ O block link já está aberto!'
        alr_off = '🔺 block link está fechado no momento!'
        succ_on = '✅ block link aberto com sucesso!'
        succ_off = '⛔ block link fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент block link.'
        alr_on = '⚒️ Антилинк уже открыт!'
        alr_off = '🔺 Антилинк сейчас закрыт!'
        succ_on = '✅ Антилинк успешно открыт!'
        succ_off = '⛔ Антилинк успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta block link.'
        alr_on = '⚒️ ¡block link ya está abierto!'
        alr_off = '🔺 ¡block link está cerrado actualmente!'
        succ_on = '✅ ¡block link se abrió con éxito!'
        succ_off = '⛔ block link cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat block link.'
        alr_on = '⚒️ block link sudah terbuka!'
        alr_off = '🔺 block link saat ini ditutup!'
        succ_on = '✅ block link Berhasil Dibuka!'
        succ_off = '⛔ block link Berhasil Ditutup!'
    }
   AlphaX.addCommand({pattern: 'linkblock ?(.*)', fromMe: true, desc: l_dsc, usage: '.linkblock on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.BLOCKLINK == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text, {quoted: message.data});
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BLOCK_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text, {quoted: message.data});
            }
        }
        else if (match[1] == 'off') {
            if (config.BLOCKLINK !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text, {quoted: message.data});
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BLOCK_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text, {quoted: message.data});
            }
        }
    }));
