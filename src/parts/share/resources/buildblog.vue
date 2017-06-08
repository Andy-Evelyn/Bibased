<!--
<template>
  <div>
    <NewBuild>
      <template scope="props" slot="build_title">技术博客</template>
      <template scope="props" slot="send_tags">
        <p class="postSend_class">
        分类：
        <a href="javascript:void(0)" id="a1">标签一</a>
        <a href="javascript:void(0)">标签二</a>
        <a href="javascript:void(0)">标签三</a>
        <a href="javascript:void(0)">标签四</a>
        </p>
      </template>
      <template scope="props" slot="send_blog">
        <div type="text/plain" id='blogEd'></div>
      </template>
    </NewBuild>
  </div>
</template>
<style lang="less">
  /*tag分类*/
  .postSend_class{
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
</style>
<script>
  import NewBuild from './newbuild';
  import $ from 'jquery';
  import WangEditor from 'wangeditor';
  export default{
      name:'bloged',
    data(){
      return {
        dataInterface: {
          editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
        },
        editor: '',  // 存放实例化的wangEditor对象，在多个方法中使用
      }
    },
    mounted() {
      this.selectClass();
      $("#a1").trigger("click"); //默认选中标签一
      this.createEditor();
    },
    beforeDestroy(){
      this.destroyEditor();
    },
    components: {
      NewBuild,
    },
    methods: {
      selectClass(){   //选标签
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
      },
      createEditor(){  // 创建编辑器
        this.editor = new WangEditor('blogEd');
        console.log(this.ranDomid);
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor.create();  // 生成编辑器
        this.editor.$txt.html('<p>请在这里编辑您的内容</p>');  // 初始化内容
        //        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
        $("#blogEd").css('height','200px');
      },
      destroyEditor(){  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
        this.editor.destroy();  // 这个没有完全销毁实例，只是作了隐藏
        //         $('#ranDomid').remove();  // 不报错的话，这一步可以省略
        $("#blogEd").remove();
        this.editor = null;
        WangEditor.numberOfLocation&#45;&#45;;  // 手动清除地图的重复引用，作者的临时解决方案。否则单页面来回切换时，地图报错重复引用
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
    }
  }
</script>

-->

<template>
  <div class="postSend-main">
    <div class="mdl-grid">
      <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
        <p class="SendTitle">
          <mu-icon value="card_travel" :size="48" color="#f1b200"/><span>新建<slot name="build_title"></slot></span>
        </p>
        <form class="post-Sendform" action="">
          <p class="postSend_class">
            分类：
            <a href="javascript:void(0)" id="a1">数据结构</a>
            <a href="javascript:void(0)">php</a>
            <a href="javascript:void(0)">Java</a>
            <a href="javascript:void(0)">python</a>
          </p>
          <p class="send_title">
          标题：<input type="text" class="" name="send_title">
          </p>
          <div type="text/plain" id='blogEd'></div>
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
  /*tag分类*/
  .postSend_class {

  a {
    display: inline-block;
    padding: 0 3px;
    border-radius: 3px;
    font-size: 12px;
    margin: 0 3px;
    cursor: pointer;
  }

  a:nth-of-type(1):link {
    background: #8391A5;
    color: #fff;
    margin: 0 !important;
  }

  a:nth-of-type(2):link {
    background: #E8F5FF;
    color: #AFAFFF;
    border: 1px solid #AFAFFF;
  }

  a:nth-of-type(3):link {
    background: #e6faef;
    color: #13ce66;
    border: 1px solid #13ce66;
  }
  a:nth-of-type(4):link {
    background: #fff8e9;
    color: #f7ba2a;
    border: 1px solid #f7ba2a;
  }

  .selected {
    background: #009688 !important;
    /*background: #a2abae !important;*/
  }

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
  import NewBuild from './newbuild';
  import $ from 'jquery';
  import WangEditor from 'wangeditor';
  export default{
    name:'bloged',
    data(){
      return {
        dataInterface: {
          editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
        },
        editor: '',  // 存放实例化的wangEditor对象，在多个方法中使用
      }
    },
    mounted() {
      this.selectClass();
      $("#a1").trigger("click"); //默认选中标签一
      this.createEditor();
    },
    beforeDestroy(){
      this.destroyEditor();
    },
    components: {
      NewBuild,
    },
    methods: {
      selectClass(){   //选标签
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
      },
      createEditor(){  // 创建编辑器
        this.editor = new WangEditor('blogEd');
        console.log(this.ranDomid);
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor.create();  // 生成编辑器
        this.editor.$txt.html('<p>请在这里编辑您的内容</p>');  // 初始化内容
        //        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
        $("#blogEd").css('height','200px');
      },
      destroyEditor(){  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
        this.editor.destroy();  // 这个没有完全销毁实例，只是作了隐藏
        //         $('#ranDomid').remove();  // 不报错的话，这一步可以省略
        $("#blogEd").remove();
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
    }
  }
</script>

