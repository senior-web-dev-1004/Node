let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let userSChema = require('../Models/Users');

router.route('/api/auth/login', (req, res) => {
    const {name, password, type} = req.body;
    userSChema.findOne({name: name}, (err, user) => {
        if (user) {
            if (password === user.password && type === user.password) {
                res.send({"message": "Login Success", user: user})
            } else {
                res.send({"message": "wrong credentials"})
            }
        } else {
            res.send('not register')
        }
    })
})

router.route('/api/auth/register').post((req, res, next) => {
    const {name, type} = req.body;
    userSChema.findOne({name: name}, (err, user) => {
        if (user) {
            if (type === user.type) {
                res.send({"message": "User already exist"})
            }
        } else {
            const user = new userSChema({name, type, password});
            user.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({"message": "successful"})
                }
            })
        }
    })
})

