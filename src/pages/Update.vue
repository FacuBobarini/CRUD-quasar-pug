<template lang="pug">
  q-page.column.items-center.justify-start.bg-grey-4
    Search(@dataSent="searchById")
    Form(label="UPDATE")
</template>

<script lang="ts">
import Form from 'src/components/Form.vue';
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Create',

  components: {
    Search,
    Form
  },

  methods: {
    searchById(data:any){
      //search
    }
  }


})
</script>
