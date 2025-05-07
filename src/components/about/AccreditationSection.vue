<template>
  <div class="section !py-12 md:!py-16 gap-8 md:gap-16 text-white flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2">
      <SwiperWrapper
        :autoplay="true"
        :slides="1"
        effect="coverflow"
        arrow-color="white"
      >
        <swiper-slide
          v-for="acc in pageData.accreditations"
          :key="acc.id"
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
      <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-3">
        {{ pageData.accreditation_title }}
      </h2>
      <p
        class="opacity-80 text-sm md:text-base"
        v-html="pageData.accreditation_text"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SwiperWrapper from '@/components/SwiperWrapper.vue'
import { SwiperSlide } from 'swiper/vue'

import { inject } from 'vue'

const pageData = inject('data')
</script>
