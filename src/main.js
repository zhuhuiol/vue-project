// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import App from './App';

import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;
Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store.store, // 相当于store: store,注册后，子组件可以通过this.$store访问
  router,
  components: { App },
  template: '<App/>',
});
