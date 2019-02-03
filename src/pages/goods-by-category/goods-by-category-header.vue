<template>
  <div class="goods-by-category-header" v-if="subCategory">
    <nav-header :title="subCategory.parentCategory.name" v-if="subCategory.parentCategory"></nav-header>
    <div class="header-category">
      <cube-scroll ref="scroll" direction="horizontal" :options="options">
        <div class="category-wrap" ref="scrollWrap">
          <div class="wrap-item"
               :key="key"
               :class="{'wrap-item-active': parseInt(item.id) === parseInt(currentSid)}"
               @click="changeSubCategory(item)"
               v-for="(item, key) in subCategory.brotherCategory">
            <span>{{item.name}}</span>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import navHeader from '../common/nav-header'

  export default {
    props: ['subCategory', 'sid'],
    data() {
      return {
        currentSid: this.sid,
      }
    },
    computed: {
      options() {

        let obj = {startX: 0}
        return obj
      }
    },
    components: {
      navHeader
    },
    methods: {
      changeSubCategory(o) {
        this.$emit('change-sub-category', o)
        this.currentSid = o.id
      }
    },
    created(){
      this.$nextTick(()=>{
        console.log(this.$refs.scrollWrap,this.$refs.scrollWrap.offsetWidth);
      })
    }
  }
</script>

<style lang="less">
  .goods-by-category-header {
    background: white;

    .header-category {
      .cube-scroll-content {
        display: inline-block;

        .category-wrap {
          white-space: nowrap;

          .wrap-item {
            display: inline-block;
            height: 1rem;
            padding: 0 0.2133rem;
            margin-left: .373rem;
            text-align: center;

            span {
              line-height: 1rem;
              color: #666;
            }

            &:last-child {
              margin-right: .373rem;
            }

            &-active {
              position: relative;

              span {
                color: rgb(132, 95, 63);
              }

              &::after {
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0;
                border-bottom: 0.08333rem solid rgb(132, 95, 63);
                transform: scaleY(0.5);
              }
            }
          }
        }
      }
    }
  }
</style>
