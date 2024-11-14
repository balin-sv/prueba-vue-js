<script setup>
import SearchBarComponent from '@/components/SearchBarComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ChartComponent from '@/components/ChartComponent.vue'
import SummaryComponent from '@/components/SummaryComponent.vue'
import TabComponent from '@/components/TabComponent.vue'
import InstrumentListComponent from '@/components/InstrumentListComponent.vue'
</script>

<template>
  <v-container fluid class="bg-black fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <v-col
        cols="12"
        class="d-flex justify-center align-center"
        style="height: 10vh"
      >
        <SearchBarComponent />
      </v-col>
      <v-col cols="9" class="d-flex flex-column" style="height: 50vh">
        <HeaderComponent class="flex-shrink-0" />
        <ChartComponent class="flex-grow-1" />
      </v-col>
      <v-col
        cols="3"
        class="d-flex flex-column justify-start align-start pt-4"
        style="height: 50vh"
      >
        <SummaryComponent />
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center align-center"
        style="height: 40vh"
      >
        <TabComponent>
          <template #table-content> <InstrumentListComponent /> </template>
        </TabComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
