(function () {
    var data = [
        ["2017-08-03 08:00", 10, 2],
        ["2017-08-03 08:30", 5, -2],
        ["2017-08-03 09:00", 3, -10],
        ["2017-08-03 09:30", 15, 26],

        ["2017-08-03 10:00", 27, 35],
        ["2017-08-03 10:30", 28, 38],
        ["2017-08-03 11:00", 27, 39],
        ["2017-08-03 11:30", 28, 39],
        ["2017-08-03 12:00", 27, 39],
        ["2017-08-03 12:30", 28, 40]
    ];
    initChart(data);


    function initChart(data) {
        var myChart = echarts.init(document.getElementsByClassName('template-chart')[0]);
        myChart.setOption(option = {
            title: {
                text: '温度'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: data.map((item) => {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2017-08-03 10:00'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -10,
                    lte: 10,
                    color: '#0098e4'
                }, {
                    gt: 10,
                    lte: 20,
                    color: '#006dc0'
                }, {
                    gt: 20,
                    lte: 28,
                    color: '#096'
                }, {
                    gt: 28,
                    lte: 35,
                    color: '#e38816'
                }, {
                    gt: 35,
                    color: '#d00020'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name: '室内温度',
                    type: 'line',
                    data: data.map(function (item) {
                        return item[1];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 20
                        }, {
                            yAxis: 28
                        }]
                    }
                }, {
                    name: '室外温度',
                    type: 'line',
                    data: data.map(function (item) {
                        return item[2];
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 20
                        }, {
                            yAxis: 28
                        }]
                    }
                }
            ]
        });
    }


})();