<template lang="pug">
  q-page.column.items-center
    SearchDelete
</template>

<script lang="ts">
import SearchDelete from 'src/components/Search-delete.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Delete',
  components: {
    SearchDelete
  }
})
</script>
