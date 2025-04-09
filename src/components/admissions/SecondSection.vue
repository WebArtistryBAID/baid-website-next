<template>
  <div class="section">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl font-bold">
          Let's start from here
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <p class="!font-serif text-2xl md:text-3xl lg:text-4xl">
          At BAID, you are empowered to explore your passions, build meaningful connections, and uncover new pathways to
          your full potential — every single day.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
