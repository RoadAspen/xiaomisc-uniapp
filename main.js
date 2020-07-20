import Vue from 'vue'
import App from './App'
// 主要为初始化 vue 实例
Vue.config.productionTip = false

// 引入全局组件
import divider from "@/components/common/divider.vue";

// 注册全局组件
Vue.component('divider',divider);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
