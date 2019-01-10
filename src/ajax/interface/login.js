import axios from '../api'

const login  = data => {
  console.log('发起登录请求', data)
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}


export default {
  login
}
