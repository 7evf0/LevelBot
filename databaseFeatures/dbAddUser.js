const {MongoClient} = require("mongodb");


module.exports = {

    /**
     * 
     * @param {MongoClient} client 
     */

    async addData(client, schema){

        const collection = client.db("LevelBotDatabase").collection("users");

        try {
            await collection.insertOne(schema);
        } catch (error) {
            console.log("Error occured while adding data to database: " + error);
        }
    }
}