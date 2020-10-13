const Twit = require('twit')

class Twitter {
  constructor(options) {
    this.twit = new Twit({
      consumer_key: options.consumer_key,
      consumer_secret: options.consumer_secret,
      access_token: options.access_token,
      access_token_secret: options.access_token_secret
    })
  }

  async getFollowerCount() {
    const count = await this.twit.get('followers/list');
    return count.data.users.length
  }
}

module.exports = Twitter