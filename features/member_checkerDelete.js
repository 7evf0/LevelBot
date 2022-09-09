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
    //all datas in the database
    const allDatas = readData(mongoClient, {});

    allDatas.then(datas => {
        setInterval(() => {
            //iterating over all datas
            datas.forEach(data => {
                //boolean for checking data if it is in the guild members
                let isContain = false;

                guild.members.fetch().then(members => {
                    //iterating over guild members
                    members.forEach(member => {
                        //if data is in the guild members, isContain variable becomes true
                        if (data.userID === member.user.id) isContain = true;
                    })
                })
                //if isContain false, below code deletes the data in the database
                if (!isContain) {
                    console.log('member deleted')
                    deleteData(mongoClient, {
                        "userID": data.userID
                    })
                }
            })
        }, 1000 * 60 * 10)
    })

}