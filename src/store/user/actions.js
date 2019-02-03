import axios from '@/libs/api.request'
import * as types from './mutation-types'
import * as api from '@/config/api'
import session from '@/libs/session'
import {UserValidate} from '@/validate'
import {toast} from '@/libs/cube-ui'

export const actions = {
  //登录
  login({commit, dispatch}, o) {
    const form = {
      mobile: o.mobile,
      password: o.password
    }
    let validate = new UserValidate('login').check(form)
    if (validate.success) {
      return axios.request({
        url: api.Login,
        data: form,
        method: 'post'
      }).then(res => {
        if (res.code == 500) {
          toast(res.msg, 'error')
        } else {
          toast('登录成功', 'correct')
          session.setToken(res.token)
          commit(types.SET_LOGIN_STATE, true)
          dispatch('getUserInfo')
        }
      }).catch(err => {
        toast(err.msg, 'warn')
        console.log("err:", err);
      })
    } else {
      toast(validate.errorMsg, 'warn')
    }
  },

  //微信登录
  async wechatLogin({dispatch}, s) {
    const form = {
      code: s
    }
    return await axios.request({
      url: 'user/wechatLogin',
      data: form,
      method: 'post'
    }).then(res => {
      // console.log("wechat login:", res.token)
      session.setToken(res)
      dispatch('getUserInfo')
    }).catch(err => {
      console.log(err);
      toast(err.msg, 'warn')
    })
  },

  //获取用户信息
  getUserInfo({commit}) {
    if (session.isLogin()) {
      return axios.request({
        url: api.UserGetUserInfo,
        method: 'post'
      }).then(res => {
        if (res) {
          commit(types.INIT_USER_INFO, res)
          commit(types.SET_LOGIN_STATE, true)
        }
      }).catch(err => {
        console.log(err);
        toast(err.msg, 'warn')
      })
    }
  },

  //更新用户信息
  async updateUserInfo({commit}, o) {
    return await axios.request({
      url: api.UserUpdateUserInfo,
      data: o,
      method: 'post'
    }).then(res => {
      console.log("获取用户信息成功：", res);
      toast('修改成功', 'correct')
      commit(types.INIT_USER_INFO, res)
      commit(types.SET_LOGIN_STATE, true)
    }).catch(err => {
      console.log("获取用户信息失败：", err);
      // toast(err, 'warn')
    })
  },

  // 退出登录
  async logout({commit}) {
    session.clearToken()
    toast('退出成功', 'correct')
    window.location.href = '/'
  },


}
