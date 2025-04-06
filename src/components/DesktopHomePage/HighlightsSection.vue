<template>
  <div class="border-t border-gray-200 my-0 mx-auto">
    <div
      class="flex mx-auto"
      style="max-width: 77rem"
    >
      <div class="w-1/3 border-r border-gray-200 p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="applying"
            alt="Applying to BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Applying to BAID
        </p>
        <p class="text-lg !font-serif">
          We are looking for students like you who are curious, creative, and committed to making a difference in the
          world.
        </p>
        <div class="mt-2">
          <ReadMore to="/join#apply" />
        </div>
      </div>
      <div class="w-1/3 border-r border-gray-200 p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="academic"
            alt="Academic Excellence"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Academic Excellence
        </p>
        <p class="text-lg !font-serif">
          With over 20 AP courses, undergraduate-level courses, the MFP research program, project-based learning and
          more,
          BAID prepares students for success in college and beyond.
        </p>
        <div class="mt-2">
          <ReadMore to="/education#curriculum" />
        </div>
      </div>
      <div class="w-1/3 p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="life"
            alt="Life at BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Life at BAID
        </p>
        <p class="text-lg !font-serif">
          We are scholars, athletes, and artists. We are innovators, leaders, and change-makers.
          We are ready to make the world better. We are BAID.
        </p>
        <div class="mt-2">
          <ReadMore to="/life" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import academic from '@/assets/images/home-page/highlights/academic.webp'
import applying from '@/assets/images/home-page/highlights/applying.webp'
import life from '@/assets/images/home-page/highlights/life.webp'
import { inject } from 'vue'
import ReadMore from '@/components/ReadMore.vue'

const pageData = inject('data')
</script>
