(function () {
    function getCurrentOutsideInfoJisuAPI() {
        $.ajax({
            url: 'http://api.jisuapi.com/weather/query?appkey=cc109de04844426c&cityid=220',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (data) {
                console.log(data);
                if (data) {
                    var weatherData = data.result;

                    if (weatherData.temp) {
                        $('#outsideTemperatureText').text(weatherData.temp + '°');
                    }

                    if (weatherData.humidity) {
                        $('#outsideHumidityText').text(weatherData.humidity + '%');
                    } else {
                        $('#outsideHumidityText').text('暂无数据');
                    }
                }
            },
            error: function (err) { alert(err) }
        });
    }

    function getCurrentInsideInfo() {
        $.ajax({
            url: '/api/weather/current/inside',
            type: 'GET',
            success: data => {
                // console.log('current/inside', data);

                if (data) {
                    var weatherData = JSON.parse(data);

                    if (weatherData.temperature) {
                        $('#insideTemperatureText').text(weatherData.temperature + '°');
                    }

                    if (weatherData.humidity) {
                        $('#insideHumidityText').text(weatherData.humidity + '%');
                    } else {
                        $('#insideHumidityText').text('暂无数据');
                    }
                }
            }
        });
    }

    getCurrentInsideInfo();
    getCurrentOutsideInfoJisuAPI();

    $('#refreshInside').on('click', event => {
        getCurrentInsideInfo();
    });

    $('#refreshOutside').on('click', event => {
        getCurrentOutsideInfoJisuAPI();
    });
})();
