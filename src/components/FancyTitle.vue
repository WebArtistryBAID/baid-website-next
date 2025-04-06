<template>
  <div
    :class="{ 'text-right': right }"
    class="w-max"
  >
    <h1 class="text-#122A28 m-0 text-10 font-title font-300">
      <span
        v-for="word in top"
        :key="word"
        :class="{ 'important:mr-0': right }"
        class="mr-5"
      >
        <span>{{ word.left }}</span>
        <span
          :class="{
            'text-[var(--standard-blue)]': props.color === 'blue',
            'text-[var(--standard-red)]': props.color === 'red'
          }"
        >{{ word.colored }}</span>
        <span>{{ word.right }}</span>
      </span>
    </h1>
    <div
      :class="{ 'important:m-l-0': right }"
      class="m-l-8"
    >
      <hr class="border-width-2 border-solid border-text-#122A28">
      <h1 class="text-#122A28 m-0 text-9 font-title font-300">
        <span
          v-for="word in btm"
          :key="word"
          :class="{ 'important:mr-15': right }"
          class="mr-5"
        >
          <span>{{ word.left }}</span>
          <span
            :class="{
              'text-[var(--standard-blue)]': props.color === 'blue',
              'text-[var(--standard-red)]': props.color === 'red'
            }"
          >{{ word.colored }}</span>
          <span>{{ word.right }}</span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps([ 'top', 'btm', 'color', 'right' ])

function compute(string) {
  return string.split(' ').map((word) => {
    return { left: word[0], colored: word[1], right: word.slice(2) }
  })
}

const top = computed(() => compute(props.top))
const btm = computed(() => compute(props.btm))
const right = computed(() => {
  if (props.right === undefined) {
    return false
  }
  return true
})
</script>
