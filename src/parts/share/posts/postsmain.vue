<template>
  <div style="height:100%;">
    <div class="listtabsmain">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="postTitle">
            <mu-icon value="message" :size="48" color="#f1b200"/>
            <span>讨论版</span>
            <mu-raised-button label="发布帖子" to="postsend" class="send_postBtn" primary href="#"/>
            <!--<mu-text-field type="text" @keyup.enter.native="search()" label="搜索" icon="search" hintText="输入关键词"-->
                           <!--labelFloat/>-->
          </div>
          <div class="tabsMain">
            <!--切换按钮-->
            <mu-tabs :value="activeTab1" @change="handleTabChangeposts">
              <mu-tab value="tab0" title="全部"/>
              <mu-tab v-for="(tabitem,index) in tabData" :key="index" :value="'tab' +(index+1)"
                      :title="tabitem.cate_name" />
            </mu-tabs>

            <!--显示内容-->
            <div class="postsL_all" v-if="activeTab1 === 'tab0'">
              <div class="context_one" v-for="(item1,index) in itemData" :key="index">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6>
                    <router-link :to="'show/'+item1.id" class="text">{{item1.title}}</router-link>
                  </h6>
                  <p> • <span class="itemUser_name">{{item1.userinfo.nickName}} </span>的发布 •
                    <span>{{item1.comment_num}}</span>个回复 • <span>{{item1.view_num
}}</span>次浏览 • <span>{{item1.mtime}}</span></p>
                </div>
              </div>
            </div>

            <div class="postsL_all" v-for="(liitem,index) in tabData" :key="index" v-if="activeTab1 === 'tab' +(index+1)">
              <div class="context_one" v-for="(item,index) in categoryData" :key="index">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6>
                    <router-link :to="'show/'+item.id" class="text">{{item.title}}</router-link>
                  </h6>
                  <p> • <span class="itemUser_name">{{item.userinfo.nickName}} </span>的发布 • <span>{{item.comment_num}}</span>个回复
                    • <span>{{item.view_num}}</span>次浏览 • <span>{{item.mtime}}</span></p>
                </div>
              </div>
            </div>

          </div>
          <!--分页-->
          <!--<mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>-->
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
    /*width: 50%;*/
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
  import $http from 'src/api/http.js';
  export default{
    name:"postsmain",
    data(){
      return {
        total: 500,
        current: 1,
        activeTab1: '',
        activeID:"",
        userImg: userImg,
        tabData:[],
        itemData:[],
        tabList:[],
        categoryData:[],
        form:{
            limit:10,
            start:0,
        },
        category:{
          limit:10,
          start:0,
          cateid:'',
        },
      }
    },
    components: {
    },
    created(){
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/Auth/checkIsLogin',
      }).done((response) => {
        const data = response.data;
        console.log(data);
        if (response.code === 200) {
//          this.$store.dispatch('setUserInfo', data);
          $http.corspost({
            url: 'http://118.89.217.84/exchange-platform/index.php/BbsCategory/Show',
            data: '',
          }).done((res)=>{
            this.activeTab1='tab0';
            this.tabData=res.data;
//        this.category.cateid = res.data.cate_name;
          })
          $http.corspost({
            url: 'http://118.89.217.84/exchange-platform/index.php/Bbs/Show',
            data: this.form,
          }).done((res)=>{
            this.itemData=res.data.list;
          })
        } else {
          alert("请先登录");
          window.location.href="../../../parts/share/login/login.html"
        }
      }).fail((jqXHR, textStatus, errorThrown)=>{
        this.$store.dispatch('showInfoDialog', "请求发生错误，请稍后再试");
      }).always(function () {
      });
    },

    methods:{
      handleTabChangeposts (val) {
        this.activeTab1 = val;
        var index=val.slice(3);
        console.log(val,index);
        if(index==0){
            this.category.cateid=""
        }else{
          var id=this.tabData[index-1].id;
          this.category.cateid = id;
        }
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Bbs/Show',
          data: this.category
        }).done((res)=>{
//            this.categoryData=res.data;
            this.categoryData=res.data.list;
        })/*.always(()=>{

        })*/
      },
      handleClick (newIndex) {
      },
      search(){
        this.$router.push({path:'/search'});
      }
    },
  }
</script>
