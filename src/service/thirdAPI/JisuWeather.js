var http = require('http');

const SUZHOU_CITY_ID_FOR_WEATHER_API = 220;
const WEATHER_API_KEY_CODE = 'cc109de04844426c';

function getCurrentOutsideWeather() {
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

module.exports.getCurrentOutsideWeather = getCurrentOutsideWeather;