var weatherSchedule = require('./WeatherScheduleTask');

function initScheduleTasks() {
    // TODO 树莓派暂无时钟模块，系统时间无法自动校准
    // weatherSchedule.initSchedule();
}

function cancelScheduleTasks() {
    weatherSchedule.cancelSchedule();
}

module.exports.initScheduleTasks = initScheduleTasks;
module.exports.cancelScheduleTasks = cancelScheduleTasks;

