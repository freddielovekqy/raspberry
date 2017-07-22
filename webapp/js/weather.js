(function () {

    function getCurrentOutsideInfo() {
        $.ajax({
            url: '/api/weather/outside',
            type: 'GET',
            success: data => {
                console.log(data);

                if (data) {
                    var weatherData = JSON.parse(data).results[0].now;

                    if (weatherData.temperature) {
                        $('#outsideTemperatureText').text(weatherData.temperature + '°');
                    }
                    
                    if (weatherData.humidity) {
                        $('#outsideHumidityText').text(weatherData.temperature + '%');
                    } else {
                        $('#outsideHumidityText').text('暂无数据');
                    }
                }
                
            }
        });
    }

    function getCurrentInsideInfo() {
        $.ajax({
            url: '/api/weather/current/inside',
            type: 'GET',
            success: data => {
                console.log('current/inside', data);
            }
        });
    }

    getCurrentOutsideInfo();
    getCurrentInsideInfo();
})();