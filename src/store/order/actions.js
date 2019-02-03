// import * as types from './mutation-types'
// import {api} from '@/service/api'


import axios from '@/libs/api.request'
import * as types from './mutation-types'
import * as api from '@/config/api'
import {toast} from '@/libs/cube-ui'

export const actions = {
  async getIdentifyingCode({commit, state}, o) {
    // if (state.identifyingCode.time !== 60) {
    //   toast('请稍后重试', 'correct')
    // } else {
    //   let res = await api.common.getIdentifyingCode()
    //   if (res.success) {
    //     toast('发送验证码成功', 'correct')
    //     const timer = setInterval(() => {
    //       if (state.identifyingCode.time === 0) {
    //         commit(types.CLEAR_IDENTIFY_TIMER)
    //       } else {
    //         commit(types.UPDATE_IDENTIFY_TIMER, state.identifyingCode.time - 1)
    //       }
    //     }, 1000)
    //     commit(types.INIT_IDENTIFY_TIMER, timer)
    //   } else {
    //     toast(res.msg, 'warn')
    //   }
    // }
  },
  // 订单列表
  async getUserOrder({commit}, o) {
    return await axios.request({
      url: api.OrderList,
      data: o,
      method: 'post'
    }).then(res => {
      console.log("OrderList:", res);
    }).catch(err => {
      console.log(err);
      toast(err, 'warn')
    })
  },

}
