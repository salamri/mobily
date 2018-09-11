const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 تعال اخطفك بحضني

https://discord.gg/kC2Fc8R
joined info-legends
! legends.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})


client.login('NDg5MTA4NzUzNjI3NjExMTQ3.Dnl9mA.BUvQtahIyaeQR17LlrM79EIgD1g');
