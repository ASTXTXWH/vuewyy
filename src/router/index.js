import Vue from 'vue'
import Router from 'vue-router'

import Content from "../components/Content.vue"
import Search from '../components/Search.vue'

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/list'  //重定向路径
    },
    {
      path: '/list',
      // name: 'HelloWorld',
      component: Content
    },
    {
      path: '/serch',
      // name: 'HelloWorld2',
      component: Search
    }
  ],
  // mode: "history"  
})
