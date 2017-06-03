<template>
  <div>
    <PageHeader></PageHeader>
    <div class="personalMain">
      <div class="personalContent">
          <mu-paper class="introduction" :zDepth="1">
            <div></div>
            <div>
              <h5 id="stuNum">{{stuNum}}</h5>
              <h5 id="stuClass">{{stuClass}}</h5>
            </div>
            <div class="upImg">
              <img :src="userUrl" alt="">
              <!--<div class="maskUp">-->
                <!--<div>-->
                  <!--<mu-icon value="photo_camera" :size="36" color="#fff"/>-->
                  <!--<p>修改我的头像</p>-->
                <!--</div>-->
                <!--<input type="file" accept="image/png,image/jpeg">-->
              <!--</div>-->
            </div>
          </mu-paper>
          <mu-paper class="issueAll" :zDepth="1">
            <mu-tabs :value="activeFabu" @change="ChangMyPu">
              <mu-tab value="tiezi" title="发布帖子">
                <mu-badge :content="n1" class="demo-icon-badge" circle secondary></mu-badge>
              </mu-tab>
              <mu-tab value="wendang" title="文档资料">
                <mu-badge :content="n2" class="demo-icon-badge" circle secondary></mu-badge>
              </mu-tab>
              <mu-tab value="boke" title="技术博客">
                <mu-badge :content="n3" class="demo-icon-badge" circle secondary></mu-badge>
              </mu-tab>
              <mu-tab value="biji" title="个人笔记">
                <mu-badge :content="n4" class="demo-icon-badge" circle secondary></mu-badge>
              </mu-tab>
            </mu-tabs>
            <div v-if="activeFabu === 'tiezi'" class="fabuDetails">
              <h4>我发布的帖子</h4>
              <ul>
                <li class="list-item">
                 <p>
                   <a href="#" class="zhuti">javaScript学习</a>
                   <span class="fabuTime">2017-5-24</span>
                 </p>
                  <p class="neirong">JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。
                  </p>
                  <p>
                    <a href="javascript: void(0);" label="dialog" @click="open" title="删除"><mu-icon value="delete" :size="16"/></a>&nbsp;&nbsp;
                    <a href="#" title="编辑"><mu-icon value="border_color" :size="14"/></a>
                    <mu-dialog :open="dialog" title="确定删除？" @close="close">
                      删除后不可恢复
                      <mu-flat-button slot="actions" color="#14c97f" @click="close" label="取消"/>
                      <mu-flat-button slot="actions" color="#14c97f" @click="close" label="确定"/>
                    </mu-dialog>
                  </p>
                </li>
              </ul>
            </div>
            <div v-if="activeFabu === 'wendang'" class="fabuDetails">
              <h4>我发布的文档资料</h4>
              <p>
                这是文档资料
              </p>
            </div>
            <div v-if="activeFabu === 'boke'" class="fabuDetails">
              <h4>我发布的技术博客</h4>
              <p>
                这是技术博客
              </p>
            </div>
            <div v-if="activeFabu === 'biji'" class="fabuDetails">
              <h4>我发布的个人笔记</h4>
              <p>
                这是个人笔记
              </p>
            </div>
          </mu-paper>
      </div>
      </div>
    </div>

  </div>
</template>

<style lang="less">
  .mu-dialog{
    width: 300px!important;
    .mu-dialog-title{
      color:#ff4081 !important;
    }
  }
  /*.mu-badge-float*/
    .personalMain{
      /*background-color: #f7f8fa !important;*/
      padding-top: 84px;
      color: #262626;
      .personalContent{
        width:70%;
        min-width: 560px;
        margin:0 auto;
        /*个人简介*/
        .introduction{
          position: relative;
          /*width:998px;*/
          width:100%;
          height:240px;
          margin:0 auto;
          >div:nth-of-type(1){
            height:120px;
            background: #14c97f;
          }
          >div:nth-of-type(2){
            padding-left: 21%;
          }
         .upImg{
           position: absolute;
           top: 20%;
           left: 2%;
           height: 65%;
           width: 17%;
           border: 4px solid #fff;
           border-radius: 5px;
           z-index: 1;
            img{
              width:100%;
              height:100%;
              border-radius:3px;
            }
            &:hover .maskUp{
                background: #000;
                opacity: 0.4;
             }
         }
          .maskUp{
            opacity: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 5;
            transition: opacity .2s ease-in;
            >div{
             position: absolute;
             top: 50%;
             left: 50%;
             z-index: 6;
             color: #fff;
             text-align: center;
             -webkit-transform: translate(-50%,-50%);
             transform: translate(-50%,-50%);
            }
             input[type="file"]{
               width:100%;
               height:100%;
               opacity: 0;
               position: absolute;
               top: 0;
               z-index: 6;
               cursor:pointer;
             }
          }
        }

      /*我发布的*/
        .issueAll{
          /*position: relative;*/
          /*width:998px;*/
          /*height:440px;*/
          /*width:100%;*/
          margin:0 auto;
          margin-top:20px;
          margin-bottom: 20px;
          .mu-tabs{
            background: #fff !important;
            border-bottom: 1px solid #f0f2f7;
            .mu-tab-link{
              color:#14c97f !important;
            }
          }
          .mu-badge-container{
            position: relative !important;
            top: 10px !important;
            left: 40px !important;
          }
          .fabuDetails{
            padding:0 40px 40px;
            h4{
              line-height: 70px;
              border-bottom: 1px solid #f0f2f7;
            }
            li:first-child{
              padding-top:0px;
            }
            .list-item{
              /*border-bottom:2px dotted #f0f2f7;*/
              border-bottom: 1px solid #f0f2f7;
              padding-top:16px;
              p{
                a{
                  display: inline-block;
                }
                a.zhuti{
                  font-size:18px;
                }
                .fabuTime{
                  float: right;
                }
              }
              p.neirong{
                height:70px;
                overflow: hidden;
              }
              p:last-child{
                text-align: right;
              }
            }
          }
        }
      }
    }
</style>

<script>

  /*全部加载，用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
  import 'muse-components/styles/base.less' // 加载基础的样式
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  import 'assets/css/style.css'

  import imgurl from '../../../assets/images/user.png'
  import PageHeader from 'components/base/pageheader';
  export default{
    data(){
      return {
        userUrl: imgurl,
        stuNum:'2013081420',
        stuClass:'计科134',
        n1:'1',
        n2:'3',
        n3:'10',
        n4:'5',
        activeFabu: 'tiezi',
        dialog: false
      }
    },
    beforeDestroy(){

    },
    methods: {
      ChangMyPu(val) {
        this.activeFabu = val
      },
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      },
    },
    components: {
      PageHeader,
    }
  }
</script>

