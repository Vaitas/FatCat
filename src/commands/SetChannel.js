const { Command } = require("discord-akairo");

class SetChannelCommand extends Command {
  constructor() {
    super("setchannel", {
      aliases: ["sc"],
    });
  }

  async exec(message) {
    if (message.author.id !== this.client.ownerID) return;
    const settings = await this.client.db.findOrCreate(message.guild.id);

    if (!settings) {
      const uploadChannel = message.channel.id;
      await this.client.db.settings.findAndModify(
        { id: message.guild.id },
        { settings: { uploadChannel: uploadChannel } }
      );
      return message.channel.send(
        `Upload channel has been set to: \`<#${uploadChannel}>\``
      );
    }
    if (settings.uploadChannel === message.channel.id)
      return message.channel.send(
        "This channel is already set as the upload channel."
      );

    await this.client.db.findAndModify(
      { id: message.guild.id },
      { update: { uploadChannel: message.channel.id } }
    );
    return message.channel.send(`Channel updated to <#${message.channel.id}>`);
  }
}

module.exports = SetChannelCommand;
