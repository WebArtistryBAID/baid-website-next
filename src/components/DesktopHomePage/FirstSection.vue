<template>
  <div class="h-screen m-t-[-4.25rem] relative overflow-hidden mb-45px">
    <!-- Carousel part -->
    <div class="absolute w-full h-screen">
      <CarouselVertical :images="pageData.carousel_images" />
    </div>
    <!-- Left blue block -->
    <div
      class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black"
    />

    <!-- Text / content -->
    <div
      class="absolute bottom-15% font-sans left-0 right-0 pointer-events-none"
    >
      <div class="max-w-77rem ma px-20px">
        <h1 class="text-20 text-white text-shadow-lg m-0">
          {{ pageData.head }}
        </h1>
        <p class="text-7 text-white">
          Welcome to Beijing Academy International Division (BAID)!
        </p>
      </div>
    </div>
    <div
      class="absolute bottom-5 left-1/2 text-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity"
      @click="scrollTo('#secondSection')"
    >
      <span class="text-6 font-sans select-none">Learn More</span>
      <div class="arrow relative w-full h-1 m-t-1 transition-all">
        <div class="middle transition-all op-0" />
        <div class="left transition-all" />
        <div class="right transition-all" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
