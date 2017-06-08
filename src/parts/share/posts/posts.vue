<template>
  <div style="height:100%;">
    <PageHeader>
      <template slot="line-topP">
        <p class="line-top"></p>
      </template>
    </PageHeader>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<style lang="less">
  body{
    height:100%;
    background: #f2f2f2 !important;
    overflow: hidden;
  }
  .line-top {
    border-top: 2px solid #3bbe7a;
    width: 18px;
    margin: auto;
  }
</style>
<script>
  import PageHeader from 'components/base/pageheader';
  export default{
    data(){
      return {
      }
    },
    components: {
      PageHeader,
    },
  }
</script>
