/**
 * Created by panweiyan on 2017/4/20.
 */
require('babel-polyfill');
require('../../../assets/css/material.min.css');
require('../../../assets/js/material.min.js');
import Vue from 'vue';
import Router from 'vue-router';
import routers from 'router/index';
import store from '../../../store/AppStore.js'
import Vuex from 'vuex';
Vue.use(Router);
Vue.use(Vuex);
Vue.use(store);
const routes = [
  {
    path: '/',
    component: routers.ShareAdmin,
    children: [
      {
        path:'',
        component: routers.AdLogin,
      },
      {
        path: 'adpage',
        component: routers.AdminPage,
        children: [
          {
            path: '',
            component: routers.AdminIndex,
          },
          {
            path: '/adpost',
            component: routers.AdminPost
          },
          {
            path: '/adnote',
            component: routers.AdminNote
          },
          {
            path: '/adblog',
            component: routers.AdminBlog
          },
          {
            path: '/adfile',
            component: routers.AdminFile
          },
          {
            path: '/adpostview',
            component: routers.AdminPostView,
          },
        ]
      },
      // {
      //   path: 'search',
      //   component: routers.AdSearch,
      // },
    ]
  },
];
const router= new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>',
  components: {
  }
})
