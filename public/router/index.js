var express = require('express')


var proSchema = require('../dataJs/product')

var router = express.Router()

router.get('/', function(req, res) {


    proSchema.find(function(err, data) {

        if (err) {

            console.log(err)
        } else {


            res.render('index.html', {

                user: req.session.user,
                data: data
            })


        }

    })


})

module.exports = router