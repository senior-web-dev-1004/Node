let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let userSChema = require('../Models/Users');
let catalogSChema = require('../Models/Catalogs');
let orderSChema = require('../Models/Orders');

router.route('/api/buyer/list-of-sellers', (req, res) => {
    const {name, password, type} = req.body;
    userSChema.find({type: type}, (err, buyers) => {
        if (buyers) {
            res.send({"message": "Buyser_list", buyers: buyers})
        } else {
            res.send({"message": "Not Found"})
        }
    })
})

router.route('/api/buyer/seller-catalog/:seller_id', (req, res) => {
    const seller_id = req.body.seller_id;
    catalogSChema.findOne({seller_id: seller_id}, (err, catalog) => {
        if (catalog) {
            res.send({catalog: catalog})
        } else {
            res.send({"message": "Not Found"})
        }
    })
})

router.route('/api/buyer/create-order/:seller_id').post((req, response, next) => {
    data = {
        name: req.body.name,
        buyer_id: req.params.seller_id,
        products_ids: req.body.products_ids
    }
    orderSChema.insertOne(data, (err, res) => {
        if (err) throw err;
        response.json(res)
        res.end({"message": "Add Order"})
    })
})
