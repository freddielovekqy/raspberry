var Api = require('./seniverse/api');
var dht22 = require('./sensor/dht22');

function getCurrentOutside(location = 'Suzhou') {
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

function getCurrentInside() {
    return new Promise((resolve, reject) => {
        resolve(dht22.getCurrent());
    });
}

module.exports.getCurrentOutside = getCurrentOutside;
module.exports.getCurrentInside = getCurrentInside;

