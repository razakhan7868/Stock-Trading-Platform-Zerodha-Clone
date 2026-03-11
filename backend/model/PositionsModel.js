const mongoose = require('mongoose');
const {positionsSchema} = require('../schemas/PositionsSchema');

const PositionsModel = mongoose.model('position', positionsSchema);

module.exports = {PositionsModel};

