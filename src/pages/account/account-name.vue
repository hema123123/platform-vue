<template>
  <page page-background="white" :better-scroll="true">
    <div class="page-header border-1px-bottom" slot="top">
      <div class="header-left" @click="$back">
        <i class="iconfont">&#xe68c;</i>
      </div>
      <h3>修改昵称</h3>
      <div class="header-right" @click="updateNickName">
        <span>保存</span>
      </div>
    </div>
    <div class="account-name">
      <m-input type="text" placeholder="昵称" v-model="nickName"></m-input>
      <p>昵称仅限中文，特殊字符_，英文</p>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        nickName: this.$store.state.user.profile.nickName,
      }
    },
    computed: {
      ...mapState('user', ['profile'])
    },
    methods: {
      ...mapActions('user', ['updateUserInfo', 'getUserInfo']),
      updateNickName() {
        let obj = {
          nickname: this.nickName,
        }
        if (obj.nickName == this.profile.nickName) {
          this.$toast('请勿提交重复数据', 'warn')
          return false
        }
        this.updateUserInfo(obj).then(res => {
          let _this = this
          setTimeout(function () {
            _this.$back()
          }, 1000)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .page-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    background: white;

    .header-left {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
    }

    h3 {
      font-size: 30px;
      font-weight: 600;
      color: #333;
    }

    .header-right {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);

      span {
        color: #666;
      }
    }
  }

  .account-name {
    padding: 30px;

    p {
      height: 50px;
      line-height: 50px;
      color: #999;
    }
  }
</style>
