<template lang="pug">
  q-page.row.justify-evenly.page-container
    Form
</template>

<script lang="ts">
import Form from 'src/components/Form.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',

  components: {
    Form
  },

  setup () {
  }
});
</script>