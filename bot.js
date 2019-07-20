const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602084954582548490")
setInterval(function() {
channel.send(`Mostfa lol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);