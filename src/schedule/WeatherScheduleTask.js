var schedule = require("node-schedule");
var weatherService = require('../service/WeatherService');

function WeatherSchedule() {
    var outsideWeatherSchedule;

    function initSchedule() {
        outsideWeatherSchedule = schedule.scheduleJob('0 0,30 * * * *', function () {
            console.log('save outside weather.. ');
            weatherService.saveCurrentOutsideWeather();
        });
    }

    function cancelSchedule() {
        console.log('cancel outsideWeatherSchedule');
        outsideWeatherSchedule && outsideWeatherSchedule.cancelSchedule;
    }
    return {
        initSchedule: initSchedule,
        cancelSchedule: cancelSchedule
    };
}
module.exports = WeatherSchedule();

