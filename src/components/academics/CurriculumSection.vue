<template>
  <section
    id="curriculum"
    class="section"
    aria-labelledby="curriculum-heading"
  >
    <h2
      id="curriculum-heading"
      class="text-4xl font-bold !mb-5"
    >
      {{ pageData.curriculum_title }}
    </h2>

    <!-- Desktop / Tablet layout -->
    <div
      aria-roledescription="curriculum overview"
      class="hidden md:flex gap-16 h-100"
      role="region"
    >
      <!-- Left panel: list of curriculum items -->
      <div
        aria-label="Curriculum items"
        class="w-2/5 flex flex-col justify-around"
        role="list"
      >
        <div
          v-for="(c, i) in pageData.curricula"
          :key="i"
          :class="{ '!opacity-100 active': currentDesktop === i }"
          class="opacity-70 container w-50"
          :aria-controls="`curriculum-panel-${i}`"
          :aria-selected="currentDesktop === i"
          role="button"
          tabindex="0"
          @mouseover="currentDesktop = i"
          @focus="currentDesktop = i"
        >
          <h2
            :id="`curriculum-tab-${i}`"
            class="m-0 text-2xl w-max"
          >
            {{ c.name }}
          </h2>
        </div>
      </div>

      <!-- Right panel: curriculum content details -->
      <div class="relative w-full">
        <div
          v-for="(c, i) in pageData.curriculums"
          :id="`curriculum-panel-${i}`"
          :key="i"
          :class="{ '!opacity-100': currentDesktop === i, 'flex-col-reverse': i % 2 == 0 }"
          class="w-full flex flex-col justify-center gap-5 absolute top-0 opacity-0 h-full"
          :aria-labelledby="`curriculum-tab-${i}`"
          role="region"
        >
          <div v-html="c.description" />
        </div>
      </div>
    </div>

    <!-- Mobile layout: accordion style -->
    <div class="md:hidden">
      <div
        v-for="(c, i) in pageData.curricula"
        :key="i"
        class="mb-4 border-b pb-4"
      >
        <!-- Tappable header -->
        <div
          :id="`curriculum-mobile-tab-${i}`"
          class="flex justify-between items-center cursor-pointer"
          :aria-controls="`curriculum-mobile-panel-${i}`"
          :aria-expanded="currentMobile === i"
          role="button"
          tabindex="0"
          @click="toggleMobile(i)"
        >
          <h2 class="text-2xl font-semibold">
            {{ c.name }}
          </h2>
          <!-- Simple indicator for expanded state -->
          <span>
            {{ currentMobile === i ? '-' : '+' }}
          </span>
        </div>
        <!-- Expanded content -->
        <transition name="slide">
          <div
            v-if="currentMobile === i"
            :id="`curriculum-mobile-panel-${i}`"
            class="mt-2"
            :aria-labelledby="`curriculum-mobile-tab-${i}`"
            role="region"
          >
            <div v-html="c.description" />
            <div class="mt-2">
              <ReadMore to="/academics" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import ReadMore from '@/components/ReadMore.vue'

// Inject page data (this should include the curriculums list)
const pageData = inject('data')

// Separate reactive state for desktop and mobile interaction,
// so the hover effect on desktop does not interfere with mobile tapping.
const currentDesktop = ref(0)
const currentMobile = ref<number | null>(null)

function toggleMobile(i: number) {
  // Close if already open; otherwise, set the active index.
  currentMobile.value = (currentMobile.value === i ? null : i)
}
</script>

<style scoped>
/* The desktop container style for list items */
.container {
  position: relative;
  height: 50px;
  left: 0;
}

/* Highlight indicator on curriculum title */
h2::before {
  content: '';
  display: block;
  position: absolute;
  background-color: var(--standard-blue);
  width: 5px;
  height: 85px;
  top: -5px;
  left: -20px;
  opacity: 0;
}

.active h2::before {
  opacity: 1;
}

/* Active state style for left panel items */
.active {
  left: 20px;
}

/* Global smooth transition */
* {
  transition: all 0.3s ease-in-out;
}

/* Transition for mobile accordion */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

.slide-enter-to, .slide-leave-from {
  max-height: 1000px; /* An arbitrarily large maximum height */
}
</style>
