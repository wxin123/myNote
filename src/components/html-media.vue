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
          <kbd><span><</span>video controls autoplay loop muted poster preload="none|auto|metadata" width="" height="" <span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.mp4" type="video/mp4"<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.webm" type="video/webm"<span>></span></kbd><br/>
          <kbd><span><</span>/video<span>></span></kbd>
        </p>
      </div>
      <h4>属性</h4>
      <ol>
        <li><p><b>width,height</b>：视频的宽和高</p></li>
        <li><p><b>autoplay</b>：这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全</p></li>
        <li><p><b>loop</b>：这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。</p></li>
        <li><p><b>muted</b>：这个属性会导致媒体播放时，默认关闭声音。</p></li>
        <li><p><b>poster</b>：这个属性指向了一个图像的URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。</p></li>
        <li>
          <p><b>poster</b>：这个属性被用来缓冲较大的文件，有3个值可选。</p>
          <ul>
            <li>"none" ：不缓冲</li>
            <li>"auto" ：页面加载后缓存媒体文件</li>
            <li>"metadata" ：仅缓冲文件的元数据</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="my-block">
      <h3>音频</h3>
      <div>
        <p>
          <kbd><span><</span>audio controls<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.mp3" type="video/mp3"<span>></span></kbd><br/>
          <kbd><span><</span>src="rabbit320.ogg" type="video/ogg"<span>></span></kbd><br/>
          <kbd><span><</span>/audio<span>></span></kbd>
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
