const discord = require("discord.js")
const readDatabase = require("../databaseFeatures/dbReadData")
const addDatabase = require("../databaseFeatures/dbAddUser")
const { mongoClient } = require("../index.js")


/**
 * 
 * @param {discord.Client} client 
 */

module.exports = async (client) => {
    const guild = client.guilds.cache.get('319918985602924544');
    guild.members.fetch().then(members => {
        members.forEach(member => {
            if (!readDatabase.readData(mongoClient, member.user.id, "userID")) {
                addDatabase.addData(mongoClient, {
                    "userID": member.user.id,
                    "XP": 0,
                    "Level": 1
                })
            }
        })
    })
}