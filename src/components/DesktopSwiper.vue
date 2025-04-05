<template>
  <div class="flex items-center justify-center swiper-container">
    <!-- arrow left -->
    <div @click="prev">
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
    </div>
    <Swiper
      ref="swiper"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :loop="true"
      :modules="modules"
      :slides-per-view="props.slides"
      :space-between="10"
      @swiper="getRef"
    >
      <slot />
    </Swiper>
    <!-- arrow right -->
    <div @click="next">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { A11y, Autoplay, Navigation } from 'swiper'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const props = defineProps({
  slides: Number,
  arrowColor: {
    type: String,
    default: 'var(--standard-red)'
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const modules = computed(() => {
  if (props.autoplay) {
    return [ Autoplay, A11y, Navigation ]
  } else {
    return [ A11y, Navigation ]
  }
})

const swiper = ref(null)

function getRef(swiperInstance) {
  swiper.value = swiperInstance
}

function prev() {
  swiper.value.slidePrev()
}

function next() {
  swiper.value.slideNext()
}
</script>
