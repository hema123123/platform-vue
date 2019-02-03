<template>
  <page :better-scroll="true" page-background="white" ref="scroll" @on-pulling-down="onPullingDown" :opt="opt">
    <goods-by-category-header
      slot="top"
      :sid="sid"
      :subCategory="subCategory"
      @change-sub-category="changeSubCategory"></goods-by-category-header>
    <goods-by-category-list :list="goodsByCategory.goodsList" :num="goodsByCategory.numsPerPage"></goods-by-category-list>

  </page>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'
  import goodsByCategoryHeader from './goods-by-category-header'
  import goodsByCategoryList from './goods-by-category-list'

  export default {
    data() {
      return {
        pid: this.$route.query.pid,
        sid: this.$route.query.sid
      }
    },
    computed: {
      ...mapState('category', ['subCategory', 'goodsByCategory'])
    },
    components: {
      goodsByCategoryHeader,
      goodsByCategoryList
    },
    data() {
      return {
        page: 1,
        size: 10,
        opt: {
          pullDownRefresh: {
            threshold: 60,
            stopTime: 1000,
            txt: '更新成功'
          }
        }
      }
    },
    methods: {
      ...mapActions('category', ['getGoodsCategory', 'getGoodsList']),
      changeSubCategory(o) {
        console.log("改变菜单", o);
        this.sid = o.id
        this.getGoodsList({
          categoryId: this.sid,
          page: this.page,
          size: 10
        })
      },
      init() {
        this.pid = this.$route.query.pid
        this.sid = this.$route.query.sid
        this.getGoodsCategory(this.sid)
        this.getGoodsList({
          categoryId: this.sid,
          page: this.page,
          size: 10
        })
      },
      onPullingDown() {
        this.page = 1
        this.size = 10
        this.getGoodsList({
          categoryId: this.sid,
          page: this.page,
          size: this.size
        }).then(res => {
          this.$refs.scroll.forceUpdate()
        })
      },
    },
    created() {
      this.init()
    }
  }
</script>
