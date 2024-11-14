<template lang="pug">
  q-page.column.items-center.justify-start.bg-grey-4
    Search(@dataSent="searchById")
    List(:person="person")
    Form(label="UPDATE"
    @formSent="updatePerson"
    :rulesDNI="[val =>  !val || /^([0-9])*$/.test(val) || 'Solo se permiten numeros!']")
</template>

<script lang="ts">
import axios from 'axios';
import { useQuasar } from 'quasar';
import Form from 'src/components/Form.vue';
import { FormInterface, UpdateFormInterface } from 'src/components/interfaces/formInterface';
import { AxiosResponse, PersonInterface } from 'src/components/interfaces/personInterface';
import List from 'src/components/List.vue';
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue'

const $q = useQuasar()

export default defineComponent({
  name: 'Create',

  components: {
    Search,
    Form,
    List
  },

  data() {
    return {
      form: {} as UpdateFormInterface,
      person: {} as PersonInterface
    };
  },

  methods: {
    async searchById(id:string) {
      const getPerson: AxiosResponse = await axios.get(`https://crud-nestjs-icek.onrender.com/person/${id}`)
      if(getPerson.data.person){
        this.person = getPerson.data.person;
      }else{
        return this.$q.notify({
          type: 'negative',
          color: 'red',
          message: 'No se encontro registro'
        })
      }
    },

    async updatePerson(form:any) {
      try {
        const updatePerson: AxiosResponse = await axios.patch(`https://crud-nestjs-icek.onrender.com/person/${this.person._id}`,form)
        if(updatePerson.data.status === "success"){
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
  }


})
</script>
