
const discord = require("discord.js");
const dotenv = require("dotenv");
const { IntentsBitField } = discord;
const eventHandler = require("./events/eventHandler.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const rpsCommand = require("./commands/rps.js");
const leaderboardCommand= require("./commands/leaderboard.js"); 
const showXpCommand = require("./commands/showxp.js"); 
 
dotenv.config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = '319918985602924544';

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

 const rest = new REST({version: '10'}).setToken(TOKEN);

//slash commands
const commands =  [rpsCommand, leaderboardCommand,showXpCommand];


// main function
async function main(){
    
        try {
            console.log('/ Command activations')
            
            //Path for / commands, method type: PUT
            await rest.put(Routes.applicationGuildCommands(CLIENT_ID,GUILD_ID), {
                body: commands
            });
            
            //activates the bot
            client.login(TOKEN);

        } catch(err) {
            console.log(err);
        }
};

main();

 