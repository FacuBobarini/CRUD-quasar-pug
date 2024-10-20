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
  
<style lang="scss" scoped>
$navbar-background: #f8f9fa;
$nav-item-hover: #1976D2;
$nav-item-active: #1976D2; 
$nav-item-hover-color: #e1e1e1;
$nav-item-primary-color: #121212;


.navbar {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 15px 0px;
  margin: 0px;
  background-color: $navbar-background;

  .nav-item {
    margin: 0px 15px;

    a {
      text-decoration: none;
      color: $nav-item-primary-color;
      font-weight: bold;
      padding: 10px 15px;
      border-radius: 4px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: $nav-item-hover;
        color: $nav-item-hover-color;
      }

      &:active {
        background-color: $nav-item-active;
        color: $nav-item-hover-color;
      }
    }
  }
}
</style>