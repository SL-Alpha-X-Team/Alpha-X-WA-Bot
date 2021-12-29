const AlphaX = require('../events');
const {MessageType, Mimetype, MessageOptions, Presence} = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('filters');
const fs = require('fs');

var f_rep = ''
if (Config.LANG == 'TR') f_rep = '*Filtre Ayarlandı ✅*'
if (Config.LANG == 'SI') f_rep = '*පෙරහන සකසා ඇත ✅*'
if (Config.LANG == 'EN') f_rep = '*Filter Setted ✅*'
if (Config.LANG == 'AZ') f_rep = '*Filtr Düzəldildi ✅*'
if (Config.LANG == 'ES') f_rep = '*Filtro Ajustado ✅*'
if (Config.LANG == 'HI') f_rep = '*फ़िल्टर सेट ✅*'
if (Config.LANG == 'RU') f_rep = '*Фильтр настроен ✅*'
if (Config.LANG == 'ML') f_rep = '*ഫിൽട്ടർ സെറ്റ് ✅*'
if (Config.LANG == 'ID') f_rep = '*Filter Set ✅*'
if (Config.LANG == 'PT') f_rep = '*Filtro Ajustado ✅*'

AlphaX.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC}, (async (message, match) => {
    Mat = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (Mat === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else if (message.reply_message && match[1] !== '') {
        await FilterDb.setFilter(message.jid, match[1].replace(/['"“]+/g, ''), message.reply_message.text);
        return await message.client.sendMessage(message.jid,f_rep,MessageType.text);
    } else {
        if (Mat.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "test" "test two"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, Mat[0].replace(/['"“]+/g, ''), Mat[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), Mat[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(Mat[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

AlphaX.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));


AlphaX.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    return filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (message.message == filter.dataValues.pattern) {
                await new Promise(r => setTimeout(r, 900));
                return await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
AlphaX.addCommand({on: 'text', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    return filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            var fo = message.message.replace('$', '')
            if (fo == filter.dataValues.pattern && message.message.startsWith('$')) {
                await new Promise(r => setTimeout(r, 100));
                return await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

//=============================== BGM =======================================

AlphaX.addCommand({pattern: 'bgmlist$', fromMe: true, desc: "Bgm List."}, (async (message, match) => {

const list = "- aaa\n- aaaa\n- ado\n- ah\n- alone\n- ammo\n- ban\n- bar\n- bitch\n- bomu\n- boo\n- boss\n- cat\n- chip\n- chips\n- cone\n- confused\n- congratulate\n- congratulations\n- cry\n- cute\n- dance\n- daragana\n- devil\n- die\n- ducay\n- eat\n- egg\n- ela\n- fake\n- fan\n- fuck\n- groot\n- harada\n- haththikke\n- hee\n- hehe\n- here\n- hey\n- hi\n- hide\n- hikz\n- hmm\n- hot\n- huththo\n- ice\n- idk\n- imhi\n- liyer\n- loading\n- lol\n- love\n- maru\n- meaw\n- mmm\n- mokada\n- moko\n- narakay\n- nice\n- nidi\n- noice\n- noob\n- ooo\n- oops\n- ow\n- pak\n- phone\n- picture\n- puka\n- sad\n- seoriousely\n- sirawatama\n- snile\n- so\n- tnx\n- type\n- umma\n- wait\n- wenaskam\n- what\n- why\n- wow\n- wtf\n- yee\n- yo\n- fail\n- fake\n- give up\n- love\n- oh no\n- seacret"

      await message.client.sendMessage(message.jid , '*•🎵 ʙɢᴍ ʟɪsᴛ 🎭•* \n\n```' + list + '```' , MessageType.text, { quoted: message.data });

}));

AlphaX.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

if (Config.BGM == 'sticker') {

var array = ['aaa','aaaa','ado','ah','alone','ammo','ban','bar','bitch','bomu','boo','boss','cat','chip','chips','cone','confused','congratulate','congratulations','cry','cute','dance','daragana','devil','die','ducay','eat','egg','ela','fake','fan','fuck','groot','harada','haththikke','hee','hehe','here','hey','hi','hide','hikz','hmm','hot','huththo','ice','idk','imhi','liyer','loading','lol','love','maru','meaw','mmm','mokada','moko','narakay','nice','nidi','noice','noob','ooo','oops','ow','pak','phone','picture','puka','sad','seoriousely','sirawatama','snile','so','tnx','type','umma','wait','wenaskam','what','why','wow','wtf','yee','yo']
      array.map( async (bgmtext) => {
           let pattern = new RegExp(`\\b${bgmtext}\\b`, 'g');

           if (pattern.test(message.message)) {
           
        await message.client.updatePresence(message.jid,Presence.recording)

        await new Promise(r => setTimeout(r, 1000));

try {
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/sticker/' + `${bgmtext}` + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
} catch {
  console.log("📨 BGM file not found")
}
                  }
       });
}

else if (Config.BGM == 'audio') {

var array = ['fail','fake','give up','love','oh no','seacret']
      array.map( async (bgmtext) => {
           let pattern = new RegExp(`\\b${bgmtext}\\b`, 'g');

           if (pattern.test(message.message)) {
           
        await message.client.updatePresence(message.jid,Presence.recording)

        await new Promise(r => setTimeout(r, 1000));

try {
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/audio/' + `${bgmtext}` + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
} catch {
   console.log("🎵️ BGM file not found")
}
                  }
       });
}

else if (Config.BGM == 'true') {

var array = ['aaa','aaaa','ado','ah','alone','ammo','ban','bar','bitch','bomu','boo','boss','cat','chip','chips','cone','confused','congratulate','congratulations','cry','cute','dance','daragana','devil','die','ducay','eat','egg','ela','fake','fan','fuck','groot','harada','haththikke','hee','hehe','here','hey','hi','hide','hikz','hmm','hot','huththo','ice','idk','imhi','liyer','loading','lol','maru','meaw','mmm','mokada','moko','narakay','nice','nidi','noice','noob','ooo','oops','ow','pak','phone','picture','puka','sad','seoriousely','sirawatama','snile','so','tnx','type','umma','wait','wenaskam','what','why','wow','wtf','yee','yo','fail','fake','give up','love','oh no','seacret']
      array.map( async (bgmtext) => {
           let pattern = new RegExp(`\\b${bgmtext}\\b`, 'g');

           if (pattern.test(message.message)) {
           
        await message.client.updatePresence(message.jid,Presence.recording)

        await new Promise(r => setTimeout(r, 1000));

   try {
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/audio/' + `${bgmtext}` + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true })
} catch { 
   console.log("🎵 BGM file not found")
} try {
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/sticker/' + `${bgmtext}` + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false })
} catch {
   console.log("📨 BGM file not found")
}
                  }
           });
      }
}));
