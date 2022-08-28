const discord = require("discord.js");

// Client messageCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client){
        
        client.on("messageCreate", async (msg) => {

        });

    },

    
}