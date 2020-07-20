import Vue from 'vue'
import App from './App'
// 主要为初始化 vue 实例
Vue.config.productionTip = false

// 引入全局组件
import divider from "@/components/common/divider.vue";
import card from "@/components/common/card.vue";
// import price from "@/components/common/price.vue";

// 注册全局组件
Vue.component('divider',divider);
Vue.component('card',card);
// Vue.component('price',price);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
