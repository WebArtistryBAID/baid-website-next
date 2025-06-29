<template>
  <section
    aria-labelledby="student-life-heading"
    class="pt-48 bg-red-800"
  >
    <div class="px-6 sm:px-10 md:px-16 lg:px-24">
      <h1
        id="student-life-heading"
        :class="{ 'opacity-100 translate-y-0': animationStart, 'opacity-0 translate-y-4': !animationStart }"
        class="text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold !font-sans text-center transition-all duration-500 transform text-white"
      >
        Life @ BAID
      </h1>
    </div>

    <img
      :src="campus"
      alt="BAID students working on a group project"
      class="w-full"
    >
  </section>
</template>

<script lang="ts" setup>
import campus from '@/assets/images/life/student-life.webp'
import { ref } from 'vue'

const animationStart = ref(false)
setTimeout(() => {
  animationStart.value = true
}, 500)
</script>
