import axios from '@/libs/api.request'
import * as types from './mutation-types'
import * as api from '@/config/api'

export const actions = {
  async getSearchIndex ({commit},o) {
    return await axios.request({
      url: api.SearchIndex,
      data: o,
      method: 'post'
    }).then(res=>{
      console.log("search:",res);
      commit(types.SEARCH_INDEX,res)
    }).catch(err=>{
      console.log("err:",err)
    })
  },
  async getGoodsFilter ({commit},o) {
    return await axios.request({
      url: api.GoodsFilter,
      data: o,
      method: 'post'
    }).then(res=>{
      console.log("SearchHelper:",res);
      commit(types.SEARCH_INDEX,res)
    }).catch(err=>{
      console.log("err:",err)
    })
  },
  async getSearchListBykeyword () {
    // let res = await api.search.getSearchListBykeyword()
    // if (res.success) {
    //   return res.data
    // }
  }
}
