<template>
  <div>
    <div class="resourcesMain">
      <div class="mdl-grid">
        <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
          <div class="ResTitle">
            <mu-icon value="message" :size="48" color="#f1b200"/><span>分享</span>
            <a class="send_postBtn" href="#">我要分享
              <div class="newItemMain">
                <div class="entry-trangle"></div>
                <div class="newItem">
                  <router-link to="buildfile">文档资料</router-link>
                  <router-link to="buildblog">技术博客</router-link>
                  <router-link to="buildnote">个人笔记</router-link>
                </div>
              </div>
            </a>
            <!--<mu-text-field label="搜索" type="text"  @keyup.enter.native="search()" icon="search" hintText="输入关键词" labelFloat/>-->
          </div>
          <div class="tabsMain">
            <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
              <mu-tab value="tab1" id="wendang" title="文档资料" @click="handle"/>
              <mu-tab value="tab2" title="技术博客"/>
              <mu-tab value="tab3" title="个人笔记"/>
            </mu-tabs>
            <!--显示内容-->
            <div class="postsL_all" v-if="activeTab1 === 'tab1'" >
              <div class="context_one" v-for="item in fileData" :key="item">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6><router-link :to="'show/'+item.id" class="text" >{{item.title}}</router-link></h6>
                  <p> • <span class="itemUser_name">{{item.userinfo.nickName}} </span>的发布 • <span>{{item.comment_num}}</span>个回复 • <span>{{item.down_num}}</span>次下载 • 最后一次更新时间 • <span>{{item.mtime}}</span></p>
                </div>
              </div>
            </div>


          <div class="postsL_all" v-if="activeTab1 === 'tab2'" >
            <div class="context_one" v-for="item in blogData" :key="item">
              <img :src="userImg" class="item_img"/>
              <div class="item_cont">
                <h6><router-link :to="'blogshow/'+item.id" class="text" >{{item.title}}</router-link></h6>
                <p> • <span class="itemUser_name">{{item.userinfo.nickName}} </span>的发布 • <span>{{item.comment_num}}</span>个回复 • <span>{{item.view_num}}</span>次浏览 • 最后一次更新时间 • <span>{{item.mtime}}</span></p>
              </div>
            </div>
          </div>

            <div class="postsL_all" v-if="activeTab1 === 'tab3'" >
              <div class="context_one" v-for="item in noteData" :key="item">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6><router-link :to="'noteshow/'+item.id" class="text" >{{item.title}}</router-link></h6>
                  <p> • <span class="itemUser_name">{{item.userinfo.nickName}} </span>的发布 • 最后一次更新时间 • <span>{{item.mtime}}</span></p>
                </div>
              </div>
            </div>

        </div>
          <!--分页-->
          <!--<mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>-->
        </mu-paper>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .resourcesMain {
    padding-top: 74px;
    .mdl-grid {
      margin: 0 20%;
      min-width: 500px;
      .ResTitle {
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
            .newItemMain{
              display: none;
              position: absolute;
              width:100%;
              min-width: 88px;
              /*top:36px;*/
              left: 88px;
              top: -21px;
              text-align: center;
              z-index:10;
              /*background:#f2f2f2 !important;*/
              /*border:1px solid lightgreen;*/
              /*border-color:transparent transparent lightgreen transparent;*/
              /*border:1px solid #99cfff;*/
               .entry-trangle{
                  width:0;
                  height:0;
                  position: absolute;
                  z-index: -1;
                  top:30px;
                  border-top: 8px solid transparent;
                  border-bottom: 8px solid transparent;
                  /*border-right: 8px solid #f1b200;*/
                 border-right: 8px solid #41f1a4;
                }
              .newItem{
                margin-left: 8px;
                background:#fff;
                /*box-shadow: 0 1px 6px rgba(153,207,255,.117647), 0 1px 4px rgba(153,207,255,.117647);*/
                border:2px solid #41f1a4;
                border-radius:8px;
                a{
                  display: block;
                  height: 28px!important;
                  line-height: 28px!important;
                  width:100%;
                  /*color:#12cba5!important;*/
                  color:#ff4081 !important;
                &:hover{
                   color: #fff !important;
                   background:#12cba5;
                 }
                }
              }
            }
          .send_postBtn{
            display: inline-block;
            position: absolute;
            right: 20px;
            border-radius: 2px;
            height: 36px;
            line-height: 36px;
            min-width: 88px;
            text-align: center;
            color:#fff !important;
            background: #009688 !important;
            box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
            &:hover{
                .newItemMain{
                  display: block;
                }
             }
          }
      }
      .mdl-cell {
        padding: 20px;
        position: relative;
      }
     }
  }

  .tabsMain{
    position: relative;
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
  img{
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
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  import userImg from '../../../assets/images/user.png'
  import $http from 'src/api/http.js';
  export default{
    data(){
      return {
        total: 500,
        current: 1,
        userImg:userImg,
        activeTab1: 'tab1',
        fileData:[],
        blogData:[],
        noteData:[],
        formData:{
            limit:10,
            start:0,
        },
        formblogData:{
          limit:10,
          start:0,
        },
        formnoteData:{
          limit:10,
          start:0,
        }
      }
    },
    mounted() {
      this.handle()
    },
    components: {
      ListTabs,
      PaginAtion,
    },
    methods:{
      handle(){
        this.$emit('change','tab3');
      },
      handleTabChangeposts (val) {
        this.activeTab1 = val;
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Blog/Show',
          data: this.formblogData
        }).done((res)=>{
//            this.categoryData=res.data;
          this.blogData=res.data.list;
        }).always(()=>{

        })
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Note/Show',
          data: this.formnoteData
        }).done((res)=>{
//            this.categoryData=res.data;
          this.noteData=res.data.list;
        }).always(()=>{

        })
      },
      handleClick (newIndex) {
      },
      search(){
        this.$router.push({path:'/search'});
      },
    },
    created(){
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/Document/Show',
        data: this.formData
      }).done((res)=>{
//            this.categoryData=res.data;
        this.fileData=res.data.list;
      }).always(()=>{

      })
    }
  }
</script>
