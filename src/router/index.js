import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Html from '@/components/html'
import HtmlBasic from '@/components/html-basic'
import HtmlMedia from '@/components/html-media'
import Js from '@/components/js'
import JsInherit from '@/components/js-inherit'
import Css from '@/components/css'
import Sass from '@/components/sass'
import SassSetup from '@/components/Sass-setup'
import SassVariable from '@/components/Sass-variable'
import SassSelector from '@/components/Sass-selector'
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
      ]
    },
    {path:'/css',name:'Css',component:Css},
    {path:'/css/sass',name:'Sass',component:Sass,children:[
        {path:'setup',name:'SassSetup',component:SassSetup},
        {path:'variable',name:'SassVariable',component:SassVariable},
        {path:'selector',name:'SassSelector',component:SassSelector}
      ]
    },
    {path: '/hello',name: 'HelloWorld',component: HelloWorld}
  ]
})
