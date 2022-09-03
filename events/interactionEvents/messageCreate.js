const discord = require("discord.js");
const {MongoClient} = require("mongodb")
const updateData = require("../../databaseFeatures/dbUpdateUser")
const readData = require("../../databaseFeatures/dbReadData")

// Client messageCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoClient} mongoClient
     */
    async event(client, mongoClient){
        
        client.on("messageCreate", async (msg) => {
            if(!msg.author.bot){
                
                //users xp
               readData.readData(mongoClient, {
                    "userID": msg.member.id
                }).then(datas => {
                    updateData.updateData(mongoClient, {
                        "userID": msg.member.id
                    }, 
                    {
                        
                        "XP": datas[0].XP + 0.1
                    })
                });
            }
           
        });

    },

    
}