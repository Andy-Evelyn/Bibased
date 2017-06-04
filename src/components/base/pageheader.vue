<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"><a href="../../../parts/share/index/index.html">Sharing</a></span>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <li>
            <a href="../../../parts/share/posts/posts.html">讨论版</a>
            <slot name="line-topP"></slot>
          </li>
          <li>
            <a href="../../../parts/share/resources/resources.html">交流分享</a>
            <slot name="line-topR"></slot>
          </li>
        </nav>
        <div class="mdl-layout-spacer"></div>
        <div class="pRbox">
          <a href="#">
            <mu-list class="personalR">
              <mu-list-item class="personal">
                <mu-avatar  slot="left" :src="userUrl" :size="40"/>
                <span class="userName">2013081420</span>
              </mu-list-item>
            </mu-list>
            <div class="m1">
              <mu-paper :zDepth="1" class="menu2">
                  <li>
                    <a href="../../../parts/share/personal/personal.html">
                      <mu-icon value="assignment_ind"/>&nbsp;&nbsp;个人中心
                    </a>
                  </li>
                  <li>
                    <a href="../../../parts/share/login/login.html">
                      <mu-icon value="power_settings_new"/>&nbsp;&nbsp;退出
                    </a>
                  </li>
              </mu-paper>
            </div>
          </a>
        </div>

      </div>
    </header>
  </div>

</template>

<style lang="less">
  /*图标引入*/
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src:url(../../assets/font/MaterialIcons-Regular.woff2),
    url(../../assets/font/MaterialIcons-Regular.woff),
    url(../../assets/font/MaterialIcons-Regular.eot),
    url(../../assets/font/MaterialIcons-Regular.ttf);
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
  .mdl-layout__container{
    height: 200px !important;
  }
  .mdl-layout__header{
    background: #009688 !important;
    z-index: 30 !important;
    li{
      list-style: none;
      text-align: center;
    }
    .mdl-layout__header-row{
      .mdl-navigation{
        padding-left: 50px;
        li{
          width: 100px;
          height: 20px;
          line-height: 20px;
          a{
            color:#fff !important;
            &:hover{
               color: #27be59 !important;
               /*font-size:20px;*/
             }
          }
        }
      }
    }
  }
  .mdl-layout__drawer{
    /*background: #719665 !important;*/
    background: #fff!important;
  }

  /*右边样式*/
  .pRbox a{
    display:block;
    width:100%;
  /*color:#fff !important;*/
  .personalR {
    position: relative;
    width: 163px !important;
    margin-right: 25px;
    padding: 0 !important;
  .mu-item-wrapper {
  &:hover {
     background: rgba(255, 255, 255, 1) !important;
   }
  .mu-item {
    width: 163px;
  }
  }
  .personal {
  .userName {
    color: #fff !important;
  }
  &:hover {
  /*background: rgba(255,255,255,1)!important;*/
  .userName {
    color: #009688 !important;
  }
  }
  }
  }
  >div.m1{
     display: none !important;
     /*height: 100px;*/
     width: 163px;
     position: absolute;
    .menu2 {
      display: none !important;
      position: absolute;
      width: 163px;
      text-align: center;
      li{
        height:50px;
        line-height: 50px;
        text-align:left;
        text-indent:12px;
        &:hover{
            background: #12cba5;
            a{
              color:#fff!important;
            }
         }
        .material-icons {
          position: relative;
          top: 5px;
        }
      }
    }
  }
  &:hover>div.m1{
     display: inline-block !important;
  .menu2 {
    display: block !important;
  }
  }

  }

  /*f分页在右边显示*/
  .mu-pagination{
    float: right;
  }
</style>
<script>
  import imgurl from '../../assets/images/user.png'

  /*全部加载muse-ui*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
//  require("materialjs");
  export default{
    data(){
      return {
        userUrl: imgurl,
      }
    },
    mounted () {
    },
    methods:{
    },
    components: {
    }
  }
</script>
