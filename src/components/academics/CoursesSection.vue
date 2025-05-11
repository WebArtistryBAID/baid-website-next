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
          'bg-[var(--standard-blue)] text-white': selected === course.id,
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(course.id)"
      >
        {{ course.name }}
      </button>
    </div>

    <div
      v-for="course in pageData.courses"
      :id="`panel-${course.id}`"
      :key="course.id"
      :aria-labelledby="`tab-${course.id}`"
      aria-label="Courses list"
      role="tabpanel"
      :class="{
        'hidden': selected !== course.id
      }"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 mb-5 "
      tabindex="0"
    >
      <p
        v-for="c in course.courses"
        :key="c"
        role="listitem"
        class="text-2xl border-l-4 border-[var(--standard-blue)] pl-3 col-span-1 md:col-span-2"
      >
        {{ c }}
      </p>
    </div>

    <p class="italic text-sm">
      {{ $t('academics.restrictions') }}
    </p>
  </section>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from 'vue'

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
</script>
