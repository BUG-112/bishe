var mongoose = require('mongoose')

var Schema = mongoose.Schema

var buySchema = new Schema({

    phone: {
        type: String,
        required: true
    },
    recName: {
        type: String,
        required: true,
    },
    phNumber: {

        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,

    },
    number: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {

        type: String,
        required: true

    },
    account: {
        type: String,
        required: true
    },
    total: {

        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('UserBuy', buySchema);