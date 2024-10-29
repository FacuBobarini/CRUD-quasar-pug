<template lang="pug">
  q-div.q-mt-lg
    q-input(bottom-slots outlined v-model="data.id" label="Ingresar ID" hint="Buscar por id")
        template(v-slot:append)
          q-icon(v-if="data.id !== ''" name="close" @click="data.id = ''" class="cursor-pointer")
          q-btn(round dense flat icon="send" @click="emitData")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Search',

  data() {
    return {
      data: {
        id: ''
      }
    };
  },

methods: {
  emitData() {
    this.$emit('dataSent', this.data);
  }
}
})
</script>
