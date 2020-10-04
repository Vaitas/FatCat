const Twit = require('twit')

class Twitter {
  constructor(options) {
    this.twitter = new Twit({
      consumer_key: options.consumer_key,
      consumer_secret: options.consumer_secret,
      access_token: options.access_token,
      access_token_secret: options.access_token_secret
    })
  }
}

module.exports = Twitter