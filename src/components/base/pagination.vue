<template>
  <div>
    <mu-pagination :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
  </div>
</template>

<style lang="less">

</style>
<script>

  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)

  export default{
    data(){
      return {
        total: 500,
        current: 1
      }
    },
    components: {
    },
    methods:{
      handleClick (newIndex) {
      }
    }
  }
</script>
