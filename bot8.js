const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT BY : .Jnaby ");



client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [`**  ** حياك ي عيني * https://discord.gg/QFSd2Cx ** `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.on("guildMemberRemove", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
    let words = [`**    ** حياك ي عيني * https://discord.gg/QFSd2Cx .  ** `]
    setTimeout(() =>{
    member.createDM().then(function (channel) {
    return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
  }).catch(console.error)
  }, timer)
  })



 client.login(process.env.BOT_TOKEN8);
