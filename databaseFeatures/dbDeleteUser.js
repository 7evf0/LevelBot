const {MongoClient,Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {MongoClient} mongoClient 
     */

    async deleteData(mongoClient, filterSchema){

        const collection = mongoClient.db("LevelBotDatabase").collection("users");
        
        
        await collection.deleteMany(filterSchema)
            .catch((err) => {
                console.log("Error occured while updating data on database: " + err);
            });

    }
}