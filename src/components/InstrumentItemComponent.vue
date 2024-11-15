<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.lastPrice }}</td>
    <td>{{ item.volumeMoney }}</td>
    <td>{{ item.pctDay }}</td>
    <td>{{ item.pct30D }}</td>
    <td>{{ item.pctCY }}</td>
    <td>{{ item.pct1Y }}</td>
  </tr>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
