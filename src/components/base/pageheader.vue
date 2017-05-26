<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title"><a href="../../../parts/share/index/index.html">Sharing</a></span>
            <!--<div class="mdl-layout-spacer"></div>-->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <!--<a class="mdl-navigation__link" href="#">讨论版</a>-->
              <mu-flat-button label="讨论版" color="#fff" backgroundColor="transparent" href="../../../parts/share/posts/posts.html" />
              <!--<div>-->
                <!--<mu-raised-a class="mdl-navigation__link" href="#">交流分享</a>-->
                <mu-flat-button label="交流分享" ref="button" @click="toggle" color="#fff" backgroundColor="transparent"/>
                <!--<button value="交流分享" ref="button" @click="toggle">jiaoliu</button>-->
                <!--<mu-popover :open="open" :autoPosition="false" :trigger="trigger" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">-->
                <mu-popover :trigger="trigger" :open="open" @close="handleClose" :autoPosition="false" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin"  >
                  <mu-menu>
                    <a href="https://www.baidu.com/"><mu-menu-item title="文档资料" /></a>
                    <mu-menu-item title="技术博客" />
                    <mu-menu-item title="个人笔记" />
                  </mu-menu>
                </mu-popover>
              <!--</div>-->
            </nav>
            <div class="mdl-layout-spacer"></div>
            <slot name="login"></slot>
            <slot name="user"></slot>

          </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <span class="mdl-layout-title"><a href="../../../parts/share/home/home.html">Sharing</a></span>
          <!--<div class="mdl-layout-spacer"></div>-->
          <nav class="mdl-navigation">
            <!--<a class="mdl-navigation__link" href="#" color="#fff">讨论版</a>-->
            <!--<mu-flat-button label="交流分享" ref="button1" @click="toggle1" color="#fff" backgroundColor="#009688;"/>-->
            <div>
              <mu-flat-button label="讨论版" color="#009688" backgroundColor="transparent" href="../../../parts/share/posts/posts.html"/>
            </div>
            <div>
              <!--<a class="mdl-navigation__link" @click="toggle" href="#">交流分享</a>-->
              <!--<mu-raised-button label="交流分享" ref="button" @click="toggle"/>-->
              <!--<a class="mdl-navigation__link" ref="a" @click="toggle" href="#">交流分享</a>-->
              <mu-flat-button label="交流分享" ref="button1" @click="toggle1" color="#009688" backgroundColor="transparent"/>
              <mu-popover :trigger="trigger1" :open="open1" @close="handleClose" :autoPosition="false" :anchorOrigin="anchorOriginDrawer" :targetOrigin="targetOriginDrawer"  >
              <!--<mu-popover :trigger="trigger" :open="open" @close="handleClose">-->
                <mu-menu>
                  <a href="https://www.baidu.com/"><mu-menu-item title="文档资料" /></a>
                  <mu-menu-item title="技术博客" />
                  <mu-menu-item title="个人笔记" />
                </mu-menu>
              </mu-popover>
            </div>
          </nav>
        </div>
<!--      <main class="mdl-layout__content">
      </main>-->
      <!--<floatButton icon="add" secondary mini class="demo-float-button"/>-->
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


  .mdl-layout__header{
    background: #009688 !important;
    .mdl-layout__header-row{
      .mdl-navigation{
        padding-left: 50px;
      }
    }
  }
  .mdl-layout__drawer{
    /*background: #719665 !important;*/
    background: #fff!important;
  }

</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import appBar from 'muse-components/appBar'
  import textField  from 'muse-components/textField'
  import flatButton from 'muse-components/flatButton'
  import icon from 'muse-components/icon'
  import avatar from 'muse-components/avatar'
  import floatButton from 'muse-components/floatButton'
  import dropDownMenu from 'muse-components/dropDownMenu'
  import mItem from 'muse-components/menu/menuItem'
  import imgurl from '../../assets/images/user.png'

  /*全部加载muse-ui用于测试*/
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
        value: '1',
        open: false,
        open1:false,
        trigger: null,
        trigger1: null,
        autoPosition:false,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'middle'
        },
        targetOrigin: {
          vertical: 'top',
          horizontal: 'middle'
        },
        anchorOriginDrawer: {
          vertical: 'bottom',
          horizontal: 'middle'
        },
        targetOriginDrawer: {
          vertical: 'top',
          horizontal: 'middle'
        }
      }
    },
    mounted () {
      this.trigger = this.$refs.button.$el
      this.trigger1 = this.$refs.button1.$el
    },
    methods:{
//      handleChange (value) {
//        this.value = value
//      },
      toggle () {
        this.open = !this.open
      },
      toggle1(){
        this.open1 = !this.open1
      },
      handleClose () {
        this.open = false,
        this.open1 = false
      },
      stringify (obj) {
        return JSON.stringify(obj)
      }
    },
    components: {
      appBar,
      textField,
      flatButton,
      icon,
      avatar,
      floatButton,
      dropDownMenu,
      mItem
    }
  }
</script>
