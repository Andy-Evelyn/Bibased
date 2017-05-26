<template>
  <!--<div class="sl-page">-->
    <!--<PageHeader></PageHeader>-->
    <div class="main">
        <h1>Sharing</h1>
        <h5>分享你的知识、见解</h5>
      <transition name="fade">
        <keep-alive><router-view></router-view></keep-alive>
      </transition>
    </div>
  <!--</div>-->

</template>
<style lang="less">

  /*图标引入*/
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src:url(../../../assets/font/MaterialIcons-Regular.woff2),
    url(../../../assets/font/MaterialIcons-Regular.woff),
    url(../../../assets/font/MaterialIcons-Regular.eot),
    url(../../../assets/font/MaterialIcons-Regular.ttf);
  }
  .material-icons {
    font-family: 'Material Icons' !important;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  html,body,.sl-page{
    height: 100%;
  }
  body{
    background: #e8f3fb !important;
    overflow: hidden;
  }
  .main{
    /*height: 100%;*/
    /*border:1px solid blue;*/
    position: absolute;
    z-index:3;
    top:50%;
    left: 50%;
    width: 80%;
    /*padding: 20px 20px 36px 20px;*/
    /*padding: 5px 15px 30px 15px;*/
    max-width:  340px;
    transform: translate(-50%,-50%);
    h1,h5{
      text-align: center;
      color:#009688;
    }
  }
  .fade-leave-active, .fade-enter-active{
    transition: all .3s ease !important;
    opacity: 0;
    transform:translate(-50%,-50%) rotateY(90deg)!important;
    transform-origin:50% 50% !important;
  }

  /*.loginTitle{*/
    /*color:#009688;*/
    /*text-align: center;*/
    /*position: relative;*/
    /*z-index: 4;*/
  /*}*/
</style>

<script>
//  import 'muse-components/styles/base.less' // 加载基础的样式
//  import Vue from 'vue'
//  import MuseUI from 'muse-ui'
//  import 'muse-ui/dist/muse-ui.css'
//  import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题
//  Vue.use(MuseUI)

//  import PageHeader from 'components/base/pageheader';
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
//      PageHeader
    }
  }
</script>
