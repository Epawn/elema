import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/Goods/Goods.vue';
import Ratings from '@/components/Ratings/Ratings.vue';
import Sellers from '@/components/Seller/Sellers.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }, {
      path: '/sellers',
      name: 'sellers',
      component: Sellers
    }, {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
});
