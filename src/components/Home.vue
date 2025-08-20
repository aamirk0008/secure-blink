<template>
  <div class="">
    <Navbar />

    <main class="space-y-4 bg-gray-50">
      <!-- Hero Section -->
      <section class=" bg-blue-600 w-full h-full font-primary text-white py-20">
        <div class="absolute inset-0 z-0">
          <img src="../assets/sb-1.jpg" alt="Background" class="object-cover" />
        </div>
        <div
          class="relative z-10 w-[40%] flex flex-col gap-8 items-start justify-center px-8 mt-16 ml-36"
        >
          <h1 class="text-4xl font-bold leading-tight">
            Lorem ipsum is simply dummy text of the printing and typesetting.
          </h1>
          <p class="text-sm text-white/50">
            Our products are fully custom-made, built with the latest technologies and cloud
            architecture.
          </p>
          <button
            class="flex items-center justify-center bg-white text-black px-8 py-2 rounded-[25px] text-xl hover:bg-blue-600 hover:text-white cursor-pointer transition duration-200 ease-in group"
          >
            Get started <span class="ml-2"><img class="group-hover:translate-x-1 transition-transform" src="../assets/arrow-right.png" alt="" /></span
            ><span><img class="group-hover:translate-x-1 transition-transform" src="../assets/arrow-right.png" alt="" /></span>
          </button>
        </div>
      </section>

      <About/>
      <Service/>
      <Technology/>
      <ContactForm/>

    </main>

    <Footers/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import imgBg from '../assets/sb-1.jpg'
import Service from './Service.vue'
import About from './About.vue';
import Technology from './Technology.vue';
import ContactForm from './ContactForm.vue';
import Footers from './Footers.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    About,
    Service,
    Technology,
    ContactForm,
    Footers
  },
}
</script>
