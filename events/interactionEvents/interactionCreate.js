const discord = require("discord.js");
const {MongoClient} = require("mongodb")
const {rpsGame} = require("../../commands/rps.js");
const {showXP} = require("../../commands/showxp.js");
const {leaderboard} = require("../../commands/leaderboard.js");

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
                    rpsGame(mongoClient, interaction);
                }
                if(interaction.commandName === 'showxp'){
                    showXP(mongoClient, interaction);
                }
                if(interaction.commandName === "leaderboard"){
                    leaderboard(mongoClient,interaction);
                }

            }

        });

    },

    
}