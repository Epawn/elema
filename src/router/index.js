import Vue from 'vue';
import Router from 'vue-router';
import Goods from '../components/Goods/Goods.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
});
