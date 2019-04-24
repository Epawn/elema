import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/Goods/Goods.vue';
import Ratings from '@/components/Ratings/Ratings.vue';
import Sellers from '@/components/Seller/Sellers.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/', redirect: '/Goods'
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    }, {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
});
