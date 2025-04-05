<template>
  <div class="section">
    <div class="flex items-center flex-row">
      <div
        v-for="datum in pageData.data"
        :key="datum"
        class="items-center text-center flex flex-col m-24"
      >
        <div
          class="text-[var(--standard-blue)]"
          v-html="datum.icon"
        />
        <span class="text-16 font-bold font-title">
          {{ datum.content }}
        </span>
        <p class="text-xl op-70">
          {{ datum.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
