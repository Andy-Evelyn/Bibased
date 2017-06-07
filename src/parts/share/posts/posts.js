/**
 * Created by panweiyan on 2017/4/20.
 */
require('babel-polyfill');
require('../../../assets/css/material.min.css');
require('../../../assets/js/material.min.js');
import Vue from 'vue';
import Router from 'vue-router';
import routers from 'router/index';
Vue.use(Router)
const routes = [
  {path: '/', component: routers.SharePosts,
    children: [
      {
        path: '',
        component: routers.SharePostsMain,
      },
      {
        path: 'postsend',
        component: routers.SharePostsSend,
      },
      {
        path: 'comment',
        component: routers.SharePostsComment,
      },
      {
        path: 'search',
        component: routers.SharePostsReach,
      },
    ]
  },
];
const router= new Router({
  routes
})
/*new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})*/


new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>',
})
