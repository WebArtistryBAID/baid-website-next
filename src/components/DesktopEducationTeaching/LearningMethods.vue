<template>
  <div class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        cn="学习方式"
        color="red"
        en="Learning Methods"
        right
      />
    </div>

    <div
      class="grid gap-1"
      style="grid-template-columns: 3fr 1fr"
    >
      <div class="relative">
        <img
          :src="pageData.learning_methods[current].image"
          class="w-full h-full object-cover"
        >
        <div
          :class="{ 'op-0': transition }"
          class="absolute bottom-0 pa-10 pt-20 text-white special-bg transition-opacity-300"
        >
          <h2>{{ pageData.learning_methods[current].title }}</h2>
          <p v-html="pageData.learning_methods[current].content" />
        </div>
      </div>
      <div class="grid gap-1">
        <div
          v-for="(method, index) in pageData.learning_methods"
          :key="method"
        >
          <img
            :class="{
              '!opacity-100': current === index,
              'hover:opacity-100 active:brightness-90':
                current !== index && !transition
            }"
            :src="method.image"
            alt="Bg"
            class="w-full h-full object-cover block opacity-60 transition-all"
            @click="change(index)"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'

import NotFancyTitle from '../NotFancyTitle.vue'

const pageData = inject('data')

const current = ref(0)
const transition = ref(false)

function change(index) {
  if (index === current.value || transition.value) return
  transition.value = true
  setTimeout(() => {
    current.value = index
    setTimeout(() => {
      transition.value = false
    }, 150)
  }, 300)
}
</script>
<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
