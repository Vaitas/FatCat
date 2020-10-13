const firebaseAdmin = require('firebase-admin')
const serviceAccount = require('../../serviceAccount.json')
const mongoose = require('mongoose')
const path = require('path')
const { Settings } = require('../models')


class Database {
  constructor() {
    mongoose.set('useCreateIndex', true)
    const mongoConnection = new mongoose.connect('mongodb://localhost:27017/FatCat', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.connection = mongoConnection
    this.settings = Settings
  }

  async findOrCreate(id) {
    let exists = await this.settings.findOne({ id: id });

    if(exists) {
      return exists.settings;
    }
    
    const newGuild = await this.settings.create({ id: id });
    return newGuild.settings
  }
  async fetchSettings(id) {
    const fetchGuildSettings = this.firestore.collection('settings')
    return fetchGuildSettings.get()
  }

  async staffList(id) {
    const fetchStaffList = this.firestore.collection('settings')
    console.log(fetchStaffList)
    return fetchStaffList.staffList
  }

}

module.exports = Database