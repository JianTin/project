import Home from '@/pages/home/home'
 import HomePage from '@/pages/home/HomePag/HomePag'
import Books from '@/pages/books/books'
import Member from '@/pages/member/member'
import Personal from '@/pages/personal/personal'
import Login from '@/pages/login/login'
console.log(Home)
export default [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/homepag',
        component: HomePage
      }
    ]
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
