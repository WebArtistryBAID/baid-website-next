<template>
  <div
    :style="{ backgroundImage: `url(${usedBg})` }"
    class="h-screen w-screen flex flex-col bg-cover bg-center justify-center relative px-4 lg:px-16 xl:px-24"
  >
    <h1 class="font-bold pb-24 text-white !font-sans text-7xl md:text-[12rem] md:leading-[1.1]">
      Beijing<br>
      Academy
    </h1>

    <div
      class="absolute bottom-8 !font-serif text-white text-xl md:text-3xl"
      v-html="pageData.hero_subtitle"
    />
  </div>
</template>

<script lang="ts" setup>
import bg1 from '@/assets/images/home/hero/home-bg-1.webp'
import bg2 from '@/assets/images/home/hero/home-bg-2.webp'
import bg3 from '@/assets/images/home/hero/home-bg-3.webp'
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
import { inject } from 'vue'

const bg = [ bg1, bg2, bg3, bg4 ]
const usedBg = bg[Math.floor(Math.random() * bg.length)]

const pageData = inject('data')
</script>
