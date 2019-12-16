
import Home from '@/pages/home/home'
import Books from '@/pages/books/books'
import Member from '@/pages/member/member'
import Personal from '@/pages/personal/personal'
import Login from '@/pages/login/login'
import Cultural from '@/pages/cultural/cultural'
import Detail from '../pages/cultural/detail'
import ShopCar from '../pages/cultural/shopCar'
import Shop from '../pages/cultural/shop'
import Series from '../pages/cultural/series'
export default [
  {
    path: '/home',
    component: Home,
    meta: {isShowFooter: true},
    children: [
      {
        path: '/home/cultural',
        component: Cultural
      },
      {
        path: '/home/detail',
        component: Detail
      },
      {
        path: '/home/shopCar',
        component: ShopCar
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
