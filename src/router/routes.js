import Home from '@/pages/home/home'
import Books from '@/pages/books/books'
import Member from '@/pages/member/member'
import Personal from '@/pages/personal/personal'
import Login from '@/pages/login/login'
// 我的页面中的二级组件
import Inform from '../pages/personal/personals/inform.vue'
import Integral from '../pages/personal/personals/integral.vue'
import About from '../pages/personal/personals/About.vue'
import CardBag from '../pages/personal/personals/cardBag.vue'
import ConsultingFeedback from '../pages/personal/personals/ConsultingFeedback.vue'
import Coupon from '../pages/personal/personals/coupon.vue'
import Collect from '../pages/personal/personals/collect.vue'
import Note from '../pages/personal/personals/note.vue'
import Order from '../pages/personal/personals/order.vue'
import Setting from '../pages/personal/personals/setting.vue'
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
  /* {
    path: '/inform',
    component: Inform
  }, */
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path: '/personal/inform',
        component: Inform
      },
      {
        path: '/personal/integral',
        component: Integral
      },
      {
        path: '/personal/about',
        component: About
      },
      {
        path: '/personal/cardBag',
        component: CardBag
      },
      {
        path: '/personal/consultingfeedback',
        component: ConsultingFeedback
      },
      {
        path: '/personal/coupon',
        component: Coupon
      },
      {
        path: '/personal/note',
        component: Note
      },
      {
        path: '/personal/order',
        component: Order
      },
      {
        path: '/personal/setting',
        component: Setting
      },
      {
        path: '/personal/collect',
        component: Collect
      }
    ]
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
