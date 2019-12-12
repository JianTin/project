import Home from '@/pages/home/home'
import Books from '@/pages/books/books'
import Member from '@/pages/member/member'
import Personal from '@/pages/personal/personal'
import Login from '@/pages/login/login'
export default [
  {
    path: '/home',
    component: Home
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
    path: '/',
    redirect: '/home'
  }
]
