<template>
  <div class="category-content">
    <category-content-list
      :list="list.categoryList" @selectList="selectList"></category-content-list>
    <category-content-sub-list
      :sub-list="list.currentCategory"></category-content-sub-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import categoryContentList from './category-content-list'
  import categoryContentSubList from './category-content-sub-list'
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        currentList: null
      }
    },
    props: ['list'],
    computed: {
      ...mapState('category', ['currentCategory']),
      subList() {
        if (this.currentList) {
          return this.currentList
        } else {
          return this.list && this.list.length ? this.list[0] : {}
        }
      }
    },
    components: {
      categoryContentList,
      categoryContentSubList
    },
    methods: {
      ...mapActions('category', ['getCategoryCurrent']),
      selectList(o) {
        this.currentList = o
        console.log(this.$store)

        this.getCategoryCurrent(o.id)
      },
      // selectSubList(o) {
      //   this.$emit('selectSubList', o)
      // }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../static/less/index';

  .category-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
  }
</style>
