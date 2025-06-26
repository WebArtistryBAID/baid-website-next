<template>
  <section
    class="mx-auto mt-24"
    style="max-width: 77rem"
    aria-labelledby="highlights-heading"
  >
    <h2
      id="highlights-heading"
      class="text-4xl lg:text-5xl xl:text-7xl font-bold px-5 md:px-0"
    >
      {{ pageData.specialties_title }}
    </h2>
  </section>

  <div class="border-t border-gray-200 my-0 mx-auto">
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
      aria-label="Specialties highlights"
      role="list"
    >
      <div
        class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.specialties_highlights[0].image"
            :alt="`Highlight: ${pageData.specialties_highlights[0].title}`"
            class="w-full rounded-3xl mb-5"
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
      <div
        class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.specialties_highlights[1].image"
            :alt="`Highlight: ${pageData.specialties_highlights[1].title}`"
            class="w-full rounded-3xl mb-5"
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
      <div
        class="w-full md:w-1/3 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.specialties_highlights[2].image"
            :alt="`Highlight: ${pageData.specialties_highlights[2].title}`"
            class="w-full rounded-3xl mb-5"
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
