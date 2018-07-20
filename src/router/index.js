import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import home from '@/pages/home/home.vue'
import shoplist from '@/pages/home/shoplist.vue'
import store from '../vuex'

import chat from '@/components/HelloWorld.vue'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
      	path: '/',
	      name: 'home',
	      component: home,
      },{
      	path: '/shoplist',
	      name: 'shoplist',
	      component: shoplist,
      },{
      	path: '/chat',
	      name: 'chat',
	      component: chat,
      }]
    }
  ]
})
// 设置全局钩子
router.beforeEach(function (to, from, next) {
  store.commit("pageLoading", {isLoading: true})
  store.commit("pageTitle", {pageTitle: ""})
  next()
})

router.afterEach(function (to) {
	store.commit("pageLoading", {isLoading: false})
  
})
export default router