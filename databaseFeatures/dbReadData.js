const {MongoClient,Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {Collection} collection 
     */

    async updateData(collection, filterSchema, attribute){

        const filter = await collection.findOne(filterSchema);
        
        return filter[attribute];

    }
}