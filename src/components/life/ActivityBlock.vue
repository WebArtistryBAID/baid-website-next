<template>
  <section
    :aria-label="`Activity: ${props.activity.name}`"
    role="region"
  >
    <!-- Desktop/Tablet View: original layout -->
    <div class="hidden sm:grid grid-cols-2">
      <ActivityTextBlock
        v-if="props.textAlign === 'left'"
        :background="props.background"
        :description="props.activity.description"
        :light="props.light"
        :name="props.activity.name"
      />
      <img
        :alt="`Image of ${props.activity.name} activity`"
        :src="props.activity.image"
        class="w-full h-80 object-cover object-center"
      >
      <ActivityTextBlock
        v-if="props.textAlign === 'right'"
        :background="props.background"
        :description="props.activity.description"
        :light="props.light"
        :name="props.activity.name"
      />
    </div>

    <!-- Mobile View: always vertical stack -->
    <div class="block sm:hidden">
      <img
        :alt="`Image of ${props.activity.name} activity`"
        :src="props.activity.image"
        class="w-full h-48 object-cover object-center"
      >
      <ActivityTextBlock
        :background="props.background"
        :description="props.activity.description"
        :light="props.light"
        :name="props.activity.name"
      />
    </div>
  </section>
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
