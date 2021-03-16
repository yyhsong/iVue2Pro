// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 导入Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

// 导入ECharts
import ECharts from 'vue-echarts/components/ECharts';

import router from './router';
import store from './store';
// import filter from './filter';
import App from './App';

Vue.use(ElementUI);

Vue.component('echart', ECharts);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
