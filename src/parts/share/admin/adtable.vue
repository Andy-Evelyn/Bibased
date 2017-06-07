<template>
  <div class="adminContent">
    <p class="aCtitle">
      帖子
      <mu-text-field label="搜索"type="text"  @keyup.enter.native="search()" icon="search" hintText="输入关键词" labelFloat/>
    </p>

    <mu-table :fixedHeader="fixedHeader" :height="height"  :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th width="50%">标题</mu-th>
          <mu-th width="25%">发布时间</mu-th>
          <mu-th width="25%">操作</mu-th>
        </mu-tr>
      </mu-thead>

      <mu-tbody>
        <mu-tr v-for="item in tableData" :key="item">
          <mu-td width="50%">{{item.title}}</mu-td>
          <mu-td width="25%">{{item.time}}</mu-td>
          <mu-td width="25%">
            <mu-icon-button title="查看" icon="search" iconClass="re_style"/>
            <mu-icon-button title="删除" label="dialog" icon="delete_forever" iconClass="de_style" @click="open"/>
          </mu-td>
        </mu-tr>
      </mu-tbody>

    </mu-table>

    <!--删除提示-->
    <mu-dialog :open="dialog" title="确定删除？" @close="close" dialogClass="dialog" titleClass="dia_title">
      删除后不可恢复
      <mu-flat-button slot="actions" color="#14c97f" @click="close" label="取消"/>
      <mu-flat-button slot="actions" color="#14c97f" @click="close" label="确定"/>
    </mu-dialog>

    <PaginAtion></PaginAtion>

  </div>

</template>

<style lang="less">

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
  .adminContent{
    position: relative;
    margin:0 40px;
    /*border: 1px solid #14c97f;*/
    .aCtitle{
      border-bottom: 2px solid #14c97f;
      line-height: 70px;
      font-size: 28px;
    }
    /*查看删除样式*/
    .re_style{
      color:#14c97f !important;
    }
    .de_style{
      color:red !important;
    }
    .mu-text-field.has-label {
      position: absolute;
      right: 0;
      /*top: 25px;*/
    }
    .mu-text-field-icon{
      left:90% !important;
    }
  }
  /*弹出框样式*/
    .dialog{
    width: 300px;
    }
    .dia_title{
      color:#ff4081 ;
    }
  .mu-td{
    white-space: normal !important;
  }


</style>
<script>

  /*全部加载*/
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
  import PaginAtion from 'components/base/pagination';
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
        height: '520px'
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
        this.$router.push({path:'/search'});
      },
    },
    components: {
      PaginAtion,
    }
  }
</script>
