<template>
  <div style="height:100%;">
    <InHeader></InHeader>
    <div class="listtabsmain">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="moreTitle">
            <mu-icon value="message" :size="48" color="#f1b200"/><span>讨论版</span>
            <mu-raised-button label="发布帖子" class="send_postBtn" primary href="#"/>
            <mu-text-field label="搜索" icon="search" hintText="输入关键词" labelFloat/>
          </div>
          <ListTabs></ListTabs>
          <PaginAtion></PaginAtion>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  body{
    height:100%;
    overflow: hidden;
  }
  .listtabsmain{
      position: relative;
      padding-top:94px;
      /*f分页在右边显示*/
      .mu-pagination{
        float: right;
      }
      /*增加背景强度*/
      .mdl-grid {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
        border-radius: 3px;
        margin: 0 20%;
        min-width: 500px;
        .moreTitle {
          position: relative;
          padding-bottom: 20px;
          .mu-text-field.has-label {
            position: absolute;
            right: 0;
            top: 25px;
          }
          .mu-text-field-icon{
            left:90% !important;
          }
          > span {
            padding: 0 10px;
            position: absolute;
            font-size: 24px;
            color: #009688 !important;
          }
          > a {
            position: absolute;
            right: 10px;
          }
          .send_postBtn{
            position: absolute;
            right: 20px;
          }
        }
      }
   }

</style>
<script>
  import InHeader from 'components/base/inheader';
  import ListTabs from 'components/base/listtabs';
  import PaginAtion from 'components/base/pagination';
  export default{
    data(){
      return {
      }
    },
    components: {
      InHeader,
      ListTabs,
      PaginAtion,
    }
  }
</script>
