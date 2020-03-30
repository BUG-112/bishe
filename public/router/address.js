let express = require('express')

let addresSchema = require('../dataJs/address')
let router = express.Router()

router.get('/user/user-address', function(req, res) {

    if (req.session.user) {

        addresSchema.find({

            phone: req.session.user.phone
        }, function(err, data) {

            if (err) {
                console.log(err)
            } else {
                return data
            }
        }).then(function(data) {

            res.render('user-address.html', {
                user: req.session.user,
                address: data
            })

        })

    } else {

        res.redirect('/index/login')
    }

})

// 保存地址
router.post('/user/addr-save', function(req, res) {

    addresSchema.updateOne({ checked: 'checked', phone: req.session.user.phone }, { checked: 'nocheck' }, function(err) {

        if (err) {

            console.log(err)
        } else {

            addresSchema({
                checked: 'checked',
                phone: req.session.user.phone,
                recName: req.body.recName,
                phNumber: req.body.phNumber,
                address: req.body.sheng + '省' + req.body.shi + "市" + req.body.xian + req.body.jiedao
            }).save(function(err, data) {


                if (err) {

                    console.log(err)
                    return res.status(500).json({

                        errCode: 500,
                        message: '服务器忙！'
                    })

                } else {
                    return res.status(200).json({

                        errCode: 0,
                        message: '保存成功！'
                    })
                }
            })
        }
    })

})

// 设置默认地址
router.get('/user/addr-default', function(req, res) {


    // 查找选定的地址
    addresSchema.find({
            phone: req.session.user.phone
        }, function(err, data) {

            if (err) {

                return err
            } else {

                return data
            }

        })
        .then(function(data) {

            addresSchema.updateMany({ checked: 'checked' }, { checked: 'nocheck' }, function(err) {

                if (err) {

                    console.log('update', err)
                }
            })
            addresSchema.update({ _id: data[req.query.index]._id }, { checked: 'checked' }, function(err, data) {

                if (err) {

                    console.log(err)
                    return res.status(500).json({

                        errCode: 500,
                        message: '服务器忙！'
                    })
                } else {

                    return res.status(200).json({

                        errCode: 0,
                        message: '保存成功！'
                    })
                }
            })

        })

})


// 删除地址
router.get('/user/addr-del', function(req, res) {


    addresSchema.find({
            phone: req.session.user.phone
        }, function(err, data) {

            if (err) {
                console.log('del-find', err)
                return res.status(500).json({

                    errCode: 500,
                    message: '服务器忙！'
                })
            } else {


                return data
            }
        })
        .then(data => {


            addresSchema.deleteOne({ _id: data[req.query.index]._id }, function(err, data) {

                if (err) {

                    console.log('del', err)
                    return res.status(500).json({

                        errCode: 500,
                        message: '服务器忙！'
                    })

                } else {


                    return res.status(200).json({

                        errCode: 0,
                        message: '删除成功！'
                    })
                }
            })
        })
})


// 编辑地址

router.get('/user/addr-editor', (req, res) => {

    addresSchema.find({
            phone: req.session.user.phone
        }, (err, data) => {

            if (err) {

                console.log(err)
                return res.status(500).json({

                    errCode: 500,
                    message: '服务器忙!'
                })
            } else {
                return data
            }
        })
        .then(data => {

            let addres = data[req.query.idx].address

            let sheng = addres.split("省")[0]
            addres = addres.split("省")[addres.split("省").length - 1]
            let shi = addres.split("市")[0]
            addres = addres.split("市")[addres.split("市").length - 1]

            let xian = ''
            let jiedao = ''
            if (addres.split('县').length == 1) {

                xian = addres.split('区')[0]
                jiedao = addres.split("区")[addres.split("区").length - 1]
            } else {
                xian = addres.split('县')[0]
                jiedao = addres.split("县")[addres.split("县").length - 1]
            }

            res.render('addr-editor.html', {

                addr: data[req.query.idx],
                user: req.session.user,
                sheng: sheng,
                shi: shi,
                xian: xian,
                jiedao: jiedao
            })

        })

})
module.exports = router