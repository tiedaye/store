import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import myHome from './views/myHome.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '/about',
        name: 'about',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),

    },

    {
        path: '/mine',
        component: Mine
    },
      {
          path: '/sssss',
          redirect:'/'
      },
      {
          path: '/sssss/:xx/:age',
          redirect:'/myhome/test2/:xx/:age'
      },
      {
          path: '/myhome',
          component: myHome,
          children:[
              {
                //写app中不写/  单独写myhome中要写/
                  path: 'test1',
                  name:'test1',
                  component: Test1,
                  alias:'/xiaoming',
              },
              {
                  path: 'test2/:xx/:age',
                  component: Test2,
              }
          ]
      },

  ],
});
