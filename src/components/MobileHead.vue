<template>
  <section class="w-full relative z-0 h-260px overflow-hidden">
    <div
      :style="{
        'background-image': `url(${props.img})`,
        height: containerHeight + 'px',
        top: top + 'px'
      }"
      class="absolute w-full h-full flex items-center justify-center bg-cover bg-center"
    />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps([ 'img' ])

const containerHeight = ref(260)
const top = ref(0)

function onScroll() {
  containerHeight.value = 260 - window.scrollY
  top.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
