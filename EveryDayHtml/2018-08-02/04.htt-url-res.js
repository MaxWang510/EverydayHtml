//加载http模块
var http = require('http');
//返回一个server实例
var server = http.createServer();

//监听reque请求事件，设置请求处理函数
server.on('request', function(request, response) {
    console.log('收到客户端请求,请求路径是：' + request.url);
    console.log('收到客户端请求,请求端口号是：' + request.socket.remotePort);
    // response.write('hello');
    // response.write('world');
    // 发送响应数据并响应结束
    // response.end('hello world!');

    //根据不同的路径发送不同的响应结果
    //端口号以后的路径
    var url = request.url

    if (url === '/') {
        response.end('index page')
    } else if (url === '/login') {
        response.end('login page')
    } else if (url === '/pro') {
        var pro = [{ name: '苹果', price: 888 }, { name: '苹果', price: 888 }, { name: '苹果', price: 888 }, { name: '苹果', price: 888 }]
        response.end(JSON.stringify(pro))
    } else {
        response.end('404 not found')
    }
});

//绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功，可以进行访问');
});