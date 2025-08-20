<template>
  <div class="max-w-7xl mx-auto">
    <div class="shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      <div
        v-for="country in countries"
        :key="country.country"
        class=" rounded-lg p-6  flex flex-col items-center min-w-[180px]"
      >
        <div class="text-gray-500 text-sm font-medium mb-2">{{ country.country }}</div>
        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-gray-900 mr-2">{{ country.value }}</span>
          <span :class="getTrendClass(country.trend)">{{ getTrendIcon(country.trend) }}</span>
        </div>
        <div class="w-full h-12">
          <canvas 
            :ref="el => setChartRef(el, country.country)" 
            width="120" 
            height="48"
            class="w-full h-full"
          ></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRefs = ref({})

const countries = ref([
  {
    country: 'Italy',
    value: 475,
    trend: 'up',
    color: '#3B82F6',
    chartData: [450, 445, 460, 455, 470, 465, 475, 480, 475]
  },
  {
    country: 'United States',
    value: 431,
    trend: 'up',
    color: '#3B82F6',
    chartData: [410, 415, 420, 425, 418, 422, 428, 432, 431]
  },
  {
    country: 'Canada',
    value: 174,
    trend: 'down',
    color: '#EF4444',
    chartData: [190, 185, 180, 182, 178, 175, 172, 174, 174]
  },
  {
    country: 'Spain',
    value: 475,
    trend: 'up',
    color: '#3B82F6',
    chartData: [460, 465, 470, 468, 472, 475, 477, 475, 475]
  },
  {
    country: 'Japan',
    value: 134,
    trend: 'up',
    color: '#10B981',
    chartData: [125, 128, 130, 132, 131, 133, 135, 134, 134]
  },
  {
    country: 'South Africa',
    value: 471,
    trend: 'down',
    color: '#EF4444',
    chartData: [485, 480, 478, 475, 473, 471, 470, 471, 471]
  }
])

const setChartRef = (el, countryName) => {
  if (el) {
    chartRefs.value[countryName] = el
  }
}

const getTrendClass = (trend) => {
  return trend === 'up' ? 'text-green-500 text-sm' : 'text-red-500 text-sm'
}

const getTrendIcon = (trend) => {
  return trend === 'up' ? '▲' : '▼'
}

const createChart = (canvas, data, color) => {
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: data.length }, (_, i) => i),
      datasets: [{
        data: data,
        borderColor: color,
        backgroundColor: color + '20',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      elements: {
        point: {
          radius: 0
        }
      },
      interaction: {
        intersect: false
      }
    }
  })
}

onMounted(() => {
  nextTick(() => {
    countries.value.forEach(country => {
      const canvas = chartRefs.value[country.country]
      if (canvas) {
        createChart(canvas, country.chartData, country.color)
      }
    })
  })
})
</script>