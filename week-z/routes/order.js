const express = require('express');
const router = express.Router();
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const orderSchema = require('../models/orderSchema');

dotenv.config()

mongoose.connect(process.env.DB_NAME)

router.post('/order', function(req, res){
    orderSchema.create(req.body, (err,result) => {
        if (err){
            res.send("error creating order")
        } else {
            res.redirect('/users/orderList')
        }
    })
})
router.get('/orderList', function(req, res){
    orderSchema.find({}, (err,results) => {
        if (err){
            res.send("error creating order")
        } else {
            res.render('index.ejs', {orderDetails: results})
        }
    })
})
module.exports = router