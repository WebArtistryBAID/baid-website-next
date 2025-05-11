<template>
  <router-link to="/">
    <div
      :style="{ color: props.color }"
      class="flex"
    >
      <img
        :src="logo"
        alt="logo"
        class="w-16 h-16 mr-1"
      >
      <div class="flex flex-col justify-center transition-colors">
        <p class="m-0 !font-sans">
          北京中学国际部
        </p>
        <p class="!font-sans truncate m-0 text-xs">
          Beijing Academy International Division
        </p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import logo from '@/assets/images/logo.webp'

const props = defineProps({
  color: {
    type: String,
    default: '#000'
  }
})
</script>
