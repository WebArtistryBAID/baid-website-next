<template>
  <div
    class="mx-auto"
    style="max-width: 77rem"
  >
    <h2
      class="!text-5xl font-bold !font-sans mb-3"
    >
      Education Philosophy
    </h2>
  </div>
  <div class="bg-[var(--standard-blue)] mb-16">
    <div
      class="mx-auto"
      style="max-width: 77rem"
    >
      <div class="flex m-t-10 m-auto justify-items-center">
        <PhilosophyBlock
          v-for="(key, index) in blocks"
          :key="key"
          :active="active"
          :content="pageData[key + '_content']"
          :image="pageData[key + '_bg']"
          :index="index"
          :title="pageData[key + '_title']"
          @activate="active = index"
          @deactivate="active = null"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import PhilosophyBlock from './PhilosophyBlock.vue'

const pageData = inject('data')
const blocks = [ 'motto', 'spirit', 'key_competency', 'cultivation' ]

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
