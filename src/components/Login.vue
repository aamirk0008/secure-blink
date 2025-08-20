<template>
  <div class="min-h-screen bg-gray-50 flex justify-end items-center">
    <div><img class="w-[1200px] h-[950px] absolute bottom-[-100px] left-[-500px]" src="../assets/home-2.png" alt=""></div>
    <div class="max-w-sm w-full bg-white p-8 mr-24 rounded-lg shadow-md">
      <div class="text-center mb-8">
        <h2 class="text-xl font-bold text-gray-900">Login In to access your dashboard</h2>
      </div>

      <form class="w-full" @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email </label>
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-center">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <a class="text-sm text-red-500 font-semibold" href="#">Forget Password?</a>
          </div>
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class=" text-[#0E77FF] border-2 py-2 px-12 rounded-[30px] hover:bg-blue-700 focus:outline-none flex items-center focus:ring-2 focus:ring-[#0E77FF] disabled:opacity-50 mx-auto"
        >
          {{ isLoading ? 'Logging In...' : 'Login' }}
          <span class="ml-2"><img class="w-[5px]" src="../assets/arrow-blue.png" alt=""></span><span><img class="w-[5px]" src="../assets/arrow-blue.png" alt=""></span>
        </button>
      </form>

      <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-300">
        {{ error }}
      </div>

      <div class="mt-6 text-center">
        <router-link to="/" class="text-blue-600 hover:text-blue-800"> Back to Home </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      isLoading: false,
      error: '',
    }
  },
  methods: {
    async login() {
      this.isLoading = true
      this.error = ''

      try {
        if (this.credentials.email && this.credentials.password) {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // Store authentication state
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem(
            'user',
            JSON.stringify({
              email: this.credentials.email,
              name: this.credentials.email.split('@')[0],
            }),
          )

          // Redirect to dashboard
          this.$router.push('/dashboard')
        } else {
          this.error = 'Please enter valid credentials'
        }
      } catch (error) {
        this.error = 'Login failed. Please try again.'
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
