var mongoose = require('../dao/db');
var Schema = mongoose.Schema;

var InsideWeatherSchema = new Schema({
    createDate: { type: Number, default: new Date().getTime() },
    temperature: { type: Number },
    humidity: { type: Number }
});

module.exports.InsideWeather = mongoose.model('InsideWeather', InsideWeatherSchema);