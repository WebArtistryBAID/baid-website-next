<template>
  <section
    class="mx-auto mt-24"
    style="max-width: 77rem"
    aria-labelledby="highlights-heading"
  >
    <h2
      id="highlights-heading"
      class="text-4xl lg:text-5xl xl:text-7xl font-bold px-5 md:px-0 mb-1"
    >
      {{ pageData.specialties_title }}
    </h2>
  </section>

  <div
    aria-labelledby="highlights-heading"
    class="border-t border-gray-200"
    role="list"
  >
    <div
      class="flex flex-col md:flex-row mx-auto"
      role="list"
      style="max-width: 77rem"
    >
      <HighlightBlock
        :description="pageData.specialties_highlights[0].description"
        :image="pageData.specialties_highlights[0].image"
        :image-alt="`Highlight: ${pageData.specialties_highlights[0].title}`"
        :title="pageData.specialties_highlights[0].title"
      />
      <HighlightBlock
        :description="pageData.specialties_highlights[1].description"
        :image="pageData.specialties_highlights[1].image"
        :image-alt="`Highlight: ${pageData.specialties_highlights[1].title}`"
        :title="pageData.specialties_highlights[1].title"
      />
      <HighlightBlock
        :description="pageData.specialties_highlights[2].description"
        :image="pageData.specialties_highlights[2].image"
        :image-alt="`Highlight: ${pageData.specialties_highlights[2].title}`"
        :title="pageData.specialties_highlights[2].title"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import HighlightBlock from '@/components/HighlightBlock.vue'

const pageData = inject('data')
</script>
