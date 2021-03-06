import Home from '../pages/home/home'
import Books from '../pages/books/books'
import Member from '../pages/member/member'
import Personal from '../pages/personal/personal'
import Login from '../pages/login/login'
// 我的页面中的二级组件
import Inform from '../pages/personal/personals/inform.vue'
import Integral from '../pages/personal/personals/integral.vue'
import About from '../pages/personal/personals/About.vue'
import CardBag from '../pages/personal/personals/cardBag.vue'
import ConsultingFeedback from '../pages/personal/personals/ConsultingFeedback.vue'
import Coupon from '../pages/personal/personals/coupon.vue'
import Collect from '../pages/personal/personals/collect.vue'
import Note from '../pages/personal/personals/note.vue'
import Setting from '../pages/personal/personals/setting.vue'
import FirstTime from '../pages/login/FirstTime.vue'
import Special from '../pages/home/special.vue'
import SpecialDetail from '../pages/home/specialDetail.vue'
// 红
import University from '@/pages/home/University/University'
import Text from '@/pages/home/text/text'
import TextChildren from '@/pages/home/text/text_children/text_children.vue'
// shop
import Cultural from '@/pages/cultural/cultural'
import Detail from '../pages/cultural/detail'
import ShopCar from '../pages/cultural/shopCar'
// homepag
import HomePage from '@/pages/home/HomePag/HomePag'
// 杂志轮播图
import Magazine from '@/pages/home/magazine/magazine'
// 会员权力详情
const MemberRights = () => import('@/pages/member/memberRights/memberRights')
// 音频
const Audio = () => import('@/pages/home/audio/audio')
// 杂志目录
const MagazineList = () => import('@/pages/home/MagazineList/MagazineList')
// 空 课程页面
const EntryCourse = () => import('@/pages/home/emtryCourse/entryCourse')
export default [{
  path: '/home',
  component: Home,
  meta: {isShowFooter: true},
  children: [
    {
      path: '/home/homepag',
      component: HomePage
    },
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
    },
    {
      path: '/home/magazine',
      component: Magazine
    },
    {
      path: '/home/entryCourse',
      component: EntryCourse
    },
    {
      path: '/home/audio',
      component: Audio,
      meta: {isShowFooter: false}
    },
    {
      path: '/home/MagineList',
      component: MagazineList,
      meta: {isShowFooter: false}
    },
    {
      path: '/home/special',
      component: Special,
      children: [
        {
          path: '/home/special/:id',
          component: SpecialDetail
        }
      ]
    }
  ]
},
{
  path: '/university',
  name: 'University',
  component: University
},
{
  path: '/text',
  name: 'Text',
  component: Text
},
{
  path: '/textChildren',
  name: 'TextChildren',
  component: TextChildren
},
{
  path: '/books',
  component: Books,
  meta: { isShowFooter: true }
},
{
  path: '/member',
  component: Member,
  meta: {isShowFooter: true},
  children: [
    {
      path: '/member/memberRights',
      component: MemberRights,
      meta: {isShowFooter: false}
    }
  ]
},
{
  path: '/personal',
  component: Personal,
  meta: { isShowFooter: true },
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
  component: Login,
  meta: { isShowFooter: false },
  children: [
    {
      path: '/login/firsttime',
      component: FirstTime
    }
  ]
},
{
  path: '/',
  redirect: '/home'
}]
