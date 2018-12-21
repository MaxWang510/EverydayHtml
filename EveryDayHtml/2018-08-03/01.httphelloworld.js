var http = require('http')

// 创建server
var server = http.createServer();

// 监听server的request请求事件，设置请求处理函数

server.on('request', function(req, res) {
    var url = req.url
    if (url === '/') {
        res.end('hello world')
    } else {
        res.end('404 not found')
    }
})

server.listen(3000, function() {
    console.log('server is running...');
});