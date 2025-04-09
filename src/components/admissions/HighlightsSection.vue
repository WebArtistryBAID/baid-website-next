<template>
  <div class="border-t border-gray-200 my-0 mx-auto">
    <div
      class="mx-auto"
      style="max-width: 77rem"
    >
      <div class="flex mb-8">
        <div class="w-1/3 border-r border-gray-200 p-12">
          <div class="flex justify-center items-center w-full h-64">
            <img
              :src="a"
              alt="BAID students collaborating on a project"
              class="max-w-4/5 mb-5"
            >
          </div>
          <p class="text-3xl mb-1 font-bold !font-sans">
            Program Overview
          </p>
          <p class="text-lg !font-serif">
            Learn more about your eligibility to join BAID through the standard pathway*.
          </p>
        </div>
        <div class="w-1/3 border-r border-gray-200 p-12">
          <div class="flex justify-center items-center w-full h-64">
            <img
              :src="b"
              alt="BAID students working in a lab"
              class="max-w-4/5 mb-5"
            >
          </div>
          <p class="text-3xl mb-1 font-bold !font-sans">
            Application Process
          </p>
          <p class="text-lg !font-serif">
            Four simple steps to apply to BAID through the standard pathway.
          </p>
        </div>
        <div class="w-1/3 p-12">
          <div class="flex justify-center items-center w-full h-64">
            <img
              :src="c"
              alt="BAID students dancing at a school event"
              class="max-w-4/5 mb-5"
            >
          </div>
          <p class="text-3xl mb-1 font-bold !font-sans">
            Contact Us
          </p>
          <p class="text-lg !font-serif">
            We are here to help you every step of the way.
          </p>
        </div>
      </div>

      <p class="text-sm max-w-xl">
        *The following information is for students joining Grade 10 for high school with Zhongkao (中考) ("standard
        pathway").
        Please contact us if you are interested in alternative programs.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import a from '@/assets/images/admissions/a.webp'
import b from '@/assets/images/admissions/b.webp'
import c from '@/assets/images/admissions/c.webp'
import { inject } from 'vue'

const pageData = inject('data')
</script>
