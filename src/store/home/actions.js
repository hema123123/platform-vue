import axios from '@/libs/api.request'
import * as types from './mutation-types'
import * as api from '@/config/api'

export const actions = {
  async getHomeInfo({commit}, params) {
    await axios.request({
      url: api.IndexUrlBanner,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_BANNER, res.banner)
    })

    await axios.request({
      url: api.IndexUrlChannel,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_CHANNEL, res.channel)
    })

    await axios.request({
      url: api.IndexUrlBrand,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_BRANDLIST, res.brandList)
    })

    await axios.request({
      url: api.IndexUrlNewGoods,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_NEWGOODLIST, res.newGoodsList)
    })

    await axios.request({
      url: api.IndexUrlHotGoods,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_HOTGOODLIST, res.hotGoodsList)
    })

    await axios.request({
      url: api.IndexUrlCategory,
      data: params,
      method: 'post'
    }).then(res => {
      commit(types.INIT_HOME_CATEGORYLIST, res.categoryList)
    })
  }
}
