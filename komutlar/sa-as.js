const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {

  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, 'aktif')
    message.channel.send(`sa-as sistemi başarı ile açıldı bundan sonra biri sa diyince as şeklinde cevap vereceğim kapatmak istersen m.sa-as kapat`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saas_${message.guild.id}`, 'deaktif')
    message.channel.send(`sa-as sistemi başarı ile kapatıldı artık biri sa diyince as şeklinde cevap vermeyeceğim geri açmak istersen m.sa-as aç.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
 
exports.help = {
  name: 'sa-as'
};