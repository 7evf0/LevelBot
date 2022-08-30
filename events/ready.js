
const discord = require("discord.js");
const {mongoClient } = require("../index.js")
const members = require("../features/member_counter")

// Client being ready event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client){
        
        client.on("ready", () => {

            console.log(`The ${client.user.username} has logged in`);
            members(client,mongoClient);
            
        });

    },

    
}