<template>
  <paper class="pl-login-paper" :zDepth="2" >
    <div class="icon-circle">
      <icon value="live_help" color="orange" :size="82" class="icon-clock"/>
    </div>
    <div class="pl-form-head mu-flat-button-primary">找回密码</div>
    <p style="text-align: center; margin: 30px;">请到F214找管理人员修改密码<br/>联系人...</p>
    <!--<textField label="" hintText="请输入用户名" type="text" errorText="" fullWidth labelFloat/><br/>-->
    <!--<textField label="密码" hintText="请输入密码" type="password" errorText="" fullWidth labelFloat/><br/>-->
    <!--<router-link to="forgetpw"><span class="forgetpw">忘记密码？</span></router-link>-->
    <router-link to="/"><raisedButton label="知道了" fullWidth primary/></router-link>
  </paper>
</template>
<style lang="less" scoped>
  .pl-login-paper{
    position: absolute;
    top:50%;
    left: 50%;
    padding: 20px 20px 36px 20px;
    width: 80%;
    max-width:  340px;
    transform: translate(-50%,-50%);
  .pl-form-head{
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
