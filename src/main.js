import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import '../src/assets/css/global.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import global from './function/global';
Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.global = global

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
