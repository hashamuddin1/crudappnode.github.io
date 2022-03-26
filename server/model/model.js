//here we make mongodb schema

var mongoose = require('mongoose');
// var Schema = mongoose.Schema();

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,

    },
    status: String
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;