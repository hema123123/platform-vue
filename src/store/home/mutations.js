import * as types from './mutation-types'

export const mutations = {
  [types.INIT_HOME_CHANNEL](state, obj) {
    state.channel = obj
  },
  [types.INIT_HOME_BANNER](state, obj) {
    state.bannerList = obj
  },
  [types.INIT_HOME_BRANDLIST](state, obj) {
    state.brandList = obj
  },
  [types.INIT_HOME_NEWGOODLIST](state, obj) {
    state.newGoodsList = obj
  },
  [types.INIT_HOME_HOTGOODLIST](state, obj) {
    state.hotGoodsList = obj
  },
  [types.INIT_HOME_CATEGORYLIST](state, obj) {
    state.categoryList = obj
  },
  [types.INIT_CATEGORY_CURRENT](state, obj) {
    state.currentCategory = obj
  },

}
