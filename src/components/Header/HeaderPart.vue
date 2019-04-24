<!--  -->
<template>
  <div class='header'>
    <div class="content-wrap">
      <div class="logo">
        <img
          width="64"
          height="64"
          :src='sellers.avatar'
          alt="商家logo"
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{sellers.name}}</span>
        </div>
        <div class="description">
          {{sellers.description}}/{{sellers.deliveryTime}}分钟送达
        </div>
        <div class="supports">
          <span v-if="sellers.supports">{{sellers.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="notice">
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    sellers: {
      type: Object
    }
  },
  data() {
    // 这里存放数据
    return {
      sellerData: this.sellers
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
  .header
    background-color rgba(7,17,27,0.5)
    color rgb(255,255,255)
    .content-wrap
      padding 24px 12px 18px 24px
      font-size 0
      .logo
        display inline-block
        & > img
          border-radius 2px
      .content
        display inline-block
        font-size 10px
        .title
          margin 2px 0 8px 16px
          .brand
            display inline-block
            width 30px
            height 18px
            bg-img('brand')
</style>
