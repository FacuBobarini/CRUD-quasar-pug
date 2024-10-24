<template lang="pug">
  q-page.column.items-center
    p Ingresa el ID del registro que deseas eliminar
    q-input(bottom-slots v-model="text" label="Ingresar ID" )
        template(v-slot:append)
          q-icon(name="close" @click="text = ''" ).cursor-pointer

        template(v-slot:after)
          q-btn(round dense flat icon="send")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SearchDelete'
})
</script>
