<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Form(@formSent="submitForm")
</template>

<script lang="ts">
import Form from 'src/components/Form.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',

  components: {
    Form
  }
});
</script>