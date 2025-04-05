<template>
  <div
    :style="{ 'background-image': 'url(' + bg + ')' }"
    class="z--1 absolute w-screen h-screen top-0 bg-cover bg-center"
  />
</template>

<script lang="ts" setup>
import bg from '../../assets/images/mobileHomeBg.svg'
</script>
