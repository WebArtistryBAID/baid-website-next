<template>
  <div class="bg-gray-50 rounded-3xl group cursor-pointer">
    <div class="rounded-3xl w-full h-48 overflow-hidden">
      <img
        :src="bg4"
        alt="Temporary"
        class="w-full h-full group-hover-scale object-cover"
      >
    </div>
    <div class="p-5">
      <p class="text-xl font-bold fancy-link">
        This is a random project
      </p>
      <p class="opacity-80">
        Liu Yuehan · An Lifu
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
</script>
