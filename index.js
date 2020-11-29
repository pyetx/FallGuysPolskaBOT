const Discord = require('discord.js');
const bot = new Discord.Client();

const { TOKEN } = require("./config.json");

bot.on('ready', () => {
    console.log('Gotowy');

});

bot.on("message", function (message) {
    if (message.content === ".r") {
        const channel01 = bot.channels.cache.find(channel => channel.id === "channel_ID");
        channel01.send("Text");
    }
});

bot.login(TOKEN);