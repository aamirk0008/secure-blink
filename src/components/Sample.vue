<!-- About Section -->
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

  <!-- Service Section -->
  <section class="bg-white relative py-16 px-4 flex items-center justify-center">
    <div class="bg-blue-700 absolute w-[350px] h-full right-0 z-10"></div>
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[10rem] items-center">
        <!-- Left Side - Services -->
        <div class="space-y-8">
          <!-- Header -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div
                class="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-blue-500 border-b-[6px] border-b-transparent"
              ></div>
              <span class="text-blue-500 font-semibold text-sm uppercase tracking-wide"
                >OUR SERVICES</span
              >
            </div>
            <h2 class="text-4xl font-bold text-gray-900 leading-tight">
              Transforming your ideas<br />
              into Reality
            </h2>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-2 gap-4">
            <button
              class="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Web Development
            </button>
            <button
              class="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors"
            >
              Mobile Development
            </button>
            <button
              class="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              UI/UX Designing
            </button>
            <button
              class="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors"
            >
              Branding
            </button>
            <button
              class="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors col-span-1"
            >
              Cloud Technology
            </button>
          </div>
        </div>

        <!-- Right Side - UI/UX Design Details -->
        <div
          class="bg-white text-black p-8 w-[500px] rounded-sm shadow-2xl relative overflow-hidden"
        >
          <!-- Icon -->
          <div class="space-y-6 z-100 relative">
            <div class="flex items-center gap-4">
              <img class="w-[70px]" src="../assets/service.png" alt="" />
              <h3 class="text-2xl font-bold mb-4">UI/UX Designing</h3>
            </div>

            <!-- Description -->
            <p class="text-black mb-6 text-sm leading-relaxed">
              Lorem Ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the
              turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </p>

            <!-- Feature List -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-black text-sm"
                  >Lorem Ipsum dolor sit amet, conse ctetur adipi scing elit.</span
                >
              </div>

              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-black text-sm">Lorem Ipsum dolor sit amet.</span>
              </div>

              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-black text-sm">conse ctetur adipi scing elit.</span>
              </div>

              <div class="flex items-center space-x-3">
                <div
                  class="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-black text-sm">Lorem Ipsum dolor sit amet, conse ctetur.</span>
              </div>
            </div>

            <!-- Background decoration -->
            <!-- <div
              class="absolute -right-4 -bottom-4 w-20 h-20 bg-white bg-opacity-10 rounded-full"
            ></div>
            <div class="absolute right-8 top-8 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutAndService',
}
</script>
