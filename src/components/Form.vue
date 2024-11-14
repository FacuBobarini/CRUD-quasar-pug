<template lang="pug">
  q-form(@submit="emitForm")
    q-input(outlined v-model="formData.name" label="Nombre" :hint="`${hintText} nombre`" lazy-rules :rules="rules").q-pt-sm
    q-input(outlined v-model="formData.lastName" label="Apellido" :hint="`${hintText} apellido`" lazy-rules :rules="rules").q-pt-sm
    q-input(outlined v-model="formData.dni" label="DNI" :hint="`${hintText} DNI`" lazy-rules :rules="rulesDNI").q-pt-sm 
    q-btn(unelevated  color="primary" type="submit").q-ma-sm {{label}}
</template>
    
<script lang="ts">
import { ValidationRule } from 'quasar';
import { defineComponent, PropType } from 'vue';
import { FormInterface, UpdateFormInterface } from './interfaces/formInterface';
  
export default defineComponent({
  name: 'Form',

  data() {
    return {
      formData: {} as FormInterface | UpdateFormInterface
    };
  },

  props: {
    label: {
      type: String,
      required: true
    },

    hintText: {
      type: String,
      default: ''
    },

    rules: {
      type: [] as PropType<[ValidationRule]|[ValidationRule,ValidationRule]>
    },

    rulesDNI: {
      type: [] as PropType<[ValidationRule]|[ValidationRule,ValidationRule]>
    }
  },

  methods: {
    emitForm() {
      this.$emit('formSent', this.formData);
    }
}
});
</script>
    