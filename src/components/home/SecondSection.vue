<template>
  <div class="section">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl font-bold">
          {{ pageData.intro_title }}
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <div
          class="!font-serif text-2xl md:text-3xl lg:text-4xl"
          v-html="pageData.intro_text"
        />
        <div class="flex justify-end mt-5">
          <ReadMore to="/about" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReadMore from '../ReadMore.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
