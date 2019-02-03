import axios from '@/libs/api.request'
import * as api from '@/config/api'
export const home = {
  // getHomeInfo: (params) => {
  //   return axios.request({
  //     // url: 'home/getHomeInfo',
  //     url: api.IndexUrlBanner,
  //     data: params,
  //     method: 'post'
  //   })
  // },
  getIndexUrlBanner: (params) => {
    return axios.request({
      url: api.IndexUrlBanner,
      data: params,
      method: 'post'
    })
  },
  getCatalogList: (params) => {
    return axios.request({
      url: api.CatalogList,
      data: params,
      method: 'post'
    })
  },
}
