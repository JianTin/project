import Home from "@/pages/home/home";
import HomePag from "@/pages/home/HomePag/HomePag";
import Books from "@/pages/books/books";
import Member from "@/pages/member/member";
import Personal from "@/pages/personal/personal";
import Login from "@/pages/login/login";
import University from "@/pages/home/University/University";
import Text from "@/pages/home/text/text";
import TextChildren from "@/pages/home/text/text_children/text_children.vue";

export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: 'Home',
    component: Home,
  },
  {
    path: "/university",
    name: 'University',
    component: University
  },
  {
    path: "/text",
    name: 'Text',
    component: Text
  },
  {
    path: "/textChildren",
    name: 'TextChildren',
    component: TextChildren
  },

  {
    path: "/home/homepag",
    component: HomePag,
    meta: { isShowFooter: false }
  },

  {
    path: "/books",
    component: Books,
    meta: { isShowFooter: true }
  },
  {
    path: "/member",
    component: Member,
    meta: { isShowFooter: true }
  },
  {
    path: "/personal",
    component: Personal,
    meta: { isShowFooter: true }
  },
  {
    path: "/login",
    component: Login,
    meta: { isShowFooter: false }
  }
];
