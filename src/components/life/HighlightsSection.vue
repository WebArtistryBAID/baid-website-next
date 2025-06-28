<template>
  <section
    aria-label="Highlights"
    class="border-b border-gray-200 my-0 mx-auto"
  >
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
      aria-label="Highlights list"
      role="list"
    >
      <HighlightBlock
        :description="pageData.highlights[0].description"
        :image="pageData.highlights[0].image"
        :title="pageData.highlights[0].title"
        image-alt="English drama festival activity"
      />
      <HighlightBlock
        :description="pageData.highlights[1].description"
        :image="pageData.highlights[1].image"
        :title="pageData.highlights[1].title"
        image-alt="The SLSD club"
      />
      <HighlightBlock
        :description="pageData.highlights[2].description"
        :image="pageData.highlights[2].image"
        :title="pageData.highlights[2].title"
        image-alt="Athletics at BAID"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import HighlightBlock from '@/components/HighlightBlock.vue'

const pageData = inject('data')
</script>
