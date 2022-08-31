
const discord = require("discord.js");

const membersAdd = require("../features/member_checkerAdd")
const membersDelete = require("../features/member_checkerDelete")

// Client being ready event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient){
        
        client.on("ready", () => {

            console.log(`The ${client.user.username} has logged in`);
            membersAdd(client,mongoClient);
            membersDelete(client, mongoClient);
        });

    },

    
}