<template>
  <section
    :aria-label="pageData.alumni_title"
    class="section !my-24"
  >
    <h2
      aria-level="2"
      class="uppercase text-center tracking-widest mb-8 text-3xl"
      role="heading"
      v-html="$t('about.alumniTitle')"
    />

    <SwiperWrapper
      :slides="1"
      aria-live="polite"
    >
      <swiper-slide
        v-for="(alum, index) in pageData.alumni"
        :key="index"
        :aria-label="`Slide ${index+1} of ${pageData.alumni.length}: ${alum.name}`"
        tabindex="0"
      >
        <div
          aria-label="Alumni testimonials"
          aria-roledescription="carousel"
          class="flex flex-col md:flex-row items-center gap-8 md:mb-5"
          role="region"
        >
          <div class="w-full md:w-1/3 flex pl-8 items-center">
            <div class="alumni-big-pic-box h-72 md:h-auto">
              <img
                :alt="`Picture of ${alum.name}`"
                :class="{ 'opacity-0': transition }"
                :src="alum.image"
                class="w-full h-full object-cover aspect-3/4 transition-all duration-300 block alumni-big-pic"
              >
            </div>
          </div>
          <div class="w-full md:w-2/3">
            <div class="p-8 md:p-20">
              <div
                :class="{ 'opacity-0': transition }"
                class="transition-all duration-300 md:h-80 justify-center flex flex-col"
              >
                <p
                  class="text-3xl mb-3"
                  v-html="alum.content"
                />
                <p class="text-right">
                  —— {{ alum.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SwiperWrapper>
  </section>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import SwiperWrapper from '@/components/SwiperWrapper.vue'
import { SwiperSlide } from 'swiper/vue'

const pageData = inject('data')

const current = ref(0)
const transition = ref(false)
</script>

<style scoped>
.alumni-big-pic-box {
  box-shadow: -2rem 2rem var(--standard-red);
}
</style>
