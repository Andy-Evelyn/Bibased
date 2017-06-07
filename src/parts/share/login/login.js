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
import store from '../../../store/AppStore.js'
Vue.use(Router);
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.config.devtools = true
const routes = [
  {
    path: '/',
    component: routers.Login,
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
    store,
    template: '<router-view></router-view>',
})
