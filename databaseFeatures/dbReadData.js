const {MongoClient,Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {MongoClient} mongoClient 
     */

    async readData(mongoClient, userID, attribute){
        
        const collection = mongoClient.db("LevelBotDatabase").collection("users");
        let filter;

        await collection.findOne({"userID": userID})
            .then((res) => {
                if(res != null){
                    filter = res;
                    return filter[attribute];
                }
                else{
                    console.log("There is no such user in database!");
                    return false;
                }
                
            })
        
        

    }
}
