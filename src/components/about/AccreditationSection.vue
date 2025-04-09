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
          v-for="acc in accs"
          :key="acc"
        >
          <div
            class="rounded-lg mx-4 md:mx-8 h-56 md:h-72 my-8 md:my-12 bg-white flex flex-col justify-center items-center"
          >
            <img
              :alt="$t(acc.name)"
              :src="acc.image"
              class="h-16 md:h-24 mb-3 md:mb-5"
            >
            <p class="!font-sans text-black text-sm md:text-base">
              {{ $t(acc.name) }}
            </p>
          </div>
        </swiper-slide>
      </SwiperWrapper>
    </div>
    <div class="w-full md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-3">
        Accreditation
      </h2>
      <p
        class="opacity-80 text-sm md:text-base"
        v-html="pageData.accreditation"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import imgACT from '@/assets/images/about/act.svg'
import imgAP from '@/assets/images/about/ap.svg'
import imgCIS from '@/assets/images/about/cis.webp'
import imgApple from '@/assets/images/about/apple.svg'
import imgCam from '@/assets/images/about/cambridge.webp'

import SwiperWrapper from '@/components/SwiperWrapper.vue'
import { SwiperSlide } from 'swiper/vue'

import { inject } from 'vue'

const pageData = inject('data')

const accs = [
  {
    image: imgAP,
    name: 'AboutUs.Accreditation.AP'
  },
  {
    image: imgACT,
    name: 'AboutUs.Accreditation.ACT'
  },
  {
    image: imgCIS,
    name: 'AboutUs.Accreditation.CIS'
  },
  {
    image: imgCam,
    name: 'AboutUs.Accreditation.Cambridge'
  },
  {
    image: imgApple,
    name: 'AboutUs.Accreditation.Apple'
  }
]
</script>
