<template>
  <ActivityTextBlock
    v-if="props.textAlign === 'left'"
    :background="props.background"
    :description="props.activity.content"
    :light="props.light"
    :name="props.activity.name"
  />
  <img
    :src="props.activity.image"
    class="w-full h-80 object-cover object-center"
  >
  <ActivityTextBlock
    v-if="props.textAlign === 'right'"
    :background="props.background"
    :description="props.activity.content"
    :light="props.light"
    :name="props.activity.name"
  />
</template>
<script lang="ts" setup>
import ActivityTextBlock from '@/components/DesktopStudentLife/ActivityTextBlock.vue'

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
