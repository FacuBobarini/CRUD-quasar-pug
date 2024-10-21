<template lang="pug">
  form 
    div.form-group
      label(for="name") Nombre
      input(id="name" placeholder="Escribe tu nombre").form-control
    div.form-group
      label(for="lastname") Apellido
      input(id="lastname" placeholder="Escribe tu apellido").form-control
    div.form-group
      label(for="dni") DNI
      input(id="dni" placeholder="Escribe tu DNI").form-control
    button(type="submit").btn Submit
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
  name: 'Form'
});
</script>
    