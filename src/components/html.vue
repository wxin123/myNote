<template>
    <div id="html">
      <div class="my-flex-wrap">
        <ul class="my-side-list">
          <li><a href="/html/basic">HTML基础</a></li>
          <li><a href="/html/media">HTML-媒体</a></li>
        </ul>
        <div class="my-flex-item">
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "html"
    }
</script>

<style scoped>

</style>
