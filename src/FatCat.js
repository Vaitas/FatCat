const { AkairoClient, CommandHandler } = require('discord-akairo')
const Twitter = require('./structures/Twitter')
const log4js = require('log4js')
const Database = require('./structures/Database')

class FatCat extends AkairoClient {
  constructor(options) {
    super({ ownerID: options.ownerID })
    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: '?'
    });
    this.twitter = new Twitter(options.twitter);
    this.db = new Database()
    this.logger = log4js.getLogger()
    this.logger.level = "info"
  }

  async start(token) {
    this.commandHandler.loadAll();
    this.login(token)
    this.logger.info("Fat Cat started.")
  }
}

module.exports = FatCat