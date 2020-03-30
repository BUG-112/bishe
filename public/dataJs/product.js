var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var proSchema = new Schema({

    img: {
        type: String,
        required: true
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
    acount: {
        type: String,
        required: true
    },
    brand: {

        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model('Product', proSchema);