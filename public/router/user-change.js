var express = require('express')
var User = require('../dataJs/user')

var router = express.Router()

router.get('/user/pw-change', function(req, res) {
    res.render('pw-change.html', {
        user: req.session.user
    })
})

router.post('/user/pw-change', function(req, res) {

    var data_body = req.body
    if (data_body.new_pw != data_body.confirm) {

        return res.status(200).json({
            err_code: 1,
            message: '两次密码不一致，请重试！'
        })
    } else {

        User.findOne({
            name: req.session.user.name
        }, function(err, data) {

            if (err) {
                return res.status(500).json({

                    err_code: 500,
                    message: err.message
                })
            }
            if (data) {
                if (data.password != data_body.old_pw) {

                    return res.status(200).json({

                        err_code: 2,
                        message: '原密码不正确，请重试！'
                    })
                } else {

                    data.password = data_body.new_pw
                    User(data).save(function(err, data2) {

                        if (err) {
                            return res.status(500).json({

                                err_code: 500,
                                message: err.message
                            })
                        } else {
                            return res.status(200).json({

                                err_code: 0,
                                message: '修改成功！'
                            })
                        }
                    })

                }
            }
        })

    }


})



module.exports = router