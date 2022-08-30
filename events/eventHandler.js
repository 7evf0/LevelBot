const fs = require("fs")
const discord = require("discord.js");
const {MongoCleint} = require("mongodb")

module.exports = {

    
    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoCleint} mongoClient
     */

    async handler(client, mongoClient){

        const allEvents = fs.readdirSync("./events/").filter(file => file.endsWith(".js") && !file.startsWith("eventHandler.js"));

        allEvents.forEach(async (e) => {
            await require(`./${e}`).event(client, mongoClient);
        });

    }
}
