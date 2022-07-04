import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/index.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});

export default router;
