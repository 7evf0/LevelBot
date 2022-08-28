const {MongoClient} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {MongoClient} mongoClient 
     */

    async updateData(mongoClient, filterSchema, newSchema){

        const collection = mongoClient.db("LevelBotDatabase").collection("users");

        const newValues = {
            $set: newSchema
        };

        await collection.updateMany(filterSchema, newValues)
            .catch((err) => {
                console.log("Error occured while updating data on database: " + err);
            });

    }
}