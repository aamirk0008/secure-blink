<template>
  <nav class="bg-[#0E77FF] text-white shadow- fixed top-0 w-full z-100">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex space-x-8">
           <router-link 
            to="/" 
            class=" hover:text-blue-600 text-lg px-3 py-2 rounded-md font-medium"
          >
            Logo
          </router-link>
        </div>
        
        <div class="flex space-x-4">
           
          <a 
            href="#about" 
            class=" hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
          >
            About
          </a>
          <a 
            href="#about" 
            class=" hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
          >
            Services
          </a>
          <a 
            href="#contact" 
            class=" hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
          >
            Case Studies
          </a>
          <a 
            href="#contact" 
            class=" hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            class=" hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
          >
            Contact
          </a>
          <template v-if="!isAuthenticated">
            <router-link 
              to="/login"
              class="bg-white cursor-pointer text-gray-800 px-8 py-2 rounded-sm text-md font-medium hover:bg-blue-700 hover:text-white"
            >
              Login
            </router-link>
          </template>
          <template v-else>
            <router-link 
              to="/dashboard"
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
            >
              Dashboard
            </router-link>
            <button 
              @click="logout"
              class="bg-red-600 text-white px-4 py-2 rounded-md text-md font-medium hover:bg-red-700"
            >
              Logout
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      showSignUp: false
    }
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem('isAuthenticated') === 'true'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>
