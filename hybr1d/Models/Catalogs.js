const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let catalogSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: String,
    seller_id: Number,
    products_ids: [Number]
}, {
    collection: "Catalogs"
})

module.exports = mongoose.model('Catalogs', catalogSchema)
