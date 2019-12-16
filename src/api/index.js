import ajax from './ajax'
export const getMemberRights = () => ajax({
  method: 'GET',
  url: '/list/getBlackRights'
})

// 获得 course的数据
export const getCourse = () => ajax({
  method: 'GET',
  url: '/list/getCouse'
})

// 获取 读书的数据
export const getReads = () => ajax({
  method: 'GET',
  url: '/list/getReads'
})
// 请求登录
export const getLogin = (name, pwd) => ajax({
  method: 'GET',
  url: '/list/login',
  params: {
    name,
    pwd
  }
})

// 创建用户
export const createUser = (name, pwd) => ajax({
  method: 'GET',
  url: '/list/createUser',
  params: {
    name,
    pwd
  }
})

// 请求专题数据
export const reqSpecial = () => ajax('/special')
