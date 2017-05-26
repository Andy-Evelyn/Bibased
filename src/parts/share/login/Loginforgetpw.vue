<template>
  <paper class="forget-paper" :zDepth="2" >
    <div class="icon-circle">
      <icon value="live_help" color="orange" :size="82" class="icon-clock"/>
    </div>
    <div class="forget-form-head mu-flat-button-primary">找回密码</div>
    <p style="text-align: center; margin: 30px;">请到F214找管理人员修改密码<br/>联系人...</p>
    <router-link to="/"><raisedButton label="知道了" fullWidth primary/></router-link>
  </paper>
</template>
<style lang="less" scoped>
  .forget-paper{
    /*position: absolute;*/
    /*top:50%;*/
    /*left: 50%;*/
    padding: 20px 20px 36px 20px;
    /*width: 80%;*/
    max-width:  340px;
    /*transform: translate(-50%,-50%);*/
  .forget-form-head{
    text-align: center;
    margin: 20px 0 10px 0;
    font-size: 20px;

  }
  .icon-clock{
    margin-left: 50%;
    margin-top:50%;
    transform: translate(-50%,-50%);
  }
  .icon-circle{
    background: #eee;
    border-radius: 100%;
    width: 140px;
    height: 140px;
    margin: 0 auto;
  }
  .forgetpw{
    float: left;
    font-size: 12px;
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
    margin: 10px 0;
  &:hover{
     color: #919191;
   }
  }
  .loginbtn{
    float: right;
  }
  }
</style>
<script>
  import textField from 'muse-components/textField';
  import paper from 'muse-components/paper';
  import icon from 'muse-components/icon';
  import raisedButton from 'muse-components/raisedButton';
//  import 'muse-components/styles/base.less' // 加载基础的样式
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
    export default{
        name:"forgetpw",
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
          textField,
          paper,
          icon,
          raisedButton,
        }
    }
</script>
