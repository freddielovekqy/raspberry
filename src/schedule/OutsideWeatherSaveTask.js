var schedule = require("node-schedule");
var weatherService = require('../service/WeatherService');

schedule.scheduleJob('* 0/30 * * * *', function () {
    weatherService.saveCurrentOutsideWeather();
});  