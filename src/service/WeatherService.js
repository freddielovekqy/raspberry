var Api = require('./seniverse/api');
var dht22 = require('./sensor/dht22');
var http = require('http');

var outsideWeatherDao = require('../dao/OutsideWeatherDao');

const SUZHOU_CITY_ID_FOR_WEATHER_API = 220;
const WEATHER_API_KEY_CODE = 'cc109de04844426c';

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

function saveCurrentOutsideWeather() {
    return new Promise((resolve, reject) => {
        getCurrentOutside()
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

/**
 * 获取极速数据API的天气数据
 */
function getCurrentOutside() {
    return new Promise((resolve, reject) => {
        var url = `http://api.jisuapi.com/weather/query?appkey=${WEATHER_API_KEY_CODE}&cityid=${SUZHOU_CITY_ID_FOR_WEATHER_API}`;
        http.get(url, (response) => {
            const { statusCode } = response;
            const contentType = response.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error('请求失败。\n' + `状态码: ${statusCode}`);
            }
            if (error) {
                console.error(error.message);
                // 消耗响应数据以释放内存
                response.resume();
                return;
            }

            response.setEncoding('utf8');
            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk; });
            response.on('end', () => {
                try {
                    resolve(JSON.parse(rawData));
                } catch (e) {
                    reject(e.message);
                }
            });
        }).on('error', (e) => {
            reject(e.message);
        });
    });

}

function getCurrentInside() {
    return new Promise((resolve, reject) => {
        // resolve(dht22.getCurrent());
        resolve({});
    });
}

module.exports.getOutsideWeathers = getOutsideWeathers;
module.exports.getCurrentInside = getCurrentInside;
module.exports.saveCurrentOutsideWeather = saveCurrentOutsideWeather;

