<template>
  <div class="mt-24">
    <section>
      <CarouselHorizontal :images="[content?.cover]">
        <h1 class="text-16 text-white !font-sans">
          {{ content?.title }}
        </h1>
      </CarouselHorizontal>
    </section>
    <section class="section">
      <article>
        <h1 class="!font-sans">
          {{ content?.title }}
        </h1>
        <p />
      </article>
      <article v-html="content?.body" />
    </section>
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
        `@data/${route.params.lang}/News-${route.params.title}.json`
      )
  ).default

  loading.value = false
})
</script>
