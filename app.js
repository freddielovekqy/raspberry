const express = require('express');
const path = require('path');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var scheduleTask = require('./src/schedule/ScheduleTask');

var users = require('./src/routes/UsersController');
var weather = require('./src/routes/WeatherController');
var move = require('./src/service/car/move.js');

app.use(express.static(path.join(__dirname, 'webapp')));

server.listen(8099, function () {
  console.log('Server listening at port 8099');
});

scheduleTask.initScheduleTasks();

// 处理get请求
app.get('/api/*', function (req, res, next) {
    console.log('-----------');
    next();
});

// 处理post请求
app.post('/api/*', function (req, res, next) {
    next();
});

// 处理put请求
app.put('/api/*', function (req, res, next) {
    next();
});

// 处理delete请求
app.delete('/api/*', function (req, res, next) {
    next();
});

app.use('/api/users', users);
app.use('/api/weather', weather);

io.on('connection', function (socket) {
    socket.on('init', data => {
        console.log('init socket', data.type);
    });

    socket.on('go', data => {
        console.log('go.....');
        move.go();
    });

    socket.on('stop', data => {
        console.log('stop.....');
        move.go();
    });

    socket.on('back', data => {
        console.log('back.....');
        move.back();
    });

});