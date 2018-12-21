var express = require('express')

var app = express()

// app.use('/public/', express.static('./public/'))

app.use(express.static('./public/'))

app.get('/', function(req, res) {
    res.send('hello world')
})

app.get('/login', function(req, res) {
    res.send('login')
})

app.listen(3000, function() {
    console.log('express is running...')
})