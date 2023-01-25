const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String,
    price: Number
}, {
    collection: "Products"
})

module.exports = mongoose.model('Products', productSchema)
