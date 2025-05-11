<template>
  <section
    aria-labelledby="hero-heading"
    class="px-6 sm:px-10 md:px-16 lg:px-24"
  >
    <h1
      id="hero-heading"
      class="text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[9rem] font-bold !font-sans mb-[-1rem] md:mb-[-1.3rem] lg:mb-[-2rem] xl:mb-[-3.2rem]"
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
</script>
