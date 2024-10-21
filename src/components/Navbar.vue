<template lang="pug">
  nav
    ul.navbar
      li.nav-item
        a(href="#/create") Create
      li.nav-item
        a(href="#/read") Read
      li.nav-item
        a(href="#/update") Update
      li.nav-item
        a(href="#/delete") Delete
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar'
});
</script>
  
