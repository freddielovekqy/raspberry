var express = require('express');
var router = express.Router();
var weatherService = require('../service/WeatherService');

router.get('/outside', function (request, response, next) {
    console.log('get outside weather info');
    var promise = weatherService.getCurrentOutside();

    promise.then(data => {
        response.send(JSON.stringify(data));
    }, data => {
        response.send(JSON.stringify(data));
    }).catch(data => {
        response.send(JSON.stringify(data));
    });
});

router.get('/current/inside', (request, response, next) => {
    var promise = weatherService.getCurrentInside();

    promise.then(data => {
        response.send(JSON.stringify(data));
    }, data => {
        response.send(JSON.stringify(data));
    }).catch(data => {
        response.send(JSON.stringify(data));
    });
});

module.exports = router;
