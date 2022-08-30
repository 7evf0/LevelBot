const discord = require("discord.js");
const {EmbedBuilder , ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType} = discord;
const {readData} = require("../databaseFeatures/dbReadData.js");

// Client interactionCreate event

module.exports = {

    /**
     * 
     * @param {discord.Client} client 
     */

    async event(client){
        
        client.on("interactionCreate", async (interaction) => {

            if(interaction.isCommand() && interaction.commandName === "rps"){
                
                // all information that is provided by slash command

                const user = interaction.options.getUser("challenge-user");
                const choice = interaction.options.getString("rock-paper-scissors");
                const bid = interaction.options.getInteger("bid");

                // check if the base conditions are satisfied like, is there enough XP?

                

                // embedded message

                const embedMessage = new EmbedBuilder()
                    .setTitle("Rock Paper Scissors Duel")
                    .setColor("Aqua")
                    .setDescription(`${interaction.user} has challenged ${user} by putting ${bid} XP for total ${2*bid} XP's !!`)
                    

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