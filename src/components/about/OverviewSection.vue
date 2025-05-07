<template>
  <div class="section !py-16">
    <h2 class="text-4xl font-sans font-bold mb-5">
      {{ pageData.overview_title }}
    </h2>
    <div
      class="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !font-serif !text-2xl md:!text-xl lg:!text-2xl"
    >
      <div
        v-for="ov in pageData.overview_items"
        :key="ov.id"
        v-html="ov.text"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
