<template>
  <div class="main">
    <div class="banner">
      <!--<img :src="banner_img" alt="">-->
    </div>
  </div>

</template>

<style lang="less">
  .main{
    position: relative;
    .banner{
      width:100%;
      height:500px;
      min-height: 500px;
      background:url("../../assets/images/slide1.jpg") no-repeat;
      background-size:100% auto;
    }
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
  import banner_img from '../../assets/images/slide1.jpg'
  export default{
    data(){
      return {
        banner_img: banner_img,
      }
    },
    methods:{

    },
    components: {
    }
  }
</script>
