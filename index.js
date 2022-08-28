
const discord = require("discord.js");
const { IntentsBitField } = discord;
const eventHandler = require("./events/eventHandler.js");
const databaseConnect = require("./databaseFeatures/dbConnect.js");

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

// main function
async function main(){
    
    // gets the essential info (ex. bot token)
    require("dotenv").config();

    // handles all the event files before running
    eventHandler.handler(client);

    // creates the connecting with database before running the bot
    databaseConnect();

    //logs the bot in
    client.login(process.env.TOKEN);


};

main();

