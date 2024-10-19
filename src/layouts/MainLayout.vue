<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header 
      navbar
    q-page-container
      router-view 
    q-footer
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from 'components/Navbar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Navbar
  }
});
</script>