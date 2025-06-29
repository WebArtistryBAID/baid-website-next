<template>
  <section
    aria-labelledby="accreditation-heading"
    class="section !py-12 md:!py-16 gap-8 md:gap-16 text-white flex flex-col md:flex-row items-center !my-24"
  >
    <div
      aria-label="Accreditations carousel"
      aria-roledescription="carousel"
      class="w-full md:w-1/2"
      role="region"
    >
      <SwiperWrapper
        :autoplay="true"
        :slides="1"
        aria-live="polite"
      >
        <swiper-slide
          v-for="(acc, index) in pageData.accreditations"
          :key="acc.id"
          :aria-label="`Slide ${index+1} of ${pageData.accreditations.length}: ${acc.name}`"
          tabindex="0"
        >
          <div
            class="rounded-lg mx-4 md:mx-8 h-56 md:h-72 my-8 md:my-12 bg-white flex flex-col justify-center items-center"
          >
            <img
              :alt="acc.name"
              :src="acc.image"
              class="h-16 md:h-24 mb-3 md:mb-5"
            >
            <p class="!font-sans text-black text-sm md:text-base">
              {{ acc.name }}
            </p>
          </div>
        </swiper-slide>
      </SwiperWrapper>
    </div>
    <div class="w-full md:w-1/2">
      <h2
        id="accreditation-heading"
        class="text-3xl md:text-4xl font-bold mb-2 md:mb-3"
      >
        {{ pageData.accreditation_title }}
      </h2>
      <p
        class="opacity-80 text-sm md:text-base"
        v-html="pageData.accreditation_text"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import SwiperWrapper from '@/components/SwiperWrapper.vue'
import { SwiperSlide } from 'swiper/vue'

import { inject } from 'vue'

const pageData = inject('data')
</script>
