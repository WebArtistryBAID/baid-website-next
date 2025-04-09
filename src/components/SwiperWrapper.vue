<template>
  <!-- Container for large screens: arrows left/right -->
  <div class="hidden sm:flex items-center justify-center">
    <!-- Left arrow -->
    <button
      aria-label="Previous"
      @click="prev"
    >
      <svg
        class="block"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :fill="props.arrowColor"
          d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"
        />
      </svg>
    </button>

    <!-- Swiper instance -->
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :effect="props.effect"
      :loop="true"
      :modules="modules"
      :slides-per-view="props.slides"
      :space-between="10"
      @swiper="getRef"
    >
      <slot />
    </swiper>

    <!-- Right arrow -->
    <button
      aria-label="Next"
      @click="next"
    >
      <svg
        class="block"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :fill="props.arrowColor"
          d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"
        />
      </svg>
    </button>
  </div>

  <!-- Container for small screens: swiper with bottom arrows -->
  <div class="flex flex-col items-center sm:hidden">
    <!-- Swiper instance -->
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :effect="props.effect"
      :loop="true"
      :modules="modules"
      :space-between="10"
      :slides-per-view="props.slides"
      class="w-full"
      @swiper="getRef"
    >
      <slot />
    </swiper>

    <!-- Navigation arrows at the bottom -->
    <div class="flex items-center justify-center mt-4">
      <button
        aria-label="Previous"
        class="mx-2"
        @click="prev"
      >
        <svg
          class="block"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :fill="props.arrowColor"
            d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"
          />
        </svg>
      </button>
      <button
        aria-label="Next"
        class="mx-2"
        @click="next"
      >
        <svg
          class="block"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :fill="props.arrowColor"
            d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { A11y, EffectCoverflow, EffectFlip } from 'swiper/modules'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-coverflow'

const modules = [ A11y, EffectFlip, EffectCoverflow ]

const props = defineProps({
  slides: {
    type: Number,
    default: 1
  },
  arrowColor: {
    type: String,
    default: 'var(--standard-red)'
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  effect: {
    type: String,
    default: 'slide'
  }
})

const swiperR = ref(null)

function getRef(swiperInstance: any) {
  swiperR.value = swiperInstance
}

function prev() {
  swiperR.value?.slidePrev()
}

function next() {
  swiperR.value?.slideNext()
}
</script>