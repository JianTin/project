import ajax from './ajax'
export const getMemberRights = () => ajax({
  method: 'GET',
  url: '/list/getBlackRights'
})

export const getCourse = () => ajax({
  method: 'GET',
  url: '/list/getCouse'
})

export const getReads = () => ajax({
  method: 'GET',
  url: '/list/getReads'
})
