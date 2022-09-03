const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    command: new SlashCommandBuilder()
        .setName('rps')
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
                        value: 'rock'
                    },
                    {
                        name: '📄',
                        value: 'paper'
                    },
                    {
                        name: '✂',
                        value: 'scissors'
                    }
                )
        })
        .addNumberOption(option => {
            option
            return option
                .setName('bid')
                .setDescription('xp to be gambled')
                .setRequired(true)
        }),
}