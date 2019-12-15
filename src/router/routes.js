import Home from '../pages/home/home'
import Books from '../pages/books/books'
import Member from '../pages/member/member'
import Personal from '../pages/personal/personal'
import Login from '../pages/login/login'
// 会员权力详情
const MemberRights = () => import('@/pages/member/memberRights/memberRights')
// 音频
const Audio = () => import('@/pages/home/audio/audio')
// 杂志目录
const MagazineList = () => import('@/pages/home/MagazineList/MagazineList')
export default [
  {
    path: '/home',
    component: Home,
    meta: {isShowFooter: true},
    children: [
      {
        path: '/home/audio',
        component: Audio,
        meta: {isShowFooter: false}
      },
      {
        path: '/home/MagineList',
        component: MagazineList,
        meta: {isShowFooter: false}
      }
    ]
  },
  {
    path: '/books',
    component: Books,
    meta: {isShowFooter: true}
  },
  {
    path: '/member',
    component: Member,
    meta: {isShowFooter: true},
    children: [
      {
        path: '/member/memberRights',
        component: MemberRights
      }
    ]
  },
  {
    path: '/personal',
    component: Personal,
    meta: {isShowFooter: true}
  },
  {
    path: '/login',
    component: Login,
    meta: {isShowFooter: false}
  },
  {
    path: '/',
    redirect: '/home'
  }
]
