/**
 * Created by panweiyan on 2017/4/20.
 */
import Vue from 'vue';
import Router from 'vue-router';
import routers from 'router/index';
Vue.use(Router)
const routes = [
  {path: '/', component: routers.SharePersonal},
];
const router= new Router({
  routes
})
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
