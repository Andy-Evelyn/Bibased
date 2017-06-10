<template>
  <div class="adminMain">
    <header>
      <div>
        <span class="adL">
          <a href="#" class="adL_title">sharing</a>
          后台管理
        </span>
        <span class="adR" @click="logout">
          <mu-icon value="power_settings_new"/>&nbsp;&nbsp;退出
      </span>
      </div>
    </header>
    <!--头部结束-->
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col">
        <div class="con_left">

          <mu-list activeClass="router-link-active">

            <mu-list-item title="讨论版" to="adpost">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
            <mu-list-item title="文档资料" to="adfile">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
            <mu-list-item title="技术博客" to="adblog">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
            <mu-list-item title="个人笔记" to="adnote">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
<!--            <mu-list-item title="博客分类" toggleNested>
              <mu-icon slot="left" value="inbox"/>

              <mu-list-item slot="nested" title="添加" toggleNested>
                <mu-icon slot="left" value="inbox"/>
                <mu-list-item slot="nested" title="tag">
                  <mu-icon slot="left" value="inbox"/>
                </mu-list-item>
              </mu-list-item>

              <mu-list-item slot="nested" title="删除">
                <mu-icon slot="left" value="inbox"/>
              </mu-list-item>-->

            </mu-list-item>

          </mu-list>

        </div>
        <!--con_left 结束-->
      </div>
      <div class="mdl-cell mdl-cell--10-col">
        <!--<AdminTable></AdminTable>-->
        <!--<slot name="adpost"></slot>-->
        <!--<slot name="adnote"></slot>-->
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>
<style lang="less">
  html,body{
    height:100%;
    width:100%;
  }
  /*图标引入*/
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src:url(../../../assets/font/MaterialIcons-Regular.woff2),
    url(../../../assets/font/MaterialIcons-Regular.woff),
    url(../../../assets/font/MaterialIcons-Regular.eot),
    url(../../../assets/font/MaterialIcons-Regular.ttf);
  }
  .material-icons {
    font-family: 'Material Icons' !important;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
  /*头部样式*/
  .adminMain{
  header{
    background: #009688;
    color: #fff;
  >div{
     margin:0 auto;
     position: relative;
     width:90%;
     height:64px;
     line-height:64px;
  span,a{
    display: inline-block;
  }
  .adL{
    width:68%;
    text-indent:120px;
  .adL_title{
    font-size: 20px !important;
    position: absolute;
    left:-120px;
  }
  }
  .adR{
    width:30%;
    text-align: right;
    cursor:pointer;
  /*管理员名*/
  .adUserName{
    padding-right: 30px;
  }
  .mu-icon {
    position: relative;
    top: 5px;
  }
  }
  }
  }
  /*header end*/
  .con_left{
    width:100%;
    height:100%;
    /*min-height: 500px;*/
    /*padding-top:50px;*/
    /*background: #85bfbe;*/
    color:#fff !important;
    min-width: 200px;
    /*border:1px solid blue;*/
  }
  }
  .router-link-active {
    color: #3e54b8 !important;
    .mu-item-title{
      /*color: #59a176 !important;*/
      color: #ff4081 !important;
    }
  }
  /*f分页在右边显示*/
  .mu-pagination{
    float: right;
  }
</style>
<script>

  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)

  import AdminTable from './adtable'
  import $http from 'src/api/http.js';
  export default{
    data () {
      return {

      }
    },
    methods: {
      logout(){
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Logout',
          data: ''
        }).done((res)=>{
          if(confirm("确认退出？")){
            window.location.href="../../../parts/share/admin/admin.html"
//            this.router.push('/');
          }else{
            return false;
          }
        })
      }
    },
    components: {
      AdminTable,
    },
    created(){
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/Auth/checkIsLogin',
      }).done((response) => {
        const data = response.data;
        console.log(data);
        if (response.code == 200) {
//          this.$store.dispatch('setUserInfo', data);
          this.userName = data.nickName;
        } else {
          alert("请先登录");
          window.location.href="../../../parts/share/admin/admin.html"
        }
      }).fail((jqXHR, textStatus, errorThrown)=>{
//        this.$store.dispatch('showInfoDialog', "请求发生错误，请稍后再试");
        alert("请求发生错误，请稍后再试");
      }).always(function () {
      });
    },
  }
</script>
