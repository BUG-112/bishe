var express = require('express')
var User = require('../dataJs/user')

var router = express.Router()



router.get('/index/login', function(req, res) {
    res.render('login.html')
})

router.post('/index/login', function(req, res) {

    var data_body = req.body

    User.findOne({
        phone: data_body.phone
    }, function(err, data) {
        if (err) {
            return res.status(500).json({

                err_code: 500,
                message: err.message
            })
        }

        if (data) {

            if (data.password == data_body.password) {

                req.session.user = data
                return res.status(200).json({
                    err_code: 0,
                    message: '登陆成功！'
                })
            } else {
                return res.status(200).json({
                    err_code: 1,
                    message: '登陆失败，密码错误'
                })
            }
        } else {
            return res.status(200).json({

                err_code: 2,
                message: '登陆失败，用户名不存在'
            })
        }
    })
})


module.exports = router