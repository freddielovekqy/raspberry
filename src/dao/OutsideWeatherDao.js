var OutsideSchemaModule = require("../model/OutsideWeather");
var OutsideWeather = OutsideSchemaModule.OutsideWeather;
var Wind = OutsideSchemaModule.Wind;

function save(weatherData) {
    var outsideWeatherEntity = new OutsideWeather({
        temperature: parseFloat(weatherData.temp),
        humidity: parseFloat(weatherData.humidity),
        temperatureHigh: parseFloat(weatherData.temphigh),
        temperatureLow: parseFloat(weatherData.templow),
        weather: weatherData.weather,
        PM2_5: parseFloat(weatherData.aqi.pm2_5),
        aqi: parseFloat(weatherData.aqi.aqi),
        aqiInfoJson: JSON.stringify(weatherData.aqi),
        wind: {
            direction: weatherData.winddirect,
            power: weatherData.windpower,
            speed: parseFloat(weatherData.windspeed)
        },
        dataJson: JSON.stringify(weatherData)
    });
    return outsideWeatherEntity.save();
}

function getWeathers() {
    return OutsideWeather.find().skip(0).limit(2000).sort({createDate: 1}).exec();
}

function getCurrentWeather() {
    return OutsideWeather.find().skip(0).limit(1).sort({createDate: 1}).exec();
}

module.exports.save = save;
module.exports.getWeathers = getWeathers;
module.exports.getCurrentWeather = getCurrentWeather;
