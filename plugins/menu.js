let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`


  ‎‎الذكاء الاصطناعي ومشتقاته
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🤖
*.ai*
*.ai2*
*.dalle2*
*.chatgbt*
*.drawing*
*.bard*
*.bard2*
 ‎‎ التحميلات ومشتقاتها
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🔥

*.apk*
*.apk2*
*.apkmirror*
*.pinterest*
*.mediafire2*

‎‎‎أدوات اخرى 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁💡

*.translate*
*.wasted*
*.topdf*
*.textpdf*
*.sticker*

🛡️‎‎صاحب البوت ‎‎
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁🏃

  ⌬ | *𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼*:\ninstagram.com/ayman_khl15
⌬ | *𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺*:\nfacebook.com/Ayman.Khl05
  ----------------------------- 
`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/bba27bc6b305ac6a5229d.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu'] 
export default handler
