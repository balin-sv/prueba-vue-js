<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores/mainStore'

const mainStore = useMainStore()
const data = computed(() => {
  return mainStore.currentItem ?? null
})
</script>

<template>
  <div class="w-100 px-5">
    <div class="d-flex justify-space-between px-10 mb-5">
      <h4>Resumen</h4>
      <h4>Detalles</h4>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1 py-5">
      <small>Cotizacion</small>
      <span>{{ data?.datetimeLastPrice || '-' }}</span>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1 pt-2">
      <small>NOMBRE</small> <span>{{ data?.name || '-' }}</span>
    </div>
    <div class="d-flex justify-space-between px-1">
      <small>DIA</small> <span>{{ data?.pctDay || '-' }}</span>
    </div>
    <div class="d-flex justify-space-between px-1">
      <small>MES</small> <span>{{ data?.pct30D || '-' }}</span>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1 py-5">
      <small>12 MESES</small> <span>{{ data?.pct1Y || '-' }}</span>
    </div>
  </div>
</template>

<style scoped>
.thin-line {
  height: 1px;
  border: none;
  background-color: #ffffff;
}
</style>
