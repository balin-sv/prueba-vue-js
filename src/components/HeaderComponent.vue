<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  currentValue: {
    type: Number,
    required: true
  },
  percentChange: {
    type: Number,
    required: true
  },
  pointsChange: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="w-100 px-5">
    <h2>Title</h2>
    <small class="mt-1 d-inline-block">Indice</small>
    <hr class="thin-line w-100" />
    <v-row class="d-flex align-start">
      <v-col cols="auto" class="mr-2">
        <small>Valor Actual</small> <span>{{ currentValue }}</span>
      </v-col>
      <v-col cols="auto" class="mr-2">
        <small>Var.% Actual</small> <span>{{ percentChange }}</span>
      </v-col>
      <v-col cols="auto">
        <small>Var.Puntos Actual</small> <span>{{ pointsChange }}</span>
      </v-col>
    </v-row>
    <hr class="thin-line w-100" />
  </div>
</template>

<style scoped>
.thin-line {
  height: 1px;
  border: none;
  background-color: #ffffff; /* Цвет линии */
}
</style>
