<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-web-topic">
          <img src="./assets/img/raspberry-pi.png" alt="">
          <img src="./assets/img/header-text.png" alt="">
        </div>
        <div id="headerItems" class="header-items">
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .header {
    height: 70px;
    line-height: 70px;
    box-shadow: 0 1px 5px 1px #ccc;
    .header-web-topic {
      display: inline-block;
      img {
        height: 37px;
      }
    }
  }
}
</style>
