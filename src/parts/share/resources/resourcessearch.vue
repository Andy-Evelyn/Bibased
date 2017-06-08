<template>
  <div style="height:100%;">
    <div class="listtabsmain">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="tabsMain">
            <p>"{{searchlabel}}" 搜索到以下结果</p>
            <!--显示内容-->
            <div class="postsL_all">
              <div class="context_one" v-for="(item,index) in Share_search" :key="index">
                <img :src="userImg" class="item_img"/>
                <div class="item_cont">
                  <h6><a :href="locat+item.id" class="text" >{{item.title}}</a></h6>
                  <p> • <span class="itemUser_name">{{item.userinfo.nickName}} </span>的发布 • <span>{{item.comment_num}}</span>个回复 • <span>{{item.view_num}}</span>次浏览 • <span>{{item.mtime}}</span></p>
                </div>
              </div>
            </div>

          </div>
          <!--分页-->
          <mu-pagination :total="total" :current="current" :pageSize='pageSize' @pageChange="handleClick"></mu-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .listtabsmain{
    position: relative;
    padding-top:94px;
  /*增加背景强度*/
  .mdl-grid {
    background:#fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.156863), 0 3px 10px rgba(0, 0, 0, 0.227451);
    border-radius: 3px;
    margin: 0 20%;
    min-width: 500px;
  }
  }

  .tabsMain{
    position: relative;
  .context_one {
    position: relative;
    min-height: 45px;
    padding: 20px 0;
    border-top: 1px solid #e6e6e6;
  >img{
     position: absolute;
     top: 22px;
     width: 40px;
     height: 40px;
     border-radius:5px;
   }
  .item_cont {
    padding-left: 60px;
  h6,>p{
        height:24px;
        overflow: hidden;
      }
  h6{
    font-size: 14px !important;
    margin:0 !important;
  }
  >p{
     font-size: 12px !important;
     color:#999;
     margin:0 !important;
   }
  .itemUser_name{
    color:#666;
  }
  }
  }
  }
</style>
<script>
  import userImg from '../../../assets/images/user.png'
  import $http from 'src/api/http.js';
  export default{
    props:['mes'],
    name:"postsmain",
    data(){
      return {
        total: 0,
        current: 1,
        pageSize:10,
        userImg: userImg,
        q:this.$route.params.q,
        type:this.$route.params.type,
        locat: '',
        searchlabel: "",
        Shareform:{
          limit:10,
          start:0,
        },
        Share_search:[],
      }
    },
    components: {
    },
    methods:{
      handleClick(newIndex){
        this.Shareform.start = (newIndex - 1) * this.Shareform.limit;
        var url = '';
        if (this.type == 1) {
          url = 'http://118.89.217.84/exchange-platform/index.php/Document/Search';
          this.locat = '../../../parts/share/resources/resources.html#/fileshow/'
        } else if (this.type == 2) {
          url = 'http://118.89.217.84/exchange-platform/index.php/Blog/Search'
          this.locat = '../../../parts/share/resources/resources.html#/blogshow/'
        } else if (this.type == 3) {
          url = 'http://118.89.217.84/exchange-platform/index.php/Note/Search';
          this.locat = '../../../parts/share/resources/resources.html#/noteshow/'
        }
        $http.corspost({
          url: url,
          data: Object.assign({}, {q: this.q}, this.Shareform),
        }).done((response) => {
          const data = response.data;
          console.log(this.q);
          if (response.code === 200) {
            console.log(data);
            this.Share_search = data.list;
            this.searchlabel = this.q;
            this.total = response.data.meta.count;
            this.current = this.Shareform.start / this.Shareform.limit + 1;
          } else {
            alert(response.msg);
          }
        })
      }
    },
    created(){
      this.handleClick(1);
    }
  }
</script>
