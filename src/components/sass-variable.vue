<template>
  <div id="sass-variable" class="my-content">
    <div class="my-block">
      <h3>声明变量</h3>
      <div>
        <p>$highlight-color: #F90;</p>
        <p>$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;</p>
      </div>
      <h4 >注：</h4>
      <ol>
        <li><p>与CSS属性不同，变量可以在css规则块定义之外存在。当变量定义在css规则块内，那么该变量只能在此规则块内使用。</p></li>
      </ol>
    </div>
    <div class="my-block">
      <h3>引用变量</h3>
      <div>
        <p>
          <code><kbd>$highlight-color: #F90;</kbd><br/></code>
          <code><kbd>.selected {</kbd><br/></code>
          <code class="space4"><kbd>border: 1px solid $highlight-color;</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
        </p>
        <p>
          <code><kbd>$highlight-color: #F90;</kbd><br/></code>
          <code><kbd>$highlight-border: 1px solid $highlight-color;</kbd><br/></code>
          <code><kbd>.selected {</kbd><br/></code>
          <code class="space4"><kbd>border: $highlight-border;</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sass-variable"
    }
</script>

<style scoped>

</style>
