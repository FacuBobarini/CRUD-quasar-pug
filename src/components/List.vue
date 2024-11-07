<template lang="pug">
  div(style="width: 300px").q-pa-md
    q-list(bordered separator)
      q-item(clickable v-ripple @click="copyLabel(person._id,'ID')")
        q-item-section
          q-item-label(overline) ID
          q-item-label {{ person._id }}
      q-item(clickable v-ripple @click="copyLabel(person.name,'Nombre')")
        q-item-section
          q-item-label(overline) Nombre
          q-item-label {{ person.name }}
      q-item(clickable v-ripple @click="copyLabel(person.lastName,'Apellido')")
        q-item-section
          q-item-label(overline) Apellido
          q-item-label {{ person.lastName }}
      q-item(clickable v-ripple @click="copyLabel(`${person.dni}`,'DNI')")
        q-item-section
          q-item-label(overline) DNI
          q-item-label {{ person.dni }}
  
</template>
    
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PeopleInterface } from './interfaces/personInterface';
import { copyToClipboard, useQuasar } from 'quasar';

const $q = useQuasar()
  
export default defineComponent({
  name: 'List',
  
  props: {
    person: {
      type: Object as PropType<PeopleInterface>,
      required: true
    },
  },

  methods:{
    async copyLabel(item:string,label:string){
      await copyToClipboard(item)
      this.$q.notify({
        message: `Se copio ${label} en el portapapeles`
      })
    }
  }
});
</script>