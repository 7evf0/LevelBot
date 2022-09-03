const discord = require("discord.js");
const {MongoClient} = require("mongodb")
const {rpsGame} = require("../../games/rpsGame");

// Client interactionCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoClient} mongoClient
     */

    async event(client, mongoClient){
        
    // collects every slash command script into an object

        client.on("interactionCreate", async (interaction) => {

            if(interaction.isCommand()){
                if(interaction.commandName === 'rps'){
                    rpsGame(mongoClient, interaction)
                }

            }

        });

    },

    
}