<template>
  <div id="app">
    <header class="my-header">
      <div class="container">
        <ul class="header-list my-flex-wrap">
          <li class="header-list-item"><a href="/html">HTML</a></li>
          <li class="header-list-item"><a href="/js">JAVASCRIPT</a></li>
          <li class="header-list-item"><a href="/css">CSS</a></li>
          <li class="header-list-item"><a href="/python">PYTHON</a></li>
        </ul>
      </div>
    </header>
    <div class="my-content">
      <div class="container">
        <p class="top"><a href="javascript:history.go(-1)">返回</a></p>
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
