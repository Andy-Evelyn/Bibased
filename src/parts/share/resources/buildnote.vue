<template>
  <div>
    <NewBuild>
      <template scope="props" slot="build_title">个人笔记</template>
      <template scope="props" slot="send_note">
        <Editor></Editor>
      </template>
    </NewBuild>
  </div>
</template>
<script>
  import NewBuild from './newbuild';
  import Editor from 'components/base/pageeditor';
  export default{
    name: "",
    data(){
      return {}
    },
    mounted() {
    },
    components: {
      NewBuild,
      Editor,
    },
    methods: {
    }
  }
</script>

