<template>
  <div>
    <div class="relative">
      <h2 class="text-[var(--standard-red)] font-black text-8 m-y-4">
        自主探索<br>多样的<br>学习方式
      </h2>
    </div>
    <div
      v-for="method in pageData.learning_methods"
      :key="method"
      :style="{ backgroundImage: `url(${method.image})` }"
      class="rd-5 text-8 text-white m-y-6 m-x-2 text-center drop-shadow h-40 flex items-center justify-center bg-cover"
      @click="current = method"
    >
      {{ method.title }}
    </div>
    <Transition
      mode="out-in"
      name="fade"
    >
      <MobilePopup
        v-if="current != null"
        @close="current = null"
      >
        <template #content>
          <h3 class="text-6 text-black font-black">
            {{ current.title }}
          </h3>
          <img
            :src="current.image"
            class="rd-5 m-y-4 w-full block"
          >
          <p v-html="current.content" />
        </template>
      </MobilePopup>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import MobilePopup from '../MobilePopup.vue'

const current = ref(null)

const pageData = inject('data')
</script>
