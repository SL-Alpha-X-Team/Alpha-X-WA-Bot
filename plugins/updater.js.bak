const simpleGit = require('simple-git');
const axios = require('axios');
const git = simpleGit();
const AlphaX = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const AlphaXnpm = require('alpha-wabot-npm');
const Language = require('../language');
const Lang = Language.getString('updater');

AlphaX.addCommand({pattern: 'up$', fromMe: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await AlphaXnpm.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var Updates = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                Updates += Config.C_EMOJI + ' ෴  ' + commit.message + ' ```<' + commit.author_name + '>```\n';
            }
        );
        
        await axios.get('https://SL-Alpha-X.github.io').then (async (webpage) => {
        let thumb = await axios.get(webpage.data.up_url, {responseType: 'arraybuffer'});
        
        await message.client.sendMessage(
            message.jid,
            Buffer.from(thumb.data),
            MessageType.image,
            { mimetype: Mimetype.png, caption: Updates, thumbnail: Buffer.from(thumb.data), quoted: message.data }
          );
      });
    }
}));
var Action = ''
if (Config.LANG == 'TR') Action = '*🚀 Halihazırda Güncelleniyor!*'
if (Config.LANG == 'SI') Action = '*🚀 දැනට යාවත්කාලීන වෙමින් පවතී!*'
if (Config.LANG == 'AZ') Action = '*🚀 Hal -hazırda Yenilənir!*'
if (Config.LANG == 'EN') Action = '*🚀 Currently Updating!*'
if (Config.LANG == 'RU') Action = '*🚀 сейчас обновляется!*'
if (Config.LANG == 'ES') Action = '*🚀 Actualizando actualmente!*'
if (Config.LANG == 'PT') Action = '*🚀 está sendo atualizado no momento!*'
if (Config.LANG == 'ML') Action = '*🚀 നിലവിൽ അപ്ഡേറ്റ് ചെയ്യുന്നു!*'
if (Config.LANG == 'HI') Action = '*🚀 वर्तमान में अपडेट हो रहा है!*'
if (Config.LANG == 'ID') Action = '*🚀 Saat Ini Memperbarui!*'
AlphaX.addCommand({pattern: 'up now$', fromMe: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await AlphaXnpm.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var on_progress = false
        if (on_progress) return await message.client.sendMessage(message.jid,Action,MessageType.text)
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            on_progress = true
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Update fail*\n*error:* ```' + err + '```', MessageType.text);
                }
            }));
        }
    }
}));
