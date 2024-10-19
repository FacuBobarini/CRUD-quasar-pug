<template lang="pug">
  nav
    ul.navbar
      li.nav-item
        a(href="/create") Create
      li.nav-item
        a(href="/read") Read
      li.nav-item
        a(href="/update") Update
      li.nav-item
        a(href="/delete") Delete
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar'
});
</script>
  
<style scoped> 
.navbar {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 15px 0px;
  margin: 0px;
  background-color: #f8f9fa;
}

.nav-item {
  margin: 0px 15px;
}

.nav-item a {
  text-decoration: none;
  color: #121212;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item a:hover {
  background-color: #1976D2;
  color: white; 
}

.nav-item a:active {
  background-color: #1976D2;
  color: white;
}
</style>