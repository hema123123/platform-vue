<template>
  <page
    :better-scroll="true"
    ref="scroll">
    <home-header
      slot="top"
      :currentNav="0"
      :navList="navList"
      @change-nav="changeNav"></home-header>
    <home-banner :list="bannerList"></home-banner>
    <home-direct-supply :list="brandList"></home-direct-supply>
    <home-release :list="newGoodsList"></home-release>
    <home-popular :list="hotGoodsList"></home-popular>
    <home-flash></home-flash>
    <home-sale></home-sale>
    <home-section
      :key="key"
      :title="item.name"
      :tag="item.id"
      :list="item.goodsList"
      v-for="(item, key) in categoryList"></home-section>
    <nav-footer></nav-footer>
  </page>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapGetters, mapActions} from 'vuex'
  import homeHeader from './home-header'
  import homeBanner from './home-banner'
  import homeDirectSupply from './home-direct-supply'
  import homeRelease from './home-release'
  import homePopular from './home-popular'
  import homeFlash from './home-flash'
  import homeSale from './home-sale'
  import homeSection from './home-section'
  import navFooter from '../common/nav-footer'

  export default {
    computed: {
      ...mapState('home', ['bannerList', 'brandList', 'newGoodsList', 'hotGoodsList', 'categoryList']),
      ...mapGetters('home', ['navList'])
    },
    components: {
      homeHeader,
      homeBanner,
      homeDirectSupply,
      homeRelease,
      homePopular,
      homeFlash,
      homeSale,
      homeSection,
      navFooter
    },
    methods: {
      ...mapActions('home', ['getHomeInfo']),
      changeNav(o) {
        o.id == 0 ? this.$refs.scroll.scrollTo([0, 0]) : this.$refs.scroll.scrollTo(`[data-tag=${o.name}]`)
      }
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
