<template>
  <MobileCard :border="false">
    <div
      :style="{ background: `url(${props.cover})` }"
      class="flex items-center justify-center w-full h-35"
    >
      <div class="w-20 h-20 text-white">
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g fill="none">
            <path
              d="M9.125 7.184A.75.75 0 0 0 8 7.834v4.333a.75.75 0 0 0 1.125.65l4.125-2.384a.5.5 0 0 0 0-.866L9.125 7.184zM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14z"
              data-darkreader-inline-fill=""
              fill="currentColor"
              style="--darkreader-inline-fill: currentColor"
            />
          </g>
        </svg>
      </div>
    </div>
  </MobileCard>
</template>

<script lang="ts" setup>
import MobileCard from './MobileCard.vue'

const props = defineProps([ 'cover', 'src' ])
</script>
