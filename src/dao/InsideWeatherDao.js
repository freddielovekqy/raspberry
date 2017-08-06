var InsideWeather = require('../model/InsideWeather').InsideWeather;

function save(weatherData) {
    var insideWeatherEntity = new InsideWeather({
        temperature: weatherData.temperature,
        humidity: weatherData.humidity
    });
    insideWeatherEntity.save();
}

function getWeathers() {
    return InsideWeather.find().skip(0).limit(2000).sort({createDate: 1}).exec();
}

module.exports.save = save;
module.exports.getWeathers = getWeathers;