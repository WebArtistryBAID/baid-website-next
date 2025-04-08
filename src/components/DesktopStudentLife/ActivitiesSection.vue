<template>
  <div class="section">
    <div class="flex justify-end">
      <h2 class="text-4xl font-bold mb-5">
        Activities
      </h2>
    </div>
    <div class="xl:grid-cols-4 grid-cols-2 gap-0 grid shadow-xl">
      <ActivityBlock
        :activity="pageData.activities[0]"
        :light="true"
        background="var(--standard-blue)"
        text-align="right"
      />
      <ActivityBlock
        :activity="pageData.activities[1]"
        :light="true"
        background="var(--standard-red)"
        text-align="right"
      />

      <ActivityBlock
        :activity="pageData.activities[2]"
        :light="true"
        background="var(--standard-red)"
        text-align="left"
      />
      <ActivityBlock
        :activity="pageData.activities[3]"
        :light="false"
        background="#d3d3d3"
        text-align="left"
      />

      <ActivityBlock
        :activity="pageData.activities[4]"
        :light="true"
        background="var(--standard-blue)"
        text-align="right"
      />
      <ActivityBlock
        :activity="pageData.activities[5]"
        :light="true"
        background="var(--standard-red)"
        text-align="right"
      />

      <!-- <ActivityBlock :activity="pageData.activities[0]" background="#d3d3d3" :light="false" text-align="left" /> -->
      <!-- <ActivityBlock :activity="pageData.activities[0]" background="var(--standard-blue)" :light="true" text-align="left" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActivityBlock from '@/components/DesktopStudentLife/ActivityBlock.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
