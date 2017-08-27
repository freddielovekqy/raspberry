<template>
    <div class="content-div container">
        <div class="current-info">
            <current-weather-sim-info location="inside"></current-weather-sim-info>
            <current-weather-sim-info location="outside"></current-weather-sim-info>
        </div>
        <weather-chart></weather-chart>
    </div>
</template>

<script>
import CurrentWeatherSimInfo from '@/components/weather/CurrentWeatherSimInfo'
import WeatherChart from '@/components/weather/WeatherChart'

export default {
    data () {
        return {
            location: 'inside'
        }
    },
    components: {
        CurrentWeatherSimInfo,
        WeatherChart
    }
}
</script>

<style lang="less">
.content-div {
    margin-top: 15px;
}
</style>
