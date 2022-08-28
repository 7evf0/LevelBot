const fs = require("fs")
const discord = require("discord.js");

module.exports = {

    
    /**
     * 
     * @param {discord.Client} client 
     */

    async handler(client){

        const allEvents = fs.readdirSync("./events/").filter(file => file.endsWith(".js") && !file.startsWith("eventHandler.js"));

        allEvents.forEach(async (e) => {
            await require(`./${e}`).event(client);
        });

    }
}
