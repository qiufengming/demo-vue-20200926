// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.css'
// 引入vuex-store
import store from './store/index';
// globalVariable.js 这样就可以在项目内任何地方都可以使用了。
import globalVariable from './script/globalVariable'
Vue.prototype.commonsVariable = globalVariable;
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

