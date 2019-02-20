<template>
  <div id="html-basic" class="my-content">
    <div class="my-block">
      <h3>什么是HTML</h3>
      <div>
        <p>HTML 不是一门编程语言，而是一种用于定义内容结构的标记语言。HTML 由一系列的元素（elements）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。 一对标签（ tags）可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等</p>
      </div>
    </div>
    <div class="my-block">
      <h3>元素</h3>
      <ol>
        <li >
          <h4>元素的组成</h4>
          <p>元素由 <b>标签（tag）</b>、<b>内容（content）</b>、<b>属性（attribute）</b>组成，例如：&lt;p class="attribute"&gt;这是内容&lt;/p&gt;</p>
        </li>
        <li>
          <h4>空元素</h4>
          <p>空元素是没有content的元素，例如：&lt;img src='' alt='' /&gt;</p>
        </li>
      </ol>
    </div>
    <div class="my-block">
      <h3>HTML文档详解</h3>
      <p>一个HTML页面包含以下</p>
      <ul>
        <li>
          <p>
            <span><span><</span>!DOCTYPE html<span>></span></span>：文档类型。
          </p>
        </li>
        <li>
          <p>
            <span><span><</span>html<span>></span></span><span><span><</span>/html<span>></span></span>：html元素。这个元素包含了整个页面的内容，有时也被称作根元素。
          </p>
        </li>
        <li>
          <p>
            <span><span><</span>head<span>></span></span><span><span><</span>/head<span>></span></span>：head元素。这个元素放置的内容不是展现给用户的，而是包含例如面向搜索引擎的搜索关键字（keywords）、页面描述、CSS 样式表和字符编码声明等。
          </p>
        </li>
        <li>
          <p>
            <span><</span>meta charset="utf-8"<span>/></span>：指定字符集。这个元素指定了当前文档使用 UTF-8 字符编码 ，UTF-8 包括绝大多数人类已知语言的字符。基本上 UTF-8 可以处理任何文本内容，还可以避免以后出现某些问题，我们没有任何理由再选用其他编码。
          </p>
        </li>
        <li>
          <p>
            <span><span><</span>title<span>></span></span><span><span><</span>/title<span>></span></span>：标题。这个元素设置页面的标题，显示在浏览器标签页上，同时作为收藏网页的描述文字。
          </p>
        </li>
        <li>
          <p>
            <span><span><</span>body<span>></span></span><span><span><</span>/body<span>></span></span>：内容。这个元素包含期望让用户在访问页面时看到的内容，可以是文本、图像、视频、游戏、可播放的音轨或其他内容。
          </p>
        </li>
      </ul>
    </div>
    <div class="my-block">
      <h3>常用元素</h3>
      <ol>
        <li>
          <h4>图片：</h4>
          <p><span><</span>img src='' alt=''<span>></span></p>
        </li>
        <li>
          <h4>标题：</h4>
          <p><span><</span>h1<span>></span><span><</span>h1<span>/></span></p>
          <p><span><</span>h2<span>></span><span><</span>h2<span>/></span></p>
          <p><span><</span>h3<span>></span><span><</span>h3<span>/></span></p>
          <p><span><</span>h4<span>></span><span><</span>h4<span>/></span></p>
          <p><span><</span>h5<span>></span><span><</span>h5<span>/></span></p>
          <p><span><</span>h6<span>></span><span><</span>h6<span>/></span></p>
        </li>
        <li>
          <h4>段落：</h4>
          <p><span><</span>p<span>></span><span><</span>p<span>/></span></p>
        </li>
        <li>
          <h4>列表：</h4>
          <p><span><</span>ol<span>></span><span><</span>ol<span>/></span></p>
          <p><span><</span>ul<span>></span><span><</span>ul<span>/></span></p>
          <p><span><</span>li<span>></span><span><</span>li<span>/></span></p>
        </li>
        <li>
          <h4>描述列表：</h4>
          <p><span><</span>dl<span>></span><span><</span>dl<span>/></span></p>
          <p><span><</span>dt<span>></span><span><</span>dt<span>/></span></p>
          <p><span><</span>dd<span>></span><span><</span>dd<span>/></span></p>
        </li>
        <li>
          <h4>链接：</h4>
          <p><span><</span>a<span>></span><span><</span>a<span>/></span></p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
    export default {
        name: "html-basic"
    }
</script>

<style scoped>

</style>
