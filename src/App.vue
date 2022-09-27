<template>

  <div id="app">
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <router-link class="nav-link active" to="/index">首頁</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/page">商品</router-link>
        </li>
    
    </ul>
    <!-- <img src="./assets/logo.png"> -->

    <router-view name="menu"></router-view>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
