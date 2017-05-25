<template>
  <div>
    <PageHeader>
       <template scope="props" slot="login">
          <mu-raised-button label="登录" class="login-raised-button mdl-shadow--2dp" primary backgroundColor="transparent" href="../../../parts/share/login/login.html"/>
       </template>
    </PageHeader>
  </div>

</template>
<style lang="less">

</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)

  import PageHeader from 'components/base/pageheader';
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
    }
  }
</script>
