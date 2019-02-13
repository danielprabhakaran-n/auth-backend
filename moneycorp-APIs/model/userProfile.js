const mongoose = require("mongoose")
const Newuser = require('../model/db')

const UserSchem = mongoose.Schema({
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
const profileSchema = mongoose.Schema({
    auth_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    mobile: {
        type: String,
        required: true,
        minlength: 3
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

});
const newuser = module.exports = mongoose.model('New', UserSchem);
const profile = module.exports = mongoose.model('Profile', profileSchema);
