const { SlashCommandBuilder } = require('@discordjs/builders');
const  fetch = require('node-fetch')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('shows nekos')
		.addStringOption(option =>
		option.setName('option')
			.setDescription('get different cat girl varitions')
			.setRequired(false)),
	async execute(interaction, Discord, client, version) {
        let nekoOption = interaction.options.getString('option') || "neko";
		

        let sfw;
        switch(nekoOption) {
        case 'smug':
        case 'baka':
        case 'tickle':
        case 'slap':
        case 'poke':
        case 'pat':
        case 'neko':
        case 'ngif':
        case 'lizard':
        case 'kiss':
        case 'hug':
        case 'fox_girl':
        case 'feed':
        case 'cuddle':
        case 'kemonomimi':
        case 'holo':
        case 'woof':
        case 'wallpaper':
        case 'goose':
        case 'gecg':
        case 'avatar':
        case 'waifu':
        case '8ball':
            sfw=true;
            break;
        case 'help':
            interaction.reply("8ball smug baka tickle slap poke pat neko ngif lizard kiss hug fox_girl feed cuddle kemonomimi holo woof wallpaper goose gecg avatar waifu")
            return;
        default:
            sfw=false;
        }
        if (!sfw) {
            interaction.reply("Oops, either the command isn't sfw or it isn't a real command")
            return;
        }
        //fetch
        fetch(`https://nekos.life/api/v2/img/${nekoOption}`)
            .then(response => response.json()) //json
            .then(response => {
                if (response.url != "") interaction.reply(response.url).catch(e=> {
                    interaction.reply(`Command failed to run, did you mess up? \n error log \`\`\`\n ${e}\n\`\`\``);
                });
            }).catch(e => {
                interaction.reply(`Command failed to run, did you mess up? \n error log \`\`\`\n ${e}\n\`\`\``)
            })
	},
};

