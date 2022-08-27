const discord = require("discord.js");

// Client being ready event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client){
        
        client.on("ready", () => {
            console.log(`The ${client.user.username} has logged in`);
        });

    },

    
}