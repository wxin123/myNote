<template>
  <div id="js-inherit" class="my-content">
    <div class="my-block">
      <h3>1、组合继承</h3>
      <div class="block-code">
        <code>function Super() {</code><br/>
        <code class="space2">//属性</code><br/>
        <code class="space2">this.sex = '男' ;</code><br/>
        <code class="space2">this.age = 12;</code><br/>
        <code>}</code><br/>
        <code>//方法</code><br/>
        <code>Super.prototype.eat = function () {</code><br/>
        <code class="space2">console.log('eat');</code><br/>
        <code>};</code><br/>
        <div class="space-line"></div>
        <code>function Sub(sex,age) {</code><br/>
        <code class="space2">//继承属性</code><br/>
        <code class="space2">Sub.call(this,sex,age);</code><br/>
        <code class="space2">//自有属性</code><br/>
        <code class="space2">this.professional = '医生';</code><br/>
        <code>}</code><br/>
        <code>//继承方法</code><br/>
        <code>Sub.prototype = new Super();</code><br/>
        <code style="color: #f00">Sub.prototype.constructor = SubType; </code><br/>
        <code>//自有方法</code><br/>
        <code>Sub.prototype.run = function () {</code><br/>
        <code class="space2">console.log('run');</code><br/>
        <code>};</code><br/>
      </div>
    </div>
    <div class="my-block">
      <h3>2、寄生组合式继承</h3>
      <div class="block-code">
        <code>//原型式继承</code><br/>
        <code>function object(o) {</code><br/>
        <code class="space2">function F() {}</code><br/>
        <code class="space2">F.prototype = o;</code><br/>
        <code class="space2">return new F();</code><br/>
        <code>}</code><br/>
        <div class="space-line"></div>
        <code>//继承原型</code><br/>
        <code>function inheritPrototype(subType, superType) {</code><br/>
        <code class="space2">var prototype = object(superType.prototype); //创建对象</code><br/>
        <code class="space2">prototype.constructor = subType;//增强对象</code><br/>
        <code class="space2">subType.prototype = prototype;//指定对象</code><br/>
        <code>}</code><br/>
        <div class="space-line"></div>
        <code>function SuperType(name) {</code><br/>
        <code class="space2">//属性</code><br/>
        <code class="space2">this.name = name;</code><br/>
        <code class="space2">this.color = ['red', 'blue', 'green'];</code><br/>
        <code>}</code><br/>
        <code>//方法</code><br/>
        <code>SuperType.prototype.sayName = function () {</code><br/>
        <code class="space2">alert(this.name);</code><br/>
        <code>};</code><br/>
        <code>function SubType(name, age) {</code><br/>
        <code class="space2">//继承属性</code><br/>
        <code class="space2">SuperType.call(this, name);</code><br/>
        <code class="space2">//自有属性</code><br/>
        <code class="space2">this.age = age;</code><br/>
        <code>}</code><br/>
        <code>//继承父类</code><br/>
        <code style="color: #f00">inheritPrototype(SubType , SuperType);</code><br/>
        <code>//继承方法</code><br/>
        <code>SubType.prototype.sayAge = function () {</code><br/>
        <code class="space2">alert(this.age);</code><br/>
        <code>}</code><br/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "js-inherit"
    }
</script>
<script>

</script>

<style scoped>

</style>
