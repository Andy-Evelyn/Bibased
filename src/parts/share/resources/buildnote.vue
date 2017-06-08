
<template>
  <div class="postSend-main">
    <div class="mdl-grid">
      <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
        <p class="SendTitle">
          <mu-icon value="card_travel" :size="48" color="#f1b200"/><span>新建个人笔记</span>
        </p>
        <form class="post-Sendform" action="">
          <p class="send_title">
            标题：<input type="text" class="" name="send_title" v-model="noteTitle">
          </p>
          <div type="text/plain" id='noteEd'></div>
          <p class="send_button">
            <mu-flat-button label="分享" @click="addNote()" backgroundColor="orange" labelPosition="before" icon="near_me" color="#fff"/>
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

  .postTag {
    display: inline-block;
    padding: 0 3px;
    border-radius: 3px;
    font-size: 12px;
    margin: 0 3px;
    cursor: pointer;
    background: #8391A5;
    color: #fff;
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
  import $ from 'jquery';
  import WangEditor from 'wangeditor';
  import $http from 'src/api/http.js';
  export default{
    data(){
      return {
        dataInterface: {
          editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
        },
        editor: '',  // 存放实例化的wangEditor对象，在多个方法中使用
        titleData:[],
        formDatanote:{
          title:'',
          content:'',
        },
        idArray:[],
        noteTitle:'',
      }
    },
    mounted() {
      this.selectClass();
      this.createEditor();
    },
    beforeDestroy(){
      this.destroyEditor();
    },
    components: {
    },
    created(){
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/BlogTag/Show',
        data: '',
      }).done((res) => {
        this.titleData = res.data;
        this.$nextTick(function () {
          this.selectClass();

        })
      })

    },
    methods: {
      selectClass(){   //选标签
        $(".postSend_class span").click(function(){
//          console.log($(this).text());  //标签类别
          this.id = $(this).attr('id');
          if($(this).hasClass("selected")){
            $(this).removeClass("selected");
          }else{
            $(this).addClass("selected");
          }

        });
      },
      createEditor(){  // 创建编辑器
        this.editor = new WangEditor('noteEd');
//        console.log(this.ranDomid);
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor.create();  // 生成编辑器
        this.editor.$txt.html('');  // 初始化内容
        //        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
        $("#noteEd").css('height','200px');
      },
      destroyEditor(){  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
        this.editor.destroy();  // 这个没有完全销毁实例，只是作了隐藏
        //         $('#ranDomid').remove();  // 不报错的话，这一步可以省略
        $("#noteEd").remove();
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
//        console.log(this.editorContent);
      },
      addNote(){

        if(this.noteTitle.length==0){
          alert("请输入个人笔记标题");
          return false;
        }
        if(this.editor.$txt.html().length==0){
          alert("请输入个人笔记内容");
          return false;
        }
        this.formDatanote.title = this.noteTitle;
        this.formDatanote.content = this.editor.$txt.html();
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Note/Add',
          data: this.formDatanote,
        }).done((res) => {
          console.log(res)
          alert("个人笔记发布成功!");
          window.location.href="../../../parts/share/resources/resources.html#/";
          location.reload();
        })
      }
    }
  }
</script>


