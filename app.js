var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require("mongoose")
var ejs = require('ejs')

var router = require('./public/router/user-register')
var Rlogin = require('./public/router/user-login')
var RUchange = require('./public/router/user-change')
var Rcar = require('./public/router/user-car')
var Rfind = require('./public/router/user-find')
var Alogin = require('./public/router/admin-login')
var proAdd = require('./public/router/product-add')
var index = require('./public/router/index')
var proDetail = require('./public/router/product-detail')
let Address = require('./public/router/address')
let Buy = require('./public/router/user-buy')

var session = require('express-session')

var app = express()


app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))


app.engine('html', require('express-art-template'))
mongoose.connect('mongodb://localhost/dongman', { useUnifiedTopology: true, useNewUrlParser: true }, function(err) {


        if (err) {

            console.log(err)
        } else {

            console.log('连接数据库成功')
        }
    })
    // 配置表单获取
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// 在 Express 这个框架中，默认不支持 Session 和 Cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1. npm install express-session
// 2. 配置 (一定要在 app.use(router) 之前)
// 3. 使用
//    当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
//    添加 Session 数据：req.session.foo = 'bar'
//    访问 Session 数据：req.session.foo

app.use(session({

    secret: 'itcast',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))


app.get('/logout', function(req, res) {

    req.session.user = null
    res.redirect('/')
})

app.get('/admin/index', function(req, res) {

    if (req.session.admin == null) {

        res.redirect('/admin/login')
    } else {
        res.render('admin-index.html', {

            admin: req.session.admin
        })
    }
})

app.get('/admin/logout', function(req, res) {

    req.session.admin = null
    res.redirect('/admin/login')
})

app.get('/admin/product-add', function(req, res) {

    if (req.session.admin) {
        res.render('product-add.html', {
            admin: req.session.admin
        })
    } else {
        res.redirect('/admin/login')
    }
})







app.get('/user/buy-list', function(req, res) {
    res.render('buy-list.html')
})

app.get('/model', function(req, res) {
    res.render('model.html')
})


app.get('/admin/order-list', function(req, res) {
    res.render('admin-order-list.html')
})
app.get('/admin/product-list', function(req, res) {
    res.render('admin-product-list.html')
})


app.use(router)
app.use(Rlogin)
app.use(RUchange)
app.use(Rcar)
app.use(Rfind)
app.use(Alogin)
app.use(proAdd)
app.use(index)
app.use(proDetail)
app.use(Address)
app.use(Buy)


app.listen(3000, function() {
    console.log('running 3000...')
})