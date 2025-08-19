<template>
  <div class="">
    <Navbar />
    
    <main class=" space-y-10 bg-gray-50">
      <!-- Hero Section -->
      <section class="relative bg-blue-600 w-full h-full font-primary text-white py-20">
        <div class="absolute inset-0 z-0">
          <img src='../assets/sb-1.jpg' alt="Background" class="object-cover" />
        </div>
        <div class="relative z-10 w-[35%] flex flex-col gap-8 items-start justify-center px-8 mt-36 ml-36">
            <h1 class="text-4xl font-bold leading-tight ">Lorem ipsum is simply dummy text of the printing and typesetting.</h1>
            <p class="text-sm text-white/50">Our products are fully custom-made, built with the latest technologies and cloud architecture.</p>
            <button class="flex items-center justify-center bg-white text-black px-8 py-2 rounded-[25px] text-xl">Get started <span class="ml-2"><img src="../assets/arrow-right.png" alt=""></span><span><img src="../assets/arrow-right.png" alt=""></span></button>
        </div>
      </section>
      

      <section class="relative mt-40 bg-white w-[100%] h-full">
        <div class="relative"><img class="absolute right-0 w-[400px]" src="../assets/about-2.png" alt=""></div>
        <div class="relative"><img class="absolute right-0 top-[450px] w-[400px]" src="../assets/about-3.png" alt=""></div>
        <div class=" w-full relative">
            <img class="w-[1100px] h-[900px] absolute  left-[-500px]" src="../assets/home-2.png" alt="">
        </div>
        <div class="relative">
        <div class="absolute left-[45%] top-[250px] inset-0 z-10 flex flex-col items-start gap-6 p-8 w-[400px]">
          <div>
            <h2 class="flex items-center gap-2 text-blue-500 font-bold"><span><img class="w-[22px]" src="../assets/about.png" alt=""></span> ABOUT US</h2>
            <h1 class="text-3xl font-bold">Great Digital Agency</h1>
            </div>
            <div class="space-y-4">
            <p>Our products are fully custom-made, built with the latest technologies and cloud architecture.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore? A hic sed aliquam laudantium minus similique ducimus velit dolores.</p>
            </div>
            <button class="flex items-center justify-center bg-white text-[#0E77FF] px-8 py-2 rounded-[25px] border-2 cursor-pointer text-xl hover:bg-blue-400 hover:text-white">Get started <span class="ml-2"><img class="w-[6px]" src="../assets/arrow-blue.png" alt=""></span><span><img class="w-[6px]" src="../assets/arrow-blue.png" alt=""></span></button>

        </div>
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
