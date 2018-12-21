/**
 * 负责路由
 *  
 **/
var fs = require('fs')
var express = require('express')
var Student = require('./student.js')

//创建一个路由容器
var router = express.Router()

//把路由挂在到router路由容器中


router.get('/students', function(req, res) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: JSON.parse(data).students
        })
    })
})
router.get('/students/new', function(req, res) {
    res.render('new.html')
})

router.post('/students/new', function(req, res) {
    //获取表单数据
    //处理
    //    将数据保存到db.json中用于持久化
    //发送响应
    Student.save(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }

        res.redirect('/students')
    })
})

router.get('/students/edit', function(req, res) {
    //在客户端的列表页面中处理连接问题
    // 获取需要编辑的学生id

    // 渲染编辑页面
    Student.findById(parseInt(req.query.id), function(err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function(req, res) {
    // 获取表单
    // 更新
    // 发送响应
    Student.updataById(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function(req, res) {
    console.log(req.body)
        // 获取删除id
        // 根据id执行操作
        // 删除
    Student.deleteById(req.body.id, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

//把router导出
module.exports = router