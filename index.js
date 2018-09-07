const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token; 
const prefix = ("Todd");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Fumer des splifs avec Bojack').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur soup' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Hey Salut, ça va ?")
    }
    if (msg.content === prefix + "youtube"){
        msg.channel.send("https://www.youtube.com/channel/UC3jCKKdmmyAE8pKU9OOCLyg?view_as=subscriber")
        console.log("Une personne a demandé pour aller sur youtube.")
    }

});

bot.login(token);
