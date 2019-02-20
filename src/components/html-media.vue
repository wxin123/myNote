<template>
  <div id="html-media" class="my-content">
    <div class="my-block">
      <h3>图片</h3>
      <div>
        <p><kbd><span><</span>img src="" alt="" title="" <span>/></span></kbd></p>
      </div>
    </div>
    <div class="my-block">
      <h3>视频</h3>
      <div>
        <p>
          <kbd><span><</span>video controls autoplay loop muted width="" height="" <span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.mp4" type="video/mp4"<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.webm" type="video/webm"<span>></span></kbd><br/>
          <kbd><span><</span>/video<span>></span></kbd>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>视频</h3>
      <div>
        <p>
          <kbd><span><</span>video controls<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.mp4" type="video/mp4"<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.webm" type="video/webm"<span>></span></kbd><br/>
          <kbd><span><</span>/video<span>></span></kbd>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "html-media"
    }
</script>

<style scoped>

</style>
