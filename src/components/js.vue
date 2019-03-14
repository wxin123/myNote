<template>
  <div id="html">
    <div class="my-flex-wrap">
      <ul class="my-side-list">
        <li><a href="/js/inherit">JS继承</a></li>
      </ul>
      <div class="my-flex-item">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "js"
    }
</script>

<style scoped>

</style>
