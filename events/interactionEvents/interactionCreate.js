const discord = require("discord.js");
const {EmbedBuilder , ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType} = discord;
const {MongoClient} = require("mongodb")
const {readData} = require("../../databaseFeatures/dbReadData");

// Client interactionCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     * @param {MongoClient} mongoClient
     */

    async event(client, mongoClient){
        
        client.on("interactionCreate", async (interaction) => {

            if(interaction.isCommand() && interaction.commandName === "rps"){
                
            // all information that is provided by slash command

                const user = interaction.options.getUser("challenge-user");
                const choice = interaction.options.getString("rock-paper-scissors");
                const bid = interaction.options.getInteger("bid");

            // check if the base conditions are satisfied like, is there enough XP?

                const userArray = await readData(mongoClient,{"userID":interaction.user.id});

                if(userArray.length !== 1){
                    console.log("There is a duplication issue in database. Check it out");
                    return;
                }

                const xp = userArray[0]["XP"];

                if(xp < bid){

                    await interaction.reply({
                        content: "You do not have enough XP to start a Rock Paper Scissors Duel!",
                        ephemeral: true
                    });
                    return;
                }

            // embedded message

                const embedMessage = new EmbedBuilder()
                    .setTitle("Rock Paper Scissors Duel")
                    .setColor("Aqua")
                    .setDescription(`${interaction.user} has challenged ${user} by putting ${bid} XP for total ${2*bid} XP's !!\n`)
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        {name: "Reminder" , value: `Only ${user} can access the present buttons, and ${user} can only accept this challenge if ${user} has enough XP to join.`}
                    );
                    

            // all buttons including "decline" button which the challenged user can be willing to decline the duel

                const actionRow = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("rock")
                            .setEmoji("🗿")
                            .setLabel("Rock")
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("paper")
                            .setEmoji("📄")
                            .setLabel("Paper")
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("scissors")
                            .setEmoji("✂")
                            .setLabel("Scissors")
                            .setStyle(ButtonStyle.Primary)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("decline")
                            .setEmoji("⛔")
                            .setLabel("Decline")
                            .setStyle(ButtonStyle.Success)
                    );
                    

                await interaction.reply({
                    embeds: [embedMessage],
                    components: [actionRow]
                });

            // "msg" variable stores the current message

                const msg = await interaction.fetchReply();

            // "collector" variable handles the pressed button

                const collector = msg.createMessageComponentCollector({
                    componentType: ComponentType.Button,
                    max: 1,
                    time: 1000 * 60 * (3)
                });

            // "collect" event on collector
                collector.on("collect", (button) => {

                });
            }
        });

    },

    
}