<template>
  <div class="border-t border-gray-200 my-0 mx-auto">
    <div
      class="mx-auto"
      style="max-width: 77rem"
    >
      <div class="flex flex-col md:flex-row mb-8">
        <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
          <div class="flex justify-center items-center w-full h-64">
            <img
              :src="pageData.highlights[0].image"
              alt="BAID students collaborating on a project"
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
              alt="BAID students working in a lab"
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
              alt="BAID students dancing at a school event"
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

      <p class="text-sm max-w-xl px-5 md:px-0">
        {{ $t('admissions.comment') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
