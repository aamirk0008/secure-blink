<template>
  <div>
    <Navigation />
    
    <main class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Welcome back, {{ user.name }}!
          </h1>
          <p class="text-gray-600 mt-2">Here's your business overview</p>
        </div>
        
        <!-- Stats Grid -->
        <div class="grid md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="bg-blue-100 p-3 rounded-full">
                <span class="text-blue-600 font-bold">$</span>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-600">Total Revenue</p>
                <p class="text-2xl font-bold text-gray-900">$12,345</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="bg-green-100 p-3 rounded-full">
                <span class="text-green-600 font-bold">👥</span>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-600">Active Users</p>
                <p class="text-2xl font-bold text-gray-900">1,234</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="bg-yellow-100 p-3 rounded-full">
                <span class="text-yellow-600 font-bold">📊</span>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-600">Conversion Rate</p>
                <p class="text-2xl font-bold text-gray-900">3.2%</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="bg-purple-100 p-3 rounded-full">
                <span class="text-purple-600 font-bold">📈</span>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-600">Growth Rate</p>
                <p class="text-2xl font-bold text-gray-900">+15%</p>
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
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar
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
