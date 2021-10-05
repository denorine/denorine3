const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('shows bot info'),
	async execute(interaction, Discord, client, version) {
		const aboutMessage = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('About Bot')
                        .setDescription('Official Bot of r/GachaLifeCringe \n Bot Prefix: `a!` \n \n Created by <@247349845298249728> and <@452422621284532230>') // Information
                        .setFooter(`Build ${version}`); // Build number
		return interaction.reply({embeds : [aboutMessage]});
	},
};

