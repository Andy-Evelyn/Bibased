<template>
  <div>
    <PageHeader>
      <template scope="props" slot="user">
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
                <mu-menu>
                  <mu-menu-item href="../../../parts/share/personal/personal.html" title="个人中心"/>
                  <mu-menu-item href="https://www.baidu.com/" title="退出"/>
                </mu-menu>
              </mu-paper>
            </div>
          </a>
        </div>
      </template>
    </PageHeader>
  </div>

</template>
<style lang="less">
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
    /*z-index: 100 !important;*/
    /*top: 64px;*/
    /*right: 65px;*/
    /*height: 100px;*/
    width: 163px;
    text-align: center;
  }
  }
  &:hover>div.m1{
     display: inline-block !important;
  .menu2 {
    display: block !important;
  }
  }

  }


</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import imgurl from '../../assets/images/background.jpg'
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
      PageHeader,
    }
  }
</script>
