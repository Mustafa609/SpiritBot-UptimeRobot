const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    const PermEm = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("You do not have permission to use this command")
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!message.member.hasPermission('MUTE_MEMBERS && MANAGE_ROLES')) return message.reply(PermEm);
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I cannot use this command');

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('834765123197337630');
    const memberRole = message.guild.roles.cache.get('808298700492505098');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    var redBlob = message.guild.emojis.cache.find(emoji => emoji.name === 'redblob');
    const muteEmbed = new Discord.MessageEmbed()
      .setColor('0xFF0000')
      .setTitle(`You Have Been muted in ${message.guild.name}`)
      .setDescription(`Reason: ${reason} We Hope you do not repeat these mistakes ever again DM a Staff Member To appeal for your mute`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp();



    if (!args[0]) return message.reply('Please mention a user for me to mute')
    if (!mentionedMember) return message.reply('This user isn\'t in the Scarlet\'s Dream World')
    if (mentionedMember.user.id == message.author.id) return message.reply('You trying to mute yourself lol');
    if (mentionedMember.user.id == client.user.id) return message.reply('You cannot mute me bitch');
    if (!reason) reason = 'No Reason Given';
    if (mentionedMember.roles.cache.has(muteRole.id)) return message.reply('This member is already muted')
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('You cannot mute seniors or the same role members');

    await mentionedMember.send(muteEmbed).catch(err => console.log(err))
    await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err).then(message.reply(`${redBlob} Successfuly Muted ${mentionedMember}`)));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err).then(message.reply(`${redBlob} Successfuly removed mute from ${mentionedMember}`)));


  }
}