const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (Dani, m, from) => {
const { sendImage, sendMessage } = Dani;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const Dani = await makeWaSocket({
auth: state,
browser: [`Jadibot Md By (Dani Bot)`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

Dani.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

Dani.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
Dani.sendNode({
  tag: 'call',
    attrs: {
      from: '6285714627920@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await Dani.sendContact(callerId, owner)
await Dani.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await Dani.updateBlockStatus(callerId, "block")
}
})

Dani.ev.on('messages.upsert', async chatUpdate => {
try {
Dan = chatUpdate.messages[0]
if (!Dani.message) return
Dani.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? Dan.message.ephemeralMessage.message : Dan.message
if (Dan.key && Dan.key.remoteJid === 'status@broadcast') return
if (!Dani.public && !Dan.key.fromMe && chatUpdate.type === 'notify') return
if (Dan.key.id.startsWith('BAE5') && Dan.key.id.length === 16) return
m = smsg(Dani, Dan, store)
require('./Dani')(Dani, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

Dani.public = true

store.bind(Dani.ev);
Dani.ev.on("creds.update", saveCreds);
Dani.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik', m)
console.log(connection)
if (connection == "open") {
Dani.id = Dani.decodeJid(Dani.user.id)
Dani.time = Date.now()
global.conns.push(Dani)
await m.reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× id : ${Dani.decodeJid(Dani.user.id)}*_`)
user = `${Dani.decodeJid(Dani.user.id)}`
txt = `*Terdeteksi menumpang Jadibot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6285714627920@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); Dani.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); Dani.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); Dani.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else Dani.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

Dani.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Dani.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Dani.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Dani.getName = (jid, withoutContact  = false) => {
id = Dani.decodeJid(jid)
withoutContact = Dani.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Dani.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Dani.decodeJid(Dani.user.id) ?
Dani.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Dani.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Dani.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Dani.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Dani.getName(i + '@s.whatsapp.net')}\n
FN:${await Dani.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:xinzbot@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://danixcoders.herokuapp.com\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
Dani.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

Dani.setStatus = (status) => {
Dani.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Dani.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Dani.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Dani.sendText = (jid, text, quoted = '', options) => Dani.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, conns }