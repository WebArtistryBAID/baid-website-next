<template>
  <div
    :style="{ backgroundImage: `url(${usedBg})` }"
    class="h-screen w-screen flex flex-col bg-cover bg-center justify-center relative px-4 py-12 md:px-48 md:py-24"
  >
    <h1 class="font-bold pb-24 text-white !font-sans text-7xl md:text-[12rem] md:leading-[1.1]">
      Beijing<br>
      Academy
    </h1>

    <p class="absolute bottom-8 !font-serif text-white text-xl md:text-3xl">
      Better me, better world. That's what BAID students strive for, every single day.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import bg1 from '@/assets/images/home/hero/home-bg-1.webp'
import bg2 from '@/assets/images/home/hero/home-bg-2.webp'
import bg3 from '@/assets/images/home/hero/home-bg-3.webp'
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
import bg5 from '@/assets/images/home/hero/home-bg-5.webp'

const bg = [
  bg1, bg2, bg3, bg4, bg5
]
console.log(bg)
const usedBg = bg[Math.floor(Math.random() * bg.length)]

const pageData = inject('data')
</script>
