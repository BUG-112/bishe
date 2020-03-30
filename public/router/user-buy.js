var express = require('express')
var router = express.Router()

var proSchema = require('../dataJs/product')
var addrSchema = require('../dataJs/address')

router.get('/user/buy', function(req, res) {

    if (req.session.user) {

        addrSchema.findOne({

                phone: req.session.user.phone,
                checked: 'checked'
            }, function(err, data) {

                if (err) {

                    console.log(err)
                } else {

                    return data
                }
            })
            .then(data => {
                let addrData = data
                proSchema.findOne({

                        number: req.query.number
                    }, function(err, data1) {

                        if (err) {
                            console.log(err)
                        } else {

                            return data1
                        }
                    })
                    .then(data1 => {

                        res.render('buy.html', {
                            user: req.session.user,
                            address: addrData,
                            proData: data1,
                            buy: {
                                total: req.query.total,
                                number: req.query.number,
                                account: req.query.account
                            }
                        })
                    })


            })

    } else {

        res.redirect('/index/login')
    }

})


module.exports = router