<template lang="pug">
  q-page.row.items-center.column
    List(v-for="person in people" :key="person._id" :person="person")
</template>

<script lang="ts">
import axios, { AxiosResponse } from 'axios';
import { PeopleInterface } from 'src/components/interfaces/personInterface';
import List from 'src/components/List.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Read',

    components: {
      List
    },
    
    data() {
      return {
        people:[] as PeopleInterface[]
      }
    },

    methods: {
      async getData(){
        try{
          const peopleData: AxiosResponse = await axios.get('https://crud-nestjs-icek.onrender.com/person/')
          this.people = peopleData.data.people
        }catch(error){
          console.error(error)
        }
      }
    },

    mounted(){
      this.getData()
    }
});
</script>
