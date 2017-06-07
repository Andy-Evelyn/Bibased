<template>

  <mu-paper class="loginPaper" :zDepth="2" >
    <div class="icon-circle">
      <mu-icon value="account_box" color="orange" :size="82" class="icon-clock"/>
    </div>
    <div class="login-form-head mu-flat-button-primary">
      用户登录
    </div>
    <form v-model="loginForm">
      <mu-text-field v-model.trim="loginForm.account" @keyup.enter.native="login" id="userName"  :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" label="用户名" type="text" hintText="请输入用户名" labelClass="textlabel" fullWidth labelFloat/>
      <mu-text-field id="passWord" v-model.trim="loginForm.password" @keyup.enter.native="login" :errorText="inputErrorPassword" label="密码" hintText="请输入密码" labelClass="textlabel" type="password" fullWidth labelFloat/>
      <router-link to="forgetpw"><span class="forgetpw">忘记密码？</span></router-link>
      <mu-raised-button label="登录" class="loginbtn" id="subMit" @click="login" primary/>
    </form>

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
    padding: 15px 15px 50px 15px;
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
  import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题
  import $http from 'src/api/http.js';
  Vue.use(MuseUI)
  import $ from 'jquery';
    export default{
      data(){
        return {
          inputErrorText:'',
          inputErrorPassword:'',
          loginForm: {
            account: '',
            password: '',
            type: 1
          },
          dialogVisible: false,
          fullscreenLoading: false
        }
      },
      components: {
      },
      methods: {
        handleInputOverflow (isOverflow) {
          this.inputErrorText = isOverflow ? '用户名只能是10位数哟' : ''
        },
        check_name(){
            if($("#userName input").val() === ''){
              this.inputErrorText = '用户名不能为空哟'
//              return false
            }
            else if(!Number.isInteger(Number($("#userName input").val())) || Number($("#userName input").val()) < 1000000000){
              this.inputErrorText = '请输入长度大于9位的数值'
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
/*        login(){
          this.check_name()
          this.check_word()
          if($("#userName input").val() && $("#passWord input").val()){
            this.inputErrorText = ''
            this.inputErrorPassword = ''
            if (!Number.isInteger(Number($("#userName input").val())) || Number($("#userName input").val()) < 1000000000 || $("#passWord input").val().length < 5) {
              alert('帐号或密码格式错误')
            }else{
              window.location.href="../../../parts/share/index/index.html";   //登录成功，页面跳转

            }
          }
        }*/
        login() {
            console.log(this.loginForm);
          if (!Number.isInteger(Number(this.loginForm.account)) || Number(this.loginForm.account) < 1000000000 || this.loginForm.password.length < 5) {
            this.$store.dispatch('showInfoDialog', '帐号或密码格式错误')
            console.log("格式错误",this.$store);
          } else {
            this.fullscreenLoading = true;
            $http.corspost({
              url: 'http://118.89.217.84/exchange-platform/index.php/Login/checkLogin',
              data: this.loginForm,
            }).done((data) => {

              this.fullscreenLoading = false;
              if (data.code == 200) {
                this.$store.dispatch('SetUserName', data.data.nickName);
                window.location.href="../../../parts/share/index/index.html";   //登录成功，页面跳转
                console.log("登录成功");
              } else {
                this.$store.dispatch('showInfoDialog', data.msg);
                console.log(data.msg);
              }
            }).fail(function (jqXHR, textStatus, errorThrown) {
              console.log(jqXHR, textStatus, errorThrown)
            }).always(function () {
              console.log("end")
            })
          }
        }
      }
    }
</script>
