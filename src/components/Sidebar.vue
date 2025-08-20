<script>
export default {
  name: 'Sidebar',
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <aside
    class="bg-white flex flex-col items-center justify-between py-6 sticky left-0 top-0 text-gray-800 shadow-xl w-40 h-[90vh]"
  >
    <div class="flex flex-col items-center gap-4">
      <div class="">
        <a href="#" class="flex flex-col items-center gap-2 shadow-xl shadow-gray-300 py-2 px-3">
          <img class="w-[25px]" src="../assets/dashboard/metrics.png" alt="" />
          <h1 class="text-sm">Dashboard</h1>
        </a>
      </div>
      <div class="">
        <a href="#" class="flex flex-col items-center gap-2 shadow-gray-300 py-2 px-3">
          <img class="w-[25px]" src="../assets/dashboard/analytics.png" alt="" />
          <h1 class="text-sm">Analytics</h1>
        </a>
      </div>
      <div class="">
        <a href="#" class="flex flex-col items-center gap-2 shadow-gray-300 py-2 px-3">
          <img class="w-[25px]" src="../assets/dashboard/currency-exchange-2.png" alt="" />
          <h1 class="text-sm">Trading</h1>
        </a>
      </div>
      <div class="">
        <a href="#" class="flex flex-col items-center gap-2 shadow-gray-300 py-2 px-3">
          <img class="w-[25px]" src="../assets/dashboard/sound-wave.png" alt="" />
          <h1 class="text-sm">Notifications</h1>
        </a>
      </div>
    </div>
    <div>
        <button @click="logout" class="flex flex-col items-center gap-2 shadow-gray-300 py-2 px-3 cursor-pointer">
          <img class="w-[25px]" src="../assets/dashboard/logout.png" alt="" />
          <h1 class="text-sm">Logout</h1>
        </button>
    </div>
  </aside>
</template>
