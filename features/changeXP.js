const { MongoClient } = require("mongodb");
const {readData} = require("../databaseFeatures/dbReadData")
const {updateData} = require("../databaseFeatures/dbUpdateUser")
const {levelControl} = require("./levelControl")
/**
 * @param {MongoClient} mongoClient
 */


module.exports = {

    async addXP(mongoClient, userID, amount){
        let xp = readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            datas[0].XP;
        })

        updateData(mongoClient, {
            "userID": userID
        },
        {
            "XP": xp + amount
        })
        //level control after changing of the xp
        levelControl(mongoClient, userID)
    }
}