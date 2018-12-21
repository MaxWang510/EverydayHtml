var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static('./public/'))

//配置使用art-template
app.engine('html', require('express-art-template'))

// 配置body-parser中间件（专门用来解析表单post请求体）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var comments = [{
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

app.get('/', function(req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function(req, res) {
    res.render('post.html')
})

app.post('/post', function(req, res) {
    // 1.获取表单post请求体数据
    // 2.处理
    // 3.发送响应

    console.log(req.body)
    var comment = req.body
    comment.dateTime = "2018-08-07 14:01"
    comments.unshift(comment)
    res.redirect('/')
})

app.listen(3000, function() {
    console.log('server in running...')
})