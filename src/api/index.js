import ajax from './ajax'
export const getMemberRights = () => ajax({
  method: 'GET',
  url: '/list/getBlackRights'
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
export const getUser = (name, pwd) => ajax({
  method: 'GET',
  url: '/list/createUser',
  params: {
    name,
    pwd
  }
})

// 请求专题数据
export const reqSpecial = () => ajax('/special')
