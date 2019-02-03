<template>
  <div data-tag="recommend" class="home-banner">
    <cube-slide :data="list">
      <cube-slide-item v-for="(item, index) in list" :key="index">
        <div style="height: 5.3333rem">
          <img :src="item.image_url" alt="">
        </div>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['list']
  }
</script>

<style lang="less" scoped>
  /*.cube-slide-item>a, .cube-slide-item img{*/
    /*width: 100%;*/
    /*height: auto;*/
  /*}*/
  .home-banner {
    margin-bottom: 20px;
    background: white;
  }
</style>
