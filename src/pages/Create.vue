<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Form(@formSent="submitForm" label="CREATE")
</template>

<script lang="ts">
import Form from 'src/components/Form.vue';
import { FormInterface } from 'src/components/interfaces/formInterface';
import { defineComponent } from 'vue';

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
      this.createRegister()
    },

    createRegister() {
      try {
        //axios fetch and notify alert
      }
      catch (error) {
        console.error("Error: ", error)
      }
    }
  },
});
</script>