var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var router = require('./router.js')
var app = express()

// 配置解析表单Post请求体插件（一定要在app.use(router) 之前）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) //默认 views目录

app.use(router)

app.listen(3000, function() {
    console.log('server is running...')
})