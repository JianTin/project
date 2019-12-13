import Home from '../pages/home/home'
import Books from '../pages/books/books'
import Member from '../pages/member/member'
import Personal from '../pages/personal/personal'
import Login from '../pages/login/login'

export default [
  {
    path: '/home',
    component: Home,
    meta: {isShowFooter: true}
  },
  {
    path: '/books',
    component: Books,
    meta: {isShowFooter: true}
  },
  {
    path: '/member',
    component: Member,
    meta: {isShowFooter: true}
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
