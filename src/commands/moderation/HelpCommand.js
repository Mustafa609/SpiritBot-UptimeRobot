const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'moderation', []);
  }

  async run(client, message, args) {
    const HelpEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Help")
      .setDescription("I am a multi purpose bot made by ScarletWitch")
      .addField(`Fun Commands: \`Avatar\`, \`Meme\`, \`Say\`, \`Snipe\`, \`Suggest\``)
      .addField(`Info Commands: \`Social\` \`Vote\``)
      .addField(`Moderation Commands: \`Ban\` \`Kick\` \`Lock\` \`Mute\` \`Nickname\` \`Nuke\` \`Ping\` \`Purge\` \`Recruit\` \`Role\` \`Tempban\` \`Tempmute\` \`Unban\` \`Unlock\` \`Unmute\` \`Warn\``)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    const embed = message.channel.send(HelpEmbed);


    setTimeout(function () {
    message.delete()
    }, 10000);
  }
}