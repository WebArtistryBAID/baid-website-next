<template>
  <router-link
    :to="link"
    class="w-full md:w-1/3 md:border-r border-gray-200 last:md:border-r-0 p-6 md:p-12 bg-white group block"
    role="listitem"
    tabindex="0"
  >
    <div class="flex justify-center items-center w-full h-48 overflow-hidden rounded-3xl mb-5">
      <img
        :alt="props.imageAlt"
        :src="props.image"
        class="w-full h-full object-cover group-hover-scale"
      >
    </div>
    <p class="fancy-link text-3xl mb-1 font-serif font-bold">
      {{ title }}
    </p>
    <p v-html="description" />
    <div
      v-if="link && linkText"
      class="mt-2"
    >
      <ReadMore
        :text="linkText"
        :to="link"
      />
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import ReadMore from '@/components/ReadMore.vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false,
    default: null
  },
  linkText: {
    type: String,
    required: false,
    default: null
  }
})
</script>
