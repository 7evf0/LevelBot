const {MongoClient} = require("mongodb");

module.exports = {
    
    /**
     * 
     * @param {MongoClient} mongoClient 
     */

    async coll(mongoClient){
        const collection = mongoClient.db("LevelBotDatabase").collection("users");

        return collection;
    }
}