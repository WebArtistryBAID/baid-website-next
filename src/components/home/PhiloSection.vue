<template>
  <div class="mx-auto max-w-[77rem] px-5 md:px-0 mb-5 md:mb-0">
    <h2 class="text-3xl md:text-5xl font-bold !font-sans">
      Education Philosophy
    </h2>
  </div>
  <div class="bg-[var(--standard-blue)] mb-16">
    <div class="mx-auto max-w-[77rem]">
      <div class="hidden md:flex mt-10 m-auto justify-items-center">
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
      <div class="flex gap-10 md:hidden p-10 text-white flex-col">
        <PhilosophyBlockMobile
          v-for="key in blocks"
          :key="key"
          :content="pageData[key + '_content']"
          :title="pageData[key + '_title']"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import PhilosophyBlock from './PhilosophyBlock.vue'
import PhilosophyBlockMobile from '@/components/home/PhilosophyBlockMobile.vue'

const pageData = inject('data')
const blocks = [ 'motto', 'spirit', 'key_competency', 'cultivation' ]

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
