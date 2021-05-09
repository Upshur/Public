const discord = require('discord.js')
exports.run = async(client, message, args) => {
//OTTOMAN CODE
if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu komutu kullanabilmek için yeterli iznin yok.`);
let OTTOMAN = message.mentions.members.first()
if (!OTTOMAN) return message.channel.send(`kullanıcı etiketle.`)
let SAMET = args.slice(1).join(' ')
if (!OTTOMAN) return message.channel.send(`ismi gir.`)
//OTTOMAN CODE
OTTOMAN.setNickname(SAMET)
message.channel.send(`${OTTOMAN} isimli kullanıcının adı \**${SAMET}\** olarak değiştirildi.`)
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
//OTTOMAN CODE
exports.help = {
  name: 'isim-değiştir',
  usage: 'isim-değiştir',
  description: 'isim-değiştir'
}