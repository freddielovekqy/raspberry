<template>
    <div class="chart-div">
        <div id="templateChart" class="template-chart"></div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {
            data: [
                ["2017-08-03 08:00", 10, 2],
                ["2017-08-03 09:00", 3, -10],

                ["2017-08-03 10:00", 27, 35],
                ["2017-08-03 11:00", 27, 39],
                ["2017-08-03 12:00", 27, 39]
            ]
        };
    },
    methods: {
        initChart: function(id) {
            var myChart = echarts.init(document.getElementById(id));
            myChart.setOption({
                title: {
                    text: '温度'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: this.data.map((item) => {
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
                        data: this.data.map(function(item) {
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
                        data: this.data.map(function(item) {
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
    },
    mounted() {
        this.$nextTick(function() {
            this.initChart('templateChart')
        })
    }
}
</script>

<style lang="less">
.chart-div {
    .template-chart {
        width: 700px;
        height: 400px;
        margin-top: 20px;
    }
}
</style>
