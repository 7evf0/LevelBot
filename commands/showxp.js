const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    command: new SlashCommandBuilder()
        .setName('xp')
        .setDescription('users xp')
}

module.exports.code = () => {};
