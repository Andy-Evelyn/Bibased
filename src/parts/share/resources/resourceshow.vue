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
              <p class="p1" v-html="comData.doc_desc"></p>
              <p>文件名 :  <span v-html="comData.old_name"></span></p>
              <p><span @click="download" class="download">点击下载</span></p>
              <div class="comment_add">
                <span>{{comData.mtime}}</span>&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" id="comment"
                                                                   @click="toggle1">
                <mu-icon value="textsms" :size="16"/>
                &nbsp;添加评论</a>
              </div>
              <!--添加评论-->
              <transition name="fade">
                <div v-show="isShow_com1" id="s_h">
                  <div type="text/plain" id='replayEd1'></div>
                  <mu-raised-button label="评论"  @click="addComment()" class="com_btn"/>
                </div>
              </transition>
              <p class="p2"><span>{{comData.comment_num}}</span>个回复</p>
            </div>
          </div>

          <!--回复-->
          <div class="clearfix reply" v-for="(item,index) in commentList">
            <img :src="userUrl">
            <div class="reply_context">
              <a href="#">{{item.user_account}}</a>
              <div class="cont" v-html="item.content">
              </div>
              <div>
                <a href="javascript:void(0);" class="con_number" id="reply_a" @click="toggle2(index)">
                  <mu-icon value="textsms" :size="16"/>
                  {{item.replyCount}}</a>
                <span class="con_time">{{item.ctime}}</span>
              </div>
              <!--评论的内容先隐藏-->
              <transition name="fade">
                <div v-show="item.show">
                  <ul class="reply_show" id="reply_num" >
                    <li class="clearfix" v-for="itemchild in item.ShowReply">
                      <img :src="userUrl" alt="">
                      <div class="li_re">
                        <a href="#">{{item.childuser_account}}</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>{{itemchild.ctime}}</span>
                        <p v-html="itemchild.content"></p>
                      </div>
                    </li>
                  </ul>
                  <!--添加评论-->
                  <!--<div>-->
                  <div type="text/plain" :id="'creplayEd'+index" class="comreplayEd"></div>
                  <mu-raised-button label="评论" class="com_btn" @click="addComment(item.id,index)"/>
                  <!--</div>-->
                  <!--<listCom></listCom>-->
                </div>
              </transition>

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
            <li style="font-size: 20px;margin-bottom: 10px;">帖子状态</li>
            <li>浏览量：<span>{{comData.view_num}}</span></li>
            <li>回复量：<span>{{comData.comment_num}}</span></li>
            <li>最新活动：<span>{{comData.mtime}}</span></li>
          </ul>
        </div>

      </mu-paper>
    </div>
  </div>
