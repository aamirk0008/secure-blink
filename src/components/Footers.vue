<script>


export default {
  name: 'Footers',
}
</script>

<template>
    <footer class="bg-[#0E77FF] text-white py-8 px-8">
      <div class="max-w-7xl mx-auto flex gap-24 items-center">
          <div class="md:col-span-1 ">
            <p class="text-white/80 text-md leading-relaxed mb-8">
              Lorem Finaldream nunc dolor in reprehenderit in voluptate velit esse cillum dolore eu is nostrud exercitation ut aliquip ex ea commodo consequat.
            </p>
            
            <!-- Social Media Icons -->
            <div class="flex space-x-3">
              <a href="#" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <img src="../assets/face.png" alt="Facebook">
              </a>
              <a href="#" class="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <img src="../assets/instagram.png" alt="Instagram">
              </a>
            </div>
          </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb lg:w-full">
          
          <!-- Our Services -->
          <div class="md:col-span-1">
            <h3 class="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Web Development</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Mobile Development</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Cloud Technologies</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">UI/UX Designs</a></li>
            </ul>
          </div>
          
          <!-- Our Links -->
          <div class="md:col-span-1">
            <h3 class="text-white font-semibold text-lg mb-6">Our Links</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Terms & Condition</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Imprint</a></li>
              <li><a href="#" class="text-white/70 hover:text-white text-sm transition-colors">Legal</a></li>
            </ul>
          </div>
          
          <!-- Contact Us -->
          <div class="md:col-span-1">
            <h3 class="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <p class="text-white/70 text-sm leading-relaxed">
                  Al Dummyboil 124/23 floor 123
                  Bansward Street, 02 577 india
                </p>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 flex-shrink-0">
                  <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <p class="text-white/70 text-sm">00 1800 245 453</p>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 flex-shrink-0">
                  <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p class="text-white/70 text-sm">hello@linkyy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>