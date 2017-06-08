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
  {
   path: '/', component: routers.ShareResources,
   children: [
      {
        path: '',
        component: routers.ShareResourcesMain,
      },
     {
        path: 'buildfile',
        component: routers.ShareReBuildFile,
      },
     {
       path: 'buildblog',
       component: routers.ShareReBuildBlog,
     },
     {
       path: 'buildnote',
       component: routers.ShareReBuildNote,
     },
      {
       path: 'fileshow/:id',
       component: routers.ShareReShow,
     },
     {
       path: 'blogshow/:id',
       component: routers.ShareBlogShow,
     },
     {
       path: 'noteshow/:id',
       component: routers.ShareNoteShow,
     },
      {
        path: 'search/type/:type/q/:q',
        component: routers.ShareResearch,
      },
    ]
  }
];
const router= new Router({
  routes
})
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
