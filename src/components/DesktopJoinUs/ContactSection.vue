<template>
  <div
    :style="{ backgroundImage: `url(${bg})` }"
    class="bg-cover"
  >
    <div class="section !mt-24 !py-24">
      <h2 class="text-4xl font-bold mb-5">
        Contact Us
      </h2>
      <p class="text-2xl font-serif !mb-3">
        We're always ready to help.
      </p>
      <div class="rounded-3xl p-5 bg-white max-w-md">
        <p class="mb-2">
          <span class="font-bold">Email: </span> baid<span class="at" />bjacademy.com.cn
        </p>
        <span class="font-bold">Phone: </span>
        <ul class="list-inside list-disc">
          <li>+86 (010) 5095 1283</li>
          <li>+86 (010) 5095 1292</li>
          <li>+86 159 1052 4064 (also available on WeChat)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bg from '@/assets/images/admissions/contact-bg.webp'
import { inject } from 'vue'

const pageData = inject('data')
</script>

<style scoped>
.at:after {
  content: '@';
}
</style>
