<template>
  <section
    aria-label="Highlights section"
    class="border-t border-gray-200 my-0 mx-auto"
  >
    <div
      class="mx-auto"
      style="max-width: 77rem"
    >
      <div
        aria-label="Highlights"
        class="flex flex-col md:flex-row mb-8"
        role="list"
      >
        <HighlightBlock
          :description="pageData.highlights[0].description"
          :image="pageData.highlights[0].image"
          :title="pageData.highlights[0].title"
          image-alt="BAID students collaborating on a project"
        />
        <HighlightBlock
          :description="pageData.highlights[1].description"
          :image="pageData.highlights[1].image"
          :title="pageData.highlights[1].title"
          image-alt="BAID students working in a lab"
        />
        <HighlightBlock
          :description="pageData.highlights[2].description"
          :image="pageData.highlights[2].image"
          :title="pageData.highlights[2].title"
          image-alt="BAID students dancing at a school event"
        />
      </div>

      <p class="text-sm max-w-xl px-5 md:px-0">
        {{ $t('admissions.comment') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import HighlightBlock from '@/components/HighlightBlock.vue'

const pageData = inject('data')
</script>
