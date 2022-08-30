const {MongoClient,Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {Collection} collection 
     */

    async readData(collection, userID, attribute){

        const filter = await collection.findOne({"userID": userID});
        
        return filter[attribute];

    }
}