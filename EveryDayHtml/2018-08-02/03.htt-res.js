// 创建服务器
//加载http模块
var http = require('http');
//返回一个server实例
var server = http.createServer();

//服务器请求数据
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理 
// request 请求对象
// response 响应对象
server.on('request', function(request, response) {
    console.log('收到客户端请求,请求路径是：' + request.url);
    // response.write 可以用来给客户端返回数据，write可以写多次，但是最后一定要使用end来结束响应，不然客户端一定会等待
    response.write('hello');
    response.write('world');
    // 响应结束
    response.end();
});

//绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功，可以进行访问');
});