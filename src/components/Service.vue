<script>
export default {
  name: 'Service',
}
</script>

<template>
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