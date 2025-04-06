<template>
  <div class="section">
    <div class="flex">
      <div class="w-1/3">
        <p class="text-4xl font-bold">
          This is BAID
        </p>
      </div>
      <div class="w-2/3">
        <p class="!font-serif text-4xl">
          At BAID, you are empowered to explore your passions, build meaningful connections, and uncover new pathways to
          your full potential — every single day.
        </p>
        <div class="flex justify-end m-t-5">
          <ReadMore to="/about#overview" />
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
