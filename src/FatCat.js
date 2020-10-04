const { AkairoClient, CommandHandler } = require('discord-akairo')
const Database = require('./structures/Database')
const log4js = require('log4js')


class FatCat extends AkairoClient {
  constructor(options) {
    super({ ownerID: options.ownerID })
    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: '?' // or ['?', '!']
    });
    this.db = new Database();
    this.logger = log4js.getLogger()
    this.logger.level = "info"
  }

  async start(token) {
    this.logger.info("Starting...")
    this.commandHandler.loadAll();
    this.login(token)
    this.logger.info("Fat Cat started.")
  }
}

module.exports = FatCat