<template>
  <div
    :class="{
      'text-[var(--standard-red)]': props.color === 'red',
      'text-[var(--standard-blue)]': props.color === 'blue'
    }"
    class="bg-white box-border b-6 text-6 p-5 font-title"
  >
    <span>
      {{ props.title }}
    </span>
    <pre
      class="mt-3"
      v-html="props.content"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'default'
  }
})
</script>
