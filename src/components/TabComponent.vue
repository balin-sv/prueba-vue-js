<template>
  <v-card class="h-100 w-100 transparent-card text--white" flat>
    <v-tabs v-model="tab" bg-color="transparent">
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="item in items" :key="item" :value="item">
        <v-card flat class="transparent-card text--white">
          <v-card-text>
            <slot name="table-content"></slot>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: 'Tab1',
      items: ['Tab1', 'Tab2', 'Tab3']
    }
  }
}
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
