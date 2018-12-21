var hello = "hello";

console.log(hello);

// fs 提供所有文件操作相关的API
var fs = require('fs');

// 读取文件(文件路径，回调函数（error   data）)
fs.readFile('hello.txt', function(error, data) {
    if (error) {
        console.log("读取文件失败");
    } else {
        console.log(data); //<Buffer 68 65 6c 6c 6f 74 65 78 74>  二进制数据（二进制转成十六进制）
        console.log(data.toString());
    }
});

fs.writeFile('哈喽.md', '写入数据', function(error) {
    console.log('写入成功');
    if (error) {
        console.error();
    }
});