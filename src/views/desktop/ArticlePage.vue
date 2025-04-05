<template>
  <!-- 加载时，隐藏下面的一切内容 -->
  <div :class="{ 'overflow-hidden w-full h-[calc(100vh-4.25rem)]': loading }">
    <transition
      mode="out-in"
      name="fade"
    >
      <div
        v-if="loading"
        class="w-full h-[calc(100vh-4.25rem)] flex items-center justify-center font-sans"
      >
        <h1 class="font-sans">
          Loading...
        </h1>
      </div>
      <div v-else>
        <section>
          <CarouselHorizontal :images="[content?.cover]">
            <h1 class="text-16 text-white font-sans">
              {{ content?.title }}
            </h1>
          </CarouselHorizontal>
        </section>
        <section class="section">
          <article>
            <h1 class="font-sans">
              {{ content?.title }}
            </h1>
            <p />
          </article>
          <article v-html="content?.body" />
        </section>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import '@/assets/styles/article.css'

import CarouselHorizontal from '@/components/CarouselHorizontal.vue'

const route = useRoute()

const content = ref<any>(null)
const loading = ref(true)

watchEffect(async () => {
  loading.value = true
  content.value = (
    await import(
        `@/../data/${route.params.lang}/News-${route.params.title}.json`
      )
  ).default

  loading.value = false
})
</script>
