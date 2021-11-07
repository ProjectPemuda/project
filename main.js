const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype, 
    mentionedjid,
    connect,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js")
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const figlet = require('figlet')
const colors = require('colors');
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");
const { getBuffer } = require('./lib/myfunc');
const { uncache, nocache } = require('./lib/loader')
const { color, bgcolor, brightcolor } = require("./lib/color");
const { forks, start, success, time, sleep, banner, waktoonyabro, calender, getGroupAdmins } = require('./lib/functions')
baterai = '63'
charging = 'Gak Dicas'
blocked = []
memek = {
"actioncall": "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`",
}

require('./main.js')
nocache('../main.js', module => console.log(color('[ WATCH ]', 'orange'), color(`'${module}'`, 'red'), 'File is updated!'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ WATCH ]', 'orange'), color(`'${module}'`, 'red'), 'File is updated!'))

const starts = async (pemuda = new WAConnection()) => {
   pemuda.logger.level = 'warn' 
   pemuda.version = [2, 2143, 3]
   console.log(color(figlet.textSync('Project\nPemuda', {font: 'Elite'}), 'cyan'))   
    pemuda.browserDescription = ['Project Pemuda','Desktop','3.0']
   pemuda.on('qr', () => {
   console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan bang'))
})
   fs.existsSync('./media/session/QrNya.json') && pemuda.loadAuthInfo('./media/session/QrNya.json')
   pemuda.on('connecting', () => {
   console.log(bgcolor(waktoonyabro, 'red'))
})
   pemuda.on('open', () => {
   start('2', '\n');
})
   await pemuda.connect({timeoutMs: 30*1000})
   fs.writeFileSync("./media/session/QrNya.json",JSON.stringify(pemuda.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/Ifk2ChQiGoTEHq0go90V7N`
 pemuda.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Bergabung ke Grup Official Project Pemuda 3', 'cyan'))
   start('2',color("\nMenunggu Pesan Baru...", 'cyan'));

                                    
   pemuda.on('ws-close', () => {
   pemuda.logger.warn('Connected Timeout')
   console.log(color('Koneksi terputus, mencoba menghubungkan kembali..', 'red'))                
})
   pemuda.on('close', async ({ reason, isReconnecting }) => {
   console.log(color('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting, 'cyan'))
   if (!isReconnecting) {
   console.log(color('Connect To Phone Rejected and Shutting Down.', 'cyan'))}
})
   pemuda.on('chat-update', async (message) => {
   require('./index.js')(pemuda, message)
}) 
   pemuda.on('group-participants-update', async (anj) => {
        const sender = pemuda.user.jid
        groupMet = await pemuda.groupMetadata(anj.jid);
        groupMembers = groupMet.participants;
        groupAdmins = getGroupAdmins(groupMembers);
        mdata = await pemuda.groupMetadata(anj.jid)
        const conts = pemuda.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
	
        const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + anj.participants[0].replace('@s.whatsapp.net', '')).getNumber('international')

 	    const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anj.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285721599053:6285721599053\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    	
        taguser = `${anj.participants[0].split("@")[0]}`	    	    
		try {	
		console.log(anj)
		mem = anj.participants[0]
        if (anj.action == "add" && mem.includes(pemuda.user.jid)) {
        pemuda.sendMessage(anj.jid, "Terima Kasih Telah Mengundangkan bot ini ke grup mu Silahkan Ketik #menu untuk melihat fitur bot ini yang sangatt berguna untuk kalian buat sticker🌚\n\n*Join link group di bawah ini untuk informasi Bot pemuda*\n*○* https://chat.whatsapp.com/E1Z7l6gJ1QxJuNN8yuScp1", "conversation");
        }		
		if (anj.action == 'add') {
		num = anj.participants[0]
        try {
            pp_user = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
        } catch (e) {
            pp_user = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }        	
		
        memeg = mdata.participants.length;
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/X4TzvLh/cce415c4998a.jpg`)
		buttons = [{ buttonId: `98`, buttonText: { displayText: "Oke‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nJadi gini, Aku mau jujur ke Kalian Semua, Kalau aku itu Gay dan Anak Haram, Aku sedang mencari Pria Gay untuk jadi pasanganku di grup ini, Kalau kalian mau atau ada kenalan Gay, Pc aja yah, Masih Anget kok  ( ◜‿◝ )♡'" }, type: 1 }]
        imageMsg = (
        await pemuda.prepareMessageMedia(buff, "imageMessage", {
        thumbnail: buff,
})
        ).imageMessage;
        buttonsMessage = {        
        contentText: `*── 「 WELCOME 」 ──*\n\nHai kak @${taguser}\nSelamat Datang Budayakan Baca Deskripsi Dan Patuhi Peraturan Grup☕`,
        footerText: "Welcome Message",
        imageMessage: imageMsg,
        buttons: buttons,
        headerType: 4,
        }
        prep = await pemuda.prepareMessageFromContent(
        mdata.id, { buttonsMessage },{quoted: fkontak, contextInfo:{"mentionedJid": [taguser + '@s.whatsapp.net', sender]}})      
        pemuda.relayWAMessage(prep)     				             
		} else if (anj.action == 'remove') {
		num = anj.participants[0]
        try {
            pp_user2 = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
        } catch (e) {
            pp_user2 = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }       				
	    memeg = mdata.participants.length;
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user2}&bg=https://i.ibb.co/X4TzvLh/cce415c4998a.jpg`);			
	    buttons = [{ buttonId: `98`, buttonText: { displayText: "Good Bye" }, type: 1 },]
        imageMsg = (
        await pemuda.prepareMessageMedia(buff, "imageMessage", {
        thumbnail: buff,
})
        ).imageMessage;
        buttonsMessage = {
        contentText: `Sayonara @${taguser}👋🏻`,
        footerText: "Leave Message",
        imageMessage: imageMsg,
        buttons: buttons,
        headerType: 4,
        }
        prep = await pemuda.prepareMessageFromContent(
        mdata.id, { buttonsMessage },{quoted: fkontak, contextInfo:{"mentionedJid": [taguser + '@s.whatsapp.net', sender]}})                     
        pemuda.relayWAMessage(prep) 
        }
		} catch (e) {
        console.log('Error : %s', color(e, 'red'))
}
})        
							    				    	    	  
   pemuda.on('group-update', async (anu) => {
        metdata = await pemuda.groupMetadata(anu.jid)
        const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285721599053:6285721599053\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    	
        
        if(anu.announce == 'false'){
        teks = `*- [ Group Opened ] -*\n\nHoree.. Group telah dibuka oleh admin\nSekarang semua member bisa mengirim pesan`
        pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
} 
   else if(anu.announce == 'true'){
        teks = `*- [ Group Closed ] -*\n\nYahh..Group telah ditutup oleh admin\nSekarang hanya admin yang dapat mengirim pesan`
        pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
}
   else if(!anu.desc == ''){
        tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
        teks = `*- [ Group Description Change ] -*\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
        pemuda.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
}
   else if(anu.restrict == 'false'){
        teks = `*- [ Group Setting Change ] -*\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
        pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
}
   else if(anu.restrict == 'true'){
        teks = `*- [ Group Setting Change ] -*\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
        pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
   }   
})  
   antidel = true
   pemuda.on("message-delete", async (m) => {
        if (m.key.remoteJid == "status@broadcast") return;
        if (!m.key.fromMe && m.key.fromMe) return;  
        if (antidel === false) return      
        m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
        const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
        let d = new Date();
        let locale = "id";
        let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
        Math.floor((d * 1 + gmt) / 84600000) % 5];
        let week = d.toLocaleDateString(locale, { weekday: "long" });
        let calender = d.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
});
        const type = Object.keys(m.message)[0];
        pemuda.sendMessage(
        m.key.remoteJid, `🔖𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄🔖
      
*🌹Nama :* @${m.participant.split("@")[0]}
*🌹Waktu :* ${week} ${calender}
*🌹Type :* ${type}`,
        MessageType.text,{ quoted: m.message, contextInfo: { mentionedJid: [m.participant]}});
        pemuda.copyNForward(m.key.remoteJid, m.message);
})
antical = true
pemuda.on('CB:action,,call', async json => {
     if (antical === false) return    
        const callerId = json[2][0][1].from;
        console.log("BOT Di telpon dari "+ callerId)
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        pemuda.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        pemuda.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/pemuda_1.jpg'),sourceUrl:`https://wa.me/6282252509320?text=Assalamualaikum`}}})
        await sleep(5000)
        await pemuda.blockUser(callerId, "add")
        })
   pemuda.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

starts()
