const discord = require("discord.js");
const {EmbedBuilder , ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType} = discord;
const {MongoClient} = require("mongodb")
const {readData} = require("../../databaseFeatures/dbReadData.js");
const {updateData} = require("../../databaseFeatures/dbUpdateUser.js");
const {codeHandler} = require("../../commands/commandHandler.js");

// Client interactionCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoClient} mongoClient
     */

    async event(client, mongoClient){
        
        const commandCodes = codeHandler();

        client.on("interactionCreate", async (interaction) => {

            if(interaction.isCommand()){

                const commandName = interaction.commandName;
                commandCodes[commandName];

            }

        });

    },

    
}