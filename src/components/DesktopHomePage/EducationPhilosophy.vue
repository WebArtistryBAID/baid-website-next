<template>
  <div class="bg-[var(--standard-blue)] mb-15">
    <div class="section">
      <NotFancyTitle
        cn="办学理念"
        color="white"
        en="Education Philosophy"
      />

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
import NotFancyTitle from '../NotFancyTitle.vue'
import PhilosophyBlock from './PhilosophyBlock.vue'

const pageData = inject('data')
const blocks = [ 'motto', 'spirit', 'key_competency', 'cultivation' ]

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
