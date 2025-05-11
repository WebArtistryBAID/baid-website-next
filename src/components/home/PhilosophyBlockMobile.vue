<template>
  <section
    aria-labelledby="philosophy-title"
    role="region"
  >
    <h3
      id="philosophy-title"
      class="pl-3 border-l-4 border-[var(--standard-red)] font-sans text-sm !mb-3"
    >
      {{ props.title }}
    </h3>
    <p
      class="text-2xl"
      v-html="props.content"
    />
  </section>
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
  }
})
</script>
