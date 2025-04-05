<template>
  <div
    id="container"
    class="my-10 py-5 flex flex-col justify-center items-center bg-gray-200"
  >
    <h1 class="text-10 font-300 font-title text-center">
      {{ $t('StudentLife.Clubs.Title') }}
    </h1>
    <div class="flex justify-center items-center w-274">
      <DesktopSwiper
        autoplay="true"
        slides="4"
      >
        <swiper-slide
          v-for="club in pageData.clubs"
          :key="club"
          class="flex justify-center py-3"
          @click="
            () => {
              clubName = club.name
              clubDescription = club.content
              clubImgs = club.images
              showInfo = true
            }
          "
        >
          <div
            :style="{ 'background-color': club.bg_color, color: club.color }"
            class="h-220px aspect-1 items-center justify-center flex flex-col transition-300 hover:shadow-xl"
          >
            <div class="text-8 font-title m-1">
              {{ club.name }}
            </div>
            <div class="m-1">
              <img
                :src="club.icon"
                class="w-80px aspect-1 object-cover block"
              >
            </div>
          </div>
        </swiper-slide>
      </DesktopSwiper>
      <Transition name="fade">
        <ClubInfo
          v-if="showInfo"
          :description="clubDescription"
          :images="clubImgs"
          :name="clubName"
          @close="showInfo = false"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ClubInfo from './ClubInfo.vue'
import DesktopSwiper from '../DesktopSwiper.vue'
import { inject, ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

const pageData = inject('data')

const showInfo = ref(false)
const clubName = ref(null)
const clubDescription = ref(null)
const clubImgs = ref(null)
</script>
