<template>
  <div
    id="curriculum"
    class="section"
  >
    <h2 class="text-4xl font-bold mb-3">
      The BAID Curriculum
    </h2>
    <div class="flex gap-16 h-100">
      <div class="w-2/5 flex flex-col justify-around">
        <div
          v-for="(c, i) in pageData.curriculums"
          :key="i"
          :class="{ '!opacity-100 active': current == i }"
          class="opacity-70 container w-50"
          @mouseover="current = i"
        >
          <h2 class="m-0 text-2xl w-max">
            {{ c.name }}
          </h2>

          <div
            :class="{ '!opacity-100': current == i }"
            class="absolute top-10 left-0 opacity-0"
          >
            <ReadMore to="/academics" />
          </div>
        </div>
      </div>

      <div class="relative w-full">
        <div
          v-for="(c, i) in pageData.curriculums"
          :key="i"
          :class="{ '!opacity-100': current == i, 'flex-col-reverse': i % 2 == 0 }"
          class="w-full flex flex-col justify-center gap-5 absolute top-0 opacity-0 h-full"
        >
          TODO This part needs an update.
          <pre v-html="c.content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'
import ReadMore from '@/components/ReadMore.vue'

const pageData = inject('data')

const current = ref(0)
</script>

<style scoped>
.container {
  position: relative;
  height: 50px;
  left: 0;
}

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

.active {
  left: 20px;
}

* {
  transition: all 0.3s ease-in-out;
}
</style>
