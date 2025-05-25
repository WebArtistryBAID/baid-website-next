<template>
  <section
    id="curriculum"
    class="section"
    aria-labelledby="curriculum-heading"
  >
    <h2
      id="curriculum-heading"
      class="text-4xl font-bold !mb-8"
    >
      {{ pageData.curriculum_title }}
    </h2>

    <div class="flex">
      <div class="w-1/4">
        <button
          v-for="(item, index) in pageData.curricula"
          :key="index"
          :class="{ active: activeDesktopItem === index }"
          class="desktop-section-title mb-5 block"
          @click="activeDesktopItem = index"
        >
          {{ item.name }}
        </button>
      </div>
      <div class="w-3/4">
        <div
          v-for="(item, index) in pageData.curricula"
          :key="index"
          :class="{ hidden: activeDesktopItem !== index }"
        >
          <h3 class="text-2xl font-semibold mb-3">
            {{ item.name }}
          </h3>
          <div
            class="mb-5"
            v-html="item.description"
          />

          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="(content, contentIndex) in contents[index]"
              :key="contentIndex"
              class="bg-gray-100 p-3 rounded-lg"
            >
              {{ $t(content) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'

const pageData = inject('data')
const activeDesktopItem = ref(0)

const contents = [
  [ 'academics.curriculum.national', 'academics.curriculum.english', 'academics.curriculum.math', 'academics.curriculum.science', 'academics.curriculum.humanities' ],
  [ 'academics.curriculum.academic', 'academics.curriculum.experiential', 'academics.curriculum.art1', 'academics.curriculum.fitness', 'academics.curriculum.service' ],
  [ 'academics.curriculum.leadership', 'academics.curriculum.innovation', 'academics.curriculum.art2' ]
]
</script>

<style scoped>
.desktop-section-title {
  border-left-width: 4px;
  border-left-color: lightgray;
  color: lightgray;
  transition-property: all;
  transition-duration: 200ms;
  font-size: 1.5rem;
  padding-left: 1rem;
}

.desktop-section-title:hover {
  border-left-color: gray;
  color: gray;
}

.desktop-section-title.active {
  border-left-color: var(--standard-blue);
  color: black;
}
</style>
