'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserSchema = new Schema({
    contactid: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    mobileno: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imageurl: {
        type: String,
        Required: 'Please enter'
    },
})

var AccountSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }
})
module.exports = mongoose.model('Users', UserSchema)
module.exports = mongoose.model('Accounts',AccountSchema)