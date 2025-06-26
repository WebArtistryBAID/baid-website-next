<template>
  <section
    aria-labelledby="activities-heading"
    class="section"
  >
    <div class="flex justify-end">
      <h2
        id="activities-heading"
        class="text-4xl font-bold mb-5"
      >
        {{ pageData.activities_title }}
      </h2>
    </div>
    <div
      aria-label="Activities"
      class="sm:grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-3xl overflow-clip"
      role="list"
    >
      <ActivityBlock
        :activity="pageData.activities[0]"
        :light="true"
        background="var(--standard-blue)"
        text-align="right"
        role="listitem"
        tabindex="0"
      />
      <ActivityBlock
        :activity="pageData.activities[1]"
        :light="true"
        background="var(--standard-red)"
        text-align="right"
        role="listitem"
        tabindex="0"
      />
      <ActivityBlock
        :activity="pageData.activities[2]"
        :light="true"
        background="var(--standard-red)"
        text-align="left"
        role="listitem"
        tabindex="0"
      />
      <ActivityBlock
        :activity="pageData.activities[3]"
        :light="false"
        background="#d3d3d3"
        text-align="left"
        role="listitem"
        tabindex="0"
      />
      <ActivityBlock
        :activity="pageData.activities[4]"
        :light="true"
        background="var(--standard-blue)"
        text-align="right"
        role="listitem"
        tabindex="0"
      />
      <ActivityBlock
        :activity="pageData.activities[5]"
        :light="true"
        background="var(--standard-red)"
        text-align="right"
        role="listitem"
        tabindex="0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ActivityBlock from '@/components/life/ActivityBlock.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
