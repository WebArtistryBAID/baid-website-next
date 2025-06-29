<template>
  <section
    aria-labelledby="hero-heading"
    class="px-6 sm:px-10 md:px-16 lg:px-24"
  >
    <h1
      id="hero-heading"
      :class="{ 'opacity-100 translate-y-0': animationStart, 'opacity-0 translate-y-4': !animationStart }"
      class="text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold !font-sans text-center transition-all duration-500 transform"
    >
      About BAID
    </h1>
  </section>

  <img
    :src="campus"
    alt=""
    aria-hidden="true"
    class="w-full"
  >
</template>

<script lang="ts" setup>
import campus from '@/assets/images/about/campus.webp'
import { ref } from 'vue'

const animationStart = ref(false)
setTimeout(() => {
  animationStart.value = true
}, 500)
</script>
