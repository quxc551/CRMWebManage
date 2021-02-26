import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 设置页面标题
document.title = "客户关系管理系统"
