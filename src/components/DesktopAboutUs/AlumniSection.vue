<template>
  <div class="section">
    <div
      id="alumni"
      class="items-center"
    >
      <NotFancyTitle
        :cn="$t('AboutUs.Alumni.Title')"
        color="red"
        en="Alumni"
      />
      <div class="flex">
        <!-- alumnus big pic -->
        <div
          class="mr-5 flex pl-8 items-center"
          style="flex: 1"
        >
          <div class="alumni-big-pic-box">
            <img
              :class="{ 'op-0': transition }"
              :src="pageData.alumni[current].image"
              alt="pic1"
              class="w-full object-cover aspect-3/4 transition-all-300 block alumni-big-pic"
            >
          </div>
        </div>
        <div
          class="ml-5 swiper-container"
          style="flex: 2"
        >
          <div class="relative mb-10">
            <div class="absolute left-20px top-0">
              <svg
                fill="none"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                width="56.55765920826161"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <rect
                    id="path_0"
                    height="53"
                    width="56.55765920826162"
                    x="0"
                    y="0"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask
                    id="bg-mask-0"
                    fill="white"
                  >
                    <use xlink:href="#path_0" />
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                        fill-rule="evenodd"
                        opacity="1"
                        style="fill: #122a28"
                        transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)"
                      />
                      <path
                        id="path 2"
                        d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                        fill-rule="evenodd"
                        opacity="1"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              :class="{ 'op-0': transition }"
              class="p-20 transition-all-300 h-40 justify-center flex flex-col"
            >
              <p v-html="pageData.alumni[current].content" />
              <p class="text-right">
                ——{{ pageData.alumni[current].name }}
              </p>
            </div>
            <div class="absolute right-20px bottom-0">
              <svg
                fill="none"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                width="56.55765920826161"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <rect
                    id="path_0"
                    height="53"
                    width="56.55765920826162"
                    x="0"
                    y="0"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask
                    id="bg-mask-0"
                    fill="white"
                  >
                    <use xlink:href="#path_0" />
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                        fill-rule="evenodd"
                        opacity="1"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                      />
                      <path
                        id="path 2"
                        d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                        fill-rule="evenodd"
                        opacity="1"
                        style="fill: #122a28"
                        transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="flex items-center mt-10">
            <DesktopSwiper :slides="3">
              <swiper-slide
                v-for="(alumnus, index) in pageData.alumni"
                :key="alumnus"
              >
                <img
                  :class="{
                    '!opacity-100': current === index,
                    'hover:opacity-100 active:brightness-90':
                      current !== index && !transition
                  }"
                  :src="alumnus.image"
                  alt="pic1"
                  class="w-full object-cover aspect-3/4 opacity-60 transition-all"
                  @click="change(index)"
                >
              </swiper-slide>
            </DesktopSwiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import DesktopSwiper from '../DesktopSwiper.vue'

import { inject, ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

const pageData = inject('data')

const current = ref(0)
const transition = ref(false)

function change(index) {
  if (index === current.value || transition.value) return
  transition.value = true
  setTimeout(() => {
    current.value = index
    setTimeout(() => {
      transition.value = false
    }, 150)
  }, 300)
}
</script>

<style scoped>
.alumni-big-pic-box {
  box-shadow: -2rem 2rem var(--standard-red), -0.25rem 0.25rem 0.25rem grey;
}
</style>
