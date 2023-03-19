const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    order: {type: String, required: true},
    orderedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('OrderSchema',OrderSchema,'OrderSchema');