const discord = require("discord.js")
const readDatabase = require("../databaseFeatures/dbReadData")
const addDatabase = require("../databaseFeatures/dbAddUser")
const { MongoClient } = require("mongodb");

require("dotenv").config();



/**
 * 
 * @param {discord.Client} client 
 * @param {MongoClient} mongoClient
 */

module.exports = async (client, mongoClient) => {
    //discord server id
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    guild.members.fetch().then(members => {
        //iterating over each member whether is it added to database
        setInterval(() => {
            members.forEach(member => {
                if (!member.user.bot) {
                    readDatabase.readData(mongoClient, { "userID": member.user.id }).then((data) => {
                        if (data.length === 0) {
                            console.log("There is no such user with this filtration");
                            addDatabase.addData(mongoClient, {
                                "userID": member.user.id,
                                "XP": 0,
                                "Level": 1
                            })
                        }
                    });
                }
            });
        }, 1000 * 60  * 10);

    })
}