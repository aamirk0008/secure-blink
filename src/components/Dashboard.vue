<script>
import Charts from './Charts.vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import img1 from '../assets/images.jpeg'
import img2 from '../assets/teams-1.jpg'
import img3 from '../assets/teams-2.webp'
import img4 from '../assets/teams-3.avif'
import img5 from '../assets/teams-4.jpeg'
import { ref } from 'vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Charts,
    Sidebar,
  },
  setup() {
    const countries = ref([
      {
        name: 'United States',
        percentage: 93,
        flag: 'https://flagcdn.com/w40/us.png',
      },
      {
        name: 'Italy',
        percentage: 73,
        flag: 'https://flagcdn.com/w40/it.png',
      },
      {
        name: 'Spain',
        percentage: 13,
        flag: 'https://flagcdn.com/w40/es.png',
      },
    ])

    return {
      countries,
    }
  },
  data() {
    return {
      user: {},
      team: [
        {
          name: 'Andrew Johnson',
          role: 'Top Trader',
          img: img1,
        },
        {
          name: 'Mike Tyson',
          role: 'Manager',
          img: img2,
        },
        {
          name: 'Mark Boucher',
          role: 'Top Trader',
          img: img3,
        },
        {
          name: 'Andrew Symonds',
          role: 'Manager',
          img: img4,
        },
        {
          name: 'James Anderson',
          role: 'Financial Analyst',
          img: img5,
        },
      ],
    }
  },
  mounted() {
    // Get user data from localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      this.user = JSON.parse(userData)
    }
  },
}
</script>

<template>
  <Navbar />
  <div class="flex">
    <Sidebar />

    <main class="min-h-screen bg-gray-50 px-16">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="mb-8 flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-gray-600 mt-2">Welcome back, {{ user.name }}!</p>
          </div>
          <div class="flex items-center space-x-4">
            <div>
              <button
                class="flex items-center gap-1 bg-blue-600 text-white text-sm py-2 px-3 rounded"
              >
                <span><img class="w-[12px]" src="../assets/dashboard/e-add.png" alt="" /></span> Add
                Unit
              </button>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[30px] h-[30px] object-cover rounded-[50%]"
                src="../assets/images.jpeg"
                alt=""
              />
              <p>{{ user.name }}</p>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid md:grid-cols-4 gap-6 mb-8">
          <div class="p-6 border-r-2 border-gray-300">
            <div class="flex items-center">
              <div class="ml-4 space-y-4">
                <p class="text-sm text-gray-600">Balance</p>
                <p class="text-2xl font-bold text-gray-900">$59000.00</p>
              </div>
            </div>
          </div>

          <div class="p-6 border-r-2 border-gray-300">
            <div class="flex items-center">
              <div class="ml-4 space-y-4">
                <p class="text-sm text-gray-600">Profits</p>
                <p class="text-2xl font-bold text-gray-900">$950.00</p>
              </div>
            </div>
          </div>

          <div class="p-6 border-r-2 border-gray-300">
            <div class="flex items-center">
              <div class="ml-4 space-y-4">
                <p class="text-sm text-gray-600">Losses</p>
                <p class="text-2xl font-bold text-gray-900">$450.00</p>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center">
              <div class="ml-4 space-y-4">
                <p class="text-sm text-gray-600">Currencies</p>
                <div class="flex items-center gap-2">
                  <img
                    class="bg-blue-100 px-2 py-1 rounded-[50%]"
                    src="../assets/dashboard/bitcoin-2.png"
                    alt=""
                  />
                  <img
                    class="bg-blue-100 px-2 py-1 rounded-[50%]"
                    src="../assets/dashboard/currency-dollar.png"
                    alt=""
                  />
                  <img
                    class="bg-blue-100 px-2 py-1 rounded-[50%]"
                    src="../assets/dashboard/currency-euro.png"
                    alt=""
                  />
                  <img
                    class="bg-blue-100 px-2 py-1 rounded-[50%]"
                    src="../assets/dashboard/currency-yen.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Charts />

      <div class="mt-8 flex flex-col xl:flex-row gap-4">
        <div class="w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-xl">Team Members</h1>
            <p class="text-sm text-blue-600">View All</p>
          </div>
          <div class="mt-4">
            <div v-for="(teams, index) in team" :key="index">
              <div class="flex justify-between items-center mb-4 shadow-lg px-4 py-2 rounded">
                <div class="ml-4 flex items-center gap-4">
                  <img class="w-10 h-10 object-cover rounded-full" :src="teams.img" alt="" />
                  <p class="font-semibold">{{ teams.name }}</p>
                </div>
                <p class="text-sm text-gray-600">{{ teams.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2">
          <div class="flex justify-between items-center">
            <h1 class="text-xl">Comparison</h1>
            <p class="text-sm text-blue-600">View All</p>
          </div>
          <div class="mt-4">
            <div class="mx-auto p-5 bg-gray-50 rounded-lg">
              <div class="flex flex-col space-y-5">
                <div
                  v-for="country in countries"
                  :key="country.name"
                  class="flex items-center gap-3 py-3 sm:flex-col sm:items-start sm:gap-2"
                >
                  <div class="flex items-center gap-2 min-w-[120px]">
                    <img
                      :src="country.flag"
                      :alt="`${country.name} flag`"
                      class="w-6 h-[18px] rounded-sm shadow-sm"
                    />
                    <span class="text-sm font-medium text-gray-700">{{ country.name }}</span>
                  </div>
                  <div class="flex items-center gap-3 flex-1 sm:w-full">
                    <div
                      class="flex-1 h-2 bg-gray-300 rounded overflow-hidden max-w-sm sm:max-w-none"
                    >
                      <div
                        class="h-full progress-fill rounded"
                        :style="{ width: country.percentage + '%' }"
                      ></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-700 min-w-[35px] text-right"
                      >{{ country.percentage }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<style scoped>
.progress-fill {
  background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
  transition: width 0.3s ease;
}
</style>