<template>
  <section
    aria-labelledby="student-life-heading"
    class="pt-48 bg-red-800"
  >
    <div class="px-6 sm:px-10 md:px-16 lg:px-24">
      <h1
        id="student-life-heading"
        class="text-white text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[9rem] font-bold !font-sans mb-[-1rem] md:mb-[-1.3rem] lg:mb-[-2rem] xl:mb-[-3.2rem]"
      >
        Student Life
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
</script>
