<template>
  <div>
    <div class="resourcesMain">
      <div class="mdl-grid">
        <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
          <div class="ResTitle">
            <mu-icon value="message" :size="48" color="#f1b200"/><span>分享</span>
            <a class="send_postBtn" href="#">我要分享
              <div class="newItem">
                <router-link to="buildfile">文档资料</router-link>
                <router-link to="newbuild">技术博客</router-link>
                <router-link to="newbuild">个人笔记</router-link>
              </div>
            </a>

            <!--<mu-raised-button label="我要分享" to="" class="send_postBtn" primary href="#"/>-->
            <!--<mu-raised-button label="我要分享"class="send_postBtn" primary ref="button" @click="toggle" color="#fff"/>-->
            <!--<mu-popover :trigger="trigger" :open="open" @close="handleClose" :autoPosition="false" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin"  >-->
              <!--<mu-menu>-->
                <!--<mu-menu-item title="文档资料" to="newbuild" href="#"/>-->
                <!--<a href="newbuild"><mu-menu-item title="技术博客" /></a>-->
                <!--<a href="../../../parts/share/resources/resources.html"><mu-menu-item title="个人笔记" /></a>-->
              <!--</mu-menu>-->
            <!--</mu-popover>-->
          </div>
          <ListTabs>
            <template scope="props" slot="addTabs">
              <mu-tab value="tab3" id="wendang" title="文档资料" @click="handle"/>
              <mu-tab value="tab4" title="技术博客"/>
              <mu-tab value="tab5" title="个人笔记"/>
            </template>
          </ListTabs>
          <PaginAtion></PaginAtion>
        </mu-paper>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .resourcesMain {
    padding-top: 74px;
    .mdl-grid {
      margin: 0 20%;
      min-width: 500px;
      .ResTitle {
        position: relative;
        padding-bottom: 20px;
          > span {
              padding: 0 10px;
              position: absolute;
              font-size: 24px;
              color: #009688 !important;
            }
            .newItem{
              display: none;
              position: absolute;
              width:100%;
              min-width: 88px;
              top:36px;
              text-align: center;
              z-index:10;
              /*background:#f2f2f2 !important;*/
              border:1px solid #ff4081;
              box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
              a{
                display: block;
                height: 28px!important;
                line-height: 28px!important;
                width:100%;
              }
            }
          .send_postBtn{
            display: inline-block;
            position: absolute;
            right: 20px;
            border-radius: 2px;
            height: 36px;
            line-height: 36px;
            min-width: 88px;
            text-align: center;
            color:#fff !important;
            background: #009688 !important;
            box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
            &:hover{
                .newItem{
                  display: block;
                }
             }
          }
      }
      .mdl-cell {
        padding: 10px;
        position: relative;
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
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  export default{
    props: ['activeTab1'],
    data(){
      return {
        /*open: false,
        trigger: null,
        autoPosition:false,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'middle'
        },
        targetOrigin: {
          vertical: 'top',
          horizontal: 'middle'
        },
        anchorOriginDrawer: {
          vertical: 'bottom',
          horizontal: 'middle'
        },
        targetOriginDrawer: {
          vertical: 'top',
          horizontal: 'middle'
        }*/
      }
    },
    mounted() {
//      this.trigger = this.$refs.button.$el,
//      document.getElementById(type.toString()).style.display="none";
//      console.log(this.ur);
//      let that = this;
//      this.type=that.ur.split('?')[1].split("=")[1];
////      document.getElementById(this.type.toString()).style.display="none";
//      console.log(this.type.toString());
////      document.getElementById(this.type.toString()).onclick="handleTabChangeposts"
      this.handle()
    },
    components: {
      ListTabs,
      PaginAtion,
    },
    methods:{
        handle(){
//          this.activeTab1 = this.activeTab1;
//          console.log(this.activeTab1);
//          var ur =location.href;
//          var type=ur.split('?')[1].split("=")[1];
//          console.log(ur);
//          console.log(type);
//          console.log(this.activeTab1);
          this.$emit('change','tab3');
        },
       /* toggle(){
          this.open = !this.open
        },
        handleClose () {
          this.open = false
        },
        stringify (obj) {
          return JSON.stringify(obj)
        }*/
    },
  }
</script>
