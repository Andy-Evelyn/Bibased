<template>
  <div class="postsCom-main">
    <div class="mdl-grid">
      <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col clearfix">
        <!--左边模块-主体内容-->
        <div class="comment_left">
          <div class="com_topic">
            <div class="com_topic_top">
              <p>{{comData.title}}</p>
              <!--<span><span class="tags">{{comData.catename}}</span></span>-->
            </div>
            <div class="com_topic_two">
              <p class="p1" v-html="comData.content"></p>
              <div class="comment_add">
                <span>{{comData.mtime}}</span>&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>

        </div>

        <!--右边模块-->
        <div class="comment_right">
          <div class="writer">
            <p>发起人</p>
            <img :src="userUrl" alt="">
            <a href="javascript:void(0);">{{comData.user_account}}</a>
          </div>
          <ul class="writer" style="border-bottom: none;">
            <li style="font-size: 20px;margin-bottom: 10px;">笔记状态</li>
            <li>最新活动：<span>{{comData.mtime}}</span></li>
          </ul>
        </div>

      </mu-paper>
    </div>
  </div>
</template>
<style lang="less">
  /*动画效果*/
  .fade-enter-active, .fade-leave-active {
    /*transition: opacity .5s*/
    transition: all .5s ease;
  }

  .fade-enter, .fade-leave-active {
    transform: translateY(-50px);
    opacity: 0;
  }

  /*清除浮动*/
  .clearfix:after {
    content: ".";
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }

  #seReplay, #fiReplay {
    width: 100%;
    min-height: 150px;
    height: auto;
  }

  .postsCom-main {
    padding-top:74px;
  p {
    margin-bottom: 0 !important;
  }
  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }

  .mu-icon {
    position: relative;
    top: 4px;
  }

  .textarea {
    width: 100%;
    height: 150px;
    margin: 0 auto;
    margin-top: 15px;
  }

  .com_btn {
    position: relative;
    left: 83%;
    background: #59b0ff;
    color: #fff;
    border-radius: 5px;
    margin-top: 10px;
  }

  .mdl-grid {
    margin: 0 20%;
    min-width: 500px;

  .mdl-cell {
    padding: 10px;
    position: relative;
  }

  }
  .comment_left {
    float: left;
    width: 75%;
    height: auto;
    border-right: 1px solid #e6e6e6;

  .com_topic {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;

  .com_topic_top {
    margin: 0 auto;
    width: 90%;
    border-bottom: 1px solid #e6e6e6;

  .tags {
    display: inline-block;
    margin-bottom: 10px;
    width: auto;
    height: 20px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    background: #99cfff;
    padding: 0px 4px 0 4px;
    /*&:hover{*/
    /*background: #59b0ff;*/
    /*}*/
  }

  >
  p {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    margin: 0 !important;
  }

  }
  .com_topic_two {
    width: 90%;
    margin: 0 auto;

  >
  p.p1 {
    margin-top: 20px;
    color: #666a74;
  }

  .comment_add {
    margin-bottom: 15px;
  }

  .comment_add, .comment_add > a {
    margin-top: 20px;
    width: 100%;
    color: #999999;
    font-size: 12px;
  }

  .comment_add > a {

  &:hover {
     color: #59b0ff;
   }

  }
  >
  p.p2 {
    margin-top: 50px;
    font-size: 20px;
  }

  }
  }

  .reply {
    width: 90%;
    margin: 0 auto;
    padding: 14px 0;

  >
  img {
    float: left;
  }

  .reply_context {
    width: 90%;
    float: left;
    padding-left: 10px;

  .cont {
    padding: 15px 0;
  }

  a.con_number {
    display: inline-block;
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #999999;
    border-radius: 4px;
    background: #f5f5f5;

  & :hover {
      background: #59b0ff;
      color: #fff;
    }

  }
  .con_time {
    float: right;
    font-size: 12px;
    color: #99999c;
  }

  /*二级回复*/
  .reply_show {
    margin-top: 15px;
    width: 100%;
    border-radius: 2px;
    font-size: 15px;
    /*border: 1px solid #e6e6e6;*/
    border-top: 1px solid #e6e6e6;
    list-style: none;
    padding-bottom: 5px;

  li {
    width: 95%;
    margin: 0 auto;
    padding: 10px 0px;

  img {
    float: left;
  }

  .li_re {
    float: left;
    width: 80%;
    padding: 10px;
    font-size: 14px;
  }

  }
  .txt {
    display: block;
    width: 92%;
    height: 120px;
    margin-bottom: 5px;
  }

  .com_btn {
    left: 76% !important;
  }

  }
  }
  }
  }
  .comment_right {
    float: right;
    width: 24.5%;
    height: auto;

  .writer {
    margin: 0 auto;
    margin-top: 30px;
    width: 80%;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;

  >
  p {
    padding-bottom: 15px;
  }

  a {
    position: relative;
    left: 8px;
    font-size: 12px;
    color: #155faa;
  }

  li {
    color: #666666;
    font-size: 13px;
  }

  }
  }

  }


</style>
<script>
  import '../../../assets/css/style.css' // 加载样式
  import imgurl from '../../../assets/images/user.png'
  import $ from 'jquery';
  import WangEditor from 'wangeditor';
  import $http from 'src/api/http.js';
  export default{
    name: "postscomment",
    data(){
      return {
        userUrl: imgurl,
        isShow_com1: false,
        isShow_com2: false,
        dataInterface: {
          editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
        },
        editor: '',  // 存放实例化的wangEditor对象，在多个方法中使用
        editors: [],  // 子评论
        comData: [],
        detail:{
          id:this.$route.params.id,
        },


      }
    },
    mounted(){
    },
    beforeDestroy(){
      this.destroyEditor();
    },
    methods: {
    },
    created(){

      $http.corsget({
        url: 'http://118.89.217.84/exchange-platform/index.php/Note/Detail',
        data: this.detail,
      }).done((res) => {

        this.comData = res.data;
        console.log(this.comData)

      });
    },
  }
</script>
