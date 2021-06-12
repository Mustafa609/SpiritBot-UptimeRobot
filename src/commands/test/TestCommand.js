const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    var TestEmbed = new Discord.MessageEmbed()
     .setColor("RED")
     .setTitle('Test Embed')
     .setDescription(`This is a test embed message for newbies`)
     .setURL(`https://discord.gg/AGZHDUTTSD`)
     .setImage(`https://tenor.com/view/dog-sad-funny-animals-funny-turning-gif-10670068`)
     .setFooter(client.user.tag)
     .setTimestamp()

     message.channel.send(TestEmbed)
  }
}