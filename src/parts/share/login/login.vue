<template>
  <div class="pl-page">
    <PageHeader></PageHeader>
    <div class="main">
      <transition name="fade">
        <keep-alive><router-view></router-view></keep-alive>
      </transition>
    </div>
  </div>

</template>
<style lang="less">
  html,body,.pl-page{
    height: 100%;
  }
  body{
    background: #e8f3fb !important;
    overflow: hidden;
  }
  .main{
    height: 100%;
  }
  .fade-leave-active, .fade-enter-active{
    transition: all .3s ease !important;
    opacity: 0;
    transform:translate(-50%,-50%) rotateY(90deg)!important;
  }
</style>

<script>
  /*全部加载，用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
  import PageHeader from 'components/base/pageheader';
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    beforeDestroy(){

    },
    mounted(){
      require("../../../assets/js/test");
      function randomRgbaColor() { //随机生成RGBA颜色
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        var alpha = Math.random(); //随机生成1以内a值
        return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
      }
    },
    components: {
      PageHeader
    }
  }
</script>
