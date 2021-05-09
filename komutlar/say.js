const Discord = require('discord.js');
const db = require('quick.db')
 exports.run = (client, message) => {
 

const Ottoman= new Discord.MessageEmbed()
.setColor("#66CC")
.setDescription(` **${message.guild.name}** Adlı Sunucu **${message.guild.memberCount}**Kişi Var. `)
 return message.channel.send(Ottoman)  
 };

 exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};