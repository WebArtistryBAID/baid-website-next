<template>
  <div class="section !py-16">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/3 mb-8 md:mb-0">
        <h2 class="text-3xl md:text-4xl font-bold">
          BAID in Numbers
        </h2>
      </div>
      <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="datum in pageData.data"
          :key="datum"
          class="flex items-center"
        >
          <div>
            <p class="text-5xl md:text-7xl font-serif text-[var(--standard-blue)]">
              {{ datum.content }}
            </p>
            <p class="text-base md:text-lg font-sans">
              {{ datum.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
