const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    ...new SlashCommandBuilder()
        .setName('xp-leaderboard')
        .setDescription('xp leaderboard')
}