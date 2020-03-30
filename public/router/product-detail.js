var express = require('express')
var proSchema = require('../dataJs/product')
var router = express.Router()

router.get('/index/product', function(req, res) {



    let reg = /\"/g
    var id = req.query.name.replace(reg, "")
    proSchema.findById({
        _id: id
    }, function(err, data) {

        if (err) {

            console.log(err)

        }

        return data


    }).then(function(data) {


        res.render('product.html', {

            proData: data
        })

    })
})

module.exports = router