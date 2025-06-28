<template>
  <div
    :aria-label="`Show philosophy: ${props.title}`"
    :aria-pressed="thisActive"
    role="button"
    tabindex="0"
    :class="{ 'w-1/3': thisActive, 'w-1/4': !thisActive }"
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="h-[30rem] text-white bg-cover relative transition-all duration-300"
    @mouseleave="$emit('deactivate')"
    @mousemove="$emit('activate')"
    @blur="$emit('deactivate')"
    @focus="$emit('activate')"
  >
    <div class="w-full h-full bg-red-900/50 transition-all duration-500 relative">
      <pre
        :class="{ 'opacity-0': !delay, 'opacity-100': delay }"
        class="leading-normal text-right !font-sans !text-3xl"
        aria-atomic="true"
        aria-live="polite"
        v-html="props.content"
      />
      <h2
        :class="{ center: !thisActive, right: thisActive }"
        class="text-8 !m-0 tracking-wide text-center"
        style="writing-mode: vertical-lr"
        aria-hidden="true"
      >
        {{ props.title }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

const props = defineProps([
  'title',
  'content',
  'image',
  'index',
  'active',
  'deactivate'
])

const thisActive = computed(() => props.active === props.index)

const delay = ref(false)

let timeout
watch(thisActive, (a) => {
  if (a) {
    timeout = setTimeout(() => (delay.value = true), 300)
  } else {
    clearTimeout(timeout)
    delay.value = false
  }
})
</script>

<style scoped>
pre {
  position: absolute;
  left: 30px;
  top: 50%;
  text-align: left;
  transform: translateY(-50%);
  width: 250px;
  transition: all 0.5s;
}

h2 {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  transition: all 0.5s;
}

h2::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s;
  background-color: oklch(50.5% 0.213 27.518);
}

.center {
  right: 50%;
}

.center::before {
  opacity: 0;
  height: 0;
}

.right {
  right: 60px;
}

.right::before {
  opacity: 1;
  height: 70%;
}
</style>
