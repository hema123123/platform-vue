<template>
  <div class="category-content-sub-list" v-if="subList">
    <cube-scroll>
      <div class="sub-list-wrap">
        <div class="wrap-banner">
          <img class="ignore" :src="subList.wap_banner_url" alt="">
          <span class="ignore-txt">{{subList.front_name}}</span>
        </div>
        <div class="wrap-type">
          <span>{{subList.name}}分类</span>
        </div>
        <div class="wrap-list">
          <div class="list-item"
               :key="key"
               @click="selectSubList(subList, item)"
               v-for="(item, key) in subList.subCategoryList">
            <div class="item-pic" data-ratio="1:1">
              <img :src="item.wap_banner_url" alt="">
            </div>
            <div class="item-name">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['subList'],
    methods: {
      selectSubList(p, s) {
        this.$go(`/goods-by-category?pid=${p.id}&sid=${s.id}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../static/less/index';

  .category-content-sub-list {
    height: 100%;
    margin-left: 167px;
    overflow-y: hidden;

    .sub-list-wrap {
      padding: 32px;

      .wrap-banner {
        height: 191px;
        width: 100%;
        position: relative;

        .ignore {
          width: 100%;
          height: 100%;
        }

        .ignore-txt {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 14px;
        }
      }

      .wrap-type {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;

        span {
          position: relative;
          display: inline-block;
          padding: 0 10px;
          color: #666;

          &::before {
            position: absolute;
            content: '';
            top: 50%;
            left: -30px;
            transform: translateY(-50%);
            width: 30px;
            height: 1px;
            background: #666;
          }

          &::after {
            position: absolute;
            content: '';
            top: 50%;
            right: -30px;
            transform: translateY(-50%);
            width: 30px;
            height: 1px;
            background: #666;
          }
        }
      }

      .wrap-list {
        display: flex;
        flex-wrap: wrap;

        .list-item {
          flex-basis: calc(33.333% - 124px / 3);

          .item-pic {
            position: relative;
            height: 0;
            width: 100%;

            &[data-ratio="1:1"] {
              padding-top: calc(100% * 1 / 1);
            }

            * {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            }
          }

          .item-name {
            display: flex;
            margin-top: 10px;
            justify-content: center;

            span {
              text-align: center;
              color: #333;
            }
          }

          &:not(:nth-child(3n)) {
            margin: 0 62px 27px 0;
          }
        }
      }
    }
  }
</style>
