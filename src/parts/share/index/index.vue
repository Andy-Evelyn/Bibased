<template>
  <div>
    <InHeader></InHeader>
    <PageMain></PageMain>
    <PageFooter></PageFooter>
  </div>

</template>
<style lang="less">

</style>
<script>
/*  import 'muse-components/styles/base.less' // 加载基础的样式*/
  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)

  import InHeader from 'components/base/inheader';
  import PageMain from 'components/base/pagemain';
  import PageFooter from 'components/base/pagefooter';
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
      InHeader,
      PageMain,
      PageFooter
    }
  }
</script>
