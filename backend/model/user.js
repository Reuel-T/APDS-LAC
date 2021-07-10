const mongoose = require('mongoose');
//this mf needs its own install command
const uniqueValidator = require('mongoose-unique-validator');
const encrypt = require('mongoose-encryption');

const userSchema = mongoose.Schema(
    {
        username: {type: String, required: true},
        email : {type: String, required: true, unique:true},
        password :{type: String, required: true}
    }
);


module.exports = mongoose.model('User', userSchema);