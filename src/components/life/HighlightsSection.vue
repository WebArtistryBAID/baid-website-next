<template>
  <div class="border-b border-gray-200 my-0 mx-auto">
    <div
      class="flex flex-col md:flex-row mx-auto"
      style="max-width: 77rem"
    >
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="activity"
            alt="English drama festival activity"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Activities
        </p>
        <p class="text-lg !font-serif">
          Find your voice and passions through vibrant opportunities like BAID Speaker, Whale Cafe,
          diverse electives, and beloved traditions like BAID Got Talent and Sing BAID.
        </p>
      </div>
      <div class="w-full md:w-1/3 md:border-r border-gray-200 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="club"
            alt="The SLSD club"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Clubs
        </p>
        <p class="text-lg !font-serif">
          Clubs are dynamic hubs of creativity and purpose — where you turn passions into projects, ideas into impact,
          and
          friendships into lasting communities.
        </p>
      </div>
      <div class="w-full md:w-1/3 p-6 md:p-12">
        <div class="flex justify-center items-center w-full h-64">
          <img
            :src="athletics"
            alt="Athletics at BAID"
            class="max-w-4/5 mb-5"
          >
        </div>
        <p class="text-3xl mb-1 font-bold !font-sans">
          Health & Fitness
        </p>
        <p class="text-lg !font-serif">
          With options like basketball, football, archery, baseball, volleyball, tennis, and dance,
          there's a way for everyone to move, grow, and thrive.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import activity from '@/assets/images/life/activity.webp'
import athletics from '@/assets/images/life/athletics.webp'
import club from '@/assets/images/life/club.webp'
import { inject } from 'vue'

const pageData = inject('data')
</script>
