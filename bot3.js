const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
سالخخير ي جميل .
ودي اعزمك على سيرفري , اذا ممكن تلبي الدعوة ي بعد قلبي ؟
مكآن راقي يليق بمقامك .
                               [ https://discord.gg/QFSd2Cx ] 
حياك ي بعد قلبي وكلي ... [ ${member}  ]
**) 
}).catch(console.error)
})

 client.login(process.env.BOT_TOKEN3);
