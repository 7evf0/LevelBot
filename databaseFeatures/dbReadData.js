const {MongoClient,Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {MongoClient} mongoClient 
     */

    async readData(mongoClient, filterSchema){
        
        const collection = mongoClient.db("LevelBotDatabase").collection("users");
        
        // returns all users with specific filtration

        const all = await collection.find(filterSchema).toArray();
        if(all != null){
            return all;
        }
        else{
            console.log("There is no such user with that filtration");
            return false;
        } 

    }
}
