import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})
// request 拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)
export default service