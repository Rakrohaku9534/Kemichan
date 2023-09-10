let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/db0e40e4880243829ffc4.jpg'
let dann =
`
Scan diatas untuk memproses pembelian anda
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler