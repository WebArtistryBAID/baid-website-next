<template>
  <div
    v-show="display"
    class="backdrop flex items-center justify-center"
    @click="$emit('onExit')"
  >
    <div class="bg-white rd-5 p-8 w-80vw h-70vh box-border overflow-auto">
      <h3 class="text-6 text-black font-black">
        {{ $t(props.bigtitle) }}
      </h3>
      <!-- <img :src="image" class="w-110% rd-5 m-b-2" /> -->
      <p class="">
        {{ $t(props.description) }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps([ 'description', 'bigtitle', 'display', 'image' ])
</script>
