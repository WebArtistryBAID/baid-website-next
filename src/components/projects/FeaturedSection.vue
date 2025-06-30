<template>
  <section
    class="mx-auto my-24 section"
    style="max-width: 77rem"
  >
    <SwiperWrapper
      :autoplay="true"
      :autoplay-delay="10000"
      :slides="1"
      aria-live="polite"
    >
      <swiper-slide>
        <FeaturedCard />
      </swiper-slide>
      <swiper-slide>
        <FeaturedCard />
      </swiper-slide>
      <swiper-slide>
        <FeaturedCard />
      </swiper-slide>
    </SwiperWrapper>
  </section>
</template>
<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import SwiperWrapper from '@/components/SwiperWrapper.vue'
import FeaturedCard from '@/components/projects/FeaturedCard.vue'
</script>
