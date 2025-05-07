<template>
  <div class="py-24 border-b border-gray-200">
    <div class="section">
      <h2 class="mb-5 text-4xl font-bold">
        {{ pageData.clubs_title }}
      </h2>

      <SwiperWrapper arrow-color="var(--standard-blue)">
        <swiper-slide
          v-for="club in pageData.clubs"
          :key="club"
          class="flex justify-center items-center text-black"
        >
          <div class="md:max-w-4/5 bg-white mx-auto rounded-lg border border-gray-200 flex flex-col sm:flex-row gap-5">
            <!-- Text content: full width on mobile, half on larger screens -->
            <div class="w-full sm:w-1/2 py-16 px-8 overflow-y-auto sm:h-96">
              <h3 class="!text-2xl font-bold mb-5">
                {{ club.name }}
              </h3>
              <p
                class="text-sm"
                v-html="club.description"
              />
            </div>
            <!-- Image container: full width on mobile, half on larger screens -->
            <div class="w-full sm:w-1/2">
              <img
                :alt="club.name"
                :src="club.image"
                class="object-cover w-full h-full rounded-lg"
              >
            </div>
          </div>
        </swiper-slide>
      </SwiperWrapper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SwiperWrapper from '../SwiperWrapper.vue'
import { inject } from 'vue'
import { SwiperSlide } from 'swiper/vue'

const pageData = inject('data')
</script>
