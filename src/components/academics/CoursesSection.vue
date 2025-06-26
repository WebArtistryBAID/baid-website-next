<template>
  <section
    aria-labelledby="courses-heading"
    class="section !my-16"
  >
    <h2
      id="courses-heading"
      class="text-4xl font-bold md:text-right mb-5"
    >
      {{ pageData.courses_title }}
    </h2>

    <div
      aria-label="Course categories"
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 mb-5"
      role="tablist"
    >
      <button
        v-for="course in pageData.courses"
        :id="`tab-${course.id}`"
        :key="course.id"
        :aria-controls="`panel-${course.id}`"
        :aria-selected="selected === course.id"
        :tabindex="selected === course.id ? 0 : -1"
        role="tab"
        :class="{
          'bg-red-900 text-white': selected === course.id,
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(course.id)"
      >
        {{ course.name }}
      </button>
    </div>

    <Transition
      mode="out-in"
      name="fade"
    >
      <div
        v-if="currentCourse.id !== null"
        :id="`panel-${currentCourse.id}`"
        :key="currentCourse.id"
        :aria-labelledby="`tab-${currentCourse.id}`"
        aria-label="Courses list"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 mb-5"
        role="tabpanel"
        tabindex="0"
      >
        <p
          v-for="item in currentCourse.courses"
          :key="item"
          class="text-2xl border-l-4 border-red-800 pl-3 col-span-1 md:col-span-2"
          role="listitem"
        >
          {{ item }}
        </p>
      </div>
    </Transition>

    <p class="italic text-sm">
      {{ $t('academics.restrictions') }}
    </p>
  </section>
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'

const pageData = inject('data')
const selected = ref(1)

watch(
    () => pageData?._value?.courses,
    (courses: any) => {
      if (courses?.length) {
        selected.value = courses[0].id
      }
    },
    { immediate: true }
)

function change(index: number) {
  selected.value = index
}

const currentCourse = computed(() => {
  const courses = pageData?._value?.courses || []
  return courses.find(c => c.id === selected.value) || courses[0] || { id: null, courses: [] }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
