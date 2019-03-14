<template>
  <div id="app">
    <header class="my-header">
      <div class="container">
        <ul class="header-list my-flex-wrap">
          <li class="header-list-item"><a href="/html">HTML</a></li>
          <li class="header-list-item"><a href="/js">JAVASCRIPT</a></li>
          <li class="header-list-item"></li>
          <li class="header-list-item"></li>
        </ul>
      </div>
    </header>
    <div class="my-content">
      <div class="container">
        <router-view/>
      </div>
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
    margin: 0;
    padding: 0;
  }

</style>
