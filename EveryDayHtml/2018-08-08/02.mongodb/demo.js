var mongoose = require('mongoose')

// 结构
var Schema = mongoose.Schema

//1.连接本机数据库,数据库不需要存在，插入第一条数据机会自动创建
mongoose.connect('mongodb://localhost/huazai')

//2.设置集合（表）结构
const userSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true //必须有
    },
    email: {
        type: String
    },
});
// 3.将文档结构发布为模型
// 第一个参数：数据库名称
// 返回值：模型构造函数
var User = mongoose.model('User', userSchema)

// 4.有了模型结构就可以使用这个函数对user数据操作

// **********************
//   新增
// **********************
// var admin = new User({
//     username: 'zs',
//     password: '123',
//     email: 'admin@admin.com'
// })


// admin.save(function(err, ret) {
//     if (err) {
//         console.log('存储失败')
//     } else {
//         console.log('存储成功')
//     }
// })

// **********************
//   查询
// **********************
// 查询所有
// User.find(function(err, ret) {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log(ret)
//     }
// })


// 条件查询
User.find({
    username: 'zs'
}, function(err, ret) {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})

// **********************
//  删除数据
// **********************
// User.remove({
//     username: 'zs'
// }, function(err, ret) {
//     if (err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//     }
// })