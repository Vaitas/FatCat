const { Command } = require('discord-akairo');

class SetChannelCommand extends Command {
  constructor() {
    super('setchannel', {
      aliases: ['sc'] 
    });
  }
  
  async exec(message) {
    await this.client.db.fetchSettings(message.guild.id)
    // TODO: the rest
  }
}

module.exports = SetChannelCommand;