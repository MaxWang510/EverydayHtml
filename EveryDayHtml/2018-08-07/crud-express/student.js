var fs = require('fs')
var dbPath = './db.json'

exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

// 根据id获取学生对象
exports.findById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        id = parseInt(id)
        var students = JSON.parse(data).students
        var ret = students.find(function(item) {
            return item.id === id
        })
        callback(null, ret)
    })
}
exports.save = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        if (students.length > 0) {
            student.id = students[students.length - 1].id + 1
        } else {
            student.id = 0
        }

        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                // 错误就就是发送错误
                return callback(err)
            }
            //成功就没错
            callback(null)
        })
    })
}

exports.updataById = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = parseInt(student.id)
            // 修改谁
        var stu = students.find(function(item) {
            return item.id === student.id
        })

        // 遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }

        var fileData = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                // 错误就就是发送错误
                return callback(err)
            }
            //成功就没错
            callback(null)
        })
    })
}

exports.deleteById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        var delectId = students.findIndex(function(item) {
            return item.id === parseInt(id)
        })

        students.splice(delectId, 1)

        var fileData = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                // 错误就就是发送错误
                return callback(err)
            }
            //成功就没错
            callback(null)
        })
    })
}