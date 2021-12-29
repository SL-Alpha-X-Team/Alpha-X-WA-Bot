const AlphaX = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const PHONEDE_DESC = "It Send Github User Data."
const NEED_WORDC = "*ℹ️ Enter github user name!*"
const USAGE = ".github adwajsinghe"
const LOADING = "```Fetching User Data...```"
const PHN_PHN = "• Name :"
const PHN_NAME = "• BIO :"
const PHN_RDATE = "• Company :"
const PHN_SIZE = "• Email :"
const PHN_ANDRO = "• Public Repo :"
const PHN_STOR = "• Public Gists :"
const PHN_DISP = "• Followers :"
const PHN_INCH = "• Following :"
const PHN_PIX = "• URL :"
const PHN_VPIX = "• Type :"
const PHN_CREAT = "• Created at :"
const NOT_FOUND = "*Can't Find Anything :(* >> "

    AlphaX.addCommand({ pattern: 'github ?(.*)', fromMe: WType, usage: USAGE, desc: PHONEDE_DESC }, (async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(NEED_WORDC);

    await message.sendMessage(LOADING);

    try {
    await axios
      .get(`https://api.github.com/users/${pname}`)
      .then(async (response) => {
        const {
              login,
              id,
              avatar_url,
              html_url,
              bio,
              name,
              company,
              public_repos,
              public_gists,
              followers,
              following,
              created_at,
              type,
              email,
              
        } = response.data

        const profileBuffer = await axios.get(avatar_url, {responseType: 'arraybuffer'})

        const msg = `*${PHN_PHN}* ${login}` + `\n` +        
        `*${PHN_NAME}* ${bio}` + `\n` + 
        `*${PHN_RDATE}* ${company}`+ `\n` + 
        `*${PHN_SIZE}* ${email}` + `\n` + 
        `*${PHN_ANDRO}* ${public_repos}` + `\n` + 
        `*${PHN_STOR}* ${public_gists}` + `\n` + 
        `*${PHN_DISP}* ${followers}` + `\n` + 
        `*${PHN_INCH}* ${following}` + `\n` + 
        `*${PHN_PIX}* ${html_url}` + `\n` + 
        `*${PHN_VPIX}* ${type}` + `\n` + 
        `*${PHN_CREAT}* ${created_at}`
        
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { mimetype: Mimetype.png, caption: msg, thumbnail: Buffer.from(profileBuffer.data) });
        
      });
      
      } catch {
      await message.sendMessage(NOT_FOUND + userName)
      }
      
}));
