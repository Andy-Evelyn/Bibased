<template>
  <div>
    <div class="resourcesMain">
      <div class="mdl-grid">
        <mu-paper :zDepth="2" class="mdl-cell mdl-cell--12-col">
          <ListTabs>
            <template scope="props" slot="addTabs">
              <mu-tab value="tab3" title="文档资料"/>
              <mu-tab value="tab4" title="技术博客"/>
              <mu-tab value="tab5" title="个人笔记"/>
            </template>
          </ListTabs>
          <PaginAtion></PaginAtion>
        </mu-paper>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .resourcesMain {
    padding-top: 74px;
  .mdl-grid {
    margin: 0 20%;
    min-width: 500px;
  .mdl-cell {
    padding: 10px;
    position: relative;
  }
  }
  }
</style>
<script>
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
  Vue.use(MuseUI)
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  export default{
    data(){
      return {
      }
    },
    components: {
      ListTabs,
      PaginAtion,
    }
  }
</script>
