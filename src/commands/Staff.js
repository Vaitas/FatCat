const { Command } = require("discord-akairo");

class StaffCommand extends Command {
  constructor() {
    super("staff", {
      aliases: ["s"],
    });
  }

  async exec(message) {

  }
}

module.exports = StaffCommand;
