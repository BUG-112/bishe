let mongosse = require('mongoose')

let Schema = mongosse.Schema

let addresSchema = new Schema({

    phone: {
        type: String,
        required: true,

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
    checked: {
        type: String,
        required: true,
    }

})

module.exports = mongosse.model('Addres', addresSchema)