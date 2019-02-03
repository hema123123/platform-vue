<template>
  <div class="goods-by-category-list">
    <div class="list-item"
         :key="key"
         v-for="(item, key) in list" v-if="num">
      <goods-by-category-list-goods :info="item"></goods-by-category-list-goods>
    </div>
    <orderNone v-if="!num" text="目前没有商品哦~"></orderNone>
  </div>
</template>

<script type="text/ecmascript-6">
  import goodsByCategoryListGoods from './common/goods-by-category-list-goods'
  import orderNone from '@/pages/order/common/order-none'

  export default {
    props: ['list', 'num'],
    components: {
      goodsByCategoryListGoods,
      orderNone
    }
  }
</script>

<style lang="less" scoped>
  .goods-by-category-list {
    display: flex;
    flex-wrap: wrap;
    padding: 28px;

    .list-item {
      flex-basis: calc(50% - 20px / 2);
      width: 0;
      padding-bottom: 20px;

      &:nth-child(2n) {
        padding-left: 20px;
      }
    }
  }
</style>
