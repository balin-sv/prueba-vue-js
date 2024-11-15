<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-left">Ultimo</th>
        <th class="text-left">Monto</th>
        <th class="text-left">Var dia</th>
        <th class="text-left">Var 30 dias</th>
        <th class="text-left">Ano actual</th>
        <th class="text-left">12 meses</th>
      </tr>
    </thead>
    <tbody>
      <InstrumentItemComponent
        class="cursor-pointer"
        v-for="item in tableValues"
        :key="item.name"
        :item="item"
        @click="test(item)"
      />
    </tbody>
  </v-table>
</template>

<script setup>
import InstrumentItemComponent from '@/components/InstrumentItemComponent.vue'
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'

const mainStore = useMainStore()
const tableValues = ref([])

const test = (item) => {
  console.log('test')
  mainStore.showDetails(item)
}

onMounted(() => {
  tableValues.value = mainStore.getTableItems().data?.constituents
})
</script>
