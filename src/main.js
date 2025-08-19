import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})

createApp(App).use(router).mount('#app')
