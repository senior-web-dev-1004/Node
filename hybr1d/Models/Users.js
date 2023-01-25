const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSChema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String,
    password: password,
    type: String
}, {
    collection: "Users"
})

module.exports = mongoose.model('Users', userSChema)
