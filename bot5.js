const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 تعال اخطفك بحضني

https://discord.gg/FcWN8PK
joined info-legends
! legends.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})

client.login(process.env.BOT_TOKEN5);
