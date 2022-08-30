const discord = require("discord.js")
const readDatabase = require("../databaseFeatures/dbReadData")
const addDatabase = require("../databaseFeatures/dbAddUser")
const { MongoClient } = require("mongodb");



/**
 * 
 * @param {discord.Client} client 
 * @param {MongoClient} mongoClient
 */

module.exports = async (client, mongoClient) => {
    //discord server id
    const guild = client.guilds.cache.get('319918985602924544');

    guild.members.fetch().then(members => {
        //iterating over each member whether is it added to database


        members.forEach(member => {
            readDatabase.readData(mongoClient, member.user.id, "userID").then((data) => {
                if (!data) {
                    addDatabase.addData(mongoClient, {
                        "userID": member.user.id,
                        "XP": 0,
                        "Level": 1
                    })
                }
            })

        })


    })
}