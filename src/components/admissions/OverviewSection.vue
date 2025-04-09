<template>
  <div class="border-b border-gray-200">
    <div class="section !pb-0 !mt-24">
      <h2 class="text-4xl font-bold mb-5 md:text-right">
        Program Overview
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-0">
        <div class="md:p-8 md:border-r border-gray-200">
          <h3 class="text-xl font-bold mb-3">
            Overview
          </h3>
          <p>
            Open to Beijing-hukou middle school graduates and eligible students who meet the Beijing high school
            admission requirements, with an enrollment of 100 students.
          </p>
        </div>
        <div class="md:p-8 md:border-r border-gray-200">
          <h3 class="text-xl font-bold mb-3">
            Admissions
          </h3>
          <p>
            This program falls under the standard high school admissions round and follows the schedule set by the
            Beijing Municipal Education Commission. Students are admitted based on overall performance in the Zhongkao
            (中考)
            and an additional assessment, which requires an application form.
          </p>
        </div>
        <div class="md:p-8 md:border-r border-gray-200">
          <h3 class="text-xl font-bold mb-3">
            Tuition
          </h3>
          <p>
            Tuition is CN¥50,000 per semester (not including boarding, textbooks, meals, uniforms, etc.).
          </p>
        </div>
        <div class="md:p-8">
          <h3 class="text-xl font-bold mb-3">
            Student Housing
          </h3>
          <p>
            The program is based at the Beijing Academy North Dongba Campus.
            While it is a non-residential program, housing accommodations are available
            for high-achieving students who live far from campus.
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
