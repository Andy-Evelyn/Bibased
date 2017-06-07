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
  {
    path: '/',
    component: routers.ShareAdmin,
    children: [
      {
        path: '',
        component: routers.AdminPost
      },
      {
        path: 'adlogin',
        component: routers.AdLogin
      },
      {
        path: 'adpost',
        component: routers.AdminPost
      },
      {
        path: 'adnote',
        component: routers.AdminNote
      },
      {
        path: 'search',
        component: routers.AdSearch,
      },
    ]
  },
];
const router= new Router({
  routes
});
/*const store = new Vuex.Store({
  state: {
    isshowlogin:true
  },
  getters: {
  },
  mutations: {

  }
});*/

new Vue({
  el: '#app',
  router,
  //store,
  template: '<router-view></router-view>',
  components: {
  }
})
