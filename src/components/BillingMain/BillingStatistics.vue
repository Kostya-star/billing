<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const data = {
  labels: ['Июнь 2023', 'Июль 2023', 'Авг. 2023', 'Сент. 2023', 'Окт. 2023', 'Нояб. 2023', 'Дек. 2023', 'Янв. 2023'],
  datasets: [{ data: [40, 20, 12] }]
}

const options = {
  responsive: true,
  scales: {
    y: {
      display: false // Hide y-axis labels
    }
  },
  plugins: {
    customCanvasBackgroundColor: {
      color: 'lightGreen',
    }
  },
  backgroundColor: '#987bed', // Set bar background color to transparent
  barThickness: 4,
  borderColor: 'red',
  borderRadius: {
    topLeft: '100',
    topRight: '100',
  },
}
</script>

<template>
  <div>
    <Bar :data="data" :options="options" />
  </div>
</template>

<style scoped lang="scss"></style>