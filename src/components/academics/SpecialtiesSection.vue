<template>
  <section
    aria-label="Specialties section"
    aria-labelledby="specialties-heading"
    class="section"
  >
    <h2
      id="specialties-heading"
      class="sr-only"
    >
      Specialties
    </h2>
    <!-- Mobile Layout -->
    <div class="md:hidden">
      <!-- Main image section -->
      <div class="relative">
        <img
          :class="{ 'opacity-60': transition }"
          :src="pageData.specialties[current].image"
          alt=""
          class="w-full h-64 object-cover transition-opacity duration-300"
        >
        <div
          :class="{ 'opacity-0': transition }"
          class="absolute bottom-0 left-0 right-0 p-5 text-white special-bg transition-opacity duration-300"
        >
          <h2 class="text-2xl font-bold mb-2">
            {{ pageData.specialties[current].name }}
          </h2>
        </div>
      </div>
      <div
        aria-label="Specialties carousel"
        aria-roledescription="carousel"
        class="flex gap-1 overflow-x-auto mt-4 pb-4"
        role="region"
      >
        <div
          v-for="(method, index) in pageData.specialties"
          :key="method.id"
          class="flex-shrink-0"
        >
          <img
            :alt="`Learning Experience: ${method.name}`"
            :class="{
              '!opacity-100': current === index,
              'hover:opacity-100 active:brightness-90': current !== index && !transition
            }"
            :src="method.image"
            class="w-32 h-32 object-cover block opacity-60 transition-all cursor-pointer"
            role="button"
            :aria-label="`Show specialty ${method.name}`"
            :aria-pressed="current === index"
            tabindex="0"
            @click="change(index)"
          >
        </div>
      </div>
    </div>

    <div
      class="hidden md:grid gap-1"
      style="grid-template-columns: 3fr 1fr"
    >
      <div class="relative">
        <img
          :src="pageData.specialties[current].image"
          :class="{ 'opacity-60': transition }"
          :alt="`Specialty: ${pageData.specialties[current].name}`"
          aria-live="polite"
          class="w-full h-full object-cover transition-opacity duration-300"
        >
        <div
          :class="{ 'opacity-0': transition }"
          class="absolute bottom-0 p-10 pt-20 text-white from-[var(--standard-blue)] to-[var(--standard-blue)]/0
          bg-gradient-to-t w-full transition-opacity duration-300"
        >
          <h2 class="text-4xl font-bold mb-2">
            {{ pageData.specialties[current].name }}
          </h2>
          <p
            class="text-xl font-serif"
            v-html="pageData.specialties[current].description"
          />
        </div>
      </div>
      <!-- Right: Thumbnails -->
      <div
        aria-label="Specialties carousel"
        aria-roledescription="carousel"
        class="grid gap-1"
        role="region"
      >
        <div
          v-for="(method, index) in pageData.specialties"
          :key="method"
        >
          <img
            :class="{
              '!opacity-100': current === index,
              'hover:opacity-100 active:brightness-90': current !== index && !transition
            }"
            :src="method.image"
            :alt="`Learning Experience: ${method.name}`"
            class="w-full h-full object-cover block opacity-60 transition-all cursor-pointer"
            role="button"
            :aria-label="`Show specialty ${method.name}`"
            :aria-pressed="current === index"
            tabindex="0"
            @click="change(index)"
          >
        </div>
      </div>
    </div>
  </section>
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
