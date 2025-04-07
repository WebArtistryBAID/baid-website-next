<template>
  <div class="section !py-16 gap-16 text-white flex items-center">
    <div class="w-1/2">
      <DesktopSwiper
        :autoplay="true"
        :slides="1"
        arrow-color="white"
      >
        <swiper-slide
          v-for="acc in accs"
          :key="acc"
        >
          <div
            class="rounded-lg mx-8 h-72 my-12 bg-white flex flex-col justify-center items-center"
          >
            <img
              :alt="$t(acc.name)"
              :src="acc.image"
              class="h-24 mb-5"
            >
            <p class="!font-sans text-black">
              {{ $t(acc.name) }}
            </p>
          </div>
        </swiper-slide>
      </DesktopSwiper>
    </div>
    <div class="w-1/2">
      <h2 class="text-4xl font-bold mb-3">
        Accreditation
      </h2>
      <p
        class="opacity-80"
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

import DesktopSwiper from '@/components/DesktopSwiper.vue'
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
