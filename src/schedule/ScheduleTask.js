var weatherSchedule = require('./WeatherScheduleTask');

function initScheduleTasks() {
    weatherSchedule.initSchedule();
}

function cancelScheduleTasks() {
    weatherSchedule.cancelSchedule();
}

module.exports.initScheduleTasks = initScheduleTasks;
module.exports.cancelScheduleTasks = cancelScheduleTasks;

