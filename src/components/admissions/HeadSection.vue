<template>
  <section
    aria-labelledby="head-section-heading"
    class="section !mt-24"
  >
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <h2
          id="head-section-heading"
          class="text-3xl md:text-4xl font-bold"
        >
          {{ pageData.top_title }}
        </h2>
      </div>
      <div class="w-full md:w-2/3">
        <div
          class="text-2xl md:text-3xl lg:text-4xl"
          v-html="pageData.top_text"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
