<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        subscribe: false
      },
      errors: {},
      isSubmitting: false,
      message: '',
      messageClass: ''
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }
      
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Phone number is required'
      } else if (!this.isValidPhone(this.form.phone)) {
        this.errors.phone = 'Please enter a valid phone number'
      }
      
      if (!this.form.subject.trim()) {
        this.errors.subject = 'Subject is required'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      }
      
      if (!this.form.subscribe) {
        this.errors.subscribe = 'You must agree to the privacy policy'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    
    isValidPhone(phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      return phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ''))
    },
    
    handleSubmit(event) {
      if (!this.validateForm()) {
        event.preventDefault()
        this.message = 'Please fix the errors above'
        this.messageClass = 'bg-red-100 text-red-700 border border-red-300'
        return false
      }
      
      this.isSubmitting = true
      this.message = 'Sending your message...'
      this.messageClass = 'bg-blue-100 text-blue-700 border border-blue-300'
      
      // Form will be submitted naturally via POST to formsubmit.co
      // Reset form after a delay to show success message
      setTimeout(() => {
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          subscribe: false
        }
        this.message = 'Message sent successfully!'
        this.messageClass = 'bg-green-100 text-green-700 border border-green-300'
        this.isSubmitting = false
      }, 2000)
    }
  }}
</script>

<template>
  <div class="overflow-hidden mt-12 flex gap-8">
    <div class="flex">
      <img class="w-[600px] h-[400px] relative -bottom-22 -left-2.5" src="../assets/contact-2.png" alt="" />
    </div>
    <div class="w-[400px] z-10 bg-white p-6 shadow-lg">
      <div>
        <h1 class="text-xl font-bold">Send Us Message</h1>
      </div>
      <div>
        <form
          action="https://formsubmit.co/aamirsheikh0008@gmail.com"
          method="POST"
          @submit="handleSubmit"
          class="flex flex-col"
        >
          <div class="">
            <input
              name="email"
              type="email"
              v-model="form.email"
              placeholder="Your Email"
              required
              class="border-b p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
          </div>

          <div class="">
            <input
              name="name"
              type="text"
              v-model="form.name"
              placeholder="Your Name"
              required
              class="border-b p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
          </div>

          <!-- Added phone field as required -->
          <div class="">
            <input
              name="phone"
              type="tel"
              v-model="form.phone"
              placeholder="Your Number*"
              required
              class="border-b p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': errors.phone }"
            />
            <span v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
          </div>

          <!-- Added subject field as required -->
          <div class="">
            <input
              name="subject"
              type="text"
              v-model="form.subject"
              placeholder="Subject*"
              required
              class="border-b p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': errors.subject }"
            />
            <span v-if="errors.subject" class="text-red-500 text-sm">{{ errors.subject }}</span>
          </div>

          <div class="">
            <textarea
              name="message"
              v-model="form.message"
              placeholder="Your Message"
              required
              class="border-b p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
          </div>

          <!-- Added privacy policy checkbox -->
          <div class="flex gap-2 mb-4">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              v-model="form.subscribe"
              required
              class="mt-1"
            />
            <label for="subscribe" class="text-sm text-gray-700">
              By sending this message, you agree to our privacy policy.*
            </label>
          </div>
          <span v-if="errors.subscribe" class="text-red-500 text-sm mb-2">{{
            errors.subscribe
          }}</span>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="message" class="mt-4 p-3 rounded-md" :class="messageClass">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>
