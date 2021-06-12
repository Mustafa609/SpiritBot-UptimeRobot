// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const Discord = require("discord.js");
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }

  async run(client, member, message) {
    const role = member.guild.roles.cache.find(role => role.name === 'Member');
    await member.roles.add(role.id).catch(err => console.log(err));

    const WelcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'joins');
    const send = WelcomeChannel.send()

    var embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`Welcome`)
      .setDescription(`Welcome to "**${message.guild.name}"** ${message.member.tag}`)
      .setFooter(client.user.displayAvatarURL())
      .setTimestamp()
      .setURL('https://youtube.com/Welcome');

    send(embed)

  }
}