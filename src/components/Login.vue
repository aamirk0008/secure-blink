<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Sign In</h2>
        <p class="text-gray-600 mt-2">Access your dashboard</p>
      </div>

      <form @submit.prevent="login">
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
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
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
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {{ isLoading ? 'Signing In...' : 'Sign In' }}
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
        // Simple authentication logic - replace with actual API call
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
