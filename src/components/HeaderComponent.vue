<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()
const data = computed(() => {
  console.log(mainStore.tableData.data.info)
  return mainStore.tableData.data.info ?? null
})
</script>

<template>
  <div class="w-100 px-5">
    <h2>{{ data?.name || '-' }}</h2>
    <small class="mt-1 d-inline-block pb-2">Indice</small>
    <hr class="thin-line w-100" />
    <v-row class="d-flex align-start py-3">
      <v-col cols="auto" class="mr-2">
        <small>Valor Actual</small>
        <span class="px-2">{{ data?.countryName || '-' }}</span>
      </v-col>
      <v-col cols="auto" class="mr-2">
        <small>Var.% Actual</small>
        <span class="px-2">{{ data?.codeInstrument || '-' }}</span>
      </v-col>
      <v-col cols="auto">
        <small>Var.Puntos Actual</small>
        <span class="px-2">{{ data?.countryName || '-' }}</span>
      </v-col>
    </v-row>
    <hr class="thin-line w-100" />
  </div>
</template>

<style scoped>
.thin-line {
  height: 1px;
  border: none;
  background-color: #ffffff;
}
</style>
