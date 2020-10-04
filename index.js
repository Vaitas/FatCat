const Client = require('./src/FatCat')
const config = require('./config.json')

const FatCat = new Client(config)

FatCat.start(config.token)