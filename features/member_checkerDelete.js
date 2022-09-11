const discord = require("discord.js")
const {readData} = require("../databaseFeatures/dbReadData")
const {deleteData} = require("../databaseFeatures/dbDeleteUser")
const { MongoClient } = require("mongodb");
const { set } = require("mongoose");
require("dotenv").config();



/**
 * 
 * @param {discord.Client} client 
 * @param {MongoClient} mongoClient
 */

module.exports = async (client, mongoClient) => {
    //discord server id
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    let serverMembers = [];
    
    await guild.members.fetch().then(members => {
        serverMembers = members;
    })
    

    readData(mongoClient, {}).then(datas => {
        setInterval(() => {
            //iterating over all datas
            datas.forEach(data => {
                //if isContain false, below code deletes the data in the database
                if (!serverMembers.get(data.userID)) {
                    console.log(data.userName)
                    console.log(serverMembers.get(data.userID))
                    deleteData(mongoClient, {
                        "userID": data.userID
                    })
                }
            })
        }, 1000 * 10)
    })

}