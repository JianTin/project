import ajax from './ajax'
export const getMemberRights = () => ajax({
  method: 'GET',
  url: '/list/getBlackRights'
})
