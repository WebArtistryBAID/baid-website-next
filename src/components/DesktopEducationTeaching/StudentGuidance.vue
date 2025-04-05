<template>
  <div class="bg-gray-1 pt-1 mt-20 p-b-1">
    <div class="section">
      <div class="flex h-50vw max-h-180 min-h-80 justify-between my-45px">
        <div class="h-full mx-10 w-40% flex flex-col gap-10">
          <IntroductionBlock
            :content="pageData.student_mentorship[0].content"
            :title="pageData.student_mentorship[0].title"
            color="red"
          />
          <div
            :style="{
              backgroundImage: `url(${pageData.student_mentorship[0].image})`
            }"
            class="flex-1 bg-cover"
          />
        </div>
        <div class="h-full mx-10 w-40% flex flex-col gap-10">
          <div
            :style="{
              backgroundImage: `url(${pageData.student_mentorship[1].image})`
            }"
            class="flex-1 bg-cover"
          />
          <IntroductionBlock
            :content="pageData.student_mentorship[1].content"
            :title="pageData.student_mentorship[1].title"
            color="red"
          />
        </div>
        <NotFancyTitle
          cn="学生指导"
          color="red"
          en="Student Guidance"
          vertical
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
import IntroductionBlock from './IntroductionBlock.vue'

const pageData = inject('data')
</script>
