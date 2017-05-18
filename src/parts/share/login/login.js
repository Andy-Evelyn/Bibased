/**
 * Created by panweiyan on 2017/4/20.
 */
require('babel-polyfill');
require('../../../assets/css/material.min.css');
require('../../../assets/js/material.min.js');
import Vue from 'vue';
import Router from 'vue-router';
import routers from 'router/index';
import Vuex from 'vuex';
Vue.use(Router);
Vue.use(Vuex);
const routes = [
  {path: '/', component: routers.Login,
    children: [
      {
        path: '',
        component: routers.ShareLoginForm
      },
      {
        path: 'forgetpw',
        component: routers.ShareLoginForgetpw
      }
    ]
  },
];
const router= new Router({
  routes
})

new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>',
})
