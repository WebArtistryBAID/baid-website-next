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

    <div class="md:hidden">
      <div
        v-for="(item, index) in pageData.curricula"
        :key="index"
        class="mb-4"
      >
        <details
          :open="activeMobileItem === index"
          class="!rounded-lg"
          @toggle="handleAccordionToggle($event, index)"
        >
          <summary class="p-4 bg-gray-100 rounded-lg cursor-pointer font-medium">
            {{ item.name }}
          </summary>
          <div class="p-4">
            <h3 class="text-2xl font-semibold mb-3">
              {{ item.name }}
            </h3>
            <div
              class="mb-5"
              v-html="item.description"
            />
            <div class="grid grid-cols-1 gap-3">
              <div
                v-for="(content, contentIndex) in contents[index]"
                :key="contentIndex"
                class="bg-gray-100 p-3 rounded-lg"
              >
                {{ $t(content) }}
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>

    <div class="hidden md:flex">
      <div
        aria-label="Curriculum sections"
        class="w-1/4"
        role="tablist"
      >
        <button
          v-for="(item, index) in pageData.curricula"
          :id="`curriculum-tab-${index}`"
          :key="index"
          :class="{ active: activeDesktopItem === index }"
          class="desktop-section-title mb-5 block text-left"
          :aria-controls="`curriculum-panel-${index}`"
          :aria-selected="activeDesktopItem === index"
          :tabindex="activeDesktopItem === index ? 0 : -1"
          role="tab"
          @click="activeDesktopItem = index"
          @keydown="handleTabKey($event, index)"
        >
          {{ item.name }}
        </button>
      </div>
      <div class="w-3/4">
        <div
          v-for="(item, index) in pageData.curricula"
          :id="`curriculum-panel-${index}`"
          :key="index"
          :aria-labelledby="`curriculum-tab-${index}`"
          :hidden="activeDesktopItem !== index"
          role="tabpanel"
          tabindex="0"
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
const activeMobileItem = ref<number | null>(null)

const contents = [
  [ 'academics.curriculum.national', 'academics.curriculum.english', 'academics.curriculum.math', 'academics.curriculum.science', 'academics.curriculum.humanities' ],
  [ 'academics.curriculum.academic', 'academics.curriculum.experiential', 'academics.curriculum.art1', 'academics.curriculum.fitness', 'academics.curriculum.service' ],
  [ 'academics.curriculum.leadership', 'academics.curriculum.innovation', 'academics.curriculum.art2' ]
]

const handleTabKey = (event: KeyboardEvent, index: number) => {
  const count = pageData.curricula.length
  if (event.key === 'ArrowRight') {
    activeDesktopItem.value = (index + 1) % count
  } else if (event.key === 'ArrowLeft') {
    activeDesktopItem.value = (index - 1 + count) % count
  }
}

const handleAccordionToggle = (event: Event, index: number) => {
  const details = event.target as HTMLDetailsElement
  activeMobileItem.value = details.open ? index : null
}
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
