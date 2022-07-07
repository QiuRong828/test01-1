import axios from 'axios'

import store from '../store'
import router from '../router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // 将token通过请求头发送给后台
    const token = store.getters.token
    if (token) config.headers.Authorization = token

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const authorization = response.headers.authorization
    if (authorization) {
      store.commit('user/SET_TOKEN', authorization)
    }

    if (response.data.code === 200) {
      return response.data.data
    }

    if (response.data.code === 401) {
      store.commit('SET_TOKEN', '')
      store.commit('SET_USER_INFO', '')
      store.commit('SET_NAV', '')
      router.push('/login')
    }

    // TODO 401 token 过期处理
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
