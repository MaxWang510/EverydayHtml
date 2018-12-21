// 创建服务器

//加载http模块

var http = require('http');

//返回一个server实例
var server = http.createServer();

//服务器请求数据
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理 
server.on('request', function() {
    console.log('收到客户端请求');
});

//绑定端口号，启动服务器

server.listen(3000, function() {
    console.log('服务器启动成功，可以进行访问');
});