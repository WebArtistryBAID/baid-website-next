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
      <HighlightBlock
        :description="pageData.highlights[0].description"
        :image="pageData.highlights[0].image"
        :title="pageData.highlights[0].title"
        image-alt="Applying to BAID"
        link="admissions"
        link-text="views.admissions"
      />
      <HighlightBlock
        :description="pageData.highlights[1].description"
        :image="pageData.highlights[1].image"
        :title="pageData.highlights[1].title"
        image-alt="Academic Excellence"
        link="academics"
        link-text="views.academics"
      />
      <HighlightBlock
        :description="pageData.highlights[2].description"
        :image="pageData.highlights[2].image"
        :title="pageData.highlights[2].title"
        image-alt="Life at BAID"
        link="life"
        link-text="views.life"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import ReadMore from '@/components/ReadMore.vue'
import HighlightBlock from '@/components/HighlightBlock.vue'

const pageData = inject('data')
</script>
