<template>
  <div style="height:100%;">
    <div class="listtabsmain">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="postTitle">
            <mu-icon value="message" :size="48" color="#f1b200"/><span>讨论版</span>
            <mu-raised-button label="发布帖子" to="postsend" class="send_postBtn" primary href="#"/>
            <mu-text-field label="搜索" icon="search" hintText="输入关键词" labelFloat/>
          </div>
          <div class="tabsMain">
            <!--切换按钮-->
            <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
              <mu-tab value="tab1" :title="tabsData[0]"/>
              <mu-tab value="tab2" :title="tabsData[1]"/>
              <mu-tab value="tab3" :title="tabsData[2]"/>
              <mu-tab value="tab4" :title="tabsData[3]"/>
              <mu-tab value="tab5" :title="tabsData[4]"/>
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
          </div>
          <!--分页-->
          <mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .listtabsmain{
    position: relative;
    padding-top:94px;
/*  !*f分页在右边显示*!
  .mu-pagination{
    float: right;
  }*/
  /*增加背景强度*/
  .mdl-grid {
    background:#fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
    border-radius: 3px;
    margin: 0 20%;
    min-width: 500px;
  .postTitle {
    position: relative;
    padding-bottom: 20px;
  .mu-text-field.has-label {
    position: absolute;
    right: 0;
    top: 25px;
  }
  .mu-text-field-icon{
    left:90% !important;
  }
  > span {
      padding: 0 10px;
      position: absolute;
      font-size: 24px;
      color: #009688 !important;
    }
  > a {
      position: absolute;
      right: 10px;
    }
  .send_postBtn{
    position: absolute;
    right: 20px;
  }
  }
  }
  }


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
  }
</style>
<script>
  import userImg from '../../../assets/images/user.png'
  export default{
    name:"postsmain",
    data(){
      return {
        total: 500,
        current: 1,
        activeTab1: 'tab1',
        userImg: userImg,
        tabsData:['最新', '最热', '分类一', '分类二', '分类三'],
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
    },
    methods:{
      handleTabChangeposts (val) {
        this.activeTab1 = val
      },
      handleClick (newIndex) {
      }
    },
  }
</script>
