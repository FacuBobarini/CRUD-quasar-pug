<template lang="pug">
  q-page.row.items-center.justify-evenly.column
    Search
    Form
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
  }
})
</script>
