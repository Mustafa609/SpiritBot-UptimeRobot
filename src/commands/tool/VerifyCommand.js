const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I do not have \`MANAGE_ROLES\` permission');

    const verify = message.guild.roles.cache.get('808298700492505098');
    
    await message.member.roles.add(role.id)
    
  }
}