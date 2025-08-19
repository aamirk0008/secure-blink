<template>
  <div>
    <Navbar />
    
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-blue-600 text-white py-20">
        <div class="absolute inset-0">
          <img src='../assets/sb-1.jpg' alt="Background" class="w-full h-full object-cover opacity-30" />
        </div>
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Business Platform
          </h1>
          <p class="text-xl md:text-2xl mb-8">
            Streamline your business operations with our comprehensive solution
          </p>
          <div class="space-x-4">
            <router-link 
              to="/login"
              class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </section>
      
      <!-- About Section -->
      <section id="about" class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Our Platform
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide innovative solutions to help businesses grow and succeed in today's competitive market.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Easy Setup</h3>
              <p class="text-gray-600">Get started quickly with our intuitive setup process</p>
            </div>
            
            <div class="text-center p-6">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-green-600 text-2xl font-bold">2</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Powerful Analytics</h3>
              <p class="text-gray-600">Gain insights with comprehensive dashboard analytics</p>
            </div>
            
            <div class="text-center p-6">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-600">Get help whenever you need it with our support team</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p class="text-lg text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          
          <!-- <ContactForm /> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import imgBg from '../assets/sb-1.jpg'
// import ContactForm from './ContactForm.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    // ContactForm
  }
}
</script>
