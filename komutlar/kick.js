const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  
let Ottoman = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!Ottoman) {
  const Ottoman = new Discord.MessageEmbed()
  .setDescription('Kimi Kickleyeceğini Yazmalısın!')
  return message.channel.send(Ottoman)
}

  if(Ottoman.id === client.user.id) {
     const Ottoman1 = new Discord.MessageEmbed()
  .setDescription('Kendi Komutumla Benimi Vurcaktın')
  return message.channel.send(Ottoman1)
  }
   if(Ottoman.id === message.author.id) {
      const Ottoman2 = new Discord.MessageEmbed()
  .setDescription('Dostum Kendini Kickleyemezssin!')
  return message.channel.send(Ottoman2)
   }
  
  if(!sebep) {
  const Ottoman3 = new Discord.MessageEmbed()
  .setDescription('Bir Sebep Belirtmelisin!')
  return message.channel.send(Ottoman3)
  }

  message.guild.member(Ottoman).kick();
 const Ottoman4 = new Discord.MessageEmbed()
  .setDescription(`${Ottoman} adlı kişi başaryla ${sebep} sebebinden dolayı ${message.auhtor.tag} tarafından sunucudan Uçuruldu!`)
  return message.channel.send(Ottoman4)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "kick"
}