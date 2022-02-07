import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/home.vue";
import { useLayoutStore } from '@/store/modules/layout'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  }, {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: '系统首页'
        },
        component: () => import( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '找不到页面'
        },
        component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
      },
    ]
  }, {
    path: "/login",
    name: "Login",
    meta: {
      title: '登录'
    },
    component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { getStatus } = useLayoutStore()
  // 判断是否登录
  if (!getStatus.ACCESS_TOKEN && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

router.afterEach(() => {

})

export default router
