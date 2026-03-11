const {Schema} = require('mongoose');

const positionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    day: String,
    isLoss: Boolean,
});

module.exports = {positionsSchema};