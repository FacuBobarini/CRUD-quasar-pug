<template lang="pug">
  q-form(@submit="emitForm")
    q-input(outlined v-model="formData.name" label="Nombre" hint="Coloca tu nombre" lazy-rules :rules="[ val => val && val.length > 0 || 'El campo esta vacio!']").q-pt-sm
    q-input(outlined v-model="formData.lastName" label="Apellido" hint="Coloca tu apellido" lazy-rules :rules="[ val => val && val.length > 0 || 'El campo esta vacio!']").q-pt-sm
    q-input(outlined v-model="formData.dni" label="DNI" hint="Coloca tu DNI" lazy-rules :rules="[ val => val && val.length > 0 || 'El campo esta vacio!', val => /^([0-9])*$/.test(val) || 'Solo se permiten numeros!']").q-pt-sm 
    q-btn(unelevated  color="primary" type="submit").q-ma-sm {{label}}
</template>
    
<script lang="ts">
import { defineComponent, PropType } from 'vue';
  
export default defineComponent({
  name: 'Form',

  data() {
    return {
      formData: {
        name: '',
        lastName: '',
        dni: ''
      }
    };
  },

  props: {
    label: {
      type: String as PropType<string>,
      required: true
    }
  },

  methods: {
    emitForm() {
      this.$emit('formSent', this.formData);
      this.formData = {name: '',
        lastName: '',
        dni: ''}
    }
}
});
</script>
    