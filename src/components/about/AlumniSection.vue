<template>
  <div class="section !mt-24">
    <h2 class="!text-3xl md:!text-5xl font-bold mb-5">
      {{ pageData.alumni_title }}
    </h2>
    <div class="flex flex-col md:flex-row items-center gap-8 md:mb-5">
      <div class="w-full md:w-1/3 flex pl-8 items-center">
        <div class="alumni-big-pic-box h-72 md:h-auto">
          <img
            :class="{ 'opacity-0': transition }"
            :src="pageData.alumni[current].image"
            alt="Picture of alumnus"
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
              class="!font-serif text-3xl mb-3"
              v-html="pageData.alumni[current].content"
            />
            <p class="text-right">
              —— {{ pageData.alumni[current].name }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center md:justify-end">
          <div
            v-for="(alumnus, index) in pageData.alumni"
            :key="alumnus"
          >
            <button @click="change(index)">
              <img
                :class="{
                  '!opacity-100': current === index,
                  'hover:opacity-100 active:brightness-90':
                    current !== index && !transition
                }"
                :src="alumnus.image"
                alt="pic1"
                class="h-36 object-cover aspect-3/4 opacity-60 transition-all"
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'

const pageData = inject('data')

const current = ref(0)
const transition = ref(false)

function change(index: number) {
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
  box-shadow: -2rem 2rem var(--standard-red);
}
</style>
