<template>
  <v-card class="h-100 w-100 transparent-card text--white" flat>
    <v-tabs v-model="tab" bg-color="transparent">
      <v-tab v-for="item in 2" :key="item" :text="item" :value="item">
        {{ tabNames }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in 2" :key="item" :value="item">
        <v-infinite-scroll height="400" @load="load">
          <v-card
            class="overflow-y-auto max-h-64 transparent-card text--white"
            flat
          >
            <v-card-text>
              <slot name="table-content"></slot>
            </v-card-text> </v-card
        ></v-infinite-scroll>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'

const mainStore = useMainStore()
const tabNames = ref('')

const tab = ref('Instrument List')

onMounted(() => {
  tabNames.value = mainStore.getTableItems().data.info.name
})
</script>

<style scoped>
.transparent-card {
  background-color: transparent !important;
  box-shadow: none;
}
.text--white {
  color: white !important;
}
</style>
