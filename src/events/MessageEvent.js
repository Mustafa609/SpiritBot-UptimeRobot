// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require("discord.js");
const ms = require("ms");

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }

  async run(client, message) {
    if (message.author.bot) return;
      var array = ['fuck', 'fuc', 'fuk', 'fhuk', 'fhuck', 'Motherfuck', 'nigga', 'nigger', 'nig', 'nog', 'Motherfucker', 'fucker', 'shit', 'shitbag', 'Shet', 'fucker', 'Bullfuck', 'Bullshit', 'gay', 'ass', 'mofo', 'snowflakey', 'sex', '$ex', 'smox', 'fuckf', 'fck', 'fuckfu', 'fuckfuc', 'fuckfuck', 'fuckfuckfuckfuck'];
    if (array.some(w => ` ${message.content.toLowerCase()} `.includes(` ${w} `))) {
      message.delete()
      message.reply('You cannot use that kind of language in Scarlet\'s Dream World')
      var role = message.guild.roles.cache.find(role => role.name === 'mute');

      message.member.roles.add(role);

      setTimeout(async () => {
        message.member.roles.remove(role);
      }, ms('1h'));
    }

    if (message.mentions.users.size > 2 && !message.member.hasPermission('MANAGE_MESSAGES')) {
      message.delete()
      return message.reply('You Cannot mass mention in Scarlet\'s Dream World!')
    }

    if (message.content.length >= 300) {
      message.delete()
      return message.channel.send(`${message.author} You Cannot Spam In ${message.guild.name}`)
    }

    if (message.content.includes('<@!710659848299348049>')) { // PUT YOUR USER ID WHERE IT SAYS **YOUR USER ID HERE**
      if(message.author.id == '<@!710659848299348049>') return;
      message.delete();
      const mentionedMember = message.mentions.members.first() || message.guild.users.cache.get(args[0]);
      return message.reply('You Cannot Ping ScarletWitch in the Chat!');
    }

    if (message.content.includes('<@!437372812030640129>')) {
      message.delete()
      return message.channel.send(`${message.author} You cannot ping AlfaKory in the chat as he is the Co-Owner of ${message.guild.name}`)
    }

    if (message.content.length >= 1500) {
      const mentionedMember = message.mentions.members.first();
      var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You Have Been Kicked in ${message.guild.name} From [AutoMod]`)
        .setDescription(`Reason: Nuking Channels`)
        .setFooter(mentionedMember.displayAvatarURL())
        .setTimestamp();

      message.delete()
      await mentionedMember.kick()
      mentionedMember.send(embed);
      return message.channel.send(`${message.author.id} has been kicked for nuking ${message.guild.name}`)
    }

    if (message.content.includes == 'NIGGA FUCK ALL THE PEOPLE HERE') {
      let member = message.mentions.members.first();
      message.delete()
      member.kick()
      message.channel.send(`${message.author} Has been kicked for being too toxic`)
    }
    
    

  }
}