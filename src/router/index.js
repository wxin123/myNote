import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Html from '@/components/html'
import HtmlBasic from '@/components/html-basic'
import HtmlMedia from '@/components/html-media'
import Js from '@/components/js'
import JsInherit from '@/components/js-inherit'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'index',component: Index},
    {path: '/html',name: 'html',component: Html,children:[
        {path:'basic',name:'HtmlBasic',component:HtmlBasic},
        {path:'media',name:'HtmlMedia',component:HtmlMedia}
      ]
    },
    {path: '/js',name: 'Js',component: Js,children:[
        {path:'inherit',name:'JsInherit',component:JsInherit}
      ]},
    {path: '/hello',name: 'HelloWorld',component: HelloWorld}
  ]
})
