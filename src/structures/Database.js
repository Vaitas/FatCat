const firebaseAdmin = require('firebase-admin')
const serviceAccount = require('../../serviceAccount.json')

class Database {
  constructor() {
    const fireapp = firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: 'https://fat-cat-41702.firebaseio.com'
    })
    this.firestore = fireapp.firestore()
  }

  async fetchSettings(id) {
    const initialQuery = await this.firestore.collection('settings').doc(id);
    const toReturn = await initialQuery.get()
    return toReturn.data()
  }
}

module.exports = Database