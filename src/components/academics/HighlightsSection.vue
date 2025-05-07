<template>
  <div
    class="mx-auto mt-24"
    style="max-width: 77rem"
  >
    <h2 class="text-4xl lg:text-5xl xl:text-7xl font-bold px-5 md:px-0">
      {{ pageData.specialties_title }}
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
            :src="pageData.specialties_highlights[0].image"
            alt="A college counseling group session"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.specialties_highlights[0].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.specialties_highlights[0].description"
        />
      </div>
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.specialties_highlights[1].image"
            alt="Beijing Academy students riding camels in a desert"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.specialties_highlights[1].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.specialties_highlights[1].description"
        />
      </div>
      <div class="w-full md:w-1/3 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.specialties_highlights[2].image"
            alt="BAID students conducting an expedition for sustainability"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.specialties_highlights[2].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.specialties_highlights[2].description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
