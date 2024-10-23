<template lang="pug">
  form 
    div.form-group
      label(for="search") Buscar por id
      input(id="id" placeholder="Escribe el Id").form-control
    button(type="submit").btn Buscar
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Search'
})
</script>
