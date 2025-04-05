<template>
  <div
    :style="{ 'background-image': `url(${props.bg})` }"
    class="h-80 bg-cover bg-center flex items-center"
  >
    <div class="bg-white/80 px-5 py-8 mr-20 backdrop-blur-5">
      <h2 class="mb-3 mt-0">
        {{ props.title }}
      </h2>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps([ 'bg', 'title' ])
</script>
