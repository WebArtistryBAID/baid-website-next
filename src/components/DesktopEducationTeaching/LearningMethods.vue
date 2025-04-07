<template>
  <div class="section">
    <div
      class="grid gap-1"
      style="grid-template-columns: 3fr 1fr"
    >
      <div class="relative">
        <img
          :src="pageData.learning_methods[current].image"
          :class="{ 'opacity-60': transition }"
          alt=""
          class="w-full h-full object-cover transition-opacity duration-300"
        >
        <div
          :class="{ 'opacity-0': transition }"
          class="absolute bottom-0 p-10 pt-20 text-white special-bg transition-opacity duration-300"
        >
          <h2 class="text-4xl font-bold mb-2">
            {{ pageData.learning_methods[current].title }}
          </h2>
          <p
            class="text-xl font-serif"
            v-html="pageData.learning_methods[current].content"
          />
          TODO These texts are too long
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
            :alt="`Learning Experience: ${method.title}`"
            class="w-full h-full object-cover block opacity-60 transition-all cursor-pointer"
            role="button"
            @click="change(index)"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'

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
