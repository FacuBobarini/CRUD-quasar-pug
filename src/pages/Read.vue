<template lang="pug">
  q-page.row.items-center.column
    List
</template>

<script lang="ts">
import List from 'src/components/List.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Read',
    components: {
      List
    }
})
</script>
