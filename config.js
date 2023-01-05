
const fs = require('fs')
const chalk = require('chalk')

//Funtion Auto
global.autoTyping = false
global.autoRecord = true

//Web apinya
global.webapidani = "https://my-app.xfar.repl.co"

//Apikey nya
global.daniapi = "VeanMyLove"
global.violetics = "beta"

// Other
global.owner = ['6285714627920','6285714627920','6285714627920']
global.premium = ['6285714627920']
global.packname = 'Cratee By Dani'
global.author = 'BocilHaxor'
global.sessionName = 'Dani'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'あ'
global.mess = {
emoji: '_*🇬🇧 : Enter Emoji Parameters*_\n_*🇮🇩 : Masukkan Parameter Emoji*_\n_*🇯🇵 : 絵文字パラメータを入力してください*_',
font: '_*🇬🇧 : Enter Font Parameters*_\n_*🇮🇩 : Masukkan Parameter Font*_\n_*🇯🇵 : フォントパラメータを入力する*_',
replyimage: '_*🇬🇧 : Reply Image*_\n_*🇮🇩 : Balas Imagenya*_\n_*🇯🇵 : 返信画像*_',
anime: '_*🇬🇧 : Enter Anime Parameters*_\n_*🇮🇩 : Masukkan Parameter Anime*_\n_*🇯🇵 : アニメパラメータを入力してください*_',
surah: '_*🇬🇧 : Enter Surah Parameters*_\n_*🇮🇩 : Masukkan Parameter Surah*_\n_*🇯🇵 : Surahパラメータを入力してください*_',
falseurl: '_*🇬🇧 : The URL You Entered is Wrong*_\n_*🇮🇩 : Url Yang Anda Masukkan Salah*_\n_*🇯🇵 : 入力したURLが間違っています*_',
negara: '_*🇬🇧 : Enter Country Parameters*_\n_*🇮🇩 : Masukkan Parameter Negara*_\n_*🇯🇵 : 国のパラメータを入力する*_',
daerah: '_*🇬🇧 : Enter Regional Parameters*_\n_*🇮🇩 : Masukkan Parameter Daerah*_\n_*🇯🇵 : 地域パラメータを入力してください*_',
userid: '_*🇬🇧 : Enter User ID Parameters*_\n_*🇮🇩 : Masukkan Parameter User ID*_\n_*🇯🇵 : ユーザーIDパラメーターを入力します*_',
username: '_*🇬🇧 : Enter Username Parameters*_\n_*🇮🇩 : Masukkan Parameter Username*_\n_*🇯🇵 : ユーザー名パラメーターを入力します*_',
apkk: '_*🇬🇧 : Enter Query Parameters*_\n_*🇮🇩 : Masukkan Parameter Pencarian*_\n_*🇯🇵 : クエリパラメータを入力する*_',
urll: '_*🇬🇧 : Enter URL Parameters*_\n_*🇮🇩 : Masukkan Parameter Url*_\n_*🇯🇵 : URLパラメータを入力してください*_',
textt: '_*🇬🇧 : Enter Text Parameters*_\n_*🇮🇩 : Masukkan Parameter Text*_\n_*🇯🇵 : テキストパラメータを入力する*_',
textt2: '_*🇬🇧 : Enter Parameter Text 2*_\n_*🇮🇩 : Masukkan Parameter Text 2*_\n_*🇯🇵 : パラメータテキスト2を入力してください*_',
success: '_*🇬🇧 : Done*_\n_*🇮🇩 : Selesai*_\n_*🇯🇵 : 終わり*_',
admin: '_*🇬🇧 : Special Admin Group*_\n_*🇮🇩 : Khusus Admin Group*_\n_*🇯🇵 : 特別管理グループ*_',
botAdmin: '_*🇬🇧 : Bot Must Be Admin*_\n_*🇮🇩 : Bot Harus Jadi Admin*_\n_*🇯🇵 : ボットは管理者である必要があります*_',
owner: '_*🇬🇧 : Special Owner Bot*_\n_*🇮🇩 : Khusus Owner Bot*_\n_*🇯🇵 : 特別所有者ボット*_',
group: '_*🇬🇧 : Special For Groups*_\n_*🇮🇩 : Khusus Untuk Group*_\n_*🇯🇵 : グループ向けスペシャル*_',
private: '_*🇬🇧 : Private Chat Only*_\n_*🇮🇩 : Khusus Pribadi Pesan*_\n_*🇯🇵 : プライベートチャットのみ*_',
bot: 'Fitur Khusus Pengguna Nomor Bot',
noPetualang: 'Itssss Kamu Belum Petualang Silahkan Ketik .joinrpg <namamu>',
wait: '_*🇬🇧 : Wait A Few Seconds*_\n_*🇮🇩 : Tunggu Beberapa Detik*_\n_*🇯🇵 : 数秒待つ*_',
premium: '_*🇬🇧 : Premium Members Only*_\n_*🇮🇩 : Khusus Member Premium*_\n_*🇯🇵 : プレミアム会員のみ*_',
endLimit: '_*🇬🇧 : Your daily limit has run out, Please wait for the limit in research*_\n_*🇮🇩 : Limit Harian Anda Telah Habis, Silahkan Tunggu Limit Di Riset*_\n_*🇯🇵 : 1日の制限がなくなりました。制限が調査されるまで、しばらくお待ちください*_',
}
global.limitawal = {
premium: "Infinity",
free: 25,
glimit: 15
}

global.image = fs.readFileSync('./media/image/Dani.jpg')
global.video = fs.readFileSync('./media/video/Dani.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
