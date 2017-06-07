<template>
  <div style="height:100%;">
    <div class="listtabsmain">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="tabsMain">
            <p>搜索到以下结果：</p>
            <!--显示内容-->
            <div class="postsL_all" v-for="item1 in itemData" :key="item1">
              <div class="context_one">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6><router-link to="comment" class="text" >{{item1.title}}</router-link></h6>
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
  /*增加背景强度*/
  .mdl-grid {
    background:#fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
    border-radius: 3px;
    margin: 0 20%;
    min-width: 500px;
  }
  }

  .tabsMain{
    position: relative;
  .context_one {
    position: relative;
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
      },
    },
  }
</script>
