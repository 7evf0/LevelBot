
const discord = require("discord.js");
const addDatabase = require("../databaseFeatures/dbAddUser.js")
const dotenv = require("dotenv");
dotenv.config()
// this program executes after user joins the server


module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient) {

        client.on("guildMemberAdd", (member) => {
            const welcomer = new discord.WebhookClient({
                id: "1014560902839799860",
                token: process.env.TOKEN
            })
            
            addDatabase.addData(mongoClient, {
                "userID": member.user.id,
                "XP": 0,
                "Level": 1
            })
            const welcome = new discord.EmbedBuilder()
                .setTitle('Welcome to our server!')
                .setColor('Aqua')
                .setImage(member.avatarURL())
                .setDescription(`${member.user.username} joined the server!`)
            welcomer.send({embeds: [welcome]});
        });

    },


}