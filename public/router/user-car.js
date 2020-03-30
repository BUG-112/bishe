var express = require('express')
var router = express.Router()

router.get('/user/car', function(req, res) {
    if (req.session.user == null) {

        res.redirect('/index/login')
    } else {

        res.render('car.html', {
            user: req.session.user
        })
    }
})

module.exports = router