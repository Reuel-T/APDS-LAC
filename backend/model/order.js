
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        username: {type: String, required:true},
        email : {type: String, required:true},
        placedOrder: {type: String}
    }
);

module.exports = mongoose.model('Order', orderSchema);