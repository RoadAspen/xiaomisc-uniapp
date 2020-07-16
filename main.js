import Vue from 'vue'
import App from './App'
// 主要为初始化 vue 实例
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
