const express = require('express');
const path = require('path');
const app = express();

var users = require('./src/routes/UsersController');
var weather = require('./src/routes/WeatherController');

app.use(express.static(path.join(__dirname, 'webapp')));
app.listen(8099, () => {
    console.log(`App listening at port 8090`)
});

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