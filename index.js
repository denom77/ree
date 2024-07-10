const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1260460472164159610')
        .setType('PLAYING')
        .setURL('https://discord.com/invite/SuMxrQ8q8q')
        .setState('& Menjual Fruit')
        .setName('Ree Store')
        .setDetails('Jasa Joki Blox Fruit')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/990796154201587782/1260461127238680606/fawf.png?ex=668f6766&is=668e15e6&hm=b72bf6a271897dee9f304995a57a04387892feac35b19cfb47fb99b4f6e7a164&')
        .setAssetsLargeText('Trusted')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/990796154201587782/1260461158826246174/1196765932119408711.gif?ex=668f676e&is=668e15ee&hm=5b1aa8de4d86741797bcdc513ac87f9c9d8de91cbd3fcb150141ea8db55f5a3d&')
        .setAssetsSmallText('Verified')
        .addButton('Ree Store Server [JOKI ROBLOX]', 'https://discord.com/invite/SuMxrQ8q8q')
        .addButton('Tanya - tanya', 'https://discord.com/invite/SuMxrQ8q8q');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
