var express = require('express');
var router = express.Router();
var weatherService = require('../service/WeatherService');

/**
 * 当前接口废弃，改使用JSONP方式调用极速数据中的API
 */
router.get('/outside', function (request, response, next) {
    var promise = weatherService.getOutsideWeathers();

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
