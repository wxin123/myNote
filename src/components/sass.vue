<template>
  <div id="sass">
    <div class="my-flex-wrap">
      <ul class="my-side-list">
        <li><a href="/css/sass/setup">安装</a></li>
        <li><a href="/css/sass/variable">变量</a></li>
        <li><a href="/css/sass/selector">选择器</a></li>
      </ul>
      <div class="my-flex-item">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sass"
    }
</script>

<style scoped>

</style>
