import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Html from '@/components/html'
import HtmlBasic from '@/components/html-basic'
import HtmlMedia from '@/components/html-media'
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
    {path: '/hello',name: 'HelloWorld',component: HelloWorld}
  ]
})
