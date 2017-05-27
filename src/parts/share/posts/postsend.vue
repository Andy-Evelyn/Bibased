<template>
  <div class="postSend-main">
    <div class="mdl-grid">
        <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
          <p class="postSendTitle">
            <mu-icon value="create_new_folder" :size="48" color="#f1b200"/><span>发布帖子</span>
          </p>
          <form class="post-Sendform" action="">
            <p class="postSend_class">
              分类：
              <a href="javascript:void(0)" id="a1">标签一</a>
              <a href="javascript:void(0)">标签二</a>
              <a href="javascript:void(0)">标签三</a>
              <a href="javascript:void(0)">标签四</a>
            </p>
            <p>
              标题：<input type="text" class="">
            </p>
            <p>
              内容：<textarea></textarea>
            </p>
            <p>
              <mu-flat-button label="发布" to="/" backgroundColor="orange" labelPosition="before" icon="send" color="#fff"/>
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
      .mdl-cell{
        padding:10px;
        position: relative;
      }
      .postSendTitle {
        /*padding-bottom: 20px;*/
        line-height: 60px;
        height: 60px;
        border-bottom: 1px solid #e6e6e6;
        margin:0 0 40px 0 !important;
        > span {
          padding: 0 10px;
          position: absolute;
          font-size: 24px;
          color: #009688 !important;
            /*color: #d9ba4b !important;*/
          }
      }
      .post-Sendform{
        /*border:1px solid blue;*/
        position: relative;
        width:60%;
        min-width:500px;
        margin:0 auto;
        padding:0 30px;
        .mu-flat-button-label{
          font-size: 16px !important;
          font-weight: bolder !important;
        }
        /*tag分类*/
        p:nth-of-type(1){
          a{
            display: inline-block;
            padding:0 3px;
            border-radius: 3px;
            font-size: 12px;
            margin:0 3px;
            cursor: pointer;
          }
          a:nth-of-type(1):link{
            background: #8391A5;
            color:#fff;
            margin:0 !important;
          }
          a:nth-of-type(2):link{
            background: #E8F5FF;
            color:#AFAFFF;
            border:1px solid #AFAFFF;
          }
          a:nth-of-type(3):link{
            background: #e6faef;
            color:#13ce66;
            border:1px solid #13ce66;
          }
          a:nth-of-type(4):link{
            background: #fff8e9;
            color:#f7ba2a;
            border:1px solid #f7ba2a;
          }
          .selected{
            background: #009688 !important;
            /*background: #a2abae !important;*/
          }
        }
        /*标题*/
        p:nth-of-type(2){
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
        p:nth-of-type(3){
          textarea{
            width: 100%;
            height: 230px;
            resize: none;
            outline: none;
            border-radius: 5px;
            border: 1px solid #e6e6e6;
          }
        }
        /*发送*/
        p:nth-of-type(4){
          text-align: right;
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
      this.selectClass();
      $("#a1").trigger("click"); //默认选中标签一
    },
    components: {

    },
    methods: {
        selectClass(){   //只能选一个标签
          $(".postSend_class a").click(function () {
              console.log($(this).text());  //标签类别
            if($(this).hasClass("selected")){
              $(this).removeClass("selected");
            }
            else{
//              $(this).siblings('a').removeClass("selected");  //只选一个
              $(this).addClass("selected");
            }
            });
        }
    }
  }
</script>
