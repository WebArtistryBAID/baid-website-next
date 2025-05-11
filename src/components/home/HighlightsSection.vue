<template>
  <section
    aria-label="Highlights"
    class="border-t border-gray-200 my-0 mx-auto"
  >
    <h2
      id="highlights-heading"
      class="sr-only"
    >
      Highlights
    </h2>
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
      aria-labelledby="highlights-heading"
      role="list"
    >
      <div
        class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[0].image"
            alt="Applying to BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p
          class="text-3xl mb-1 font-bold !font-sans"
        >
          {{ pageData.highlights[0].title }}
        </p>
        <p
          class="text-lg !font-serif"
          v-html="pageData.highlights[0].description"
        />
        <div class="mt-2">
          <ReadMore
            text="views.admissions"
            to="/admissions"
          />
        </div>
      </div>
      <div
        class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[1].image"
            alt="Academic Excellence"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p
          class="text-3xl mb-1 font-bold !font-sans"
        >
          {{ pageData.highlights[1].title }}
        </p>
        <p
          class="text-lg !font-serif"
          v-html="pageData.highlights[1].description"
        />
        <div class="mt-2">
          <ReadMore
            text="views.academics"
            to="/academics"
          />
        </div>
      </div>
      <div
        class="w-full md:w-1/3 p-6 md:p-12"
        role="listitem"
        tabindex="0"
      >
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="pageData.highlights[2].image"
            alt="Life at BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p
          class="text-3xl mb-1 font-bold !font-sans"
        >
          {{ pageData.highlights[2].title }}
        </p>
        <p
          class="text-lg !font-serif"
          v-html="pageData.highlights[2].description"
        />
        <div class="mt-2">
          <ReadMore
            text="views.life"
            to="/life"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import ReadMore from '@/components/ReadMore.vue'

const pageData = inject('data')
</script>
