<template>
  <div class="section !mt-24">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl font-bold">
          A better way to learn
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <p class="!font-serif text-2xl md:text-3xl lg:text-4xl">
          Taking advanced courses, diving into research, exploring Chinese culture,
          or even traveling across the nation and the world... At BAID, learning takes place
          where you could have never imagined.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
