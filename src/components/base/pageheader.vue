<!--
<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">SHARE</el-menu-item>
      <el-menu-item index="2"><router-link to="../../../parts/share/posts/posts.html">讨论版</router-link></el-menu-item>
      <el-submenu index="3">
        <template slot="title">交流分享</template>
        <el-menu-item index="3-1">文档资料</el-menu-item>
        <el-menu-item index="3-2">技术博客</el-menu-item>
        <el-menu-item index="3-3">个人笔记</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><router-link to="SharePersonal">个人中心</router-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
-->


<template>
<!--  <div class="mdl-layout mdl-js-layout mdl-layout&#45;&#45;fixed-header">
    <header class="mdl-layout__header">
      <appBar title="Shareing" class="mdl-layout-title mdl-layout__header-row mdl-layout&#45;&#45;large-screen-only">
        <flatButton color="white" label="讨论版" slot="right"/>
        <flatButton color="white" label="交流分享" slot="right"/>
        <textField icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
        <avatar slot="right" :src="userUrl" />
        <flatButton color="white" label="个人中心" slot="right"/>
      </appBar>
    </header>
    <floatButton icon="add" secondary mini class="demo-float-button"/>
  </div>-->

<!--  <div>
    <appBar title="Shareing">
      <flatButton color="white" label="讨论版" slot="right"/>
      <flatButton color="white" label="交流分享" slot="right"/>
      <textField icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
      <avatar slot="right" :src="userUrl" />
      <flatButton color="white" label="个人中心" slot="right"/>
    </appBar>
  </div>-->

<!--  <div class="mdl-layout mdl-js-layout mdl-layout&#45;&#45;fixed-header">
    <header class="mdl-layout__header" :class="{'mdl-layout__header&#45;&#45;transparent' :bgtransparent,'raised-button-primary' :!bgtransparent}" :style="styleObj" >
      <div class="mdl-layout__header-row" :style="styleObj">
        <slot classname="mdl-layout__title">Shareing</slot>
        <nav class="mdl-navigation mdl-layout&#45;&#45;large-screen-only">
          <slot>
            test
          </slot>
        </nav>
        <div class="mdl-layout-spacer"></div>
        <slot>
          test2
        </slot>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout&#45;&#45;small-screen-only">
      <slot text="hello from child" classname="mdl-layout__title"></slot>
      <nav class="mdl-navigation">
        <slot>
          test3
        </slot>
      </nav>
    </div>
  </div>-->

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title"><a href="/parts/share/home/home.html">Sharing</a></span>
            <!--<div class="mdl-layout-spacer"></div>-->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <!--<a class="mdl-navigation__link" href="#">讨论版</a>-->
              <mu-flat-button label="讨论版" color="#fff" backgroundColor="transparent" href="/parts/share/posts/posts.html"target="_blank"/>
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
            <!--<mu-raised-button label="登录" class="login-raised-button mdl-shadow&#45;&#45;2dp" primary backgroundColor="transparent" href="/parts/share/login/login.html"/>-->
          </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <span class="mdl-layout-title"><a href="/parts/share/home/home.html">Sharing</a></span>
          <!--<div class="mdl-layout-spacer"></div>-->
          <nav class="mdl-navigation">
            <!--<a class="mdl-navigation__link" href="#" color="#fff">讨论版</a>-->
            <!--<mu-flat-button label="交流分享" ref="button1" @click="toggle1" color="#fff" backgroundColor="#009688;"/>-->
            <div>
              <mu-flat-button label="讨论版" color="#009688" backgroundColor="transparent" href="/parts/share/posts/posts.html"target="_blank"/>
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


 /* .demo-layout-transparent .mdl-layout__header,
  .demo-layout-transparent .mdl-layout__drawer-button {
    !* This background is dark, so we set text to white. Use 87% black instead if
       your background is light. *!
    color: #FFF;
  }
  .mdl-layout__header-row .mdl-navigation__link{color: #FFF;}
  .appbar-search-field{
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
       color: #FFF;
     }
    .text-field-hint {
      color: fade(#FFF, 54%);
    }
    .text-field-input {
      color: #FFF;
    }
    .text-field-focus-line {
      background-color: #FFF;
    }
  }

  .demo-popover-title {
    margin-bottom: 0;
    font-weight: 500;
  }

  .demo-anchor-origin{
    display: flex;
  }

  .demo-origin-block{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }
  .demo-origin-raido {
    margin-top: 12px;
  }*/

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
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题

  /*全部加载muse-ui用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
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
