<template lang="pug">
  q-toolbar
    q-toolbar-title.text-weight-medium CRUD-Quasar-Project

  q-tabs
    q-route-tab(to="create") Create
    q-route-tab(to="read") Read
    q-route-tab(to="update") Update
    q-route-tab(to="delete") Delete

</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar'
});
</script>
  
