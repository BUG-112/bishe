var express = require('express')
var User = require('../dataJs/user')

var router = express.Router()

router.get('/user/pw-forget', function(req, res) {
    res.render('pw-forget.html')
})


router.post('/user/pw-forget', function(req, res) {

    var data_body = req.body
    User.findOne({
        phone: data_body.phone
    }, function(err, data) {

        if (err) {
            return res.status(200).json({

                err_code: 500,
                message: '服务器忙，请重试！'
            })
        } else if (data) {

            if (data_body.new_pw != data_body.confirm) {

                return res.status(200).json({

                    err_code: 1,
                    message: '两次密码不一致！'
                })
            } else {

                data.password = data_body.new_pw
                User(data).save(
                    function(err, data2) {

                        if (err) {
                            return res.status(500).json({

                                err_code: 500,
                                message: '服务器忙，请重试！'
                            })
                        } else {

                            return res.status(200).json({

                                err_code: 0,
                                message: '更改密码成功！'
                            })
                        }
                    })
            }
        } else {

            return res.status(200).json({

                err_code: 2,
                message: '输入的账号不正确或不存在'
            })
        }
    })
})


module.exports = router