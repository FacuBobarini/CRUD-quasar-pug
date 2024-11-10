<template lang="pug">
  q-page.column.items-center.justify-left.q-pt-md.bg-grey-4
    Search(@dataSent="deleteRegister")
</template>

<script lang="ts">
import axios from 'axios';
import { useQuasar } from 'quasar';
import { AxiosResponse } from 'src/components/interfaces/personInterface';
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue'

const $q = useQuasar()

export default defineComponent({
  name: 'Delete',
  components: {
    Search
  },

  methods: {
    async deleteRegister(id:string){
      try{
      const registerDeleted: AxiosResponse = await axios.delete(`https://crud-nestjs-icek.onrender.com/person/${id}`)

      this.$q.notify({
        message: 'Se elimino el registro'
      })
    }catch(error){
      console.error("Error: ", error)
    }
    }
  }
})
</script>
