<template>
  <div>
    <PageHeader>
      <template scope="props" slot="user">
        <mu-list class="personalR">
          <mu-list-item class="personal">
            <mu-avatar  slot="left" :src="userUrl" :size="40"/>
            <span class="userName">用户名</span>
          </mu-list-item>
        </mu-list>
      </template>
    </PageHeader>

    <div>
      <mu-paper class="menu2"  :zDepth="2">
        <mu-menu>
          <mu-menu-item title="个人中心"/>
          <mu-menu-item title="退出"/>
        </mu-menu>
      </mu-paper>
    </div>
  </div>



</template>
<style lang="less">
.personalR {
  width: 24%!important;
  padding:0 !important;
  .mu-item-wrapper{
    &:hover{
       background: rgba(255,255,255,1)!important;
     }
  }
  .personal{
    .userName{
      color:#fff !important;
    }
    &:hover{
       /*background: rgba(255,255,255,1)!important;*/
      .userName{
        color:#009688 !important;
      }
    }
  }
}
.menu2{
  display: inline-block;
  position: absolute;
  top:20px;
  /*height: 100px;*/
  /*width: 100px;*/
  text-align: center;
}

</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import imgurl from '../../../assets/images/background.jpg'
  /*全部加载，用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)

  import PageHeader from 'components/base/pageheader';
  export default{
    data(){
      return {
        userUrl: imgurl
      }
    },
    components: {
      /*      appBar,
       textField,
       flatButton,
       icon*/
      PageHeader
    }
  }
</script>
