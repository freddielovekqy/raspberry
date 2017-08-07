var express = require('express');
var router = express.Router();
var weatherService = require('../service/WeatherService');

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

router.get('inside', (request, response, next) => {
    var promise = weatherService.getInsideWeathers();

    promise.then(data => {
        response.send(JSON.stringify(data));
    }, data => {
        response.send(JSON.stringify(data));
    }).catch(data => {
        response.send(JSON.stringify(data));
    });
})

router.get('/current/outside', (request, response, next) => {
    var promise = weatherService.getCurrentOutside();

    promise.then(data => {
        response.json(data);
    }, data => {
        response.json(data);
    }).catch(data => {
        response.json(data);
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
