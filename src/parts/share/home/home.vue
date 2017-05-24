<template>
  <div>
    <div style="display: flex;z-index: 30;">
      <PageHeader>
        <template scope="props" slot="login">
          <mu-raised-button label="登录" class="login-raised-button mdl-shadow--2dp" primary backgroundColor="transparent" href="../../../parts/share/login/login.html"/>
        </template>
      </PageHeader>
    </div>
    <PageMain></PageMain>
    <PageFooter></PageFooter>
  </div>



    <!--<router-link to="sharepersonal">个人中心</router-link>-->
<!--  <div>
    <appBar>
      <flatButton color="white" label="讨论版" slot="left"/>
      <flatButton color="white" label="交流分享" slot="left"/>
      <textField icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
      <flatButton color="white" label="个人中心" slot="right"/>

    </appBar>
      <icon value="home" color="red"/>
  </div>-->

</template>

<style lang="less">
  .appbar-search-field{
    color: #FFF;
    margin-bottom: 0;
  &.focus-state {
     color: #FFF;
   }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  }
</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
/*  import appBar from 'muse-components/appBar'
  import textField  from 'muse-components/textField'
  import flatButton from 'muse-components/flatButton'*/
//  import icon from 'muse-components/icon'
//  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题

/*全部加载，用于测试*/
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


  import PageHeader from 'components/base/pageheader';
  import PageMain from 'components/base/pagemain';
  import PageFooter from 'components/base/pagefooter';
  export default{
    data () {
      return {
        activeTab: 'tab1',
        total: 50,
        current: 1,
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        window.alert('tab active')
      },
      handleClick (newIndex) {
      }
    },
    components: {
/*      appBar,
      textField,
      flatButton,
      icon*/
      PageHeader,
      PageMain,
      PageFooter,
    }
  }
</script>
