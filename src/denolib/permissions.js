const permissions = require("../../permissions.json") //if it aint broke dont fix it
const Discord = require("discord.js")
module.exports = {
	/** JS Doc for Intellisense
	 * @param {Discord.Message} message
	 */
	check(message, level) {
		if (['247349845298249728','708686367940411492'].includes(message.author.id)) return true; // add deployers ID to array
		if(level == 3) return false; // Return all other level 3 requests
		let paranoia = false // fail by default
		permissions[message.guild.id][level].forEach(element => { // Check roles 
			if (message.member.roles.cache.has(element)) {
				paranoia = true;
			} 
		})
		return paranoia;
		
	}
}
