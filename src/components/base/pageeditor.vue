<template>

  <div type="text/plain" :id='ranDomid'></div>

</template>
<style>
  /*#ranDomid{*/
    /*width: 100%;*/
    /*min-height: 330px;*/
    /*height: auto;*/
  /*}*/

</style>

  <script type="text/javascript">
    //引入WangEditor编辑器插件
  import WangEditor from 'wangeditor';
  export default {
    data(){
      return{
        dataInterface: {
          editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
        },
        editor: '',  // 存放实例化的wangEditor对象，在多个方法中使用
        ranDomid: 'ed'+ Math.floor(Math.random()*10000),
      }
    },
    mounted(){
      this.createEditor();
    },
    beforeDestroy(){
      this.destroyEditor();
    },
    methods: {
      createEditor(){  // 创建编辑器
        this.editor = new WangEditor(''+this.ranDomid);
        console.log(this.ranDomid);
        this.initEditorConfig();  // 初始化编辑器配置，在create之前
        this.editor.create();  // 生成编辑器
        this.editor.$txt.html('<p>请在这里编辑您的内容</p>');  // 初始化内容
//        $('#ranDomid').css('height', '200px');  // 使编辑器内容区自动撑开，在css中定义min-height;
        $("#"+this.ranDomid).css({'min-height':'300px','height':'auto'});
      },
      destroyEditor(){  // 销毁编辑器，官方没有给出完美方案。此方案是作者给出的临时方案
        this.editor.destroy();  // 这个没有完全销毁实例，只是作了隐藏
//         $('#ranDomid').remove();  // 不报错的话，这一步可以省略
        $("#"+this.ranDomid).remove();
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

