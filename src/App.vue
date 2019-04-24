<template>
  <div>
    <v-header v-if="sellers" :sellers="sellers"></v-header>
    <div class="tab">
      <div class="tab_item">
        <router-link to="/Goods">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/Ratings">评论</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/Sellers">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header/HeaderPart';

export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  methods: {
    getData(url, obj) {
      this.$http
        .get(url)
        .then(res => {
          let result = res.data;
          if (result.errno === 0) {
            obj = result.data;
            console.log(obj);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    // this.getData('/api/sellers', this.sellers);
    this.$http
      .get('/api/sellers')
      .then(res => {
        let result = res.data;
        if (result.errno === 0) {
          console.log(result.data);
          this.sellers = result.data;
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  data() {
    return {
      sellers: {}
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  .tab_item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
