const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class SmCommand extends BaseCommand {
  constructor() {
    super('sm', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You cannot use this command!');
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply(`Please give my role \`MANAGE_CHANNELS\` permission so i can change the slowmode of this channel`);
    var SMEmbed = new Discord.MessageEmbed()
     .setColor('RED')
     .setTitle('❌ | Please specify a number for me to set the slowmode to');

     if (!args[0]) return message.reply(SMEmbed)
     var NoNumEmbed = new Discord.MessageEmbed() 
      .setColor("RED")
      .setTitle('❌ | Please specify a valid number under \`30 seconds\` for me to set the slowmode to');
     if (isNaN(args[0])) return message.reply(NoNumEmbed)
     if (args[0] < 0) return message.reply('The number specified isn\'t a valid or positive number make sure that it\'s Positive and valid');
     if (args[0] > 90) return message.reply('Please specify a time under \`90 Seconds\` and above \`0 Seconds\`');
     message.channel.setRateLimitForUser(time)

     var verify = message.guilfd.emojis.cache.find(emoji => emoji.name === 'kawaiibunny')

     var SlowmoEmbed = new Discord.MessageEmbed()  
       .setColor('RED')
       .setTitle(`I have successfuly set the slowmode to \`${time}\``)

       message.channel.send(SlowmoEmbed)
  }
}