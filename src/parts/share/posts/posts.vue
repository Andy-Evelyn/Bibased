<template>
  <div style="height:100%;">
    <InHeader></InHeader>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<style lang="less">
  body{
    height:100%;
    background: #f2f2f2 !important;
    overflow: hidden;
  }
</style>
<script>
  import InHeader from 'components/base/inheader';
  export default{
    data(){
      return {
      }
    },
    components: {
      InHeader,
    }
  }
</script>
