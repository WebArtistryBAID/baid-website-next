<template>
  <div class="section text-white flex items-center">
    <div class="w-1/2 p-r-16 border-0 border-r-2 border-white/50 border-solid">
      <NotFancyTitle
        :cn="$t('AboutUs.Accreditation.Title')"
        color="white"
        en="Accreditation"
      />
      <p
        class="opacity-80"
        v-html="pageData.accreditation"
      />
    </div>
    <div class="w-1/2 p-l-16">
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
            class="w-full h-72 my-12 bg-white rounded-xl flex flex-col justify-center items-center"
          >
            <div class="h-30 text-center">
              <img
                :alt="$t(acc.name)"
                :src="acc.image"
                class="h-24 mb-5"
              >
              <p class="font-sans text-black">
                {{ $t(acc.name) }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </DesktopSwiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import imgACT from '@/assets/images/AboutUs/ACT.svg'
import imgAP from '@/assets/images/AboutUs/AP.svg'
import imgCIS from '@/assets/images/AboutUs/CIS.png'
import imgApple from '@/assets/images/AboutUs/Apple.svg'
import imgCam from '@/assets/images/AboutUs/Cambridge.png'

import NotFancyTitle from '../NotFancyTitle.vue'
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
