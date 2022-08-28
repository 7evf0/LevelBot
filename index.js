
const discord = require("discord.js");
const dotenv = require("dotenv");
const { IntentsBitField } = discord;
const eventHandler = require("./events/eventHandler.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const commandHandler = require('./commands/commandHandler')


dotenv.config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

/*
    BİREYSEL ÇALIŞIRKEN FARKLI BOTLAR ÜSTÜNDEN ÇALIŞMAK MANTIKLI OLABİLİR.
    .env dosyasındaki TOKEN yerine kendi botunun tokenını gir reisim
*/

// implementing the bot with its intents
const client = new discord.Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildMessageReactions,
    ]
});

eventHandler.handler(client);

 const rest = new REST({version: '10'}).setToken(TOKEN);




// main function
async function main(){
    
        try {
            console.log('/ Command activations')
            
            //Path for / commands, method type: PUT
            await rest.put(Routes.applicationGuildCommands(CLIENT_ID,GUILD_ID), {
                body: commandHandler.handler()
            });
            
            //activates the bot
            client.login(TOKEN);

        } catch(err) {
            console.log(err);
        }
};

main();

 