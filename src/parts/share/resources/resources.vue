<template>
  <div>
    <InHeader></InHeader>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<style lang="less">
  body{
    height:100%;
    background: #f2f2f2 !important;
    overflow: hidden;
  }
</style>
<script>
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
  import InHeader from 'components/base/inheader';
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  export default{
    data(){
      return {
      }
    },
    components: {
      InHeader,
      ListTabs,
      PaginAtion,
    }
  }
</script>
