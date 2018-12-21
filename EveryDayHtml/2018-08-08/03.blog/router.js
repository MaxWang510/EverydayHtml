var express = require('express')
var User = require('./models/user')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index.html')
})

router.get('/login', function(req, res) {
    res.render('login.html')
})

router.post('/login', function(req, res) {
    res.render('index.html')
})

router.get('/register', function(req, res) {
    res.render('register.html')
})

router.post('/register', function(req, res) {
    //1.获取表单数据
    // 2.操作数据库
    //判断用户是否存在，存在不能注册，不存在注册
    // 3.发送响应
    var body = req.body
    User.findOne({
        $or: [{
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '服务端错误'
            })
        }
        //如果邮箱或者昵称存在
        if (data) {
            return res.status(200).json({
                success: true,
                mrssage: 'email or nickname aleary exists'
            })
        }

        new User(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: '服务端错误'
                })
            }

            res.status(200).json({
                success: true,
                mrssage: 'ok'
            })

        })

        res.status(200).json({
            success: true,
            mrssage: 'ok'
        })
    })
})

module.exports = router