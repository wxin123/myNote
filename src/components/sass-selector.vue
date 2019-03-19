<template>
  <div id="sass-setup" class="my-content">
    <div class="my-block">
      <h3>父选择器&</h3>
      <div>
        <p>
          <code><kbd>article a {</kbd><br/></code>
          <code class="space4"><kbd>color: blue;</kbd><br/></code>
          <code class="space4"><kbd>&:hover { color: red }</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>article a { color: blue }</kbd><br/></code>
          <code><kbd>article a:hover { color: red }</kbd><br/></code>
        </p>
        <p>
          <code><kbd>#content aside {</kbd><br/></code>
          <code class="space4"><kbd>color: red;</kbd><br/></code>
          <code class="space4"><kbd>body.ie & { color: green }</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>#content aside {color: red};</kbd><br/></code>
          <code><kbd>body.ie #content aside { color: green }</kbd><br/></code>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>引用变量</h3>
      <div>
        <p>
          <code><kbd>.container {</kbd><br/></code>
          <code><kbd>h1, h2, h3 {margin-bottom: .8em}</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>.container h1, .container h2, .container h3 { margin-bottom: .8em }</kbd><br/></code>
        </p>
        <p>
          <code><kbd>nav, aside {</kbd><br/></code>
          <code class="space4"><kbd>a {color: blue}</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>nav a, aside a {color: blue}</kbd><br/></code>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>子组合选择器和同层组合选择器：>、+和~</h3>
      <div>
        <p>
          <code><kbd>article {</kbd><br/></code>
          <code class="space4"><kbd>~ article { border-top: 1px dashed #ccc }</kbd><br/></code>
          <code class="space4"><kbd>> section { background: #eee }</kbd><br/></code>
          <code class="space4"><kbd>dl > {</kbd><br/></code>
          <code class="space8"><kbd>dt { color: #333 }</kbd><br/></code>
          <code class="space8"><kbd>dd { color: #555 }</kbd><br/></code>
          <code class="space4"><kbd>}</kbd><br/></code>
          <code class="space4"><kbd>nav + & { margin-top: 0 }</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>article ~ article { border-top: 1px dashed #ccc }</kbd><br/></code>
          <code><kbd>article > footer { background: #eee }</kbd><br/></code>
          <code><kbd>article dl > dt { color: #333 }</kbd><br/></code>
          <code><kbd>article dl > dd { color: #555 }</kbd><br/></code>
          <code><kbd>nav + article { margin-top: 0 }</kbd><br/></code>
        </p>
      </div>
    </div>
    <div class="my-block">
      <h3>嵌套属性</h3>
      <div>
        <p>
          <code><kbd>nav {</kbd><br/></code>
          <code class="space2"><kbd>border: {</kbd><br/></code>
          <code class="space4"><kbd>style: solid;</kbd><br/></code>
          <code class="space4"><kbd>width: 1px;</kbd><br/></code>
          <code class="space4"><kbd>color: #ccc;</kbd><br/></code>
          <code class="space2"><kbd>}</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>nav {</kbd><br/></code>
          <code class="space2"><kbd>  border-style: solid;</kbd><br/></code>
          <code class="space2"><kbd>  border-width: 1px;</kbd><br/></code>
          <code class="space2"><kbd>  border-color: #ccc;</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>

        </p>
        <p>
          <code><kbd>nav {</kbd><br/></code>
          <code class="space2"><kbd>  border: 1px solid #ccc {</kbd><br/></code>
          <code class="space4"><kbd>  left: 0px;</kbd><br/></code>
          <code class="space4"><kbd>  right: 0px;</kbd><br/></code>
          <code class="space2"><kbd>  }</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
          <code><kbd>//编译后</kbd><br/></code>
          <code><kbd>nav {</kbd><br/></code>
          <code class="space2"><kbd>  border: 1px solid #ccc;</kbd><br/></code>
          <code class="space2"><kbd>  border-left: 0px;</kbd><br/></code>
          <code class="space2"><kbd>  border-right: 0px;</kbd><br/></code>
          <code><kbd>}</kbd><br/></code>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sass-selector"
    }
</script>

<style scoped>

</style>
