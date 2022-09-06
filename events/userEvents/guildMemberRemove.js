
const discord = require("discord.js");
const deleteDatabase = require("../../databaseFeatures/dbDeleteUser.js")


// this program executes after user joins the server

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */
    async event(client, mongoClient) {

        client.on("guildMemberRemove", (member) => {
            const welcomer = new discord.WebhookClient({
                id: "1014560902839799860",
                token: 'p0G_Wguy0mknxrTVroyvGfJCqWv-MiNKkW2Su0hQq6pQ-iWWAmznXU2zlViyVdTymYZL'
            })

            deleteDatabase.deleteData(mongoClient, {
                "userID": member.user.id
            })
            const welcome = new discord.EmbedBuilder()
                .setTitle('BB')
                .setColor('Aqua')
                .setImage(member.displayAvatarURL())
                .setDescription(`${member.user.username} left the server!`)
            welcomer.send({ embeds: [welcome] });
        });

    },


}