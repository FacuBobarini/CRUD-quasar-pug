<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Search
</template>

<script lang="ts">
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Delete',
  components: {
    Search
  }
})
</script>
