<template>
  <div class="border-b border-gray-200">
    <section
      aria-labelledby="overview-heading"
      class="section !pb-0 !mt-24"
    >
      <h2
        id="overview-heading"
        class="text-4xl font-bold mb-5 md:text-right"
      >
        {{ pageData.overview_title }}
      </h2>

      <div
        aria-label="Overview items"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-0"
        role="list"
      >
        <div
          class="md:p-8 md:border-r border-gray-200"
          role="listitem"
          tabindex="0"
        >
          <h3 class="text-xl font-bold mb-3">
            {{ pageData.overview_items[0].title }}
          </h3>
          <div v-html="pageData.overview_items[0].content" />
        </div>
        <div
          class="md:p-8 md:border-r border-gray-200"
          role="listitem"
          tabindex="0"
        >
          <h3 class="text-xl font-bold mb-3">
            {{ pageData.overview_items[1].title }}
          </h3>
          <div v-html="pageData.overview_items[1].content" />
        </div>
        <div
          class="md:p-8 md:border-r border-gray-200"
          role="listitem"
          tabindex="0"
        >
          <h3 class="text-xl font-bold mb-3">
            {{ pageData.overview_items[2].title }}
          </h3>
          <div v-html="pageData.overview_items[2].content" />
        </div>
        <div
          class="md:p-8"
          role="listitem"
          tabindex="0"
        >
          <h3 class="text-xl font-bold mb-3">
            {{ pageData.overview_items[3].title }}
          </h3>
          <div v-html="pageData.overview_items[3].content" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
