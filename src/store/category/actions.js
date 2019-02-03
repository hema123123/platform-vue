import axios from '@/libs/api.request'
import * as types from './mutation-types'
import * as api from '@/config/api'

export const actions = {
  //一级菜单：获取菜单列表及当前选中菜单
  async getCategory({commit, dispatch}, params) {
    return await axios.request({
      url: api.CatalogList,
      data: params ? {id: params} : '',
      method: 'post'
    }).then(res => {
      commit(types.INIT_CATEGORY, res)
    })
  },

  //一级菜单：获取当前选中菜单
  async getCategoryCurrent({commit}, params) {
    return await axios.request({
      url: api.CatalogCurrent,
      data: {id: params},
      method: 'post'
    }).then(res => {
      commit(types.INIT_CATEGORY_CURRENT, res.currentCategory)
    })
  },

//二级菜单：获取当前选中菜单
  async getGoodsCategory({commit}, params) {
    return await axios.request({
      url: api.GoodsCategory,
      data: {id: params},
      method: 'post'
    }).then(res => {
      commit(types.INIT_SUB_CATEGORY, res)
    })
  },

//产品列表
  async getGoodsList({commit}, params) {
    return await axios.request({
      url: api.GoodsList,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_GOODS_BY_CATEGORY, res)
    })
  }

}
