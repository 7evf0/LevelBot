const { MongoClient } = require("mongodb");
const {readData} = require("../databaseFeatures/dbReadData")
const {updateData} = require("../databaseFeatures/dbUpdateUser")

/**
 * @param {MongoClient} mongoClient
 */

module.exports = {
    async levelControl(mongoClient, userID){
        //xp of the user
        let xp;
        let level;

        await readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            xp = datas[0].XP;
        });
        
        //level of the user
        await readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            level = datas[0].Level;
        })
        
        //updating the level of the user
        if(Math.floor(xp / 100) !== level){
            updateData(mongoClient, {
                "userID": userID
            },
            {
                "Level": Math.floor(xp / 100)
            })
        }
    }
}

