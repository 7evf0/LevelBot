
const discord = require("discord.js");
const deleteDatabase = require("../databaseFeatures/dbDeleteUser.js")


// this program executes after user joins the server

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient) {

        client.on("guildMemberAdd", (member) => {
            deleteDatabase.deleteData(mongoClient, {
                "userID": member.user.id
            })

        });

    },


}