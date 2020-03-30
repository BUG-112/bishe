var express = require('express')

var Admin = require('../dataJs/admin')

var router = express.Router()

router.get('/admin/login', function(req, res) {
    res.render('admin-login.html')
})

router.post('/admin/login', function(req, res) {

    var dataBody = req.body

    Admin.findOne({
        phone: dataBody.phone

    }, function(err, data) {

        if (err) {
            return res.status(500).json({

                errCode: 500,
                message: '服务器忙！'
            })
        }

        if (data) {

            if (data.password == dataBody.password) {

                req.session.admin = data
                return res.status(200).json({

                    errCode: 0,
                    message: '登陆成功！'
                })

            } else {

                return res.status(200).json({

                    errCode: 1,
                    message: '密码错误！'
                })
            }
        } else {

            return res.status(200).json({

                errCode: 2,
                message: '用户名不存在！'
            })
        }
    })
})




module.exports = router