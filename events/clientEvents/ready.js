
const discord = require("discord.js");
const {readData} = require("../../databaseFeatures/dbReadData")
const {addData} = require("../../databaseFeatures/dbAddUser")
const {deleteData} = require("../../databaseFeatures/dbDeleteUser")

const membersAdd = require("../../features/member_checkerAdd")
const membersDelete = require("../../features/member_checkerDelete")

// Client being ready event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient){
        
        client.on("ready",async () => {

            console.log(`The ${client.user.username} has logged in`);

             //discord server id
             const guild = client.guilds.cache.get(process.env.GUILD_ID);

             // adding users into the database
             guild.members.fetch().then(async (members) => {
                 members.forEach(member => {
                     if (!member.user.bot) {
 
                         readData(mongoClient, { "userID": member.user.id }).then((data) => {
                             if (data.length === 0) {
                                 console.log("There is no such user with this filtration " + data);
                                 addData(mongoClient, {
                                     "userID": member.user.id,
                                     "XP": 0,
                                     "userName": member.user.username,
                                     "Level": 1
                                 })
                             }
                             else {
                                 console.log("User exists!");
                             }
                         });
                     }
                 });
             });

            // remove users that have left the server
            readData(mongoClient, {}).then(datas => {
                    //iterating over all datas
                    datas.forEach(data => {
                        //boolean for checking data if it is in the guild members
                        let isContain = false;

                        guild.members.fetch().then(members => {
                            //iterating over guild members
                            members.forEach(member => {
                                //if data is in the guild members, isContain variable becomes true
                                if (data.userID === member.user.id) {isContain = true; console.log("Entered");}
                            })
                        })
                        //if isContain false, below code deletes the data in the database
                        if (!isContain) {
                            deleteData(mongoClient, {
                                "userID": data.userID
                            })
                        }
                    });
            });

            membersAdd(client,mongoClient);
            membersDelete(client, mongoClient);
        });

    },

    
}