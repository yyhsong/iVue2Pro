// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import VueECharts from 'vue-echarts/components/ECharts';
import VueCookies from 'vue-cookies';
//import 'echarts/lib/chart/bar';
//import 'echarts/lib/chart/line';
//import 'echarts/lib/chart/pie';
//import 'echarts/lib/chart/map';
//import 'echarts/lib/chart/radar';
//import 'echarts/lib/chart/scatter';
//import 'echarts/lib/chart/effectScatter';
//import 'echarts/lib/chart/graph';
//import 'echarts/lib/component/tooltip';
//import 'echarts/lib/component/polar';
//import 'echarts/lib/component/geo';
//import 'echarts/lib/component/legend';
//import 'echarts/lib/component/title';
//import 'echarts/lib/component/visualMap';
//import 'echarts/lib/component/markLine';
//import 'echarts/lib/component/markPoint';
//import 'echarts/lib/component/dataset';
//import 'echarts/map/js/world';
//import 'zrender/lib/svg/svg';
import router from './router';
import store from './store';
import filter from './filter';
import App from './App';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.component('v-chart', VueECharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
