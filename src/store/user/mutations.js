import * as types from './mutation-types'

export const mutations = {
  [types.INIT_USER_INFO] (state, o) {
    state.profile.nickName = o.nickname || o.username
    state.profile.avatar = o.avatar
    state.profile.mobile = o.mobile
    // state.profile.age = o.age
  },
  [types.SET_LOGIN_STATE] (state, b) {
    state.isLogin = b
  }
}
