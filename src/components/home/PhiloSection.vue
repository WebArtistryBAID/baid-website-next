<template>
  <div class="w-full p-3 bg-red-900">
    <div
      class="grid grid-cols-4 grid-rows-3 gap-3 mx-auto"
      style="max-width: 77rem"
    >
      <div
        class="col-start-1 col-span-1 row-start-1 row-span-1 bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <svg
          class="w-24 text-red-800 mb-3"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>


        <p class="text-red-800 text-5xl">
          ~20
        </p>
        <p class="text-lg">
          class size
        </p>
      </div>

      <div
        class="col-start-2 col-span-2 row-start-1 row-span-2 bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <p
          class="font-serif text-red-800 text-6xl font-bold !leading-tight !mb-5"
        >
          Better Me,<br>
          Better World
        </p>
        <p class="text-lg">
          Our motto
        </p>
      </div>

      <div
        class="col-start-4 col-span-1 row-start-1 row-span-1  bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <svg
          class="w-24 text-red-800 mb-3"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="text-red-800 text-5xl">
          23
        </p>
        <p class="text-lg">
          AP courses offered
        </p>
      </div>

      <div
        class="col-start-1 col-span-1 row-start-2 row-span-2  bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <p class="text-red-800 text-5xl">
          1:7
        </p>
        <p class="text-lg">
          teacher-student ratio
        </p>
      </div>

      <div
        class="col-start-2 col-span-2 row-start-3 row-span-1  bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <p class="text-red-800 text-5xl">
          93%
        </p>
        <p class="text-lg">
          faculty with postgraduate degrees
        </p>
      </div>

      <div
        class="col-start-4 col-span-1 row-start-2 row-span-2  bg-white p-8 flex flex-col justify-center items-center text-center"
      >
        <p class="text-red-800 text-5xl">
          90%
        </p>
        <p class="text-lg">
          students taking AP courses in freshmen year
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import PhilosophyBlock from './PhilosophyBlock.vue'
import PhilosophyBlockMobile from '@/components/home/PhilosophyBlockMobile.vue'

const pageData = inject('data')
const blocks = [ 'motto', 'spirit', 'literacy', 'pathway' ]

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
