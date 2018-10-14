const Discord = require('discord.js');
const client1 = new Discord.Client();
const client2 = new Discord.Client();

token1 = ""
token2 = ""

client1.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${client1.guilds.size} " ]`);
  });
client2.on('ready', () => {
  console.log(`Logged in as  * [ " BC " ] servers! [ " ${client2.guilds.size} " ]`);
  });

client1.on('guildMemberRemove', member => {
 console.log("he's ready now");
     member.createDM().then(function (channel1) {
          var test = setInterval (function (){
 channel1.send(`
الدعوة لك ياقلبي :hearts: 
[ ${member}  ]
**Link :** https://discord.gg/Nc2jUeN
`);

          },1000*60*5);

});
});

client1.on('guildMemberAdd', member => {
 console.log("he's ready now");
     member.createDM().then(function (channel1) {
          var test = setInterval (function (){
 channel1.send(`
ادخل ولا تردني طلبتك
[ ${member}  ]
**Link :** https://discord.gg/Nc2jUeN
`);

          },1000*60*5);

});
});


client.login(process.env.BOT_TOKEN6);
