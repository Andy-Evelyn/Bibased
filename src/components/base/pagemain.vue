<template>
  <div class="main">
    <div class="banner">
      <img :src="banner_img" alt="">
      <div class="bannerTitle">
<!--        <h1>在这里你可以</h1>
        <h5>学习——这里积聚着大家的智慧，也许其中蕴藏着困扰你许久的答案！</h5>
        <h5>交流——让思想碰撞在一起，擦出更多火花！</h5>
        <h5>分享——记录下你遇到的困难时的解决方法，分享你的“知识点”！</h5>-->
        <h1>share，&nbsp;在这里</h1>
        <h1>分享知识与见解</h1>
      </div>
    </div>
    <div class="mdl-grid">

      <div class="mdl-cell mdl-cell--6-col">
        <div class="moreTitle">
          <!--<mu-icon value="question_answer" :size="48" color="#c39d32"/>--><span>讨论版</span>
          <a href="../../../parts/share/posts/posts.html">更多>></a>
        </div>
        <!--切换按钮-->
        <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
          <mu-tab value="tab1" title="最新"/>
          <mu-tab value="tab2" title="最热"/>
        </mu-tabs>
        <!--显示内容-->
        <div v-if="activeTab1 === 'tab1'">
          <div class="context_one">
            <img :src="banner_img" class="item_img"/>
            <div class="item_cont">
              <h6><a class="text" href="#">test Ghost的监听端口在哪里修改。。。</a></h6>
              <p><span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
        <div v-if="activeTab1 === 'tab2'">
          <div class="context_one">
            <img :src="banner_img" class="item_img"/>
            <div class="item_cont">
              <h6><a class="text" href="#">test最热。。。修改。。。</a></h6>
              <p><span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="mdl-cell mdl-cell--6-col">
        <div class="moreTitle">
          <span>分享</span>
          <a href="../../../parts/share/resources/resources.html">更多>></a>
        </div>
        <!--切换按钮-->
        <mu-tabs :value="activeTab2" @change="handleTabChangeRe">
          <mu-tab value="tab1" title="最新"/>
          <mu-tab value="tab2" title="最热"/>
        </mu-tabs>
        <!--显示内容-->
        <div v-if="activeTab2 === 'tab1'">
          <h5>最新内容</h5>
          <p>
            这是第一个 tab
          </p>
        </div>
        <div v-if="activeTab2 === 'tab2'">
          <h5>最热内容</h5>
          <p>
            这是第二个 tab
          </p>
        </div>
      </div>
    </div>
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
      /*background:url("../../assets/images/slide1.jpg") no-repeat;*/
      /*background-size:100% auto;*/
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
    .mdl-grid .moreTitle{
      position:relative;
      padding-bottom:20px;
      >span{
        border-left:3px solid #009688;
        padding:0 10px;
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
          margin:0 !important;
        }
        >p{
          color:#999;
        }
      }
    }
  }
</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  import 'assets/css/style.css'

  /*全部加载muse-ui用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
  import banner_img from '../../assets/images/slide1.jpg'
  export default{
    data(){
      return {
        banner_img: banner_img,
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
