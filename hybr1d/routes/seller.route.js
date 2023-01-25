let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let catalogSChema = require('../Models/Catalogs');
let orderSchema =require("../Models/Orders")

router.route('/api/seller/orders', (req, res) => {
    const buyer_id = req.body.buyer_id;
    orderSchema.find({buyer_id: buyer_id}, (err, orders) => {
        if (orders) {
            res.send({orders: orders})
        } else {
            res.send({"message": "Not Found"})
        }
    })
})

router.route('/api/seller/create-catalog').post((req, response, next) => {
    data = {
        name: req.body.name,
        buyer_id: req.params.seller_id,
        products_ids: req.body.products_ids
    }
    catalogSChema.insertOne(data, (err, res) => {
        if (err) throw err;
        response.json(res)
        res.end({"message": "Add Catalog"})
    })
})
