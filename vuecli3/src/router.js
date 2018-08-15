import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import myHome from './views/myHome.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import Movie from './views/MovieList.vue';
import MovieDetail from './views/MovieDetail.vue';
import ComponentA from './views/ComponentA.vue';
import Vuex from './views/Vuex.vue'

 Vue.use(Router);

 let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about/:xx',
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
            path: '*',
            component: Error
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
            path: '/movie',
            component: Movie,
        },
        {
            path: '/moviedetail/:id',
            component: MovieDetail,
        },
        {
            path: '/componenta',
            component: ComponentA,
        },
        {
            path: '/vuex',
            component: Vuex,
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
 router.beforeEach((to,from,next)=>{
     // console.log(to);
     // console.log(from);
     // if(from.name=='about'){
     //     next(false);
     //     console.log(from.name=='about')
     // }else{
     //     next();
     // }
     // if(to.name=='home'){
     //     next(false);
     //     console.log('不能跳转2');
     // }else{
     //     next();
     // }  //影响
     // next(false)  //不允许向下执行
     next();
 });
router.afterEach(()=>{
    console.log('跳出全局');
});
export default router;
