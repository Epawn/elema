<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab_item">
        <router-link to="/Goods">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/Ratings">评论</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/Seller">商家</router-link>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header/HeaderPart';

export default {
  name: 'app',
  components: {
    'v-header': Header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab_item
      flex 1
      text-align center
      a
        text-decoration-line none
</style>
