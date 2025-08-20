<script>
export default {
    name: 'About',
}
</script>

<template>
   <section class="bg-white py-72 mt-56 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute right-0 top-10 w-[300px] z-0">
      <img src="../assets/about-2.png" alt="decoration" class="w-full" />
    </div>
    <div class="absolute right-0 top-[450px] w-[250px] z-0">
      <img src="../assets/about-3.png" alt="decoration" class="w-full" />
    </div>
    <div class="absolute left-[-500px] top-0 w-[1100px] h-[900px] z-0">
      <img src="../assets/home-2.png" alt="background" class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4">
      <div class="flex justify-center ml-72">
        <div class="max-w-md">
          <div class="mb-6">
            <h2 class="flex items-center gap-2 text-blue-500 font-bold mb-4">
              <img class="w-[22px]" src="../assets/about.png" alt="about icon" />
              ABOUT US
            </h2>
            <h1 class="text-3xl font-bold text-gray-900">Great Digital Agency</h1>
          </div>

          <div class="space-y-4 mb-8">
            <p class="text-gray-600">
              Our products are fully custom-made, built with the latest technologies and cloud
              architecture.
            </p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore? A hic sed
              aliquam laudantium minus similique ducimus velit dolores.
            </p>
          </div>

          <button
            class="flex items-center justify-center bg-white text-blue-500 px-6 py-3 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 group"
          >
            Get started
            <span class="ml-2 flex">
              <img
                class="w-[8px] group-hover:translate-x-1 transition-transform"
                src="../assets/arrow-blue.png"
                alt="arrow"
              />
              <img
                class="w-[8px] group-hover:translate-x-1 transition-transform"
                src="../assets/arrow-blue.png"
                alt="arrow"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>