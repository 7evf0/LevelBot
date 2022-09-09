const discord = require("discord.js");
const {readData} = require("../../databaseFeatures/dbReadData")
const {addData} = require("../../databaseFeatures/dbAddUser")
const membersAdd = require("../../features/member_checkerAdd")
const membersDelete = require("../../features/member_checkerDelete")

// Client being ready event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient) {

        client.on("ready", () => {

            console.log(`The ${client.user.username} has logged in`);


            //discord server id
            const guild = client.guilds.cache.get(process.env.GUILD_ID);

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
            })

            membersAdd(client, mongoClient);
            membersDelete(client, mongoClient);
        });

    },


}