<template>
  <div>
    <footer class="mdl-mega-footer">
      <div class="mdl-mega-footer__middle-section">

        <div class="mdl-mega-footer__drop-down-section">
          <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
          <h1 class="mdl-mega-footer__heading">友情链接</h1>
          <ul class="mdl-mega-footer__link-list">
            <li><a href="https://cn.vuejs.org/" target="_blank">Vue.js官网</a></li>
            <li><a href="https://github.com/" target="_blank">GitHub</a></li>
            <li><a href="http://www.muse-ui.org/" target="_blank">Muse-UI</a></li>
            <li><a href="http://www.bootcss.com/" target="_blank">Bootstrap中文官网</a></li>
            <li><a href="http://www.jquery123.com/" target="_blank">jQuery中文API</a></li>
          </ul>
        </div>

        <div class="mdl-mega-footer__drop-down-section">
          <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
          <h1 class="mdl-mega-footer__heading">我们用到的技术</h1>
          <ul class="mdl-mega-footer__link-list">
            <li><a href="https://cn.vuejs.org/" target="_blank">Vue.js</a></li>
            <li><a href="http://jquery.com/" target="_blank">jQuery</a></li>
            <li><a href="http://webpack.github.io/docs/" target="_blank">webpack</a></li>
            <li><a href="http://www.muse-ui.org/" target="_blank">Muse-UI</a></li>
            <li><a href="https://nodejs.org/en/" target="_blank">Node</a></li>
            <!--<li><a href="#">NPM</a></li>-->
          </ul>
        </div>

      </div>

    </footer>
    <p class="fc">
      Copyright © 2017 Parabola
    </p>
  </div>

</template>

<style lang="less">
  .fc{
    width:100% !important;
    line-height: 50px;
    text-align: center !important;
    background: #333;
    color:#9e9e9e;
    margin:0 !important;
  }
</style>
<script>
  import 'muse-components/styles/base.less' // 加载基础的样式
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题

  /*全部加载muse-ui用于测试*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)
  //  require("materialjs");
  export default{
    data(){
      return {
      }
    },
    methods:{

    },
    components: {
    }
  }
</script>
