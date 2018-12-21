function add(x, y, callback) {
    setTimeout(function() {
        var ret = x + y
        callback(ret)
    }, 1000)
}

add(10, 20, function(res) {
    console.log(res)
})

// 动态获取文件路径和文件名字
console.log(__dirname)
console.log(__filename)