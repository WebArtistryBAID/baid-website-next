<template>
  <div
    :style="{ color: props.color }"
    class="flex"
  >
    <img
      :src="logoUrl"
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
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import logoNormal from '@/assets/images/logoNormal.png'

const props = defineProps({
  color: {
    type: String,
    default: '#000'
  },
  logoType: {
    type: String,
    default: 'normal' // normal, ...
  }
})

const logoUrl = computed(() => {
  if (props.logoType === 'normal') {
    return logoNormal
  } else {
    return ''
  }
})
</script>
