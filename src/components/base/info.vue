<template>
<div>
  <!--<div  class="dialog" v-show="infoDialog">-->
    <!--账号或密码格式错误-->
  <!--</div>-->
  <mu-dialog title="提示" :open="infoDialog" >
    <div class="info">
      {{info}}
    </div>
    <div class="logID" v-if="logID.length>0">
      {{logID}}
    </div>
    <mu-flat-button slot="actions" primary @click="closeInfoDialog" label="确定"/>
  </mu-dialog>
</div>
</template>
<style>
  .dialog{
    width:500px;
    /*height: 200px;*/
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 3px;
    z-index: 1000;
  }
</style>
<script>
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 carbon 主题
  import $http from 'src/api/http.js';
  Vue.use(MuseUI);
  export default {
    components: {
    },
    computed: {
      info() {
        return this.$store.getters.getInfo;
      },
      logID() {
        return this.$store.getters.getlogID;
      },
      infoDialog() {
        return this.$store.getters.infoDialog;
      }
    },
    methods: {
      closeInfoDialog(){
        this.$store.dispatch('hideInfoDialog')
      }
    }
  }
</script>

<!--<style>
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    /*height: 100%;*/
    min-height: 600px;
    overflow: auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
  }

  #view {
    height: 100%;
    height: calc(100% - 60px);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px
  }

  @media (min-width: 1200px) {
    #view {
      padding: 0 20px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .header_label {
    color: #333;
    font-weight: 700;
    border-width: 2px !important;
    background: transparent !important;
  }

  .fa {
    margin-right: 10px;
  }
</style>
<style>
  .noticelist .cardheader {
    color: #a94442;
    background-color: #f2dede;
    padding: 10px 15px;
    line-height: 20px;
    border-bottom: 1px solid #ddd;
  }

  .noticelist .cardbody li {
    padding: 10px 15px;
    line-height: 20px;
    text-align: left;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ddd;
  }

  .noticelist .cardfooter .el-pagination {
    padding: 0;
    margin: 5px;
  }

  .noticelist .cardfooter .el-pager li.active {
    border: 0;
    background-color: transparent;
    color: #eca9a9;
    cursor: default;
  }

  .noticelist .cardfooter li.number {
    color: #aaa;
  }

  .noticelist .cardfooter .el-pager li:hover {
    color: #eca9a9;
  }

  .noticelist .cardfooter .el-pagination button:hover {
    color: #eca9a9;
  }

  .noticelist .cardbody {
    min-height: 100px;
  }
</style>-->
