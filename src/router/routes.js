import Home from '@/pages/home/home'
import Books from '@/pages/books/books'
import Member from '@/pages/member/member'
import Personal from '@/pages/personal/personal'
import Login from '@/pages/login/login'
import Magazine from '@/pages/home/magazine/magazine'
import order from '@/pages/home/order'
export default [{
    path: '/home',
    component: Home,
    children: [{
      path: '/home/magazine',
      component: Magazine
    }, ]
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/',
    redirect: '/home',
  }
]
