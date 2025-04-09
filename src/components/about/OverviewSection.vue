<template>
  <div class="section !py-16">
    <h2 class="text-4xl font-sans font-bold mb-5">
      Overview
    </h2>
    <div class="w-full grid gap-8 grid-cols-3 !font-serif !text-2xl">
      <div>
        Beijing Academy was established in September 2013. We are a 12-year public school approved by the Beijing
        Municipal Government and funded by the Chaoyang District Government. Our school is built to become a modern
        community with a unique Beijing style, a distinctive Chinese character and a global perspective.
      </div>

      <div>
        In 2020, our international department was approved by the Beijing Municipal Education
        Commission as a sino-foreign cooperative high school education program. We are an authorized AP school, a CIS
        member school, an ACT testing center, and a Cambridge International Curriculum school.
      </div>

      <div>
        Beijing Academy promotes students' comprehensive personal growth. We believe that through the efforts of both
        our students and teachers, we can realize our motto: "Better me, better world," and that all of us will make the
        world a better place.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
