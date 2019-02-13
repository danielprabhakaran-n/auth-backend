const mongoose = require("mongoose")
const Newuser = require('../model/db')
const profile = require('./userProfile')

const UserSchema = mongoose.Schema({
    auth_id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        minlength: 5
    },
    firstname: {
        type: String,
        minlength: 3
    },
    lastname: {
        type: String,
        minlength: 3
    },
    countrycode: {
        type: String,
        minlength: 2
    },
    dateofbirth: {
        type: String,
    },
    Profile: [{ type: mongoose.Schema.Types.ObjectId,  ref: 'Profile' }]
});

module.exports = mongoose.model('Newuser', UserSchema);

