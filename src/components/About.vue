<script>
export default {
    name: 'About',
}
</script>

<template>
    <section class=" mt-40 bg-white w-[100%] h-[100%]">
        <div class="relative">
          <img class="absolute right-0 top-10 w-[300px]" src="../assets/about-2.png" alt="" />
        </div>
        <div class="relative">
          <img class="absolute right-0 top-[450px] w-[250px]" src="../assets/about-3.png" alt="" />
        </div>
        <div class="w-full relative">
          <img
            class="w-[1100px] h-[900px] absolute left-[-500px]"
            src="../assets/home-2.png"
            alt=""
          />
        </div>
        <div class="relative">
          <div
            class="absolute left-[45%] top-[250px] inset-0 z-10 flex flex-col items-start gap-6 p-8 w-[400px]"
          >
            <div>
              <h2 class="flex items-center gap-2 text-blue-500 font-bold">
                <span><img class="w-[22px]" src="../assets/about.png" alt="" /></span> ABOUT US
              </h2>
              <h1 class="text-3xl font-bold">Great Digital Agency</h1>
            </div>
            <div class="space-y-4">
              <p>
                Our products are fully custom-made, built with the latest technologies and cloud
                architecture.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore? A hic sed
                aliquam laudantium minus similique ducimus velit dolores.
              </p>
            </div>
            <button
              class="flex items-center justify-center bg-white text-[#0E77FF] px-6 py-1 rounded-[25px] border-2 cursor-pointer text-lg hover:bg-blue-400 hover:text-white"
            >
              Get started
              <span class="ml-2"><img class="w-[5px]" src="../assets/arrow-blue.png" alt="" /></span
              ><span><img class="w-[5px]" src="../assets/arrow-blue.png" alt="" /></span>
            </button>
          </div>
        </div>
      </section>
</template>