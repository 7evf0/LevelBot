const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    ...new SlashCommandBuilder()
        .setName('rpy')
        .setDescription('rock paper scissors game')
        .addUserOption(option => {
           
            option
                return option
                .setName('challenge-user')
                .setDescription('choose a user to be challenged')
                .setRequired(true)
        })
        .addStringOption(option => {
           
            option
                return option
                .setName('rock-paper-scissors')
                .setDescription('choose an icon')
                .setRequired(true)
                .setChoices(
                    {
                        name: '🗿',
                        value: '🗿'
                    },
                    {
                        name: '📄',
                        value: '📄'
                    },
                    {
                        name: '✂',
                        value: '✂'
                    }
                )
        })
        .addIntegerOption(option => {
            option
                return option
                .setName('bit')
                .setDescription('xp to be gambled')
                .setRequired(true)
        })

}
