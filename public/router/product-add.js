var express = require('express')
var multer = require('multer')
var proSchema = require('../dataJs/product')
var path = require('path')
var fs = require('fs')

var router = express.Router()

var upload = multer({

    //上传图片保存时的过度文件夹
    dest: './public/img'
})

//接受任意所有上传的文件
router.use(upload.any())
    // upload.single('name')接受name名称的文件



router.post('/proSave', function(req, res) {

    // 添加后缀名
    const newname = req.files[0].path + path.parse(req.files[0].originalname).ext
    fs.rename(req.files[0].path, newname, function(err) {
        if (err) {
            console.log('上传失败', err)

        } else {

            var imgPath = '../img/' + req.files[0].filename + path.parse(req.files[0].originalname).ext
            fs.readFile(path.join(__dirname, imgPath), function(err, data) {

                if (err) {

                    console.log('read', err)
                } else {

                    var imgs = '../img/product-img/' + req.files[0].filename + path.parse(req.files[0].originalname).ext
                    fs.writeFile(path.join(__dirname, imgs), data, function(err) {

                        if (err) {

                            console.log('write', err)
                        } else {

                            imgs = '../public/img/product-img/' + req.files[0].filename + path.parse(req.files[0].originalname).ext
                            proSchema({
                                img: imgs,
                                title: req.body.title,
                                price: req.body.price,
                                acount: req.body.acount,
                                brand: req.body.brand,
                                category: req.body.category,

                            }).save(function(err, data) {

                                if (err) {

                                    console.log(err)
                                } else {

                                    fs.unlink(path.join(__dirname, imgPath), function(err) {

                                        if (err) {

                                            console.log('unlink', err)
                                        } else {

                                            res.redirect('/admin/product-add')
                                        }
                                    })

                                }
                            })

                        }
                    })
                }

            })

        }
    })

})


module.exports = router