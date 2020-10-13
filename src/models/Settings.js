const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const guildSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    settings: {
        type: Object,
        require: true
    }
}, { minimize: false });

guildSchema.plugin(uniqueValidator)
module.exports = mongoose.model('settings', guildSchema);