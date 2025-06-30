<template>
  <div
    class="flex flex-col md:flex-row items-center gap-8 md:mb-5"
    role="region"
  >
    <div class="w-full md:w-1/3 flex pl-8 items-center">
      <div class="project-box h-72 md:h-auto">
        <img
          alt="Picture of someone"
          class="w-full h-full object-cover aspect-3/4 transition-all duration-300 block"
          src="https://cms.beijing.academy/media/original_images/tian.webp"
        >
      </div>
    </div>
    <div class="w-full md:w-2/3">
      <div class="p-8 md:p-20">
        <div
          class="transition-all duration-300 md:h-80"
        >
          <div class="bg-[var(--standard-blue)] text-white px-4 py-2 rounded-full mb-4 inline-block">
            Featured Project
          </div>
          <p class="text-3xl !mb-3">
            It was at that point when I realized that they are human too. They deserve to be treated
            with the same dignity as I treat my peers. I thought I was helping them,
            but I was really just looking down on them.
          </p>
          <p class="!mb-5 text-right">
            —— Someone, Class of 2027
          </p>
          <ReadMore
            color="#103c74"
            text="Learn more Lin's transformed perspective"
            to="projects/something"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReadMore from '@/components/ReadMore.vue'
</script>

<style scoped>
.project-box {
  box-shadow: -2rem 2rem var(--standard-blue);
}
</style>
