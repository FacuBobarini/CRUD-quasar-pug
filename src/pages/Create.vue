<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Form(@formSent="submitForm" 
    label="CREATE" 
    :hintText="'Porfavor ingresa tu'"
    :rules="[val => val && val.length > 0 || 'El campo esta vacio!']"
    :rulesDNI="[val => val && val.length > 0 || 'El campo esta vacio!',val => /^([0-9])*$/.test(val) || 'Solo se permiten numeros!']")
</template>

<script lang="ts">
import axios from 'axios';
import { useQuasar } from 'quasar';
import Form from 'src/components/Form.vue';
import { FormInterface } from 'src/components/interfaces/formInterface';
import { AxiosResponse } from 'src/components/interfaces/personInterface';
import { defineComponent } from 'vue';

const $q = useQuasar()

export default defineComponent({
  name: 'Create',

  components: {
    Form
  },

  data() {
    return {
      form: {
        name: '',
        lastName: '',
        dni: ''
      }
    };
  },

  methods: {
    submitForm(form:FormInterface) {
      this.form = form;
      this.createRegister(this.form)
    },

    async createRegister(form:FormInterface) {
      try {
        const newPerson: AxiosResponse = await axios.post('https://crud-nestjs-icek.onrender.com/person', form)
        if(newPerson.data.status === "success"){
          return this.$q.notify({
          message: `Se cargaron los datos de ${form.name}`
          })
        }else{
          return this.$q.notify({
          type: 'negative',
          color: 'red',
          message: 'Error, no se cargaron los datos'
          })
        }
        
      }
      catch (error) {
        console.error("Error: ", error)
      }
    }
  },
});
</script>