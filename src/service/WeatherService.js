var Api = require('./seniverse/api');
var dht22 = require('./sensor/dht22');

var outsideWeatherDao = require('../dao/OutsideWeatherDao');
var insideWeatherDao = require('../dao/InsideWeatherDao');

var jisuWeatherAPI = require('./thirdAPI/JisuWeather');

const CURRENT_OUTSIDE_WEATHER_TIME_INTERVAL = 30 * 60 * 1000;

/**
 * 当前服务废弃
 * @param {String} location 
 */
function getCurrentOutside2(location = 'Suzhou') {
    return new Promise((resolve, reject) => {
        const UID = "U56F0BADFC"; // 测试用 用户ID，请更换成您自己的用户ID
        const KEY = "dyegvyoipb7iaeyp"; // 测试用 key，请更换成您自己的 Key

        var api = new Api(UID, KEY);
        var argv = require('optimist').default('l', location).argv;

        api.getWeatherNow(argv.l).then(function (data) {
            console.log(JSON.stringify(data, null, 4));
            resolve(data);
        }).catch(function (err) {
            console.log(err.error.status);
        });
    });
}

function getOutsideWeathers() {
    return new Promise((resolve, reject) => {
        outsideWeatherDao.getWeathers()
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function getInsideWeathers() {
    return new Promise((resolve, reject) => {
        insideWeatherDao.getWeathers()
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    });
}

function saveCurrentOutsideWeather() {
    return new Promise((resolve, reject) => {
        jisuWeatherAPI.getCurrentOutsideWeather()
            .then(data => {
                var weatherData = data.result;
                delete weatherData.daily;
                delete weatherData.hourly;
                delete weatherData.daily;
                outsideWeatherDao.save(weatherData);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function saveCurrentInsideWeather() {
    return new Promise((resolve, reject) => {
        getCurrentInside()
            .then(data => {
                insideWeatherDao.save({
                    temperature: parseFloat(data.temperature),
                    humidity: parseFloat(data.humidity)
                });
            });
    });
}

function getCurrentOutside() {
    return new Promise((resolve, reject) => {
        outsideWeatherDao.getCurrentWeather()
            .then(data => {
                if (data && data.length === 1) {
                    if (new Date().getTime() - data[0].createDate <= CURRENT_OUTSIDE_WEATHER_TIME_INTERVAL) {
                        resolve(data[0]);
                    } else {
                        return jisuWeatherAPI.getCurrentOutsideWeather();
                    }   
                } else {
                    return jisuWeatherAPI.getCurrentOutsideWeather();
                }
            })
            .then(data => {
                if (data && data.result) {
                    resolve(data.result);
                }
            });
    });

}

function getCurrentInside() {
    return new Promise((resolve, reject) => {
        resolve(dht22.getCurrent());
    });
}

module.exports.getCurrentInside = getCurrentInside;
module.exports.getCurrentOutside = getCurrentOutside;
module.exports.getInsideWeathers = getInsideWeathers;
module.exports.getOutsideWeathers = getOutsideWeathers;
module.exports.saveCurrentInsideWeather = saveCurrentInsideWeather;
module.exports.saveCurrentOutsideWeather = saveCurrentOutsideWeather;

