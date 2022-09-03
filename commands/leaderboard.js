const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    command: new SlashCommandBuilder()
        .setName('xp-leaderboard')
        .setDescription('xp leaderboard')
}

module.exports.code = () => {};