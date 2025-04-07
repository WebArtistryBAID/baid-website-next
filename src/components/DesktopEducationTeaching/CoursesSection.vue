<template>
  <div class="section !my-16">
    <h2 class="text-4xl font-bold text-right mb-5">
      Our Courses
    </h2>

    <div class="grid grid-cols-8 gap-3 mb-5">
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 0
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(0)"
      >
        National Curriculum
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 1
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(1)"
      >
        English
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 2
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(2)"
      >
        Honors
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 3
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(3)"
      >
        AP
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 4
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(4)"
      >
        Gym
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 5
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(5)"
      >
        Fulfillment
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 6
        }"
        class="w-full h-full p-3 rounded-md transition-colors duration-300"
        @click="change(6)"
      >
        Electives
      </button>
      <button
        :class="{
          'bg-[var(--standard-blue)] text-white': selected === 7
        }"
        class="w-full h-full p-3 rounded-md"
        @click="change(7)"
      >
        Others
      </button>
    </div>

    <div class="grid grid-cols-6 gap-5 mb-5">
      <div
        v-for="course in courses[selected]"
        :key="course"
        class="col-span-2"
      >
        <p class="text-2xl border-l-4 border-[var(--standard-blue)] pl-3">
          {{ course }}
        </p>
      </div>
    </div>

    <p class="italic text-sm">
      Courses subject to prerequisites and grade-level restrictions; refer to student guide for details.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'

const pageData = inject('data')
const selected = ref(0)

const courses = [
  [
    'Chinese Literature',
    'Biology',
    'Chemistry',
    'Physics',
    'Mathematics',
    'History',
    'Geography',
    'Politics',
    'Visual Arts',
    'Music',
    'Information Technology',
    'General Technology'
  ],
  [
    'Integrated English TOEFL',
    'Integrated English SAT',
    'Integrated English ACT',
    'EFL',
    'Reading & Writing'
  ],
  [
    'Honors Biology 10',
    'Honors Chemistry 10',
    'Honors Physics 10',
    'Honors Biology 11',
    'Honors Chemistry 11',
    'Honors Physics 11',
    'Pre-AP Social Studies Course Set',
    'Selected Topics in Mathematics',
    'Advanced Physics',
    'Advanced Economics',
    'Multivariable Calculus'
  ],
  [
    'AP Precalculus',
    'AP Calculus BC',
    'AP Statistics',
    'AP Biology',
    'AP Chemistry',
    'AP Computer Science A',
    'AP Physics 1',
    'AP Physics 2',
    'AP Physics C: Mechanics',
    'AP Physics C: Electricity and Magnetism',
    'AP Psychology',
    'AP Environmental Science',
    'AP English Language and Composition',
    'AP Social Studies Course Set',
    'AP Microeconomics',
    'AP Macroeconomics',
    'AP Seminar',
    'AP Research',
    'AP Art History',
    'AP 2D Art and Design'
  ],
  [
    'Gym: Basketball',
    'Gym: Football',
    'Gym: Tennis',
    'Gym: Baseball',
    'Gym: Dance',
    'Gym: Volleyball',
    'Gym: Archery'
  ],
  [
    'GLocal',
    'Drama',
    'Presentation',
    'Spanish',
    'MFP Research Program',
    'Experience Program',
    'Career Experience Program',
    'Cultural Exploration Program'
  ],
  [
    'Musical',
    'Plants Know the Truth of Life',
    'Spanish (Elective)',
    'Many many more...'
  ],
  [
    'Homeroom',
    'College Counseling'
  ]
]

function change(index: number) {
  selected.value = index
}
</script>
