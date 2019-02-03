import Axios from 'axios'

import {API_BASE_URL, TOKEN_KEY} from '@/config/app'
import {router} from '@/router'
import session from '@/libs/session'
import qs from 'qs'
import {toast} from '@/libs/cube-ui'

class httpRequest {
  constructor() {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }

  // 销毁请求实例
  destroy(url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  // 请求拦截
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {  // 添加请求拦截器
      if (config.method == "post") {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
      }
      if (session.isLogin()) config.headers['X-Nideshop-Token'] = session.isLogin()
      // Spin.show()
      // 在发送请求之前做些什么
      return config
    }, error => {
      return Promise.reject(error)  // 对请求错误做些什么
    })


    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      if (res && (res.status === 200 || res.status === 304 || res.status === 400)) { //请求后状态码checkStatus验证
        let errno = res.data.errno
        let code = res.data.code
        if (errno == 401) {
          session.clearToken()
          router.push('/login')
        }
        if (code) {
          return res.data
        }
        return res.data.data;
      }
    }, (error) => {   // 异常状态下，把错误信息返回去
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }


  // 创建实例
  create() {
    let conf = {
      baseURL: API_BASE_URL,
      timeout: 2000,
      headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }

  // 合并请求实例
  mergeReqest(instances = []) {
    //
  }

  // 请求实例
  request(options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}

export default httpRequest
