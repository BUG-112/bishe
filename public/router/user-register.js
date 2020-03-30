var express = require('express')
var User = require('../dataJs/user')

var router = express.Router()



router.get('/index/register', function(req, res) {
    res.render('register.html')
})

router.post('/index/register', function(req, res) {

    // 获取请求体数据
    var data_body = req.body

    User.findOne({
        $or: [
            { phone: data_body.phone },
            { name: data_body.name }
        ]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }

        if (data) {

            return res.status(200).json({
                err_code: 1,
                message: '电话或者用户名已存在！'
            })

        } else {


            User(data_body).save(function(err, data) {
                if (err) {
                    return res.status(500).json({
                        err_code: 500,
                        message: err.message
                    })
                }
                req.session.user = data
                return res.status(200).json({
                    err_code: 0,
                    message: '注册成功！'
                })

            })

        }

    })

})



module.exports = router