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
        <Editor></Editor>
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
  import Editor from 'components/base/pageeditor';
  import $ from 'jquery';
  export default{
      name:'bloged',
    data(){
      return {
      }
    },
    mounted() {
      this.selectClass();
      $("#a1").trigger("click"); //默认选中标签一
    },
    components: {
      NewBuild,
      Editor,
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
      }
    }
  }
</script>

