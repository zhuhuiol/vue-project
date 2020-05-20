import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomeIndex from '@/components/HomeIndex';
import Login from '@/components/Login';
import Menu from '@/components/Menu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'HomeIndex',
      component: HomeIndex,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
  ],
});
