<template>
  <div class="">
    <div class="adminContent">
      <p class="aCtitle">
        帖子
        <mu-text-field label="搜索"type="text" v-model="keywords" @keyup.enter.native="search" icon="search" hintText="输入关键词" labelFloat/>
      </p>
      <mu-table :fixedHeader="fixedHeader" :height="height"  :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th width="25%">标题</mu-th>
            <mu-th width="15%">发布人</mu-th>
            <mu-th width="15%">回复量</mu-th>
            <mu-th width="15%">浏览量</mu-th>
            <mu-th width="20%">最近更新时间</mu-th>
            <!--<mu-th width="10%">操作</mu-th>-->
          </mu-tr>
        </mu-thead>

        <mu-tbody>
          <mu-tr v-for="(item,index) in Data" :key="index">
            <mu-th width="25%">{{item.title}}</mu-th>
            <mu-td width="15%">{{item.userinfo.nickName}}</mu-td>
            <mu-td width="15%">{{item.comment_num}}</mu-td>
            <mu-td width="15%">{{item.view_num}}</mu-td>
            <mu-td width="20%">{{item.mtime}}</mu-td>
            <!--<mu-td width="10%">-->
              <!--&lt;!&ndash;<mu-icon-button title="查看" icon="search" iconClass="re_style" to="adpostview/"/>&ndash;&gt;-->
              <!--<mu-icon-button title="删除" label="dialog" icon="delete_forever" iconClass="de_style" @click="open"/>-->
            <!--</mu-td>-->
          </mu-tr>
        </mu-tbody>

      </mu-table>

<!--      &lt;!&ndash;删除提示&ndash;&gt;
      <mu-dialog :open="dialog" title="确定删除？" @close="close" dialogClass="dialog" titleClass="dia_title">
        删除后不可恢复
        <mu-flat-button slot="actions" color="#14c97f" @click="close" label="取消"/>
        <mu-flat-button slot="actions" color="#14c97f" @click="close" label="确定"/>
      </mu-dialog>-->

      <!--分页-->
      <mu-pagination :total="total" :current="current":pageSize="pageSize" @pageChange="handleClick"></mu-pagination>
    </div>
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
  import $http from 'src/api/http.js';
  export default{
    data () {
      return {
        dialog: false,
        fixedHeader: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        showCheckbox: false,
        selectable:false,
        height: '520px',
        total: 0,
        current: 1,
        pageSize:8,
        keywords:'',
        Data:[],
        form:{
          limit:8,
          start:'',
        },
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
        this.form.start = (newIndex - 1)*this.form.limit;
        $http.corspost({
          url: 'http://118.89.217.84/exchange-platform/index.php/Bbs/Show',
          data: this.form,
        }).done((res)=>{
          this.Data=res.data.list;
          this.total = res.data.meta.count;
          this.current = this.form.start/this.form.limit +1;
        })
      },
    },
    created(){
      $http.corspost({
        url: 'http://118.89.217.84/exchange-platform/index.php/Auth/checkIsLogin',
      }).done((response) => {
        const data = response.data;
        console.log(data);
        if (response.code === 200) {
          $http.corspost({
            url: 'http://118.89.217.84/exchange-platform/index.php/Bbs/Show ',
            data: this.form,
          }).done((res)=>{
            this.Data=res.data.list;
            console.log(this.Data);
            this.total = res.data.meta.count;
            this.current = this.form.start/this.form.limit +1;

          })
        } else {
          alert("请先登录");
          this.louter.push('/');
        }
      }).fail((jqXHR, textStatus, errorThrown)=>{
        this.$store.dispatch('showInfoDialog', "请求发生错误，请稍后再试");
      }).always(function () {
      });
    },
  }
</script>

