<template>
  <div class="section !mt-24">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl font-bold">
          Applying to BAID
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <p class="!font-serif text-2xl md:text-3xl lg:text-4xl">
          Writing your story, showing your passions, imagining your future —
          applying to BAID is the beginning of a journey where
          who you are truly matters.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
