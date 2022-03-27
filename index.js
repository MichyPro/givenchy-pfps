const { Client, Intents, Collection, MessageEmbed, User, Interaction} = require('discord.js')
global.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, ]  });
const { token } = require('./commands/config/config.json')
const fs = require("fs")
client.login(token)

client.commands = new Collection()

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

const commandsFolder = fs.readdirSync("./commands");
for(const folder of commandsFolder){
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"))
    for (const file of commandsFiles){
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command)
    }
}