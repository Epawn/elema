// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
// import router from './router';

// // 开启debug模式
// Vue.config.debug = true;

// // 关闭生产模式下给出的提示
// Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   // el: '#app',
//   router,
//   template: '<App/>',
//   components: {
//     App
//   }
// }).$mount('#app'); // 手动挂载，#app

import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import 'common/stylus/index.styl';
Vue.prototype.$http = axios;
Vue.use(router);
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app');
