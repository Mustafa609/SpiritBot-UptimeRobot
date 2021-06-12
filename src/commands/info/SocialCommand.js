const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'info', []);
  }

  async run(client, message, args) {
    const MinecraftDiscordServer = new Discord.MessageEmbed()
    
      .setColor('FF0000')
      .setTitle(`Minecraft Server`)
      .setURL(`https://discord.gg/V66KcgmMJV`)
      .setThumbnail(`https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bcpl.info%2Fsebin%2Fp%2Fi%2Fblog-discord-logo.jpg&imgrefurl=https%3A%2F%2Fwww.bcpl.info%2Fblog%2F2020%2Fjoin-our-teen-discord-server&tbnid=cOSNaptkcWsWgM&vet=12ahUKEwiUlpv7j4vxAhVT_IUKHX_zBfQQMygIegUIARDFAQ..i&docid=O3NN-7RCHfTePM&w=300&h=169&q=discord%20logo%20view%20link&ved=2ahUKEwiUlpv7j4vxAhVT_IUKHX_zBfQQMygIegUIARDFAQ`)
      .setFooter(client.user.displayAvatarURL(), client.user.tag)
      .setTimestamp();

    const TestingServer = new Discord.MessageEmbed()
      
      .setColor('FF0000')
      .setTitle(`Testing Server (limited access)`)
      .setURL(`https://discord.gg/YjGYe9hB`)


  }
}