<template>
  <paper class="pl-login-paper" :zDepth="2" >
<!--    <div class="icon-circle">
      <icon value="lock" color="orange" :size="82" class="icon-clock"/>
    </div>-->
    <div class="icon-circle">
      <!--<h1 style="line-height: 140px;">Sharing</h1>-->
      <icon value="account_box" color="orange" :size="82" class="icon-clock"/>
      <!--<icon value="lock" color="orange" :size="82" class="icon-clock"/>-->
    </div>
    <div class="pl-form-head mu-flat-button-primary">
      <!--<mu-list-item disabled>-->
        <!--<mu-avatar slot="left" color="orange" backgroundColor="#eee" :size="140">Sharing</mu-avatar>-->
      <!--</mu-list-item>-->
<!--      <h1>Sharing</h1>
      &lt;!&ndash;<h5>分享你的知识、见解</h5>&ndash;&gt;
      <p>用户登录</p>-->

      用户登录
    </div>
    <textField label="用户名" hintText="请输入用户名" labelClass="textlabel" type="text" errorText="" fullWidth labelFloat/><br/>
    <textField label="密码" hintText="请输入密码" labelClass="textlabel" type="password" errorText="" fullWidth labelFloat/><br/>
    <router-link to="forgetpw"><span class="forgetpw">忘记密码？</span></router-link>
    <raisedButton label="登录" class="loginbtn" primary/>
  </paper>
</template>
<style lang="less" scoped>
  .pl-login-paper{
    position: absolute;
    top:50%;
    left: 50%;
    /*padding: 20px 20px 36px 20px;*/
    padding: 5px 15px 30px 15px;
    width: 80%;
    max-width:  340px;
    transform: translate(-50%,-50%);
  .pl-form-head{
    text-align: center;
    margin: 20px 0 10px 0;
    font-size: 20px;
    h1{
      color: orange;
    }
    p{
      font-size:20px;
    }
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
<style>
  .textlabel{
    color: #807e7e!important;
  }
</style>
<script>
  import textField from 'muse-components/textField';
  import paper from 'muse-components/paper';
  import icon from 'muse-components/icon';
  import raisedButton from 'muse-components/raisedButton';
    export default{
        name:"loginform",
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
