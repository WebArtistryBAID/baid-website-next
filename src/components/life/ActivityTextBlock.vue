<template>
  <div
    :style="{
      background: props.background,
      color: props.light ? 'white' : 'black'
    }"
    class="w-full h-80 p-8"
  >
    <h3 class="text-xl mb-3 font-bold">
      {{ props.name }}
    </h3>
    <div
      class="no-size text-sm"
      v-html="props.description"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  light: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
