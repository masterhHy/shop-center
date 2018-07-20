// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import Home from './components/HelloFromVux'
import axios from './axios/axios_config.js'
import store from './vuex'
import Vuex from 'vuex'

axios.init(Vue);
Vue.use(Vuex)
require("./common/common.css")

//全局注册vux常用组件
import { ToastPlugin,XDialog,XButton,XHeader,LoadingPlugin,Msg  } from 'vux'


Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.component('x-dialog', XDialog)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('msg', Msg)

XHeader.props.leftOptions={
	type:Object,
	default () {
    return {
      showBack:true,
      backText:"",
      preventGoBack:false
    }
  }
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
