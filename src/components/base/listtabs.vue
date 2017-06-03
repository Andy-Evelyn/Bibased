<template>
  <div class="tabsMain">
    <!--<div class="mdl-grid">-->
      <!--<div class="mdl-cell mdl-cell&#45;&#45;12-col">-->
        <!--<div class="moreTitle">-->
          <!--<mu-icon value="message" :size="48" color="#f1b200"/><span>讨论版</span>-->
        <!--</div>-->
        <!--切换按钮-->
        <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
          <!--<mu-tab value="tab1" title="最新"/>-->
          <!--<mu-tab value="tab2" title="最热"/>-->
          <slot name="addTabs"></slot>
        </mu-tabs>
        <!--显示内容-->
        <div class="postsL_all" v-if="activeTab1 === 'tab1'" v-for="item1 in itemData" :key="item1">    <!--v-if="activeTab1 === 'tab1'"-->
          <div class="context_one">
            <img :src="userImg" class="item_img"/>
            <div class="item_cont">
              <h6><router-link to="detail" class="text" >{{item1.title}}</router-link></h6>
              <p> • <span class="itemUser_name">{{item1.username}} </span>的发布 • <span>{{item1.huifu}}</span>个回复 • <span>{{item1.liulang}}</span>次浏览 • <span>{{item1.time}}</span></p>
            </div>
          </div>
        </div>
       <div v-if="activeTab1 === 'tab3'">
          <div class="context_one">
            <img :src="userImg" class="item_img"/>
            <div class="item_cont">
              <h6><router-link to="postscomment" class="text" >3333 test最热。。。修改。。。</router-link></h6>
              <p> • <span class="itemUser_name">2013081420 </span>的发布 • <span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
  <!--       <div v-if="activeTab1 === 'tab3'">
          <div class="context_one">
            <img :src="userImg" class="item_img"/>
            <div class="item_cont">
              <h6><router-link to="postscomment" class="text" >test Ghost的监听端口在哪里修改。。。</router-link></h6>
              <p> • <span class="itemUser_name">2013081420 </span>发起了问题 • <span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
        <div v-if="activeTab1 === 'tab4'">
          <div class="context_one">
            <img :src="userImg" class="item_img"/>
            <div class="item_cont">
              <h6><router-link to="postscomment" class="text" >test最热。。。修改。。。</router-link></h6>
              <p> • <span class="itemUser_name">2013081420 </span>发起了问题 • <span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
            </div>
          </div>
        </div>
        <div v-if="activeTab1 === 'tab5'">
        <div class="context_one">
          <img :src="userImg" class="item_img"/>
          <div class="item_cont">
            <h6><router-link to="postscomment" class="text" >5555最热。。。修改。。。</router-link></h6>
            <p> • <span class="itemUser_name">2013081420 </span>发起了问题 • <span>7</span>个回复 • <span>1154</span>次浏览 • <span>2016-5-23</span></p>
          </div>
        </div>
    </div>-->
        <slot name="activeTab"></slot>
        <!--<PaginAtion></PaginAtion>-->
      <!--</div>-->
    <!--</div>-->
  </div>

</template>
<style lang="less">
  .tabsMain{
    position: relative;
  /*增加背景强度*/
/*    .mdl-grid{
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
      border-radius: 3px;
      margin: 0 20%;
      min-width: 500px;*/
      .mu-tabs{
        background: #fff !important;
        z-index:1 !important;
        width: 50%;
        min-width: 95px;
      }
      .mu-tab-link{
        color:#009688 !important;
      }
      .mu-tab-active{
        color: #0b9613 !important;
      }
      .moreTitle{
        position:relative;
        padding-bottom:20px;
      >span{
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
        border-top: 1px solid #e6e6e6;
        >img{
           position: absolute;
           top: 22px;
           width: 40px;
           height: 40px;
           border-radius:5px;
         }
        .item_cont {
          padding-left: 60px;
          h6,>p{
            height:24px;
            overflow: hidden;
          }
          h6{
            font-size: 14px !important;
            margin:0 !important;
          }
          >p{
             font-size: 12px !important;
             color:#999;
             margin:0 !important;
           }
           .itemUser_name{
              color:#666;
            }
        }
      }
  /*}*/
}

</style>
<script>

  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)

  import userImg from '../../assets/images/user.png'
//  import PaginAtion from 'components/base/pagination';

  export default{
    data(){
      return {
        userImg: userImg,
        activeTab1: 'tab1',
        itemData:[
            {
              title:'Vue电子书籍',
              username:'2013081420',
              huifu:'7',
              liulang:'150',
              time:'2017-5-13',
            },
            {
              title:'vue的监听端口在哪里修改',
              username:'2013081510',
              huifu:'0',
              liulang:'10',
              time:'2017-5-20',
            },
            {
              title:'php学习资料',
              username:'2014081609',
              huifu:'7',
              liulang:'08',
              time:'2017-5-21',
            }
        ],
      }
    },
    components: {
//      PaginAtion,
    },
    methods:{
      handleTabChangeposts (val) {
        this.activeTab1 = val
      },
    }
  }
</script>
