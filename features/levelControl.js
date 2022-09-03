const { MongoClient } = require("mongodb");
const {readData} = require("../databaseFeatures/dbReadData")
const {updateData} = require("../databaseFeatures/dbUpdateUser")

/**
 * @param {MongoClient} mongoClient
 */

module.exports = {
    async levelControl(mongoClient, userID){
        //xp of the user
        let xp = readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            datas[0].XP;
        })
        //level of the user
        let level = readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            datas[0].Level;
        })
        
        //updating the level of the user
        if(Math.floor(xp / 100) !== level){
            updateData(mongoClient, {
                "userID": userID
            },
            {
                "Level": level
            })
        }
    }
}

