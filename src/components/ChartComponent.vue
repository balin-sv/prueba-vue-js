<template>
  <apexchart
    type="line"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()

const series = ref([
  {
    name: 'Performance',
    data: []
  }
])
const chartOptions = reactive({
  chart: {
    type: 'line',
    height: '100%',
    width: '100%',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    style: {
      color: '#FFFFFF'
    }
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: '#FFFFFF',
        fontSize: '12px'
      }
    },
    axisBorder: {
      color: '#FFFFFF'
    },
    axisTicks: {
      color: '#FFFFFF'
    }
  },
  yaxis: {
    title: {
      style: {
        color: '#FFFFFF',
        fontSize: '12px'
      }
    },
    labels: {
      style: {
        colors: '#FFFFFF',
        fontSize: '12px'
      }
    },
    axisBorder: {
      color: '#FFFFFF'
    },
    axisTicks: {
      color: '#FFFFFF'
    }
  },
  tooltip: {
    enabled: false
  },
  legend: {
    labels: {
      colors: '#FFFFFF',
      fontSize: '14px'
    },
    horizontalAlign: 'left'
  }
})

watchEffect(() => {
  if (!mainStore.currentItem) return
  series.value[0].data = [
    { x: 'Dia', y: mainStore.currentItem.pctDay },
    { x: '30 Dias', y: mainStore.currentItem.pct30D },
    { x: 'Ano actual', y: mainStore.currentItem.pctCY },
    { x: '1 Ano', y: mainStore.currentItem.pct1Y }
  ]
})
</script>

<style scoped></style>
