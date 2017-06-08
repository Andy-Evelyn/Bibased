<template>
  <div class="postSend-main">
    <div class="mdl-grid">
      <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
        <p class="SendTitle">
          <mu-icon value="card_travel" :size="48" color="#f1b200"/><span>新建<slot name="build_title"></slot></span>
        </p>
        <form class="post-Sendform" action="">
          <!--<p class="postSend_class">-->
            <!--分类：-->
            <!--<a href="javascript:void(0)" id="a1">标签一</a>-->
            <!--<a href="javascript:void(0)">标签二</a>-->
            <!--<a href="javascript:void(0)">标签三</a>-->
            <!--<a href="javascript:void(0)">标签四</a>-->
            <slot name="send_tags"></slot>
          <!--</p>-->
          <!--<p class="send_title">-->
            <!--标题：<input type="text" class="" name="send_title">-->
          <!--</p>-->
          <p>
            <slot name="send_file"></slot>
            <!--上传文件：<input type="file" class="" name="send_file">-->
          </p>
          <p>
            <slot name="send_file"></slot>
            <!--上传文件：<input type="file" class="" name="send_file">-->
          </p>
          <div>
            <slot name="send_blog"></slot>
          </div>
          <div>
            <slot name="send_note"></slot>
          </div>
          <p class="send_button">
            <mu-flat-button label="分享" to="/" backgroundColor="orange" labelPosition="before" icon="near_me" color="#fff"/>
          </p>
        </form>
      </mu-paper>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
  .test{
    font-size: 68px;
  }
  .postSend-main {
    padding-top: 74px;
  .mdl-grid {
    margin: 0 20%;
    min-width: 500px;
    .mu-paper-round {
      border-radius: 50px !important;
    }
  .mdl-cell{
    padding:10px;
    position: relative;
  }
  .SendTitle {
    /*padding-bottom: 20px;*/
    line-height: 60px;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    margin:0 0 40px 0 !important;
    text-align:center;
    font-size: 24px;
    color: #009688 !important;
  > span {
      padding: 0 10px;
      position: relative;
      top: -12px;
      font-size: 24px;
      color: #009688 !important;
      /*color: #d9ba4b !important;*/
    }
  }
  .post-Sendform{
    /*border:1px solid blue;*/
    position: relative;
    /*width:60%;*/
    min-width:500px;
    margin:0 auto;
    padding:0 30px;
  .mu-flat-button-label{
    font-size: 16px !important;
    font-weight: bolder !important;
  }

  /*标题*/
  .send_title{
    input{
      display: inline-block;
      width: 70%;
      height: 35px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      outline: none;
    }
  }
  /*内容*/
  /*p:nth-of-type(2){*/
  /*textarea{*/
    /*width: 100%;*/
    /*height: 230px;*/
    /*resize: none;*/
    /*outline: none;*/
    /*border-radius: 5px;*/
    /*border: 1px solid #e6e6e6;*/
  /*}*/
  /*}*/
  /*发送*/
  .send_button{
    text-align: right;
    padding-top: 15px;
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

  import $ from 'jquery';
  export default{
    name:"postsend",
    data(){
      return {
      }
    },
    mounted() {
//      this.selectClass();
//      $("#a1").trigger("click"); //默认选中标签一
    },
    components: {

    },
    methods: {
//      selectClass(){   //选标签
//        $(".postSend_class a").click(function () {
//          console.log($(this).text());  //标签类别
//          if($(this).hasClass("selected")){
//            $(this).removeClass("selected");
//          }
//          else{
////              $(this).siblings('a').removeClass("selected");  //只选一个
//            $(this).addClass("selected");
//          }
//        });
//      }
    }
  }
</script>
