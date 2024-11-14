<script setup></script>

<template>
  <div class="w-100 px-5">
    <div class="d-flex justify-space-between px-10 mb-5">
      <h4>Resumen</h4>
      <h4>Detalles</h4>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1 py-5">
      <small>Cotizacion</small> <span>{{ rate }}</span>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1">
      <small>Item 1</small> <span>value 1</span>
    </div>
    <div class="d-flex justify-space-between px-1">
      <small>Item 1</small> <span>value 1</span>
    </div>
    <div class="d-flex justify-space-between px-1">
      <small>Item 1</small> <span>value 1</span>
    </div>
    <hr class="thin-line w-100" />
    <div class="d-flex justify-space-between px-1">
      <small>Item 2</small> <span>value 2</span>
    </div>
    <div class="d-flex justify-space-between px-1">
      <small>Item 2</small> <span>value 2</span>
    </div>
  </div>
</template>

<style scoped>
.thin-line {
  height: 1px;
  border: none;
  background-color: #ffffff; /* Цвет линии */
}
</style>
