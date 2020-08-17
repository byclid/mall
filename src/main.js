import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
// Vue.config.productionTip = false 开启生产模式消息提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
