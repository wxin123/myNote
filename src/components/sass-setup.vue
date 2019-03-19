<template>
  <div id="sass-setup" class="my-content">
    <div class="my-block">
      <h3>下载Ruby</h3>
      <div>
        <p>
          <a href="http://rubyinstaller.org/downloads" target="_blank">点击下载Ruby</a>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>安装sass</h3>
      <div>
        <p>
          <code><kbd>gem install sass</kbd><br/></code>
          <code><kbd>gem install compass</kbd><br/></code>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>编译格式</h3>
      <div>
        <p>sass test.scss test.css --style nested</p>
        <p>sass test.scss test.css --style expanded</p>
        <p>sass test.scss test.css --style compact</p>
        <p>sass test.scss test.css --style compressed</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sass-setup"
    }
</script>

<style scoped>

</style>
