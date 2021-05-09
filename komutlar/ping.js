const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  const ottoman = new Discord.MessageEmbed()
  .setDescription('**Botun pingi Hesaplanıyor:tac~2:**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(ottoman)
    let diff = (Date.now() - start); 
    let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
        const ottoman = new Discord.MessageEmbed()
        .setDescription(`** bot**\nMesaj gecikme süresi; **${diff}ms** \n\n<a:tac:730709347386130522> **Karyus bot**\nBot gecikme süresi; **${API}ms**`)
        mesaj.edit(ottoman);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingin, Ölçer',
  usage: 'ping'
};