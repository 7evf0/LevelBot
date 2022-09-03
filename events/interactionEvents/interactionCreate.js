const discord = require("discord.js");
const {MongoClient} = require("mongodb")
const {codeHandler} = require("../../commands/commandHandler.js");

// Client interactionCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoClient} mongoClient
     */

    async event(client, mongoClient){
        
    // collects every slash command script into an object
        const commandCodes = codeHandler();

        client.on("interactionCreate", async (interaction) => {

            if(interaction.isCommand()){

                const commandName = interaction.commandName;

            // executes the specific script
                try {
                
                    commandCodes[commandName](mongoClient, interaction);

                } catch (error) {
                    console.log("Error occured while accessing the code: " + error);
                }
                

            }

        });

    },

    
}