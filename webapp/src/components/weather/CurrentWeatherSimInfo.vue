<template>
    <div :class="location">
        <div class="info-div">
            <span class="fa fa-home"></span>
            <div class="info">
                <div class="temperature">
                    <span id="temperatureText" class="temperature-text">{{ weatherInfo.temperature }}</span>
                </div>
                <div class="humidity">
                    <span>湿度：</span>
                    <span id="humidityText" class="humidity-text">{{ weatherInfo.humidity }}</span>
                </div>
            </div>
        </div>
        <div class="div-info">
            <span>当前{{ location === 'inside' ? '室内' : '室外' }}</span>
            <span id="refresh" class="fa fa-refresh" @click="refreshWeather()"></span>
        </div>
    </div>
</template>

<script>
function getCurrentOutsideInfoFromDB() {
    var _this = this;
    $.ajax({
        url: '/api/weather/current/outside',
        type: 'GET',
        success: function(data) {
            console.log(data);
            console.log('outside', _this);
            if (data) {

                var weatherData = (typeof data === 'string') ? JSON.parse(data) : data;
                if (weatherData.humidity) {
                    // $('#humidityText').text(weatherData.humidity + '%');
                    _this.weatherInfo.humidity = weatherData.humidity + '%';
                } else {
                    // $('#humidityText').text('暂无数据');
                    _this.weatherInfo.humidity = '暂无数据';
                }

                var temperature = weatherData.temperature || weatherData.temp || 0;
                // $('#temperatureText').text(temperature + '°');
                _this.weatherInfo.temperature = temperature + '°';
            }
        },
        error: function(err) { alert(err) }
    });
}

function getCurrentOutsideInfoJisuAPI() {
    var _this = this;
    $.ajax({
        url: 'http://api.jisuapi.com/weather/query?appkey=cc109de04844426c&cityid=220',
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function(data) {
            console.log(data);
            if (data) {
                var weatherData = data.result;

                if (weatherData.temp) {
                    _this.weatherInfo.temperature = weatherData.temp + '°';
                }

                if (weatherData.humidity) {
                    _this.weatherInfo.humidity = weatherData.humidity + '%';
                } else {
                    _this.weatherInfo.humidity = '暂无数据';
                }
            }
        },
        error: function(err) { alert(err) }
    });
}

function getCurrentInsideInfo() {
    var _this = this;
    $.ajax({
        url: '/api/weather/current/inside',
        type: 'GET',
        success: data => {
            // console.log('current/inside', data);
            console.log('inside', _this);
            if (data) {
                var weatherData = JSON.parse(data);

                if (weatherData.temperature) {
                    // $('#temperatureText').text(weatherData.temperature + '°');
                    _this.weatherInfo.temperature = weatherData.temperature + '°';
                }

                if (weatherData.humidity) {
                    // $('#humidityText').text(weatherData.humidity + '%');
                    _this.weatherInfo.humidity = weatherData.humidity + '%';
                } else {
                    // $('#humidityText').text('暂无数据');
                    _this.weatherInfo.humidity = '暂无数据';
                }
            }
        }
    });
}

function setWeatherInfo() {
    var _this = this;
    if (_this.location === 'inside') {
        getCurrentInsideInfo.call(_this);
    } else if (_this.location === 'outside') {
        getCurrentOutsideInfoFromDB.call(_this);
    }
}

export default {
    props: {
        location: String
    },
    data() {
        return {
            weatherInfo: {
                temperature: '0°',
                humidity: '100%'
            }
        }
    },
    sockets: {
        connect: function() {  //这里是监听connect事件
        },
        customEmit: function(val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', this.$socket.id)
        }
    },
    mounted() {
        this.id = this.$socket.id
    },
    methods: {
        refreshWeather: function() {
            setWeatherInfo.call(this);
            // this.$socket.emit('init', '111111');
        }
    },
    created: function() {
        setWeatherInfo.call(this);
    }
}
</script>

<style lang="less">
.current-side-info(@backgroundColor) {
    display: inline-block;
    width: 210px;
    height: 115px;
    background: @backgroundColor;
    border-radius: 3px;
    position: relative;
    .info-div {
        margin: 10px 15px 0;
        .fa-home,
        .fa-tree {
            font-size: 50px;
            color: #fff;
        }
        .info {
            display: inline-block;
            float: right;
            .temperature {
                font-size: 32px;
                color: #fff;
                text-align: right;
            }
            .humidity {
                color: #fff;
            }
        }
    }
    .div-info {
        position: absolute;
        bottom: 0;
        text-align: left;
        width: 100%;
        line-height: 30px;
        padding: 0 15px;
        background: #fff;
        border: 1px solid @backgroundColor;
        border-radius: 0 0 3px 3px;
        .fa-refresh {
            float: right;
            line-height: 30px;
            cursor: pointer;
        }
    }
}

.inside {
    .current-side-info(#3175b0);
}

.outside {
    .current-side-info(#5cb85c);
    margin-left: 20px;
}

@media screen and (max-width: 800px) {
    .outside {
        margin-left: 0;
        margin-top: 20px;
    }
}
</style>
