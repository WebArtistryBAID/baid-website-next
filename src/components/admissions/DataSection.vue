<template>
  <section
    aria-labelledby="statistics-heading"
    class="section !py-16"
  >
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/3 mb-8 md:mb-0">
        <h2
          id="statistics-heading"
          class="text-3xl md:text-4xl font-bold"
        >
          {{ pageData.statistics_title }}
        </h2>
      </div>
      <div
        aria-label="Statistics"
        class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5"
        role="list"
      >
        <div
          v-for="stat in pageData.statistics"
          :key="stat.id"
          :aria-label="`${stat.name}: ${stat.content}`"
          role="listitem"
          tabindex="0"
        >
          <p
            aria-hidden="true"
            class="text-5xl md:text-7xl text-red-900"
          >
            {{ stat.content }}
          </p>
          <p class="text-lg font-sans">
            {{ stat.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
