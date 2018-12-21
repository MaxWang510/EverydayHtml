var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

//配置使用art-template
app.engine('html', require('express-art-template'))

// 配置body-parser中间件（专门用来解析表单post请求体）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// ======================配置插件需在挂载数据之前=========================


//把路由挂载到APP服务中
app.use(router)

app.listen(3000, function() {
    console.log('server in running')
})

module.exports = app