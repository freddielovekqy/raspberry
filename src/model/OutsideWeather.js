var mongoose = require('../dao/db');
var Schema = mongoose.Schema;

var WindSchema = new Schema({
    direction: { type: String },
    power: { type: String },
    speed: { type: Number }
});

var OutsideWeatherSchema = new Schema({
    createDate: { type: Number, default: new Date().getTime() },
    temperature: { type: Number },
    humidity: { type: Number },
    temperatureHigh: { type: Number },
    temperatureLow: { type: Number },
    weather: { type: String },
    PM2_5: { type: Number },
    aqi: { type: Number },
    aqiInfoJson: { type: String },
    wind: { WindSchema },
    dataJson: { type: String }
    // 未来需要根据天气API得到的结果，进行数据存储
});

module.exports.OutsideWeather = mongoose.model('OutsideWeather', OutsideWeatherSchema);
module.exports.WindSchema = mongoose.model('Wind', WindSchema);