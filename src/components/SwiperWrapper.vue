<template>
  <!-- Container for large screens: arrows left/right -->
  <div
    aria-label="Image carousel"
    aria-roledescription="carousel"
    class="hidden sm:flex items-center justify-center"
    role="region"
    tabindex="0"
  >
    <swiper
      ref="swiperEl"
      :autoplay="autoplay ? {
        delay: 2500,
        disableOnInteraction: false
      } : undefined"
      :pagination="{ clickable: true }"
      :loop="true"
      :modules="modules"
      :slides-per-view="props.slides"
      :space-between="10"
      aria-live="polite"
      effect="slide"
      @swiper="getRef"
    >
      <slot />
    </swiper>
  </div>

  <!-- Container for small screens: swiper with bottom arrows -->
  <div
    aria-label="Image carousel"
    aria-roledescription="carousel"
    class="flex flex-col items-center sm:hidden"
    role="region"
    tabindex="0"
  >
    <!-- Swiper instance -->
    <swiper
      ref="swiperEl"
      :autoplay="autoplay ? {
        delay: props.autoplayDelay,
        disableOnInteraction: false
      } : undefined"
      :pagination="{ clickable: true }"
      :loop="true"
      :modules="modules"
      :space-between="10"
      :slides-per-view="props.slides"
      class="w-full"
      aria-live="polite"
      effect="slide"
      @swiper="getRef"
    >
      <slot />
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [ A11y, Autoplay, Pagination ]

const props = defineProps({
  slides: {
    type: Number,
    default: 1
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  autoplayDelay: {
    type: Number,
    default: 2500
  }
})
</script>
