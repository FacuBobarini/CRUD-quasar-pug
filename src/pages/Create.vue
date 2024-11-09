<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Form(@formSent="submitForm" label="CREATE")
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
        const newPerson: AxiosResponse = await axios.post('https://crud-nestjs-icek.onrender.com/person', {
          name: form.name,
          lastName: form.lastName,
          dni: form.dni
        })

        this.$q.notify({
        message: `Se cargaron los datos de ${form.name}`
      })
        
      }
      catch (error) {
        console.error("Error: ", error)
      }
    }
  },
});
</script>