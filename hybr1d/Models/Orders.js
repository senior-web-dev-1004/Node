const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String,
    buyer_id: Number,
    products_ids: [Number]
}, {
    collection: "Orders"
})

module.exports = mongoose.model('Orders', orderSchema)
