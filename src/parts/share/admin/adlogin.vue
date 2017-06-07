<template>

  <mu-paper class="loginPaper" :zDepth="2" >

    <div class="icon-circle">
      <mu-icon value="account_box" color="orange" :size="82" class="icon-clock"/>
    </div>
    <div class="login-form-head mu-flat-button-primary">
      管理员登录
    </div>
    <div>
      <mu-text-field id="userName" @blur="check_name" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" label="用户名" type="text" hintText="请输入用户名" labelClass="textlabel" pattern="-?[0-9]*(\.[0-9]+)?" fullWidth labelFloat/>
      <mu-text-field id="passWord" @blur="check_word" :errorText="inputErrorPassword" label="密码" hintText="请输入密码" labelClass="textlabel" type="password" fullWidth labelFloat/>
      <mu-raised-button label="登录" class="loginbtn" id="subMit" @click="login" primary/>
    </div>
  </mu-paper>

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

  .loginPaper{
    position: absolute;
    z-index:3;
    top:50%;
    left: 50%;
    padding: 15px 15px 25px 15px;
    max-width:  340px;
    transform: translate(-50%,-50%);
  }
  .login-form-head{
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
  .textlabel{
    color: #807e7e!important;
  }
</style>
<script>

  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用teal主题
  Vue.use(MuseUI)

  import $ from 'jquery';
  export default{
    name:"adlogin",
    data(){
      return {
        inputErrorText:'',
        inputErrorPassword:'',
        msg: 'hello vue'
      }
    },
    components: {
    },
    methods: {
      handleInputOverflow (isOverflow) {
        this.inputErrorText = isOverflow ? '用戶名只能是10位数哟' : ''
      },
      check_name(){
        if($("#userName input").val() == ''){
          this.inputErrorText = '用户名不能为空哟'
//              return false
        }else{
          this.inputErrorText = ''
        }
      },
      check_word(){
        if($("#passWord input").val() == ''){
          this.inputErrorPassword = '密码不能为空哟'
//              return false
        }else{
          this.inputErrorPassword = ''
        }
      },
      login(){
        this.check_name()
        this.check_word()
        if($("#userName input").val() && $("#passWord input").val()){
          this.inputErrorText = ''
          this.inputErrorPassword = ''
        }
        console.log($("#userName input").val());
        console.log($("#passWord input").val());
      }
    }
  }
</script>
