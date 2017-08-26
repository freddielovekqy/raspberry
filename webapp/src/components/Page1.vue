<template>
    <div>
        <div>this is page 1;</div>
        <router-link to="/page1/profile">Go to profile1</router-link>
        <router-link to="/page1/profile2">Go to profile2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'page1'
} 
</script>

<style>

</style>

