<template>
  <div
    :class="{ 'w-33%': thisActive, 'w-25%': !thisActive }"
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="h-120 text-white bg-cover relative transition-all transition-duration-.3s"
    @mouseleave="$emit('deactivate')"
    @mousemove="$emit('activate')"
  >
    <div
      :class="{ '!bg-op-40': thisActive }"
      class="w-full h-full bg-#103c74 bg-op-80 transition transition-duration-.5s relative"
    >
      <pre
        :class="{ 'op-0': !delay, 'op-100': delay }"
        class="pcontent leading-normal text-right"
        v-html="props.content"
      />
      <h2
        :class="{ center: !thisActive, right: thisActive }"
        class="text-8 !m-0 tracking-wide text-center write-vertical-left"
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

  background-color: var(--standard-red);
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

<style>
.pcontent * {
  font-size: 1.5rem !important;
}
</style>