</template>
<style lang="less">
  .download{
    display: inline-block;
    cursor: pointer;
    background:#00bfa5;
    color:#fff;
    border-radius: 3px;
    font-size: 12px;
    padding:2px 5px 2px 5px;
    margin-top:5px;
  }
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
    padding-bottom: 20px;
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
        commentPost: {
          type: 2,
          id:this.$route.params.id,
          limit: 10,
          start: 0
        },
        commentList: [],
        total: 0,
        addCommentData:{
          type:2,
          id:this.$route.params.id,
          content:"",
          pid:0
        },

      }
    },
    mounted(){
//      this.createEditor();
      this.editor = new WangEditor('replayEd1');
      this.initEditorConfig();  // 初始化编辑器配置，在create之前
      this.editor.create();  // 生成编辑器
      this.editor.$txt.html('');  // 初始化内容
      //        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
      $("#replayEd1").css('height', '150px');

    },
    beforeDestroy(){
      this.destroyEditor();
    },
    methods: {
      selectClass(){   //选标签
        $(".postSend_class a").click(function () {
          console.log($(this).text());  //标签类别
          if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
          }
          else {
//              $(this).siblings('a').removeClass("selected");  //只选一个
            $(this).addClass("selected");
          }
        });
      },
      toggle1(){
        this.isShow_com1 = !this.isShow_com1;
      },
      toggle2(index){
        this.commentList[index].show=!this.commentList[index].show;
        if(this.commentList[index].show){
          $http.corspost({
            url: 'http://118.89.217.84/exchange-platform/index.php/Comment/ShowReply',
            data: {
              id:this.commentList[index].id
            },
          }).done((res) => {
            this.commentList[index].ShowReply=res.data;
          });
        }

//        this.isShow_com2 = !this.isShow_com2;
      },
      createEditor(){  // 创建编辑器
        this.editor = new WangEditor('replayEd1');
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor.create();  // 生成编辑器
        this.editor.$txt.html('');  // 初始化内容
        //        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
        $("#replayEd1").css('height', '150px');

        this.editor1 = new WangEditor('replayEd2');
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor1.create();  // 生成编辑器
        this.editor1.$txt.html('');  // 初始化内容
        $("#replayEd2").css('height', '150px');
      },
      destroyEditor(){  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
        this.editor.destroy();  // 这个没有完全销毁实例，只是作了隐藏
        //         $('#ranDomid').remove();  // 不报错的话，这一步可以省略
        this.editor = null;
        WangEditor.numberOfLocation--;  // 手动清除地图的重复引用，作者的临时解决方案。否则单页面来回切换时，地图报错重复引用
      },
      initEditorConfig(){  // 初始化编辑器配置
        this.editor.config.fontsizes = {  // 字号配置，增加14px
          // 格式：'value': 'title'
          1: '12px',
          2: '13px',
          3: '14px',
          4: '16px',
          5: '18px',
          6: '24px',
          7: '32px',
          8: '48px'
        };
        this.editor.config.uploadImgUrl = this.dataInterface.editorUpImgUrl;  // 图片上传地址

        this.editor.config.uploadImgFileName = '_img';  // 统一指定上传的文件name，需要指定。否则默认不同的上传方式是不同的name

        const usersecret = window.localStorage.getItem('usersecret');  // 获取 usersecret

        this.editor.config.uploadParams = {  // 自定义上传参数配置
          usersecret: usersecret
        };
      },
      getEditorContent(){  // 获取编辑器 内容区内容
        this.editorContent = this.editor.$txt.html();  // 获取 html 格式
        // this.editor.$txt.text();  // 获取纯文本
        // this.editor.$txt.formatText();  // 获取格式化后的纯文本
        console.log(this.editorContent);
      },
      addComment(id=0,index){

        if(typeof index=="undefined"){
          if(this.editor.$txt.text() == ''){
            alert("评论内容不能为空");
            return false;
          }
          this.addCommentData.content=this.editor.$txt.html();
        }else{
          if(this.editors[index].$txt.text() == ''){
            alert("评论内容不能为空");
            return false;
          }
          this.addCommentData.content=this.editors[index].$txt.html();
        }
        this.addCommentData.pid=id;
        $http.corspost({
          url: ' http://118.89.217.84/exchange-platform/index.php/Comment/Add',
          data: this.addCommentData,
        }).done((res) => {
          console.log(res)
          window.location.reload();
        });
      },
      download(){
          window.location.href = ' http://118.89.217.84/exchange-platform/index.php/Document/Down?id='+this.detail.id;
          /*$http.corsget({
            url: ' http://118.89.217.84/exchange-platform/index.php/Document/Down',
            data: this.detail,
          }).done((res) => {
            this.comData = res.data;
            console.log(this.comData)
            if(res.code != 200){
                alert(res.msg);
            }
          });*/
      },
    },
    created(){
      $http.corsget({
        url: 'http://118.89.217.84/exchange-platform/index.php/Document/Detail',
        data: this.detail,
      }).done((res) => {

        this.comData = res.data;
        console.log(this.comData)

      });
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/Comment/Show',
        data: this.commentPost,
      }).done((res) => {
        for(let i=0;i<res.data.list.length;i++){
          res.data.list[i].show=false;
          res.data.list[i].ShowReply=[];
        }
        this.commentList = res.data.list;
        this.total = res.data.meta.count;
        console.log(this.commentList);
        this.editors=[];
        this.$nextTick(()=>{
          for(var i=0;i<this.commentList.length;i++){
            var editor1 = new WangEditor('creplayEd'+i);
            this.initEditorConfig();  // 初始化编辑器配置，在create之前
            editor1.create();  // 生成编辑器
            editor1.$txt.html('');  // 初始化内容
            this.editors.push(editor1)
            $('#creplayEd'+i).css('height', '150px');
          }
        })
      })
    },
  }
</script>
