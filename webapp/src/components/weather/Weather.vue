<template>
    <div class="content-div container">
        <div class="current-info">
            <current-weather-sim-info location="inside"></current-weather-sim-info>
            <current-weather-sim-info location="outside"></current-weather-sim-info>
        </div>
    </div>
</template>

<script>
import CurrentWeatherSimInfo from '@/components/weather/CurrentWeatherSimInfo'

export default {
    data () {
        return {
            location: 'inside'
        }
    },
    components: {
        CurrentWeatherSimInfo
    }
}
</script>

<style lang="less">
.content-div {
    margin-top: 15px;
}
</style>
