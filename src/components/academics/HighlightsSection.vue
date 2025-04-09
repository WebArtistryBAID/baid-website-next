<template>
  <div
    class="mx-auto mt-24"
    style="max-width: 77rem"
  >
    <h2 class="text-4xl lg:text-5xl xl:text-7xl font-bold px-5 md:px-0">
      Learning, Reimagined
    </h2>
  </div>

  <div class="border-t border-gray-200 my-0 mx-auto">
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
    >
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="counseling"
            alt="A college counseling group session"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          College Counseling
        </p>
        <p class="text-lg !font-serif">
          It's never too early to start thinking about your future. BAID provides personalized college counseling
          starting from the first week of high school.
        </p>
      </div>
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="havingFun"
            alt="Beijing Academy students riding camels in a desert"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Learn Everywhere
        </p>
        <p class="text-lg !font-serif">
          Learn in places you couldn't imagine — whether you're researching in a different province, exploring
          cultural heritage sites, or immersing yourself in new countries through global programs.
        </p>
      </div>
      <div class="w-full md:w-1/3 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="globalVision"
            alt="BAID students conducting an expedition for sustainability"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Global Perspectives
        </p>
        <p class="text-lg !font-serif">
          Broaden your world through life-changing study abroad journeys, inspiring global mentors,
          and unforgettable conversations with some of the brightest minds on the planet.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import counseling from '@/assets/images/academics/counseling-right.webp'
import havingFun from '@/assets/images/academics/having-fun.webp'
import globalVision from '@/assets/images/academics/global-vision.webp'
import { inject } from 'vue'

const pageData = inject('data')
</script>
