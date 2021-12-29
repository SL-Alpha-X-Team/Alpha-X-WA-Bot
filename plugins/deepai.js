const AlphaX = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support
let WType = Config.WORKTYPE == 'public' ? false : true

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('da119ff3-51d1-4b5e-aa04-b0c9fae2f396'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

  AlphaX.addCommand({pattern: 'deepai$', fromMe: WType, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
       await message.sendMessage(Config.C_EMOJI + ' Usage: *.moodai <text>*\n' + Config.D_EMOJI + ' Desc: It finds your mood from the article you wrote.\n\n' + Config.C_EMOJI + ' Usage: *.colorai*\n' + Config.D_EMOJI + ' Desc : Colorizes black and white photos.\n\n' + Config.C_EMOJI + ' Usage: *.faceai*\n' + Config.D_EMOJI + ' Desc: With artificial intelligence, it generates human faces that never existed before.\n\n' + Config.C_EMOJI + ' Usage: *.animai*\n' + Config.D_EMOJI + ' Desc: Generates anime faces with artificial intelligence, that never existed before.\n\n' + Config.C_EMOJI + ' Usage: *.superai*\n' + Config.D_EMOJI + ' Desc: Improves photo quality with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *.waifuai*\n' + Config.D_EMOJI + ' Desc: Combines the color palettes of photos with artificial intelligence.\n Combines the color palettes of photos with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *.dreamai*\n' + Config.D_EMOJI + ' Desc: Deepdream to photo \n Applies deepdream effect to the p hoto.\n\n' + Config.C_EMOJI + ' Usage: *.neuraltalkai*\n' + Config.D_EMOJI + ' Desc: Explains the thing in the photo with artificial intelligence.\n\n' + Config.C_EMOJI + ' Usage: *. ttiai <text>*\n' + Config.D_EMOJI + ' Desc: Converts text to picture.\n Converts text to a picture. (Text-to-Image)\n\n' + Config.C_EMOJI + ' Usage: *.toonai*\n' + Config.D_EMOJI + ' Desc: Turns the face in the photo into a cartoon character..\n\n ' + Config.C_EMOJI + ' Usage: *.textai <text>*\n' + Config.D_EMOJI + ' Desc: It creates an artificial story for you from your sentence.\n\n' + Config.C_EMOJI + ' Usage: *.nudityai* \n' + Config.D_EMOJI + ' Desc: Shows the NSFW value in the photo between 1 and 0.\n\n' + Config.C_EMOJI + ' Usage: *.ganstyle*\n' + Config.D_EMOJI + ' Desc: Combines the photo you replied to with the currently selected image.\n\n⚠️ *All these AI tools work with in-depth learning.  The more you use it, the more information it stores.* ```Use only English characters!``` ');
    }));
  AlphaX.addCommand({pattern: 'faceai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION})
  }));
  AlphaX.addCommand({pattern: 'animai', fromMe: WType, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
    var min = 10000; 
    var max = 50000; 
    var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
    var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
    await message.sendMessage(
      Buffer.from(IMGWADATA.data),
      MessageType.image, 
      { mimetype: Mimetype.jpg, caption: Config.CAPTION}
    )
  }));
  AlphaX.addCommand({pattern: 'colorai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("colorizer", {
          image: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'waifuai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => { 
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("waifu2x", {
          image: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {thumbnail: base64str, mimetype: Mimetype.jpg, caption: Config.CAPTION})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'superai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => { 
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("torch-srgan", {
          image: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'moodai ?(.*)', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);
    var resp = await deepai.callStandardApi("sentiment-analysis", {
      text: `${match[1]}`,
    });
    await message.reply(`*Mood:* ${resp.output}`);
  }));
  AlphaX.addCommand({pattern: 'dreamai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("deepdream", {
          image: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'neuraltalkai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("neuraltalk", {
          image: fs.createReadStream("./output.jpg"),
        });
        await message.reply(`*Output:* ${resp.output}`);
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'ttiai ?(.*)', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);
    var resp = await deepai.callStandardApi("text2img", {
      text: `${match[1]}`,
    });
    var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION})
  }));
  AlphaX.addCommand({pattern: 'toonai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("toonify", {
          image: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'nudityai$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => { 
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("content-moderation", {
          image: fs.createReadStream("./output.jpg"),
        });
        await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
  AlphaX.addCommand({pattern: 'textai ?(.*)', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);
    var resp = await deepai.callStandardApi("text-generator", {
      text: `${match[1]}`,
    });
    await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
  }));
  AlphaX.addCommand({pattern: 'ganstyle$', fromMe: WType, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
    var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });
    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("fast-style-transfer", {
          style: Config.GANSTYLE,
          content: fs.createReadStream("./output.jpg"),
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION})
      });
      return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: WType})
  }));
