<template>
  <div>
    <PageHeader></PageHeader>
    <PageMain></PageMain>
    <PageFooter></PageFooter>
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
/*  import 'muse-components/styles/base.less' // 加载基础的样式*/
  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)

  import PageHeader from 'components/base/pageheader';
  import PageMain from 'components/base/pagemain';
  import PageFooter from 'components/base/pagefooter';
  import $http from 'src/api/http.js';
  export default{
    data(){
      return {
      }
    },
    components: {
      /*      appBar,
       textField,
       flatButton,
       icon*/
      PageHeader,
      PageMain,
      PageFooter
    }
  }
</script>
