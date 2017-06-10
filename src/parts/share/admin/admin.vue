<template>
  <div style="height:100%">
    <keep-alive><router-view></router-view></keep-alive>
  </div>

</template>

<style lang="less">
  html,body{
    height:100%;
    width:100%;
  }
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
  /*头部样式*/
  .adminMain{
    header{
      background: #009688;
      color: #fff;
      >div{
         margin:0 auto;
         position: relative;
         width:90%;
         height:64px;
         line-height:64px;
          span,a{
            display: inline-block;
          }
          .adL{
            width:68%;
            text-indent:120px;
            .adL_title{
              font-size: 20px !important;
              position: absolute;
              left:-120px;
            }
          }
          .adR{
            width:30%;
            text-align: right;
            /*管理员名*/
            .adUserName{
              padding-right: 30px;
            }
            .mu-icon {
              position: relative;
              top: 5px;
            }
          }
      }
    }
    /*header end*/
    .con_left{
      width:18%;
      height:100%;
      color:#fff !important;
      min-width: 200px;
    }
  }

</style>
<script>

/*全部加载*/
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
Vue.use(MuseUI)
  export default{
    data () {
      return {

      }
    },
    methods: {
    },
    components: {
    }
  }
</script>
