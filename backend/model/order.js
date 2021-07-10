
const mongoose = require('mongoose');

const encrypt = require('mongoose-encryption');

const orderSchema = mongoose.Schema(
    {
        username: {type: String, required:true},
        email : {type: String, required:true},
        placedOrder: {type: String}
    }
);

const encKey = 'y7IU1cJ36lNmKEe195jmz47nhAKCjryGyqqDgI48DZE';
const sigKey = 'Ml8Z5J8j8n67IGT26CW43kKm6Aby8hAUbwVPyAz_q0gNroZWqufmMx9oHlfParqFhSruQjgURyjSKy0OQgxNng';

orderSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey });
// This adds _ct and _ac fields to the schema, as well as pre 'init' and pre 'save' middleware,
// and encrypt, decrypt, sign, and authenticate instance methods

module.exports = mongoose.model('Order', orderSchema);