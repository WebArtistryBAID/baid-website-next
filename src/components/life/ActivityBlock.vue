<template>
  <!-- Desktop/Tablet View: original layout -->
  <div class="hidden sm:block">
    <ActivityTextBlock
      v-if="props.textAlign === 'left'"
      :background="props.background"
      :description="props.activity.content"
      :light="props.light"
      :name="props.activity.name"
    />
    <img
      :src="props.activity.image"
      alt="Activity image"
      class="w-full h-80 object-cover object-center"
    >
    <ActivityTextBlock
      v-if="props.textAlign === 'right'"
      :background="props.background"
      :description="props.activity.content"
      :light="props.light"
      :name="props.activity.name"
    />
  </div>

  <!-- Mobile View: always vertical stack -->
  <div class="block sm:hidden">
    <img
      :src="props.activity.image"
      alt="Activity image"
      class="w-full h-48 object-cover object-center"
    >
    <ActivityTextBlock
      :background="props.background"
      :description="props.activity.content"
      :light="props.light"
      :name="props.activity.name"
    />
  </div>
</template>

<script lang="ts" setup>
import ActivityTextBlock from '@/components/life/ActivityTextBlock.vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  light: {
    type: Boolean,
    required: true
  },
  textAlign: {
    type: String,
    required: true,
    validator: (value: string) => {
      return [ 'left', 'right' ].includes(value)
    }
  }
})
</script>
