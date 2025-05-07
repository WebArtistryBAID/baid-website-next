<template>
  <div class="border-b border-gray-200 my-0 mx-auto">
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
    >
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[0].image"
            alt="English drama festival activity"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.highlights[0].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.highlights[0].description"
        />
      </div>
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[1].image"
            alt="The SLSD club"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.highlights[1].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.highlights[1].description"
        />
      </div>
      <div class="w-full md:w-1/3 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[2].image"
            alt="Athletics at BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          {{ pageData.highlights[2].title }}
        </p>
        <div
          class="text-lg !font-serif"
          v-html="pageData.highlights[2].description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
