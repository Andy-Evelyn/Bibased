<template>
  <div>
    <NewBuild>
      <template scope="props" slot="send_file">
        <p>上传文件：<input type="file" class="" name="send_file"></p>
      </template>
      <template scope="props" slot="build_title">文档资料</template>
    </NewBuild>
  </div>
</template>
<script>
  import NewBuild from './newbuild';
  export default{
    name: "",
    data(){
      return {}
    },
    mounted() {
    },
    components: {
      NewBuild,
    },
    methods: {
    }
  }
</script>

