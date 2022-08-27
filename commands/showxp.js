const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    ...new SlashCommandBuilder()
        .setName('xp')
        .setDescription('users xp')
}
