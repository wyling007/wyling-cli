import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/layout';
import { useAuthStore } from '@/store';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Home',
    component: Layout,
    children: [
      {
        path: '/Home',
        component: () => import('@/pages/Home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/Map',
        component: () => import('@/pages/plugins/Map/index.vue'),
        meta: {
          title: '地图',
        },
      },
      {
        path: '/Echarts',
        component: () => import('@/pages/plugins/Echarts/index.vue'),
        meta: {
          title: '图表',
        },
      },
      {
        path: '/Editor',
        component: () => import('@/pages/plugins/Editor/index.vue'),
        meta: {
          title: '富文本编辑器',
        },
      },
      {
        path: '/403',
        component: () => import('@/pages/exception/403/index.vue'),
        meta: {
          title: '异常页403',
        },
      },
      {
        path: '/404',
        component: () => import('@/pages/exception/404/index.vue'),
        meta: {
          title: '异常页404',
        },
      },
      {
        path: '/500',
        component: () => import('@/pages/exception/500/index.vue'),
        meta: {
          title: '异常页500',
        },
      },
      {
        path: '/PermissionManager',
        component: () => import('@/pages/system/PermissionManager/index.vue'),
        meta: {
          title: '权限管理',
        },
      },
      {
        path: '/RoleManager',
        component: () => import('@/pages/system/RoleManager/index.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/RouteManager',
        component: () => import('@/pages/system/RouteManager/index.vue'),
        meta: {
          title: '路由管理',
        },
      },
      {
        path: '/UserManager',
        component: () => import('@/pages/system/UserManager/index.vue'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: '/About',
        component: () => import('@/pages/About/index.vue'),
        meta: {
          title: '关于',
        },
      },
    ],
    beforeEnter(to, from, next) {
      const authStore = useAuthStore();
      if (authStore.token) {
        next();
      } else {
        next('/Login');
      }
    },
  },
  {
    path: '/Login',
    component: () => import('@/pages/Login/index.vue'),
  },
];
