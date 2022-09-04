const discord = require("discord.js")
const {readData} = require("../databaseFeatures/dbReadData")
const {addData} = require("../databaseFeatures/dbAddUser")
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
                    readData(mongoClient, { "userID": member.user.id }).then((data) => {
                        if (data.length === 0) {
                            console.log("There is no such user with this filtration " + data);
                            addData(mongoClient, {
                                "userID": member.user.id,
                                "XP": 0,
                                "Level": 1
                            })
                        }
                        else{
                            console.log("User exists!");
                        }
                    });
                }
            });
        }, 1000 * 60 * 10);

    })
}