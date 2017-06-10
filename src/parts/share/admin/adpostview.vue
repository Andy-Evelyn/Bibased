<template>
  <div style="height:100%;">
      查看详情
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
    data () {
      return {
        dialog: false,
        tableData: [
          {
            title: '平台提交错误。vc正确',
            time: '2017-05-08 10:31:02 ',
          },
          {
            title: '求二叉树的深度 MemoryLimitExceed VC通过',
            time: '2017-05-18 11:41:22 '
          },
          {
            title: '115队列的链式存储结构与操作，提交不通过',
            time: '2017-05-19 18:14:36',
          },
          {
            title: 'JavaScript类型比较',
            time: '2017-05-19 20:13:38'
          },
          {
            title: '前端模块化的发展使',
            time: '2017-05-20 12:14:56'
          },
          {
            title: 'Vue2.0 全家桶开发的网页应用（参照吾记APP)',
            time: '2017-05-20 18:14:36'
          },
          {
            title: 'Vue.js高仿饿了么WebApp',
            time: '2017-05-20 19:47:32'
          },
          {
            title: '数组和对象的浅拷贝和深拷贝',
            time: '2017-05-21 10:54:16'
          },
          {
            title: 'javascript初学者实践使用',
            time: '2017-05-21 13:14:57'
          },
          {
            title: 'webpack学习',
            time: '2017-05-21 20:13:14'
          },
        ],
        fixedHeader: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        showCheckbox: false,
        selectable:false,
        height: '520px',
        total: 500,
        current: 1,
        keywords:'',
      }
    },
    methods: {
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      },
      search(){
//        this.$router.push({path:'/search'});
      },
      handleClick (newIndex) {
      },
    },
    components: {
    }
  }
</script>

