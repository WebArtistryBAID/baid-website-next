<template>
  <div class="section">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl font-bold">
          Live the best years of your life
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <p class="!font-serif text-2xl md:text-3xl lg:text-4xl">
          At BAID, student life is about more than just academics. It's about exploring your
          passions, meeting new friends, and making the most of your precious high school years.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
