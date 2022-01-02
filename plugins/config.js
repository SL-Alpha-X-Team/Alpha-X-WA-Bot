const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './alphaX.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'V.1 Global Stable',
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    GROUP: 'https://chat.whatsapp.com/ItIRSBUMN9t2lQzCpfAKWt',
    SESSION: process.env._ALPHA_SESSION === undefined ? '' : process.env._ALPHA_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? '' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    AI_LILY: process.env.AI_LILY === undefined ? 'false' : process.env.AI_LILY,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;/#]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    CAPTION: process.env.CAPTION === undefined ? '༺🚀 Mᴀᴅᴇ Bʏ Ａｌｐｈａ-Ｘ 🔮࿐' : process.env.CAPTION,
    BOTNAME: process.env.BOT_NAME === undefined ? '≪━─━─━─━─🛡️─━─━─━─━≫\n          *🛸 Ａｌｐｈａ-Ｘ 🛸*\n        ╚╩══• •✠•❀•✠ • •══╩╝' : process.env.BOT_NAME,
    BIONAME: process.env.BIO_NAME === undefined ? '━──🔥──╮• Ａｌｐｈａ-Ｘ •╭──🔥──━' : process.env.BIO_NAME,
    CL_KEY: process.env.COMMAND_LIST_KEY === undefined ? 'alphaWA' : process.env.COMMAND_LIST_KEY,
    AM_KEY: process.env.ALIVE_MSG_KEY === undefined ? 'alive' : process.env.ALIVE_MSG_KEY,
    D_SONG: process.env.DOWNLOAD_SONG === undefined ? '*🄳ᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ...* 📥' : process.env.DOWNLOAD_SONG,
    U_SONG: process.env.UPLOAD_SONG === undefined ? '*🅄ᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ...* 📤' : process.env.UPLOAD_SONG,
    D_VIDEO: process.env.DOWNLOAD_VIDEO === undefined ? '*🄳ᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ...* 📥' : process.env.DOWNLOAD_VIDEO,
    U_VIDEO: process.env.UPLOAD_VIDEO === undefined ? '*🅄ᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ...* 📤' : process.env.UPLOAD_VIDEO,
    U_NAME: process.env.USER_NAME === undefined ? 'Enter Name 🥲' : process.env.USER_NAME,
    C_EMOJI: process.env.COMMAND_EMOJI === undefined ? '🪀' : process.env.COMMAND_EMOJI,
    D_EMOJI: process.env.DESC_EMOJI === undefined ? '🎗️' : process.env.DESC_EMOJI,
    W_EMOJI: process.env.WARN_EMOJI === undefined ? '⚠️️' : process.env.WARN_EMOJI,
    A_PIC: process.env.ALIVE_PIC === undefined ? 'Sending pp' : process.env.ALIVE_PIC,
    CL_PIC: process.env.COMMAND_LIST_PIC === undefined ? 'https://telegra.ph/file/dc8e4edc7230cedbdec2c.jpg' : process.env.COMMAND_LIST_PIC,
    D_SONG_PIC: process.env.DOWNLOAD_SONG_PIC === undefined ? 'https://thumbs.dreamstime.com/b/stereo-headphones-glitch-effect-music-electronic-devise-vector-icon-night-party-background-164226152.jpg' : process.env.DOWNLOAD_SONG_PIC,
    D_VIDEO_PIC: process.env.DOWNLOAD_VIDEO_PIC === undefined ? 'https://moddingunited.xyz/wp-content/uploads/2021/06/PicsArt_06-18-08.57.23-1024x633.jpg' : process.env.DOWNLOAD_VIDEO_PIC,
    WLCM_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/338cb7f0b2b01e463efcd.mp4' : process.env.WELCOME_GIF,
    GBYE_GIF: process.env.GOODBYE_GIF === undefined ? 'https://telegra.ph/file/88f85fe6850015ae49067.mp4' : process.env.GOODBYE_GIF,
    BLOCKLINK : process.env.BLOCK_LINK === undefined ? 'false' : process.env.BLOCK_LINK,
    BLINK_A : process.env.BLOCK_LINK_A === undefined ? 'chat.whatsapp.com' : process.env.BLOCK_LINK_A,
    BLINK_B : process.env.BLOCK_LINK_B === undefined ? 'pornhub.com' : process.env.BLOCK_LINK_B,
    ALB_MSG : process.env.ANTILINK_BAN_MSG === undefined ? 'default' : process.env.ANTILINK_BAN_MSG,
    BGM: process.env.BGM === undefined ? 'false' : process.env.BGM,
    CMENU: process.env.EXTRA_MENU_TITLE === undefined ? '෴ ɢᴜɪᴅᴇ 👀' : process.env.EXTRA_MENU_TITLE,
    CMENU_MSG: process.env.EXTRA_MENU_MESSAGE === undefined ? 'Read The Guide. ℹ️ \n\n```Alpha-X Bot - Alpha Userbot is Open Source software open to development. \nThe user is responsible for all consequences that may arise from incorrect or misuse. \nSince it is an open source project, anyone can copy the software, add and remove,\nand use it in a way that they customize. In addition, plug-in support enables users to \ninstall their own plugins to the original software and use them as they wish.\nUsing the bot out of purpose will explicitly ban you.\nUsage is entirely the user\'s responsibility, Alpha Userbot is an \ninfrastructure only. Just as the operating system is not responsible \nfor the work done with the programs that are installed later, Alpha-X \nis not responsible for the usage purpose and method of the users.\nMarketing Alpha-X for money, making it available or having any material value\nıt is strictly forbidden to offer it for sale with anything. All legal investigations that may arise\nthe user is responsible.```' : process.env.EXTRA_MENU_MESSAGE,
    XAPI: process.env.XTEAM_API_KEY === undefined ? '' : process.env.XTEAM_API_KEY,
    BKICK: process.env.ANTI_BADWORD === undefined ? 'false' : process.env.ANTI_BADWORD,
    BKICK_MSG: process.env.ANTI_BADWORD_KICK_MSG === undefined ? 'default' : process.env.ANTI_BADWORD_KICK_MSG,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './alphaX.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? 'grRerqHXstRifHRuHcWkLL7V' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG", 
    BOTHELP: "120363023256845651",
    COMMUNITY: "120363022626781816"
    };
