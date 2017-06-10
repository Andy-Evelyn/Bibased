<template>
  <div style="height:100%">
    <PageHeader>
      <template slot="line-topR">
        <p class="line-top"></p>
      </template>
    </PageHeader>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<style lang="less">
  body{
    height:100% !important;
    background: #f2f2f2 !important;
    overflow: hidden;
  }
  .line-top {
    border-top: 2px solid #3bbe7a;
    width: 18px;
    margin: auto;
  }
</style>
<script>
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
  import PageHeader from 'components/base/pageheader';
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  import $http from 'src/api/http.js';
  export default{
    data(){
      return {
          msg:'vue',
      }
    },
    components: {
      PageHeader,
      ListTabs,
      PaginAtion,
    },
  }
</script>
