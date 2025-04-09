<template>
  <div class="section !py-16">
    <div class="flex">
      <div class="w-1/3">
        <h2 class="text-4xl font-bold">
          Outstanding at<br>
          Every Turn
        </h2>
      </div>
      <div class="w-2/3 grid grid-cols-2 gap-5">
        <div>
          <p class="text-7xl font-serif text-[var(--standard-blue)]">
            1:7
          </p>
          <p class="text-lg font-sans">
            Teacher-Student Ratio
          </p>
        </div>
        <div>
          <p class="text-7xl font-serif text-[var(--standard-blue)]">
            82%
          </p>
          <p class="text-lg font-sans">
            Postgraduate Faculty Ratio
          </p>
        </div>
        <div>
          <p class="text-7xl font-serif text-[var(--standard-blue)]">
            21
          </p>
          <p class="text-lg font-sans">
            AP courses offered
          </p>
        </div>
        <div>
          <p class="text-7xl font-serif text-[var(--standard-blue)]">
            90%+
          </p>
          <p class="text-lg font-sans">
            students taking AP courses in their first year
          </p>
        </div>
        <div>
          <p class="text-7xl font-serif text-[var(--standard-blue)]">
            95%+
          </p>
          <p class="text-lg font-sans">
            AP scores surpassing national averages
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
