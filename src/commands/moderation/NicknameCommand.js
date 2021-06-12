const BaseCommand = require('../../utils/structures/BaseCommand');


module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    const PermEm = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("You do not have permission to use this command")
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply(PermEm);
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.reply('I cant use this command');

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");
    var redBlob = message.guild.emojis.cache.find(emoji => emoji.name === 'redblob')


    if (!args[0]) return message.reply('You did not mention a user for me to change there nickname!');
    if (!mentionedMember) return message.reply('Please mention a user for me to change there nickname \`>nickname @user nickname\`');
    if (!nickName) return message.reply('Please mention a nickname for me to change this users nickname');
    if (!mentionedMember.kickable) return message.reply('This User Has a senior rank then me i cant change his nickname')

    await mentionedMember.setNickname(nickName).catch(err => console.log(err)) && await message.reply(`${redBlob} Successfuly Changed ${mentionedMember} Nickname to ${nickName}`);
  }
}