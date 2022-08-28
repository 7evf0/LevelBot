const discord = require("discord.js");

// Client messageCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client){
        
        client.on("messageCreate", async (msg) => {
            
            if(msg.content === "!addData"){
                console.log("Entered");
                const schema = {
                    "userID": 123456,
                    "XP": 146,
                    "Level": 2
                }

                const addDatabase = require("../databaseFeatures/dbAddUser.js");
                addDatabase.addData(client,schema);
            }

        });

    },

    
}