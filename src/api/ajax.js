import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use((config) => {
  const { method, data } = config
  // 判断,method中是不是POST请求,并且data应该是一个对象----->urlEncoding形式
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

axios.interceptors.response.use((response) => {
  console.log(response)
  return response.data
}, (err) => {
  return {code: 0, msg: err}
})

export default axios
