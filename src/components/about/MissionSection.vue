<template>
  <section
    aria-labelledby="mission-heading"
    class="section !mt-24"
  >
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <h2
          id="mission-heading"
          class="text-3xl md:text-4xl font-bold"
        >
          {{ $t('about.missionTitle') }}
        </h2>
      </div>
      <div class="w-full md:w-2/3">
        <p
          class="text-2xl md:text-3xl lg:text-4xl"
        >
          {{ $t('about.missionText') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
