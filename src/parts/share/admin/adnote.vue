<template>
  <div class="">
    <AdPage>
      <template scope="props" slot="adnote">
        <AdminTable></AdminTable>
      </template>
    </AdPage>
  </div>
</template>
<script>
  import AdPage from './adpage'
  import AdminTable from './adtable'
  export default{
    data () {
      return {

      }
    },
    methods: {
    },
    components: {
      AdPage,
      AdminTable,
    }
  }
</script>

