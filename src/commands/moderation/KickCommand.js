const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    const PermEm = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("You do not have permission to use this command")
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply(PermEm);
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ")
    if (!reason) reason = 'No Reason Given';
    const KickEmbed = new Discord.MessageEmbed()
      .setColor('0xFF0000')
      .setTitle(`You Have Been Kicked From ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const UnableEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('I was unable to kick this user')

    // >kick @user reason
    if (!args[0]) return message.reply('You need to mention a user for me to kick \`>kick (@user) (reason)\`');
    if (!mentionedMember) return message.reply('I searched this user far away but i couldnt find it. Kick Failed');
    try {
      await mentionedMember.send(KickEmbed);
    } catch (err) {
      console.log(err);
    }

    try {
      await mentionedMember.kick(reason)
    } catch (err) {
      console.log(err);
      message.channel.send(UnableEmbed);
    }

    setTimeout(function () {
      message.delete(KickEmbed || UnableEmbed)
    }, ms('10m'))
  }
}