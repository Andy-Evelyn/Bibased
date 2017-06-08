<template>
  <div class="main">
    <div class="banner">
      <img :src="banner_img" alt="">
      <div class="bannerTitle">
        <h1>share，&nbsp;在这里</h1>
        <h1>分享知识与见解</h1>
      </div>
    </div>

<!--    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell&#45;&#45;6-col">
        <div class="moreTitle">
          <mu-icon value="message" :size="48" color="#f1b200"/><span>讨论版</span>
          <a href="../../../parts/share/posts/posts.html">更多>></a>
        </div>
        &lt;!&ndash;切换按钮&ndash;&gt;
        <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
          <mu-tab value="tab1" title="最新"/>
          <mu-tab value="tab2" title="最热"/>
        </mu-tabs>
        &lt;!&ndash;显示内容&ndash;&gt;
        <div v-if="activeTab1 === 'tab1'">
          <div class="context_one">
            <img :src="banner_img1" class="item_img"/>
            <div class="item_cont">
              <h6><a class="text" href="#">vue-cli的监听端口在哪里修改?</a></h6>
              <p> • <span class="itemUser_name">2013081302 </span>发起了问题 • <span>7</span>个回复 • <span>154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
        <div v-if="activeTab1 === 'tab2'">
          <div class="context_one">
            <img :src="banner_img1" class="item_img"/>
            <div class="item_cont">
              <h6><a class="text" href="#">test最热。。。修改。。。</a></h6>
              <p> • <span class="itemUser_name">2013081420 </span>发起了问题 • <span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="mdl-cell mdl-cell&#45;&#45;6-col">
        <div class="moreTitle">
          <mu-icon value="forum" :size="48" color="#f1b200"/><span>分享</span>
          <a href="../../../parts/share/resources/resources.html">更多>></a>
        </div>
        &lt;!&ndash;切换按钮&ndash;&gt;
        <mu-tabs :value="activeTab2" @change="handleTabChangeRe">
          <mu-tab value="tab1" title="最新"/>
          <mu-tab value="tab2" title="最热"/>
        </mu-tabs>
        &lt;!&ndash;显示内容&ndash;&gt;
        <div v-if="activeTab2 === 'tab1'">
          <div class="context_one">
            <img :src="banner_img1" class="item_img"/>
            <div class="item_cont">
              <h6><a class="text" href="#">vue学习</a></h6>
              <p> • <span class="itemUser_name">2013081125 </span>发起了问题 • <span>3</span>个回复 • <span>15</span>次浏览 • <span>2016-5-28</span></p>
            </div>
          </div>
        </div>
        <div v-if="activeTab2 === 'tab2'">
          <h5>最热内容</h5>
          <p>
            这是第二个 tab
          </p>
        </div>
      </div>
    </div>-->

  </div>

</template>

<style lang="less">
  .main{
  @media (min-width: 840px){
    .mdl-cell{
      padding:20px 0 0 80px !important;
    }
  }
  .mu-tabs{
    background: #fff !important;
  }
  .mu-tab-link{
    color:#009688 !important;
  }
  .mu-tab-active{
    color: #0b9613 !important;
  }
    .banner{
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 15%;
      img{
        width:100%;
        height:100%;
        min-height: 200px;
      }
      .bannerTitle{
        position: absolute;
        top:40%;
        z-index:3;
        text-align: center;
        width:100%;
        color:#fff;
        h1{
          letter-spacing: 4px !important;
        }
      }
    }
    /*增加背景强度*/
    .mdl-grid{
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
      border-radius: 3px;
      margin:8px;
      background: #fff;
    }
    .mdl-grid .moreTitle{
      position:relative;
      padding-bottom:20px;
      >span{
/*        border-left:3px solid #009688;
        padding:0 10px;*/
         padding: 0 10px;
         position: absolute;
         font-size: 24px;
         color:#009688 !important;
       }
       >a{
        position: absolute;
        right:10px;
        }
    }
    .context_one {
      position: relative;
      /*height: 60px;*/
      min-height: 45px;
      padding: 20px 0;
      border-bottom: 1px solid #e6e6e6;
      >img{
        position: absolute;
        top: 22px;
        width: 40px;
        height: 40px;
        border-radius:5px;
       }
      .item_cont {
        padding-left: 60px;
        h6{
          font-size: 14px !important;
          margin:0 !important;
        }
        >p{
          font-size: 12px !important;
          color:#999;
        }
        .itemUser_name{
          color:#666;
        }
      }
    }
  }
</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  import 'assets/css/style.css'

  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
  import banner_img from '../../assets/images/slide1.jpg'
  import banner_img1 from '../../assets/images/user.png'
  export default{
    data(){
      return {
        banner_img: banner_img,
        banner_img1: banner_img1,
        activeTab1: 'tab1',
        activeTab2: 'tab1',
      }
    },
    methods:{
      handleTabChangeposts (val) {
        this.activeTab1 = val
      },
      handleTabChangeRe(val){
        this.activeTab2 = val
      }
    },
    components: {
    }
  }
</script>
