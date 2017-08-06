var schedule = require("node-schedule");
var weatherService = require('../service/WeatherService');

function WeatherSchedule() {
    var outsideWeatherSchedule;
    var insideWeatherSchedule;

    function initSchedule() {
        outsideWeatherSchedule = schedule.scheduleJob('0 0 * * * *', function () {
            console.log('save outside weather.. ');
            weatherService.saveCurrentOutsideWeather();
        });

        insideWeatherSchedule = schedule.scheduleJob('0 0 * * * *', function () {
            console.log('save inside weather.. ');
            weatherService.saveCurrentInsideWeather();
        });
    }

    function cancelSchedule() {
        console.log('cancel weather schedule');
        outsideWeatherSchedule && outsideWeatherSchedule.cancelSchedule();
        insideWeatherSchedule && insideWeatherSchedule.cancelSchedule();
    }
    return {
        initSchedule: initSchedule,
        cancelSchedule: cancelSchedule
    };
}
module.exports = WeatherSchedule();

