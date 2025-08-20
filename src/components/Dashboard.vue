<template>
  <Navbar />
  <div class="flex">
    <Sidebar/>
    
    <main class="min-h-screen bg-gray-50 px-16">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="mb-8 flex items-center justify-between">
          <div>
          <h1 class="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p class="text-gray-600 mt-2">Welcome back, {{ user.name }}!</p>
          </div>
          <div class="flex items-center space-x-4">
            <div>
              <button class="flex items-center gap-1 bg-blue-600 text-white text-sm py-2 px-3 rounded">
                <span><img class="w-[12px]" src="../assets/dashboard/e-add.png" alt="" /></span> Add Unit
              </button>
            </div>
            <div class="flex items-center gap-2">
              <img class="w-[30px] h-[30px] object-cover rounded-[50%]" src="../assets/images.jpeg" alt="">
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
                  <img class="bg-blue-100 px-2 py-1 rounded-[50%]" src="../assets/dashboard/bitcoin-2.png" alt="">
                  <img class="bg-blue-100 px-2 py-1 rounded-[50%]" src="../assets/dashboard/currency-dollar.png" alt="">
                  <img class="bg-blue-100 px-2 py-1 rounded-[50%]" src="../assets/dashboard/currency-euro.png" alt="">
                  <img class="bg-blue-100 px-2 py-1 rounded-[50%]" src="../assets/dashboard/currency-yen.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Recent Activity -->
        <div class="bg-white rounded-lg shadow">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="bg-blue-100 p-2 rounded-full mr-4">
                  <span class="text-blue-600">📧</span>
                </div>
                <div>
                  <p class="font-medium">New contact form submission</p>
                  <p class="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="bg-green-100 p-2 rounded-full mr-4">
                  <span class="text-green-600">✅</span>
                </div>
                <div>
                  <p class="font-medium">User registration completed</p>
                  <p class="text-sm text-gray-600">4 hours ago</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="bg-yellow-100 p-2 rounded-full mr-4">
                  <span class="text-yellow-600">⚠️</span>
                </div>
                <div>
                  <p class="font-medium">System maintenance scheduled</p>
                  <p class="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Charts />
    </main>
  </div>
</template>

<script>
import Charts from './Charts.vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Charts,
    Sidebar
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    // Get user data from localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      this.user = JSON.parse(userData)
    }
  }
}
</script>
