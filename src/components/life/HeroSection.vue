<template>
  <div class="pt-48 bg-red-800">
    <h1
      class="!text-[9rem] font-bold !font-sans px-24 text-white"
      style="margin-bottom: -3.2rem"
    >
      Student Life
    </h1>

    <img
      :src="campus"
      alt="BAID students working on a group project"
      class="w-full"
    >
  </div>
</template>

<script lang="ts" setup>
import campus from '@/assets/images/life/student-life.webp'
</script>
