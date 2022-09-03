const fs = require("fs")
const discord = require("discord.js");


const commands = [];
let commandCodes = {};


module.exports = {
    
    handler(){
        const allEvents = fs.readdirSync("./commands/").filter(file => file.endsWith(".js") && !file.startsWith("commandHandler.js"));

        allEvents.forEach(async (e) => {
            commands.push(require(`./${e}`))
        });
        return commands
    },
    
    codeHandler(){
        const allEvents = fs.readdirSync("./commands/").filter(file => file.endsWith(".js") && !file.startsWith("commandHandler.js"));

        allEvents.forEach(async (e) => {

            const commName = e.replace(".js","");

            console.log(commandCodes);
            commandCodes = {...commandCodes , "" : require(`./${e}`).code};
            console.log(commandCodes + "\n");
        });
        
        return commandCodes;
    },
        
}